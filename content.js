(function () {
  const HIDE_SELECTORS = [
    // Shorts
    'ytd-rich-section-renderer',
    'ytd-reel-shelf-renderer',
    'a[href^="/shorts"]',

    // Home feed videos
    'ytd-browse[page-subtype="home"] #contents ytd-rich-item-renderer'
  ];

  function hideElements() {
    HIDE_SELECTORS.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.display = 'none';
      });
    });

    // Redirect homepage to subscriptions
    if (
      window.location.pathname === '/' ||
      window.location.pathname === '/feed/recommended'
    ) {
      window.location.replace('/feed/subscriptions');
    }
  }

  hideElements();

  const observer = new MutationObserver(() => {
    hideElements();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();