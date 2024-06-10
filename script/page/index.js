
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


// 主程式
$(document).ready(()=>{
  toolsSet();
});




