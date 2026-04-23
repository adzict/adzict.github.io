/**
 * Content Loader — drives the portfolio's dynamic content
 * 
 * Two main functions:
 *   renderCards(type, containerId, limit) — populates listing pages from content.json
 *   loadArticle() — renders a Markdown article into article.html
 * 
 * Data source: /content.json
 * Markdown renderer: marked.js (loaded separately)
 */

const CONTENT_PATH = getBasePath() + 'content.json';

function getBasePath() {
  // Determine base path relative to current page location
  const path = window.location.pathname;
  if (path.includes('/blogs/') || path.includes('/projects/')) {
    return '../';
  }
  return '';
}

/**
 * Render content cards into a container element.
 * @param {string} type - "projects" or "blogs"
 * @param {string} containerId - DOM element ID to inject cards into
 * @param {number} [limit] - max number of cards to show (optional)
 */
async function renderCards(type, containerId, limit) {
  try {
    const resp = await fetch(CONTENT_PATH);
    const data = await resp.json();
    let items = data[type] || [];

    // Sort by date descending (newest first)
    items.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (limit) {
      items = items.slice(0, limit);
    }

    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map(item => {
      const link = `${getBasePath()}article.html?type=${type === 'blogs' ? 'blog' : 'project'}&id=${item.id}`;
      const imageHtml = item.image
        ? `<img src="${getBasePath()}${item.image}" class="img-responsive" alt="${item.title}">`
        : `<div class="card-placeholder"><i class="bi bi-code-slash"></i></div>`;

      return `
        <div class="col-lg-4 col-md-6">
          <div class="journal-info mb-30">
            <a href="${link}">${imageHtml}</a>
            <div class="journal-txt">
              <h4><a href="${link}">${item.title}</a></h4>
              <p class="separator">${item.category}</p>
            </div>
          </div>
        </div>`;
    }).join('');
  } catch (err) {
    console.error('Failed to load content:', err);
  }
}

/**
 * Load and render a Markdown article into the page.
 * Reads ?type= and ?id= from the URL query string.
 */
async function loadArticle() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');  // "blog" or "project"
  const id = params.get('id');

  if (!type || !id) {
    document.getElementById('article-content').innerHTML = '<p>Article not found.</p>';
    return;
  }

  // Sanitize id to prevent path traversal
  const safeId = id.replace(/[^a-z0-9\-]/gi, '');
  const folder = type === 'blog' ? 'blogs' : 'projects';
  const mdPath = `${folder}/${safeId}.md`;

  try {
    // Load content.json for metadata
    const metaResp = await fetch('content.json');
    const data = await metaResp.json();
    const items = type === 'blog' ? data.blogs : data.projects;
    const meta = items.find(item => item.id === safeId);

    // Set page title and metadata
    if (meta) {
      document.title = meta.title + ' — Aml Hassan Esmail';
      const titleEl = document.getElementById('article-title');
      if (titleEl) titleEl.textContent = meta.title;
      const categoryEl = document.getElementById('article-category');
      if (categoryEl) categoryEl.textContent = meta.category;
      const dateEl = document.getElementById('article-date');
      if (dateEl && meta.date) {
        dateEl.textContent = new Date(meta.date).toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'
        });
      }
    }

    // Fetch and render Markdown
    const mdResp = await fetch(mdPath);
    if (!mdResp.ok) throw new Error('Article not found');
    const mdText = await mdResp.text();

    const articleEl = document.getElementById('article-content');
    articleEl.innerHTML = marked.parse(mdText);

  } catch (err) {
    console.error('Failed to load article:', err);
    document.getElementById('article-content').innerHTML = '<p>Could not load the article. Please try again later.</p>';
  }
}
