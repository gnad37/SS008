(function (global) {
  'use strict';

  /**
   * Escape HTML special characters before injecting text into DOM strings.
   */
  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /**
   * Normalize line endings across Windows/Unix/Mac inputs.
   */
  function normalizeNewlines(text) {
    return String(text ?? '').replace(/\r\n?/g, '\n');
  }

  /**
   * Parse quiz metadata header and numbered question sections from Markdown.
   */
  function parseQuiz(rawMarkdown) {
    const normalized = normalizeNewlines(rawMarkdown).trim();
    const parts = normalized.split(/^##\s+/m);
    const headerBlock = parts[0] || '';
    const questionBlocks = parts.slice(1);

    const meta = {
      title: 'Trạm Cân Hài Hòa Lợi Ích',
      role: 'Nhà Quản Lý Thể Chế',
      initialA: 50,
      initialB: 50,
      panAName: 'Đĩa Động Lực',
      panASubtitle: 'Thị Trường',
      panADesc: '',
      panBName: 'Đĩa Cân Bằng',
      panBSubtitle: 'An Sinh Xã Hội',
      panBDesc: '',
      riskA: '',
      riskB: '',
      goal: ''
    };

    const metaKeyMap = {
      role: 'role',
      pan_a_name: 'panAName',
      pan_a_subtitle: 'panASubtitle',
      pan_a_desc: 'panADesc',
      pan_b_name: 'panBName',
      pan_b_subtitle: 'panBSubtitle',
      pan_b_desc: 'panBDesc',
      risk_a: 'riskA',
      risk_b: 'riskB',
      goal: 'goal'
    };

    headerBlock.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed === '---') return;

      const titleMatch = trimmed.match(/^#\s+(.+)$/);
      if (titleMatch) {
        meta.title = titleMatch[1].trim();
        return;
      }

      const kvMatch = trimmed.match(/^-\s*([a-z0-9_]+)\s*:\s*(.+)$/i);
      if (!kvMatch) return;

      const key = kvMatch[1].toLowerCase();
      const val = kvMatch[2].trim();
      if (key === 'initial_a') {
        const parsed = parseInt(val, 10);
        if (!Number.isNaN(parsed)) meta.initialA = parsed;
      } else if (key === 'initial_b') {
        const parsed = parseInt(val, 10);
        if (!Number.isNaN(parsed)) meta.initialB = parsed;
      } else if (metaKeyMap[key]) {
        meta[metaKeyMap[key]] = val;
      }
    });

    const questions = questionBlocks.map((block, index) => {
      const lines = block.split('\n');
      const heading = (lines[0] || '').trim();
      const idMatch = heading.match(/\d+/);
      const id = idMatch ? parseInt(idMatch[0], 10) : index + 1;

      let situation = '';
      let question = '';
      let explanation = '';
      let activeField = null;
      const options = [];

      const optionRegex =
        /^-\s*\[([A-D])(\*)?\]\s*\(\s*\+?(-?\d+)A\s*,\s*\+?(-?\d+)B\s*\)\s*(.+)$/;

      for (let i = 1; i < lines.length; i += 1) {
        const rawLine = lines[i];
        const trimmed = rawLine.trim();
        if (!trimmed || trimmed === '---') {
          activeField = null;
          continue;
        }

        const sitMatch = trimmed.match(/^\*\*Tình huống:\*\*\s*(.*)$/);
        if (sitMatch) {
          situation = sitMatch[1].trim();
          activeField = 'situation';
          continue;
        }

        const qMatch = trimmed.match(/^\*\*Câu hỏi:\*\*\s*(.*)$/);
        if (qMatch) {
          question = qMatch[1].trim();
          activeField = 'question';
          continue;
        }

        const expMatch = trimmed.match(/^\*\*Giải thích:\*\*\s*(.*)$/);
        if (expMatch) {
          explanation = expMatch[1].trim();
          activeField = 'explanation';
          continue;
        }

        const optMatch = trimmed.match(optionRegex);
        if (optMatch) {
          activeField = null;
          options.push({
            key: optMatch[1],
            isOptimal: Boolean(optMatch[2]),
            deltaA: parseInt(optMatch[3], 10),
            deltaB: parseInt(optMatch[4], 10),
            text: optMatch[5].trim()
          });
          continue;
        }

        // Support multiline continuation for Tình huống / Câu hỏi / Giải thích
        if (activeField === 'situation') {
          situation = situation ? `${situation} ${trimmed}` : trimmed;
        } else if (activeField === 'question') {
          question = question ? `${question} ${trimmed}` : trimmed;
        } else if (activeField === 'explanation') {
          explanation = explanation ? `${explanation} ${trimmed}` : trimmed;
        }
      }

      return {
        id,
        label: heading || `Câu ${id}`,
        situation,
        question,
        options,
        explanation
      };
    });

    return { meta, questions };
  }

  /**
   * Format inline Markdown syntax safely after HTML escaping.
   */
  function formatInlineMarkdown(text) {
    let html = escapeHtml(text);

    // Inline code first so emphasis inside code spans isn't altered
    const codeTokens = [];
    html = html.replace(/`([^`]+)`/g, (_, code) => {
      const token = `\u0000CODE${codeTokens.length}\u0000`;
      codeTokens.push(`<code>${code}</code>`);
      return token;
    });

    // Links [label](https://... or relative path)
    html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, url) => {
      const safeUrl = /^(https?:\/\/|\/|\.\/|\.\.\/|#)/i.test(url) ? url : '#';
      const isExternal = /^https?:\/\//i.test(safeUrl);
      const attrs = isExternal
        ? ' target="_blank" rel="noopener noreferrer"'
        : '';
      return `<a href="${safeUrl}"${attrs}>${label}</a>`;
    });

    // Bold & italic
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    codeTokens.forEach((snippet, idx) => {
      html = html.replace(`\u0000CODE${idx}\u0000`, snippet);
    });

    return html;
  }

  /**
   * General-purpose Markdown to HTML converter for notebook pages.
   * Supports nested ordered/unordered lists based on leading indentation.
   */
  function parseMarkdown(rawMarkdown) {
    const lines = normalizeNewlines(rawMarkdown).split('\n');
    const out = [];
    // Stack of open lists: { type: 'ul' | 'ol', indent: number, hasOpenLi: boolean }
    const listStack = [];
    let quoteLines = [];
    let paraLines = [];

    function flushParagraph() {
      if (!paraLines.length) return;
      out.push(`<p>${formatInlineMarkdown(paraLines.join(' '))}</p>`);
      paraLines = [];
    }

    function closeTopList() {
      const top = listStack.pop();
      if (!top) return;
      if (top.hasOpenLi) {
        out.push('</li>');
      }
      out.push(`</${top.type}>`);
    }

    function flushLists() {
      while (listStack.length) {
        closeTopList();
      }
    }

    function flushQuote() {
      if (!quoteLines.length) return;
      out.push(`<blockquote><p>${formatInlineMarkdown(quoteLines.join(' '))}</p></blockquote>`);
      quoteLines = [];
    }

    function pushListItem(type, indent, content) {
      flushParagraph();
      flushQuote();

      while (listStack.length && listStack[listStack.length - 1].indent > indent) {
        closeTopList();
      }

      if (
        listStack.length &&
        listStack[listStack.length - 1].indent === indent &&
        listStack[listStack.length - 1].type !== type
      ) {
        closeTopList();
      }

      if (!listStack.length || listStack[listStack.length - 1].indent < indent) {
        out.push(`<${type}>`);
        listStack.push({ type, indent, hasOpenLi: false });
      } else {
        const current = listStack[listStack.length - 1];
        if (current.hasOpenLi) {
          out.push('</li>');
          current.hasOpenLi = false;
        }
      }

      out.push(`<li>${formatInlineMarkdown(content)}`);
      listStack[listStack.length - 1].hasOpenLi = true;
    }

    lines.forEach((rawLine) => {
      const expandedLine = rawLine.replace(/\t/g, '  ');
      const trimmed = expandedLine.trim();

      if (!trimmed) {
        flushParagraph();
        flushLists();
        flushQuote();
        return;
      }

      if (/^---+$/.test(trimmed)) {
        flushParagraph();
        flushLists();
        flushQuote();
        out.push('<hr>');
        return;
      }

      const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
      if (headingMatch) {
        flushParagraph();
        flushLists();
        flushQuote();
        const level = headingMatch[1].length;
        out.push(`<h${level}>${formatInlineMarkdown(headingMatch[2])}</h${level}>`);
        return;
      }

      const quoteMatch = trimmed.match(/^>\s?(.*)$/);
      if (quoteMatch) {
        flushParagraph();
        flushLists();
        quoteLines.push(quoteMatch[1]);
        return;
      }
      flushQuote();

      const indentMatch = expandedLine.match(/^(\s*)/);
      const indent = indentMatch ? indentMatch[1].length : 0;

      const ulMatch = trimmed.match(/^[-*]\s+(.+)$/);
      if (ulMatch) {
        pushListItem('ul', indent, ulMatch[1]);
        return;
      }

      const olMatch = trimmed.match(/^\d+\.\s+(.+)$/);
      if (olMatch) {
        pushListItem('ol', indent, olMatch[1]);
        return;
      }

      flushLists();
      paraLines.push(trimmed);
    });

    flushParagraph();
    flushLists();
    flushQuote();

    return out.join('\n');
  }

  const api = {
    escapeHtml,
    parseQuiz,
    parseMarkdown
  };

  global.MDParser = api;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
})(typeof window !== 'undefined' ? window : globalThis);
