// =========================
// popup.js
// =========================

const toggle = document.getElementById('toggle');

chrome.storage.sync.get(['subsOnly'], (data) => {
  toggle.checked = !!data.subsOnly;
});

toggle.addEventListener('change', () => {
  chrome.storage.sync.set({ subsOnly: toggle.checked });
});