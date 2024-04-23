//載入時切換主題
if (localStorage.getItem('theme')) {
  let mode = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-bs-theme', mode);
}
  
