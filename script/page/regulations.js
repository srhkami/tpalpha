import { pages } from '../base/pages.js';

// 函式：刷新條目清單
function refresh_list(r_list) {
  let html = '';
  r_list.forEach((value, index) => {
    html += `
        <a class="list-group-item list-group-item-action d-flex" href="#article-${value.article}">
            <div class="list-article-no">第 ${value.article} 條</div>
            <div class="list-article-title text-secondary-emphasis">${value.title}</div>
        </a>
        `;
  });
  $('#list_article').html(html);
}

// 函式：刷新所有條文
function refresh_text(r_list, r_object) {
  // 標題卡片
  let html = `
        <div class="card rounded-3">
            <div class="row mx-0">
                <div class="p-0 d-flex align-items-center justify-content-center div_icon_page">
                    <img src="..${r_object.icon}" class="card-img-right ps-3" alt="...">
                </div>
                <div class="col p-0">
                    <div class="card-body">
                        <h2 class="card-title" id="article-0">${r_object.name_all}</h2>
                        <p class="card-text text-secondary-emphasis">修訂日期：${r_object.revision}<br>來源：全國法規資料庫</p>
                        <button href="#" class="btn btn-primary" disabled>加入最愛</button>
                    </div>
                </div>
            </div>
        </div>
    `;
  //主文
  r_list.forEach((value, index) => {
    html += `
      <div class="article">
        <div class="article-title d-flex mt-4 mb-2 pb-1 border-bottom border-primary-subtle">
          <h4 id="article-${value.article}" class="d-inline me-auto" >第 ${value.article} 條</h4>
          <button type="button" class="btn btn-primary btn-sm me-2 h-75" disabled>
              函釋 <span class="badge text-bg-info">0</span>
          </button>
          <button type="button" class="btn btn-outline-primary btn-sm me-2 h-75" disabled> 
            <img class="btn-img" src="../icons/icon_bookmark.png" alt="書籤">
          </button>
          <button type="button" class="btn btn-outline-primary btn-sm me-2 h-75" disabled>
            <img class="btn-img" src="../icons/icon_copy.png" alt="複製">
          </button>
        </div>
        <div class="col-data">
          <div class="law-article">
              ${value.text}
          </div>
        </div>
      </div>
      `
  });
  return html
}

//函式：讀取上次最後瀏覽條目，載入時刷新（已棄用）
function load_from_brower(r_name) {
  let default_article;
  if (localStorage.getItem(r_name)) {
    default_article = localStorage.getItem(r_name);
  }
  else {
    default_article = '0';
  }
  get_text(default_article);
}

//函式：儲存瀏覽之條目（已棄用）
function save_to_brower(r_name, article) {
  localStorage.setItem(r_name, article);
}

// 函式：取得條文內容，並刷新輸出顯示（已棄用）
function get_text(article) {
  let text;
  r_list.forEach((value) => {
    if (article == value.article) {
      text = value.text;
    }
  })
  if (article == '0') {
    $('.title_article').html('所有條文');
  }
  else {
    $('.title_article').html(`第 ${article} 條`);
  }
  $('.bk_right_text').html(`<div class="r_text">${text}</div>`);
}

// 主程式開始
// 取得網址夾帶的值，判斷是哪種法規
let r_name = new URLSearchParams(location.search);
r_name = r_name.get('rg');
let r_object = pages[r_name];
let r_list = r_object.list;
// 刷新主頁面
refresh_list(r_list);
$('title').html(r_object.name_title);
$('#article_text').html(refresh_text(r_list, r_object));
$(document).ready(() => {
  //偵測側邊欄點擊
  $("#sidebar a,.btn-close").click(() => {
    setTimeout(() => $('.offcanvas-lg').offcanvas('hide'), 50)
  });
  $('#side_switch').click(() => {
    if ($('.offcanvas-lg').hasClass('offcanvas-start')) {
      $('.offcanvas-lg').removeClass('offcanvas-start');
      $('.offcanvas-lg').addClass('offcanvas-end');
    }
    else {
      $('.offcanvas-lg').removeClass('offcanvas-end');
      $('.offcanvas-lg').addClass('offcanvas-start');
    }
  });

})
