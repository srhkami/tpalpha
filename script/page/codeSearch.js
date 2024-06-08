import {carType, extraPinich, list_code} from '../list/code_list.js'

// 函式：刷新清單
function refreshList(list){
  let html = '';
  list.forEach((item)=>{
    html+=`
        <div class="card mt-2">
          <div class="card-header d-flex">
            <h4 class="text-primary">${item.code}</h4>
            <span class="codeInfo ms-auto my-auto row">
              <span class="col-5 p-0 text-end">${carType[item.type]}</span>
              <span class="col-5 p-0 text-center text-danger">$${item.fine}</span>
              ${svg(item.arrive)}
            </span>
          </div>
          <div class="card-body p-2">
            <h6 class="card-title">
              ${item.text}
            </h6>
            ${item.showExtra()}
          </div>
        </div>
    `
  });
  $('#itemList').html(html);
}
// 判斷SVG
function svg(arrive){
  let html='';
  if(arrive == '0'){
    html=`
      <svg class="col-2 i-12 p-0 my-auto" fill="#5A96FA">
      <use xlink:href="../icons/bootstrap-icons.svg#send-check-fill"></use>
      </svg>
    `;
  }
  else{
    html=`
      <svg class="col-2 i-12 p-0 my-auto" fill="#FF8C00">
      <use xlink:href="../icons/bootstrap-icons.svg#person-video3"></use>
      </svg>
    `;
  }
  return html;
}

// 函式：搜尋
function searchStart(){
  $('#keyCode').bind('input porpertychange',()=>{
    let key =  $('#keyCode').val();
    let newList = list_code.filter((item)=>{
      if(item.hasKeyword(key)==true){
        return item;
      }
    });
    refreshList(newList);
  })
}

// 函式：刷新輸出結果
function showOutput(){
  $('.showItem').click((e)=>{
    e.preventDefault()
    console.log(e);
    // console.log(e.target.dataset.itemNo);
    // let item = list_code[e.target.dataset.itemNo];
    // console.log(item)
    // $('#outputCode').html(item.code);
    // $('#outputTitle').html(item.text);
    // $('#outputText').html(item.checkExtra());
  })
}


// 主程式
refreshList(list_code);
$(document).ready(() => {
  $('#keyCode-reset').click(()=>$('#keyCode').val(''))
  searchStart();
  // showOutput();
})