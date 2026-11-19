(function (global) {
  'use strict';

  const VALID_VIEWS = ['game', 'leaderboard', 'book'];

  function switchView(viewName, updateHash = true) {
    const target = VALID_VIEWS.includes(viewName) ? viewName : 'game';

    const viewGame = document.getElementById('view-game');
    const viewLeaderboard = document.getElementById('view-leaderboard');
    const viewBook = document.getElementById('view-book');
    if (viewGame) viewGame.hidden = target !== 'game';
    if (viewLeaderboard) viewLeaderboard.hidden = target !== 'leaderboard';
    if (viewBook) viewBook.hidden = target !== 'book';

    document.querySelectorAll('.nav-tab[data-view]').forEach((btn) => {
      const isMatch = btn.getAttribute('data-view') === target;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    if (updateHash && global.location) {
      const nextHash = `#${target}`;
      if (global.location.hash !== nextHash) {
        if (global.history && typeof global.history.replaceState === 'function') {
          global.history.replaceState(null, '', nextHash);
        } else {
          global.location.hash = nextHash;
        }
      }
    }
  }

  function resolveInitialView() {
    if (!global.location || !global.location.hash) return 'game';
    const cleaned = global.location.hash.replace(/^#/, '').trim().toLowerCase();
    return VALID_VIEWS.includes(cleaned) ? cleaned : 'game';
  }

  function init() {
    document.querySelectorAll('.nav-tab[data-view]').forEach((btn) => {
      btn.addEventListener('click', () => {
        switchView(btn.getAttribute('data-view'));
      });
    });

    const goGameBtn = document.getElementById('btn-go-game');
    if (goGameBtn) {
      goGameBtn.addEventListener('click', () => {
        switchView('game');
      });
    }

    global.addEventListener('hashchange', () => {
      switchView(resolveInitialView(), false);
    });

    switchView(resolveInitialView(), false);

    const gameRoot = document.getElementById('game-root');
    if (gameRoot && global.HarmonyGame && typeof global.HarmonyGame.init === 'function') {
      global.HarmonyGame.init(gameRoot, { quizUrl: './data/quiz.md' });
    }

    const leaderboardRoot = document.getElementById('leaderboard-root');
    if (
      leaderboardRoot &&
      global.HarmonyGame &&
      typeof global.HarmonyGame.initLeaderboardView === 'function'
    ) {
      global.HarmonyGame.initLeaderboardView(leaderboardRoot);
    }

    const bookRoot = document.getElementById('book-root');
    if (bookRoot && global.BookModule && typeof global.BookModule.init === 'function') {
      global.BookModule.init(bookRoot);
    }
  }

  global.App = {
    switchView,
    init
  };

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }
})(typeof window !== 'undefined' ? window : globalThis);
