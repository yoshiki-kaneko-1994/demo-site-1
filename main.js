"use strict";

// ▼ ここからheader ▼
{
  const H1 = document.querySelector('h1');
  const close = document.querySelector('.banner #close');
  const banner = document.querySelector('.banner');
  const header = document.querySelector('header');

  window.addEventListener('load', () => {
    H1.style.opacity = '1';
    banner.style.opacity = '1';
    banner.style.transform = 'translateY(0)';
    header.style.opacity = '1';
  });

  close.addEventListener('click', (e) => {
    e.preventDefault();
    banner.style.display = 'none';
  });
}
// ▲ ここまでheader ▲
// ▼ ここからfooter ▼
{
  const small = document.querySelector('small');
  const d = new Date();

  small.textContent = `(c) 2024年ー${d.getFullYear()}年 テキスト`;
}
// ▲ ここまでfooter ▲