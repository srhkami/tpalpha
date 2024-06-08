
//刷新到案日期
function date_calculate(){
    const date = new Date();
    date.setDate(date.getDate()+30);
    $('#day_30').html(`30日到案：<br>${date.getFullYear()-1911}年${date.getMonth()+1}月${date.getDate()}日`); 
    date.setDate(date.getDate()+15);
    $('#day_45').html(`45日到案：<br>${date.getFullYear()-1911}年${date.getMonth()+1}月${date.getDate()}日`);
    console.log(typeof(date.getMonth()))
}

// 主程式
$(document).ready(()=>{
  date_calculate();
});




