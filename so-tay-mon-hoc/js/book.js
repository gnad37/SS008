(function (global) {
  'use strict';

  const DEFAULT_FILES = {
    cover: './data/cover.md',
    content: './data/content.md',
    summary: './data/summary.md'
  };

  function splitContentSections(rawContent) {
    const normalized = String(rawContent || '').replace(/\r\n?/g, '\n').trim();
    if (!normalized) return [];

    // Tách theo đề mục cấp 2 (## ) để mỗi phần lớn là 1 trang sổ tay rõ ràng
    const chunks = normalized.split(/(?=^##\s+)/m).map((s) => s.trim()).filter(Boolean);
    return chunks.map((chunk, index) => {
      const firstLine = chunk.split('\n')[0] || '';
      const headingMatch = firstLine.match(/^##\s+(.+)$/);
      const title = headingMatch ? headingMatch[1].trim() : `Nội dung ${index + 1}`;
      return {
        id: `content-${index + 1}`,
        badge: `PHẦN ${index + 1}`,
        title,
        markdown: chunk,
        type: 'content'
      };
    });
  }

  function extractTitle(rawMarkdown, fallback) {
    const match = String(rawMarkdown || '').match(/^#{1,2}\s+(.+)$/m);
    return match ? match[1].trim() : fallback;
  }

  function BookController(rootEl, options) {
    this.root = rootEl;
    this.files = Object.assign({}, DEFAULT_FILES, options && options.files);
    this.pages = [];
    this.currentIndex = 0;
    this.searchQuery = '';
    this.isTocOpen = false;
  }

  BookController.prototype.init = async function () {
    this.renderLoading();

    try {
      const [coverRaw, contentRaw, summaryRaw] = await Promise.all([
        this.fetchText(this.files.cover),
        this.fetchText(this.files.content),
        this.fetchText(this.files.summary)
      ]);

      const pages = [];

      if (coverRaw.trim()) {
        pages.push({
          id: 'cover',
          badge: 'TRANG BÌA',
          title: extractTitle(coverRaw, 'Bìa Sổ Tay'),
          markdown: coverRaw,
          type: 'cover'
        });
      }

      const contentPages = splitContentSections(contentRaw);
      pages.push(...contentPages);

      if (summaryRaw.trim()) {
        pages.push({
          id: 'summary',
          badge: 'TỔNG KẾT',
          title: extractTitle(summaryRaw, 'Tổng Kết Chương 5'),
          markdown: summaryRaw,
          type: 'summary'
        });
      }

      if (!pages.length) {
        this.renderError('Các tệp dữ liệu sổ tay hiện đang trống.');
        return;
      }

      this.pages = pages;
      this.currentIndex = 0;
      this.bindGlobalKeys();
      this.render();
    } catch (err) {
      this.renderError(
        'Không thể tải dữ liệu Sổ Tay. Nếu bạn đang mở trực tiếp file HTML từ ổ đĩa (file://), hãy chạy qua Live Server hoặc HTTP server cục bộ để trình duyệt cho phép đọc tệp .md.'
      );
      console.error('[BookModule]', err);
    }
  };

  BookController.prototype.fetchText = async function (url) {
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} khi tải ${url}`);
    }
    const text = await res.text();
    return text.replace(/\s*\[cite:\s*[\d,\s]+\]/g, '').replace(/\$\\rightarrow\$/g, '→');
  };

  BookController.prototype.renderLoading = function () {
    this.root.innerHTML = `
      <div class="book-shell">
        <div class="book-state-card">
          <div class="book-spinner" aria-hidden="true"></div>
          <p>Đang mở Sổ Tay Môn Học SS008...</p>
        </div>
      </div>
    `;
  };

  BookController.prototype.renderError = function (message) {
    const escapeHtml = global.MDParser ? global.MDParser.escapeHtml : (s) => s;
    this.root.innerHTML = `
      <div class="book-shell">
        <div class="book-state-card is-error">
          <h3>Chưa nạp được nội dung Sổ Tay</h3>
          <p>${escapeHtml(message)}</p>
          <button type="button" class="book-btn book-btn-primary" data-action="go-game">
            Chuyển sang Minigame Trạm Cân Hài Hòa →
          </button>
        </div>
      </div>
    `;
    const btn = this.root.querySelector('[data-action="go-game"]');
    if (btn && global.App && typeof global.App.switchView === 'function') {
      btn.addEventListener('click', () => global.App.switchView('game'));
    }
  };

  BookController.prototype.goToPage = function (index) {
    if (index < 0 || index >= this.pages.length) return;
    this.currentIndex = index;
    this.isTocOpen = false;
    this.render();
    const sheet = this.root.querySelector('.book-page-sheet');
    if (sheet) {
      sheet.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  BookController.prototype.highlightSearch = function (html, query) {
    const cleanQuery = query.trim();
    if (!cleanQuery || cleanQuery.length < 2) return html;

    const escapedPattern = cleanQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedPattern})`, 'gi');

    // Chỉ highlight phần văn bản ngoài thẻ HTML
    return html.replace(/(>[^<]+<)/g, (segment) =>
      segment.replace(regex, '<mark class="book-highlight">$1</mark>')
    );
  };

  BookController.prototype.getMatchingPageIndices = function () {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q || q.length < 2) return [];
    const matches = [];
    this.pages.forEach((p, idx) => {
      if (p.markdown.toLowerCase().includes(q) || p.title.toLowerCase().includes(q)) {
        matches.push(idx);
      }
    });
    return matches;
  };

  BookController.prototype.render = function () {
    const escapeHtml = global.MDParser.escapeHtml;
    const parseMarkdown = global.MDParser.parseMarkdown;
    const current = this.pages[this.currentIndex];
    const total = this.pages.length;
    const progressPercent = Math.round(((this.currentIndex + 1) / total) * 100);

    let renderedBody = parseMarkdown(current.markdown);
    if (this.searchQuery.trim().length >= 2) {
      renderedBody = this.highlightSearch(renderedBody, this.searchQuery);
    }

    const matchingIndices = this.getMatchingPageIndices();
    const hasSearch = this.searchQuery.trim().length >= 2;

    const tocItemsHtml = this.pages
      .map((page, idx) => {
        const isActive = idx === this.currentIndex;
        const isMatch = hasSearch && matchingIndices.includes(idx);
        return `
          <li>
            <button
              type="button"
              class="book-toc-item ${isActive ? 'is-active' : ''} ${isMatch ? 'is-match' : ''}"
              data-page-index="${idx}"
            >
              <span class="book-toc-num">${String(idx + 1).padStart(2, '0')}</span>
              <span class="book-toc-meta">
                <small>${escapeHtml(page.badge)}</small>
                <strong>${escapeHtml(page.title)}</strong>
              </span>
            </button>
          </li>
        `;
      })
      .join('');

    const searchStatusHtml = hasSearch
      ? `<div class="book-search-status">
          ${
            matchingIndices.length
              ? `Tìm thấy từ khóa ở <strong>${matchingIndices.length}</strong> trang (đã đánh dấu màu vàng).`
              : `Không tìm thấy từ khóa "<em>${escapeHtml(this.searchQuery)}</em>".`
          }
        </div>`
      : '';

    this.root.innerHTML = `
      <div class="book-shell">
        <div class="book-toolbar">
          <button
            type="button"
            class="book-btn book-btn-outline book-toc-toggle"
            data-action="toggle-toc"
            aria-expanded="${this.isTocOpen ? 'true' : 'false'}"
          >
            ☰ Mục lục (${this.currentIndex + 1}/${total})
          </button>

          <div class="book-search-box">
            <input
              type="search"
              class="book-search-input"
              placeholder="Tra cứu nhanh thuật ngữ (vd: thể chế, địa tô, CQ7)..."
              value="${escapeHtml(this.searchQuery)}"
              aria-label="Tìm kiếm trong sổ tay"
            >
            ${
              this.searchQuery
                ? '<button type="button" class="book-search-clear" data-action="clear-search" title="Xóa tìm kiếm">×</button>'
                : ''
            }
          </div>

          <button type="button" class="book-btn book-btn-accent" data-action="go-game">
            Luyện tập Minigame →
          </button>
        </div>

        ${searchStatusHtml}

        <div class="book-layout">
          <aside class="book-sidebar ${this.isTocOpen ? 'is-open' : ''}" aria-label="Mục lục sổ tay">
            <div class="book-sidebar-header">
              <span>MỤC LỤC CHƯƠNG 5</span>
              <button type="button" class="book-sidebar-close" data-action="toggle-toc" aria-label="Đóng mục lục">×</button>
            </div>
            <ul class="book-toc-list">
              ${tocItemsHtml}
            </ul>
          </aside>

          <article class="book-page-sheet is-type-${escapeHtml(current.type)}">
            <div class="book-page-ribbon">
              <span class="book-page-badge">${escapeHtml(current.badge)}</span>
              <span class="book-page-counter">Trang ${this.currentIndex + 1} / ${total}</span>
            </div>

            <div class="book-page-body markdown-body">
              ${renderedBody}
            </div>

            <div class="book-progress-track" aria-hidden="true">
              <div class="book-progress-fill" style="width: ${progressPercent}%"></div>
            </div>

            <footer class="book-page-footer">
              <button
                type="button"
                class="book-btn book-btn-outline"
                data-action="prev"
                ${this.currentIndex === 0 ? 'disabled' : ''}
              >
                ← Trang trước
              </button>

              <div class="book-page-dots" role="tablist" aria-label="Chọn trang nhanh">
                ${this.pages
                  .map(
                    (p, i) => `
                  <button
                    type="button"
                    class="book-dot ${i === this.currentIndex ? 'is-active' : ''}"
                    data-page-index="${i}"
                    title="${escapeHtml(p.title)}"
                    aria-label="Đến trang ${i + 1}: ${escapeHtml(p.title)}"
                  ></button>
                `
                  )
                  .join('')}
              </div>

              ${
                this.currentIndex < total - 1
                  ? `<button type="button" class="book-btn book-btn-primary" data-action="next">
                      Trang tiếp →
                    </button>`
                  : `<button type="button" class="book-btn book-btn-accent" data-action="go-game">
                      Vào Trạm Cân Hài Hòa →
                    </button>`
              }
            </footer>
          </article>
        </div>
      </div>
    `;

    this.attachEvents();
  };

  BookController.prototype.attachEvents = function () {
    const prevBtn = this.root.querySelector('[data-action="prev"]');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.goToPage(this.currentIndex - 1));
    }

    const nextBtn = this.root.querySelector('[data-action="next"]');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.goToPage(this.currentIndex + 1));
    }

    this.root.querySelectorAll('[data-page-index]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = parseInt(btn.getAttribute('data-page-index'), 10);
        if (!Number.isNaN(target)) {
          this.goToPage(target);
        }
      });
    });

    this.root.querySelectorAll('[data-action="toggle-toc"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.isTocOpen = !this.isTocOpen;
        this.render();
      });
    });

    this.root.querySelectorAll('[data-action="go-game"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (global.App && typeof global.App.switchView === 'function') {
          global.App.switchView('game');
        }
      });
    });

    const searchInput = this.root.querySelector('.book-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const cursorPos = e.target.selectionStart;
        this.searchQuery = e.target.value;

        // Tự động chuyển sang trang đầu tiên khớp từ khóa nếu trang hiện tại không khớp
        const matches = this.getMatchingPageIndices();
        if (matches.length && !matches.includes(this.currentIndex)) {
          this.currentIndex = matches[0];
        }

        this.render();
        const refreshedInput = this.root.querySelector('.book-search-input');
        if (refreshedInput) {
          refreshedInput.focus();
          if (typeof cursorPos === 'number') {
            refreshedInput.setSelectionRange(cursorPos, cursorPos);
          }
        }
      });
    }

    const clearBtn = this.root.querySelector('[data-action="clear-search"]');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.searchQuery = '';
        this.render();
      });
    }
  };

  BookController.prototype.bindGlobalKeys = function () {
    if (this._keysBound) return;
    this._keysBound = true;

    document.addEventListener('keydown', (e) => {
      const viewBook = document.getElementById('view-book');
      if (!viewBook || viewBook.hidden) return;
      if (e.target && ['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowLeft') {
        this.goToPage(this.currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        this.goToPage(this.currentIndex + 1);
      }
    });
  };

  global.BookModule = {
    init(rootEl, options) {
      if (!rootEl) return null;
      const controller = new BookController(rootEl, options);
      controller.init();
      return controller;
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);