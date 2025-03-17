// JavaScript for Adding Animations to Title
document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.animated-title');
  setInterval(() => {
    title.style.transform = `translate(-50%, -50%) scale(${1.1 + Math.random() * 0.1})`;
  }, 3000);
});
