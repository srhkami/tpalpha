import { indexImage } from '../base/info.js'

// 函式：是否顯示小工具
function toolsSet(){
  let toolsOption = JSON.parse(localStorage.getItem('toolsOption'));
  console.log(toolsOption);
  if (toolsOption[0]==0){
    $('#quickArea').addClass('d-none');
  }
  if (toolsOption[1]==0){
    $('#arriveDate').addClass('d-none');
  }
}

//函式：刷新圖片
function refleshImage(){
  let html='';
  indexImage.forEach(i=>{
    html+=`
    <div class="carousel-item active">
      ${i}
    </div>
    `
  });
  $('.carousel-inner').html(html);
}

// 主程式
refleshImage();
$(document).ready(()=>{
  toolsSet();
});




