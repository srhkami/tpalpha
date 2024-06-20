import {notice, aboutThisWeb, popUpHTML, updataText, checkMobileVer} from '../base/info.js'

// 函式：是否顯示小工具
function toolsSet(){
  let toolsOption = JSON.parse(localStorage.getItem('toolsOption'));
  if (toolsOption[0]==0){
    $('#quickArea').addClass('d-none');
  }
  if (toolsOption[1]==0){
    $('#arriveDate').addClass('d-none');
  }
}

// 主程式
$(document).ready(()=>{
  // 公告
  $('#notice').html(notice);
  // 關於此網頁
  $('#future').html(aboutThisWeb);
  // 更新日誌彈出視窗
  $('#showUpdate').click(()=>{popUpHTML('更新日誌', updataText)});
  // 小工具
  toolsSet();
  // 手機版才要這行
  checkMobileVer();
});




