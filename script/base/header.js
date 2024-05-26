import { pages } from "./pages.js";

// 導航列預設HTML
export const html_header = `
  <div class="container-fluid">
    <a class="navbar-brand d-flex fw-bolder" href="../index.html">
      <img src="../icons/icon_trafficpigeon_2.png" alt="Logo" width="30" height="30" class="my-auto me-2">
      <span id="pageTitle">交通鴿手</span>
    </a>
    <div class="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img class="i-15" src="../icons/icon_highWay.png" alt="">
            交通法規
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="..${pages.PH.href}">
                <img class="i-15 me-1" src="..${pages.PH.icon}" alt="">
                ${pages.PH.title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.SR.href}">
                <img class="i-15 me-1" src="..${pages.SR.icon}" alt="">
                ${pages.SR.title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.DR.href}">
                <img class="i-15 me-1" src="..${pages.DR.icon}" alt="">
                ${pages.DR.title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.ML.href}">
                <img class="i-15 me-1" src="..${pages.ML.icon}" alt="">
                ${pages.ML.title}
            </a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="..${pages.TA.href}">
                <img class="i-15 me-1" src="..${pages.TA.icon}" alt="">
                ${pages.TA.title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.VS.href}">
              <img class="i-15 me-1" src="..${pages.VS.icon}" alt="">
              ${pages.VS.title}
        </a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img class="i-15" src="../icons/icon_quickSearch.png" alt="">
            違規取締
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="..${pages.DL.href}">
                <img class="i-15 me-1" src="..${pages.DL.icon}" alt="">
                ${pages.DL.title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.CL.href}">
                <img class="i-15 me-1" src="..${pages.CL.icon}" alt="">
                ${pages.CL.title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.overload.href}">
            <img class="i-15 me-1" src="..${pages.overload.icon}" alt="">
            ${pages.overload.title}
        </a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="..${pages.keyPoint.href}">
                <img class="i-15 me-1" src="..${pages.keyPoint.icon}" alt="">
                ${pages.keyPoint.title}
            </a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img class="i-15" src="../icons/icon_law_2.png" alt="">
            警察法規
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="..${pages.PA.href}">
                <img class="i-15 me-1" src="..${pages.PA.icon}" alt="">
                ${pages.PA.title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.PW.href}">
                <img class="i-15 me-1" src="..${pages.PW.icon}" alt="">
                ${pages.PW.title}
            </a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="..${pages.CC.href}">
                <img class="i-15 me-1" src="..${pages.CC.icon}" alt="">
                ${pages.CC.title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.CP.href}">
                <img class="i-15 me-1" src="..${pages.CP.icon}" alt="">
                ${pages.CP.title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.SO.href}">
                <img class="i-15 me-1" src="..${pages.SO.icon}" alt="">
                ${pages.SO.title}
            </a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img class="i-15" src="../icons/icon_file.png" alt="">
            更多
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="${pages.feedback.href}">
                <img class="i-15 me-1" src="..${pages.feedback.icon}" alt="">
                ${pages.feedback.title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.about.href}">
                <img class="i-15 me-1" src="..${pages.about.icon}" alt="">
                ${pages.about.title}
            </a></li>
          </ul>
        </li>
        <!--<li class="nav-item">
                <a class="nav-link" href="..${pages.about.href}">
                    <img class="i-15" src="..${pages.about.icon}" alt="">  
                    關於
                </a>
            </li>--!>
        </ul>
        <!-- 主題切換按鈕 -->
        <div class="dropdown">
          <button class="btn btn-outline-secondary dropdown-toggle ms-auto me-2" id="bd-theme" type="button" aria-expanded="true" data-bs-toggle="dropdown" data-bs-display="static" aria-label="Toggle theme (dark)">
            <svg class="i-12 me-2 theme-icon-active" fill="#5A96FA"><use xlink:href=""/></use></svg> 
            <span class="d-inline d-md-none d-lg-inline" id="bd-theme-text">主題</span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="bd-theme-text" data-bs-popper="static" style="min-width:7rem">
            <li>
              <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="false">
                <svg class="i-10 me-2 opacity-50" fill="#5A96FA"><use xlink:href="../icons/bootstrap-icons/bootstrap-icons.svg#circle-half"/></use></svg>  
                自動
              </button>
            </li>
            <li>
              <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                <svg class="i-10 me-2 opacity-50" fill="#5A96FA"><use xlink:href="../icons/bootstrap-icons/bootstrap-icons.svg#sun-fill"/></use></svg>
                亮色
              </button>
            </li>
            <li>
              <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="true">
                <svg class="i-10 me-2 opacity-50" fill="#5A96FA"><use xlink:href="../icons/bootstrap-icons/bootstrap-icons.svg#moon-stars-fill"/></use></svg>
                深色
              </button>
            </li>

          </ul>
        </div>
    </div>
    <!-- 搜尋按鈕 -->
    <button class="btn btn-outline-secondary ms-auto me-2" data-bs-toggle="modal" data-bs-target="#searchArea">
    <img class="i-15" src="../icons/icon_search.png" width="24px" walt=""> 
      <p class="d-none d-lg-inline">搜尋</p>
    </button>
    <!-- 展開頂端欄按鈕 -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
`;

// 版權及免責聲明
const html_license =` 
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


// 主程式
if ($('title').html() == '首頁 - 交通鴿手'){
  $('#pageHeader').html(html_header.replaceAll('..','.'));
}
else{
  $('#pageHeader').html(html_header);
}
$('#websiteLicense').html(html_license);

