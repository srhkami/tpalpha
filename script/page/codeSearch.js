import { list_code } from '../data/code_list.js'

// 函式：刷新清單
function refreshList(list){
  let html = '';
  list.forEach((item)=>{
    html+=`
        <div class="card mt-2">
          <div class="card-header row m-0">
            <h4 class="text-primary m-0 ps-1 col">${item.code}</h4>
            <span class="codeInfo row">
              <span class="col-8 p-0">${item.type}</span>
              <span class="col-4 p-0 text-end text-danger">記 ${item.point} 點</span>
              <span class="col-9 p-0 text-danger">$${item.fine}(${item.blame})</span>
              <span class="col-3 p-0 pe-1 text-end">${item.isArrive()}</span>

            </span>
          </div>
          <div class="card-body p-2">
            <h6 class="card-title">
              ${item.text}
            </h6>
            ${item.showMore()}
          </div>
        </div>
    `
  });
  $('#itemList').html(html);
}

// 函式：偵測搜尋框
function searchInput(){
  $('#keyCode').keypress((e)=>{
    if(e.which == 13){
      searchStart();
    }
  })
  $('#codeSearch-start').click(()=>{
    searchStart();
  })
  $('#codeSearch-clear').click(()=>{
    $('#keyCode').val('');
  })
}

function searchStart(){
  let key =  $('#keyCode').val();
  let newList = list_code.filter((item)=>{
    if(item.hasKeyword(key)==true){
      return item;
    }
  });
  refreshList(newList);
}



// 主程式
refreshList(list_code);
$(document).ready(() => {
  searchInput();
})
