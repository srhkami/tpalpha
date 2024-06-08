import { pages } from "./pages.js";

// 頂端欄
const headerHtml = `
  <div class="container-xl px-0">
    <!-- 展開側邊欄按鈕 -->
    <button class="btn d-inline d-lg-none p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar"
      aria-controls="offcanvasNavbar">
      <svg class="i-15" fill="#5A96FA">
        <use xlink:href="../icons/bootstrap-icons.svg#list"></use>
      </svg>
    </button>
    <a class="navbar-brand d-none d-lg-flex fw-bolder ms-3" href="../index.html">
      <img src="../icons/icon_trafficpigeon-Alpha.png" alt="Logo" width="30" height="30" class="my-auto me-2">
    </a>
    <span class="h-100 d-flex">
      <h4 id="pageTitle" class="my-auto fw-bolder">交通鴿手</h4>
    </span>
    <!-- 主題切換按鈕 -->
    <div class="dropdown ms-auto">
      <button class="btn dropdown-toggle" id="bd-theme" type="button" aria-expanded="true" data-bs-toggle="dropdown"
        data-bs-display="static" aria-label="主題 (dark)">
        <svg class="i-12 theme-icon-active" fill="#5A96FA">
          <use xlink:href="../icons/bootstrap-icons.svg#moon-stars-fill"></use>
        </svg>
        <!-- <span class="d-inline d-md-none d-lg-inline" id="bd-theme-text">主題</span> -->
      </button>
      <ul class="dropdown-menu" aria-labelledby="bd-theme-text" data-bs-popper="static" style="min-width:7rem">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto"
            aria-pressed="false">
            <svg class="i-10 me-2 opacity-50" fill="#5A96FA">
              <use xlink:href="../icons/bootstrap-icons.svg#circle-half"></use>
            </svg>
            自動
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light"
            aria-pressed="false">
            <svg class="i-10 me-2 opacity-50" fill="#5A96FA">
              <use xlink:href="../icons/bootstrap-icons.svg#sun-fill"></use>
            </svg>
            亮色
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="dark"
            aria-pressed="true">
            <svg class="i-10 me-2 opacity-50" fill="#5A96FA">
              <use xlink:href="../icons/bootstrap-icons.svg#moon-stars-fill"></use>
            </svg>
            深色
          </button>
        </li>
      </ul>
    </div>
    <!-- 搜尋按鈕 -->
    <button class="btn" data-bs-toggle="modal" data-bs-target="#searchArea">
      <img class="i-15" src="../icons/icon_search.png" width="24px" walt="">
      <!-- <p class="d-none d-lg-inline">搜尋</p> -->
    </button>
  </div>
`;

// 函式：取得頁面標題
function getTitle(){
  let title = $('title').html();
  if (title.length >7){
    title = title.substr(0, title.length-7);
    $('#pageTitle').html(title);
  }
}

// 函式：讀取側邊欄設定
function loadSidebar(no){
  let sidebarOption = [0,1,1,0]
  if (localStorage.getItem('sidebar')) {
    sidebarOption = JSON.parse(localStorage.getItem('sidebar'));
  }
  else{
    localStorage.setItem('sidebar',JSON.stringify(sidebarOption));
  }
  if (sidebarOption[no] == 1){
    return(['','show'])
  }
  else{
    return(['collapsed',''])
  }
}
// 函式：儲存側邊欄設定
function saveSidebar(){
  $('.menu-item').click((e)=>{
    let sidebarOption = JSON.parse(localStorage.getItem('sidebar'));
    if (e.target.className.includes('collapsed')){
      sidebarOption[e.target.dataset.menuNo] = 0;
    }
    else{
      sidebarOption[e.target.dataset.menuNo] = 1;
    }
    localStorage.setItem('sidebar',JSON.stringify(sidebarOption));
  })
}

// 函式：讀取書籤
function loadBookmark(){
  let bookmarkOption;
  let bookmarkHtml;
  if (localStorage.getItem('bookmark')) {
    bookmarkOption = JSON.parse(localStorage.getItem('bookmark'));
  }
  else{
    bookmarkHtml =`
    <li>
      <a class="list-group-item py-1" href="#">
        <img class="i-15 me-1" src="../icons/icon_setting.png" alt="">
        管理書籤
      </a>
    </li>
    `;
  }
  return bookmarkHtml
}

// 側邊欄
  // 預設關閉的在a加上.collapsed，預設打開的在div加上.show
const asideHtml = `
  <div class="offcanvas-header ps-2 mb-2">
  <a class="navbar-brand d-flex fw-bolder" href="../index.html">
    <img src="../icons/icon_trafficpigeon.png" alt="Logo" width="30" height="30" class="my-auto me-2">
    <h4 class="offcanvas-title ms-1" id="offcanvasNavbarLabel">交通鴿手</h4>
  </a>
  <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <!-- 主選單清單 -->
  <div id="pageMenu" class="rounded-3 px-2 h-100 overflow-auto">  
    <div id="menuBookmark" class="p-1 mb-2 border-start border-3 border-primary">
      <a class="menu-item dropdown-item d-flex mb-1 ${loadSidebar(0)[0]}" data-menu-no="0" data-bs-toggle="collapse" href="#collapseExample" role="button">
        <img class="i-15 me-1" src="../icons/icon_bookmark.png" alt="">
        <span>書籤</span>
        <svg class="anime-icon i-10 ms-auto my-auto" fill="#5A96FA">
          <use xlink:href="../icons/bootstrap-icons.svg#chevron-right"></use>
        </svg>
      </a>
      <div class="collapse ${loadSidebar(0)[1]}" id="collapseExample">
        <ul class="m-0" style="list-style-type:none">
          ${loadBookmark()}
        </ul>
      </div>
    </div>
    <div id="menu1" class="p-1 my-2 border-start border-3 border-primary">
      <a class="menu-item dropdown-item d-flex mb-1 ${loadSidebar(1)[0]}" data-menu-no="1"  data-bs-toggle="collapse" href="#collapseExample1" role="button">
        <img class="i-15 me-1" src="../icons/icon_highWay.png" alt="">
        <span>交通法規</span>
        <svg class="anime-icon i-10 ms-auto my-auto" fill="#5A96FA">
          <use xlink:href="../icons/bootstrap-icons.svg#chevron-right"></use>
        </svg>
      </a>
      <div class="collapse ${loadSidebar(1)[1]}" id="collapseExample1">
        <ul class="m-0" style="list-style-type:none">
          <li>
            <a class="list-group-item py-1" href="..${pages.PH.href}">
              <img class="i-15 me-1" src="..${pages.PH.icon}" alt="">
              ${pages.PH.title}
            </a>
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.SR.href}">
              <img class="i-15 me-1" src="..${pages.SR.icon}" alt="">
              ${pages.SR.title}
            </a>
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.DR.href}">
              <img class="i-15 me-1" src="..${pages.DR.icon}" alt="">
              ${pages.DR.title}
            </a>
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.ML.href}">
              <img class="i-15 me-1" src="..${pages.ML.icon}" alt="">
              ${pages.ML.title}
            </a>
          </li>
          <li>
            <hr class="m-1">
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.TA.href}">
              <img class="i-15 me-1" src="..${pages.TA.icon}" alt="">
              ${pages.TA.title}
            </a>
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.VS.href}">
              <img class="i-15 me-1" src="..${pages.VS.icon}" alt="">
              ${pages.VS.title}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="menu2" class="p-1 my-2 border-start border-3 border-primary">
      <a class="menu-item dropdown-item d-flex mb-1 ${loadSidebar(2)[0]}" data-menu-no="2" data-bs-toggle="collapse" href="#collapseExample2"
      role="button">
        <img class="i-15 me-1" src="../icons/icon_quickSearch.png" alt="">
        <span>違規取締</span>
        <svg class="anime-icon i-10 ms-auto my-auto" fill="#5A96FA">
          <use xlink:href="../icons/bootstrap-icons.svg#chevron-right"></use>
        </svg>
      </a>
      <div class="collapse ${loadSidebar(2)[1]}" id="collapseExample2">
        <ul class="m-0" style="list-style-type:none">
          <li>
            <a class="list-group-item py-1" href="..${pages.codeSearch.href}">
              <img class="i-15 me-1" src="..${pages.codeSearch.icon}" alt="">
              ${pages.codeSearch.title}
            </a>
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.DL.href}">
              <img class="i-15 me-1" src="..${pages.DL.icon}" alt="">
              ${pages.DL.title}
            </a>
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.CL.href}">
              <img class="i-15 me-1" src="..${pages.CL.icon}" alt="">
              ${pages.CL.title}
            </a>
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.overload.href}">
              <img class="i-15 me-1" src="..${pages.overload.icon}" alt="">
              ${pages.overload.title}
            </a>
          </li>
          <li>
            <hr class="m-1">
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.keypoint.href}">
              <img class="i-15 me-1" src="..${pages.keypoint.icon}" alt="">
              ${pages.keypoint.title}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="menu3" class="p-1 my-2 border-start border-3 border-primary">
      <a class="menu-item dropdown-item d-flex mb-1 ${loadSidebar(3)[0]}" data-menu-no="3" data-bs-toggle="collapse" href="#collapseExample3" role="button">
        <img class="i-15 me-1" src="../icons/icon_law_2.png" alt="">
        <span>警察法規</span>
        <svg class="anime-icon i-10 ms-auto my-auto" fill="#5A96FA">
          <use xlink:href="../icons/bootstrap-icons.svg#chevron-right"></use>
        </svg>
      </a>
      <div class="collapse ${loadSidebar(3)[1]}" id="collapseExample3">
        <ul class="m-0" style="list-style-type:none">
          <li>
            <a class="list-group-item py-1" href="..${pages.PA.href}">
              <img class="i-15 me-1" src="..${pages.PA.icon}" alt="">
              ${pages.PA.title}
            </a>
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.PW.href}">
              <img class="i-15 me-1" src="..${pages.PW.icon}" alt="">
              ${pages.PW.title}
            </a>
          </li>
          <li>
            <hr class="m-1">
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.CC.href}">
              <img class="i-15 me-1" src="..${pages.CC.icon}" alt="">
              ${pages.CC.title}
            </a>
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.CP.href}">
              <img class="i-15 me-1" src="..${pages.CP.icon}" alt="">
              ${pages.CP.title}
            </a>
          </li>
          <li>
            <a class="list-group-item py-1" href="..${pages.SO.href}">
              <img class="i-15 me-1" src="..${pages.SO.icon}" alt="">
              ${pages.SO.title}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-1 my-2 border-start border-3 border-primary">
      <a class="menu-item dropdown-item d-flex mb-1" href="..${pages.feedback.href}">
        <img class="i-15 me-1" src="..${pages.feedback.icon}" alt="">
        <span>${pages.feedback.title}</span>
      </a>
    </div>
    <div class="p-1 my-1 border-start border-3 border-primary">
      <a class="dropdown-item d-flex mb-1" href="..${pages.about.href}">
        <img class="i-15 me-1" src="..${pages.about.icon}" alt="">
        <span>${pages.about.title}</span>
      </a>
      </div>
    <div id="arriveTerm" class="card bg-primary-subtle border-2 my-3">
      <h6 class="card-header text-center text-primary fw-bolder">到案日期</h6>
      <div class="card-body p-2 text-center"></div>
    </div>
  </div>
`;

// 底部版權聲明
const licenseHtml =` 
  <div id="webLicense" class="mx-auto">
    <p class="text-secondary text-center" style="font-size:12px;">
      Copyright © 2023 C.K.SAI All Rights Reserved
      <br>
      免責聲明：
      <br>
      「交通鴿手」之內容無法保證完全無誤，在參照本網站內容作為執勤用途前(如舉發違規、回覆申訴)，務必再次確認是否符合要件，或先洽詢該管交通組、監理裁決單位。
    </p>
    
  </div>
`





// 函示：日期個位數加上0
function addZero(num){
  let text;
  if (num < 10){
    text = `0${num}`
  }
  else{
    text = `${num}`
  }
  return text;
}
// 函式：刷新到案日期
function date_calculate(){
  const date = new Date();
  // let day30 = date.getDate(date.getDate()+30);
  // let day45 = date.getDate(date.getDate()+15);
  date.setDate(date.getDate()+30);
  let day30 = `${date.getFullYear()-1911}/${addZero(date.getMonth()+1)}/${addZero(date.getDate())}` 
  date.setDate(date.getDate()+15);
  let day45 = `${date.getFullYear()-1911}/${addZero(date.getMonth()+1)}/${addZero(date.getDate())}`
  $('#arriveTerm .card-body').html(`
    <small>
      30日：${day30}
      <br>
      45日：${day45}
    </small>  
  `)
}

// 主程式
if ($('title').html() == '交通鴿手'){
  $('#pageHeader').html(headerHtml.replaceAll('..','.'));
  $('#sidebar').html(asideHtml.replaceAll('..','.'));
}
else{
  $('#pageHeader').html(headerHtml);
  $('#sidebar').html(asideHtml);
}
$('#websiteLicense').html(licenseHtml);
$(document).ready(()=>{
  getTitle();
  date_calculate();
  saveSidebar();
  //偵測側邊欄點擊
  $("#sidebar .btn-close").click(() => {
    setTimeout(() => $('.offcanvas-start').offcanvas('hide'), 50)
  });
});
