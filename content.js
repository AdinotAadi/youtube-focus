// =========================
// content.js
// =========================

(function () {
  const SHORTS_SELECTORS = [
    'ytd-rich-section-renderer',
    'ytd-reel-shelf-renderer',
    'a[href^="/shorts"]'
  ];

  function hideShorts() {
    SHORTS_SELECTORS.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.display = 'none';
      });
    });
  }

  function getSubscribedChannels() {
    const channels = new Set();

    document.querySelectorAll('ytd-guide-section-renderer ytd-guide-entry-renderer')
      .forEach(el => {
        const title = el.textContent.trim();
        if (title) channels.add(title);
      });

    return channels;
  }

  function filterHomepage(subscribedChannels) {
    const videos = document.querySelectorAll(
      'ytd-browse[page-subtype="home"] ytd-rich-item-renderer'
    );

    videos.forEach(video => {
      const channelEl = video.querySelector('#channel-name a');
      if (!channelEl) return;

      const channelName = channelEl.textContent.trim();

      if (!subscribedChannels.has(channelName)) {
        video.style.display = 'none';
      }
    });
  }

  function applyLogic() {
    hideShorts();

    chrome.storage.sync.get(['subsOnly'], (data) => {
      if (!data.subsOnly) return;

      if (window.location.pathname === '/') {
        const subs = getSubscribedChannels();
        filterHomepage(subs);
      }
    });
  }

  applyLogic();

  const observer = new MutationObserver(() => {
    applyLogic();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
