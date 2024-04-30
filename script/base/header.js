import { pages } from "./pages.js";

// 導航列預設HTML
export const html_header = `
  <div class="container-fluid">
    <a class="navbar-brand d-flex fw-bolder" href="../index.html">
      <img src="../icons/icon_trafficpigeon_2.png" alt="Logo" width="30" height="30" class="my-auto me-2">
      交通鴿手
    </a>
    <div class="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img class="icon_menu" src="../icons/icon_highWay.png" alt="">
            交通法規
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="..${pages.PH.href}">
                <img class="icon_menu me-1" src="..${pages.PH.icon}" alt="">
                ${pages.PH.name_title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.SR.href}">
                <img class="icon_menu me-1" src="..${pages.SR.icon}" alt="">
                ${pages.SR.name_title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.DR.href}">
                <img class="icon_menu me-1" src="..${pages.DR.icon}" alt="">
                ${pages.DR.name_title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.ML.href}">
                <img class="icon_menu me-1" src="..${pages.ML.icon}" alt="">
                ${pages.ML.name_title}
            </a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="..${pages.TA.href}">
                <img class="icon_menu me-1" src="..${pages.TA.icon}" alt="">
                ${pages.TA.name_title}
            </a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img class="icon_menu" src="../icons/icon_quickSearch.png" alt="">
            違規取締
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="..${pages.DL.href}">
                <img class="icon_menu me-1" src="..${pages.DL.icon}" alt="">
                ${pages.DL.name_title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.CL.href}">
                <img class="icon_menu me-1" src="..${pages.CL.icon}" alt="">
                ${pages.CL.name_title}
            </a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="..${pages.keyPoint.href}">
                <img class="icon_menu me-1" src="..${pages.keyPoint.icon}" alt="">
                ${pages.keyPoint.name_title}
            </a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img class="icon_menu" src="../icons/icon_law_2.png" alt="">
            警察法規
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="..${pages.PA.href}">
                <img class="icon_menu me-1" src="..${pages.PA.icon}" alt="">
                ${pages.PA.name_title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.PW.href}">
                <img class="icon_menu me-1" src="..${pages.PW.icon}" alt="">
                ${pages.PW.name_title}
            </a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="..${pages.CC.href}">
                <img class="icon_menu me-1" src="..${pages.CC.icon}" alt="">
                ${pages.CC.name_title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.CP.href}">
                <img class="icon_menu me-1" src="..${pages.CP.icon}" alt="">
                ${pages.CP.name_title}
            </a></li>
            <li><a class="dropdown-item" href="..${pages.SO.href}">
                <img class="icon_menu me-1" src="..${pages.SO.icon}" alt="">
                ${pages.SO.name_title}
            </a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img class="icon_menu" src="../icons/icon_file.png" alt="">
            更多
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="${pages.feedback.href}">
                <img class="icon_menu me-1" src="..${pages.feedback.icon}" alt="">
                ${pages.feedback.name_title}
            </a></li>
            <li><a class="dropdown-item" href="#">
              <img class="icon_menu me-1" src="..${pages.feedback.icon}" alt="">
              意見蒐集
            </a></li>
            <li><a class="dropdown-item" href="..${pages.about.href}">
                <img class="icon_menu me-1" src="..${pages.about.icon}" alt="">
                ${pages.about.name_title}
            </a></li>
          </ul>
        </li>
        <!--<li class="nav-item">
                <a class="nav-link" href="..${pages.about.href}">
                    <img class="icon_menu" src="..${pages.about.icon}" alt="">  
                    關於
                </a>
            </li>--!>
        </ul>
        <!-- 模式切換按鈕 -->
        <div class="dropdown">
        <button id="btn-modeSwitch" class="btn btn-outline-secondary ms-auto me-2 dropdown-toggle" type="button" data-bs-toggle="dropdown">
          <img class="btn_header btn_search" src="../icons/icon_moon.png" width="24px" alt="">
          <p class="d-inline">主題</p>
        </button>
        <ul class="dropdown-menu" style="width:50px">
          <li><a class="dropdown-item themeSwitch" href="#" data-theme="auto">系統自動</a></li>
          <li><a class="dropdown-item themeSwitch" href="#" data-theme="light">亮色模式</a></li>
          <li><a class="dropdown-item themeSwitch" href="#" data-theme="dark">暗色模式</a></li>
        </ul>
        </div>
    </div>
    <!-- 搜尋按鈕 -->
    <button class="btn btn-outline-secondary ms-auto me-2" data-bs-toggle="modal" data-bs-target="#searchArea">
      <img class="btn_header btn_search" src="../icons/icon_search.png" width="24px" walt="">
      <p class="d-none d-lg-inline">搜尋</p>
    </button>
    <!-- 搜尋之彈出視窗 -->

    <!-- 展開頂端欄按鈕 -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
`;

// 主程式
if ($('title').html() == '首頁 - 交通鴿手'){
  $('#pageHeader').html(html_header.replaceAll('..','.'));
}
else{
  $('#pageHeader').html(html_header);
}

