/* app.js — Lilly Dashboard interactivity */

const sidebar  = document.getElementById('sidebar');
const menuBtn  = document.getElementById('menuBtn');
const main     = document.querySelector('.main');
const pageTitle = document.getElementById('pageTitle');

// Toggle sidebar
menuBtn.addEventListener('click', () => {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    sidebar.classList.toggle('open');
  } else {
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('expanded');
  }
});

// Nav item active state + page title
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    pageTitle.textContent = item.dataset.section.charAt(0).toUpperCase() + item.dataset.section.slice(1);
  });
});

// Animate bars on load
function animateBars() {
  document.querySelectorAll('.bar').forEach(bar => {
    const target = bar.dataset.val;
    bar.style.width = '0';
    requestAnimationFrame(() => {
      setTimeout(() => { bar.style.width = target; }, 100);
    });
  });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', e => {
  if (window.innerWidth <= 768 && !sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.classList.remove('open');
  }
});

// Run on load
animateBars();
