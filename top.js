"use strict";

// ▼ ここからproduct ▼
{
  const productList = document.querySelectorAll('.product-list');

  productList.forEach((item) => {
    window.addEventListener('scroll', () => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && item.style.opacity !== '1') {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }
    });
  });
}
// ▲ ここまでproduct ▲
// ▼ ここからworries ▼
{
  const worriesLists = document.querySelectorAll('.worries-lists');
  worriesLists.forEach((item) => {
    window.addEventListener('scroll', () => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && item.style.opacity !== '1') {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }
    });
  });
}
// ▲ ここまでworries ▲
// ▼ ここからreviews ▼
{
  const reviewsLists = document.querySelectorAll('.reviews-lists');
  reviewsLists.forEach((item) => {
    window.addEventListener('scroll', () => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && item.style.opacity !== '1') {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }
    });
  });
}
// ▲ ここまでreviews ▲
// ▼ ここからform ▼
{
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const select = document.querySelector('#select').value;

    if (name && email && select) {
      const result = confirm('送信しますか？');
      if (result) {
        form.submit();
      }
    } else {
      alert('必須項目をすべて入力してください');
    }
  });
}
// ▲ ここまでform ▲