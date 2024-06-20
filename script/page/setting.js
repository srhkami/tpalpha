import { pages } from "../base/pages.js";
import { updateData } from "../data/database.js";
import { checkLocalData } from "../data/database.js"

// 函式：讀取書籤
function loadBookmark() {
  let bookmarkOption = [];
  if (localStorage.getItem('bookmark')) {
    bookmarkOption = JSON.parse(localStorage.getItem('bookmark'));
  }
  return bookmarkOption;
}
// 刷新書籤設定區域
function refleshSetArea() {
  let bookmarkOption = loadBookmark();
  // 排除書籤的清單
  let otherList = pageList.filter((i) => {
    if (!bookmarkOption.some((value) => { return value == i })) {
      return i;
    }
  })
  let html = '';
  bookmarkOption.forEach(i => {
    html += `
    <div id="item-${pages[i].code}" class="border border-2 rounded my-1 row align-items-center">
      <div class="col-2">
        <button class="btn btn-delete" data-page="${pages[i].code}">
          <svg class="i-12 my-auto" fill="#FF8C00" data-page="${pages[i].code}">
            <use xlink:href="../icons/bootstrap-icons.svg#dash-circle-fill" data-page="${pages[i].code}"></use>
          </svg>
        </button>
      </div>
      <div class="col-6 border-end">
        <img src="..${pages[i].icon}" class="i-15" alt="">
        ${pages[i].title}
      </div>
      <div class="col-2">
        <button class="btn btn-sm btn-up" data-page="${pages[i].code}">
          <svg class="i-12 my-auto" fill="#1E90FF" data-page="${pages[i].code}">
            <use xlink:href="../icons/bootstrap-icons.svg#caret-up-square-fill" data-page="${pages[i].code}"></use>
          </svg>
        </button>
      </div>
      <div class="col-2">
        <button class="btn btn-sm btn-down" data-page="${pages[i].code}">
          <svg class="i-12 my-auto" fill="#1E90FF" data-page="${pages[i].code}">
            <use xlink:href="../icons/bootstrap-icons.svg#caret-down-square-fill" data-page="${pages[i].code}"></use>
          </svg>
        </button>
      </div>
    </div>
    `
  })
  $('#added').html(html);
  html = '';
  otherList.forEach(i => {
    html += `
    <div id="item-${pages[i].code}" class="border border-2 rounded my-1 row align-items-center">
      <div class="col-2">
        <button class="btn btn-add" data-page="${pages[i].code}">
          <svg class="i-12 my-auto" fill="#1E90FF 	" data-page="${pages[i].code}">
            <use xlink:href="../icons/bootstrap-icons.svg#plus-circle-fill" data-page="${pages[i].code}"></use>
          </svg>
        </button>
      </div>
      <div class="col-6">
        <img src="..${pages[i].icon}" class="i-15" alt="">
        ${pages[i].title}
      </div>
      <div class="col-2">
      </div>
      <div class="col-2">
      </div>
    </div>
    `
  })
  $('#notAdd').html(html);
  btnClick();
}
// 按鈕點擊監聽
function btnClick(){
  $('.btn-add').click(e => itemAdd(e.target.dataset.page));
  $('.btn-delete').click(e => itemDelete(e.target.dataset.page));
  $('.btn-up').click(e => itemUp(e.target.dataset.page));
  $('.btn-down').click(e => itemDown(e.target.dataset.page));

}
// 加入書籤項目
function itemAdd(page){
  let bookmarkOption = loadBookmark();
  bookmarkOption.push(page);
  localStorage.setItem('bookmark',JSON.stringify(bookmarkOption));
  refleshSetArea();
}
// 刪除書籤項目
function itemDelete(page){
  let bookmarkOption = loadBookmark();
  bookmarkOption = bookmarkOption.filter(item =>{return item !== page});
  localStorage.setItem('bookmark',JSON.stringify(bookmarkOption));
  refleshSetArea();
}
// 往上移
function itemUp(page){
  let bookmarkOption = loadBookmark();
  let x = bookmarkOption.indexOf(page);
  if(x != 0){
    [bookmarkOption[x],bookmarkOption[x-1]] = [bookmarkOption[x-1],bookmarkOption[x]]
  }
  localStorage.setItem('bookmark',JSON.stringify(bookmarkOption));
  refleshSetArea();
}
// 往下移
function itemDown(page){
  let bookmarkOption = loadBookmark();
  let x = bookmarkOption.indexOf(page);
  if(x != bookmarkOption.length-1){
    [bookmarkOption[x],bookmarkOption[x+1]] = [bookmarkOption[x+1],bookmarkOption[x]]
  }
  localStorage.setItem('bookmark',JSON.stringify(bookmarkOption));
  refleshSetArea();
}

// 小工具顯示設定
function toolsSet(){
  let toolsOption = JSON.parse(localStorage.getItem('toolsOption'));
  if (toolsOption[0]==1){
    $('#check-0').attr('checked',true)
  }
  if (toolsOption[1]==1){
    $('#check-1').attr('checked',true)
  }
  if (toolsOption[2]==0){
    $('#check-2').attr('checked',false)
  }
  $('#check-0,#check-1,#check-2').change(()=>{
    if($('#check-0').is(':checked')){
      toolsOption[0] = 1;
    }
    else{
      toolsOption[0] = 0;
    }
    if($('#check-1').is(':checked')){
      toolsOption[1] = 1;
    }
    else{
      toolsOption[1] = 0;
    }
    if($('#check-2').is(':checked')){
      toolsOption[2] = 1;
    }
    else{
      toolsOption[2] = 0;
    }
    localStorage.setItem('toolsOption',JSON.stringify(toolsOption));
  })
}

// 資料庫更新
function btnUpdateData(){
  $('#dataVer-check').click(()=> updateData())
}

// 主程式
let pageList = [];
Object.values(pages).forEach((i) => {
  if (i.type == '法規' || i.type == '速查') {
    pageList.push(i.code);
  }
});
refleshSetArea();
toolsSet();
btnUpdateData();
checkLocalData();