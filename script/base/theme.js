//載入時切換主題
function auto_theme(){
  let mode;
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    mode = 'dark';
  }
  else if(window.matchMedia('(prefers-color-scheme: light)').matches){
    mode = 'light';
  }
  return mode;
}

//切換主題按鈕
function switch_mode() {
  $('.themeSwitch').click((e)=> {
    let mode = e.target.dataset.theme;
    localStorage.setItem('theme', mode);
    if (mode == 'auto') {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        mode = 'dark';
      }
      else if(window.matchMedia('(prefers-color-scheme: light)').matches){
        mode = 'light';
      }
    }
    $('html').attr('data-bs-theme', mode);
  });
}

//主程式
let mode;
if (localStorage.getItem('theme')) {
  mode = localStorage.getItem('theme');
  if  (mode == 'auto'){
    mode = auto_theme();
  }
}
else{
  if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
    console.log('瀏覽器不支援自動模式')
    mode = 'light';
  }
  else{
    mode = auto_theme();
    localStorage.setItem('theme', 'auto');
  }
}
$('html').attr('data-bs-theme', mode);
$(document).ready(()=>{
  switch_mode()
});
