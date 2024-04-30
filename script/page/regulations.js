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
                        <h2 class="card-title">${r_object.name_all}</h2>
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
      <div id="article-${value.article}" class="article">
        <div class="article-title d-flex mt-4 mb-2 pb-1 border-bottom border-primary-subtle">
          <h4  class="d-inline me-auto" >第 ${value.article} 條</h4>
          <!--<button type="button" class="btn btn-primary btn-sm me-2 h-75" disabled>函釋<span class="badge text-bg-info">0</span></button>
          <button type="button" class="bth_share btn btn-outline-primary btn-sm me-2 h-75" data-article="${value.article}">
            <img class="btn-img" src="../icons/icon_share.png" alt="分享" data-article="${value.article}">
          </button>--!>
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

//分享按鈕功能
// function sharePic(){
//   $('.bth_share').click((e)=>{    
//     let html = $(`#article-${e.target.dataset.article}`).html();
//     $('#picArea').html(html);
//     let picDom = $(`#article-${e.target.dataset.article}`)[0] // 傳入DOM物件
//     const fonts = document.fonts;
//     html2canvas(picDom, {
//       onclone: (document) => {
//         // add fonts to html2canvas's iframe
//         fonts.forEach(font => {
//           document.fonts.add(font)
//         })
//       }
//     }).then(canvas => {
//       console.log(canvas);
//       $('#shareIMG').attr('src',canvas.toDataURL("image/png"));
//     });
// })
// }

// function shareLink(){
//   $('.bth_share').click((e)=>{
//     url = location.href;
//     article = e.target.dataset.article; 

//   })
// }



// 主程式開始
// 取得網址夾帶的值，判斷是哪種法規
const getData = new URLSearchParams(location.search);
let r_name = getData.get('rg');
let r_object = pages[r_name];
let r_list = r_object.list;
// 刷新主頁面
refresh_list(r_list);
$('title').html(`${r_object.name_title} - 交通鴿手`);
$('#article_text').html(refresh_text(r_list, r_object));
$(document).ready(() => {
  //偵測側邊欄點擊
  $("#sidebar a,.btn-close").click(()=>{
    setTimeout(()=>$('.offcanvas-lg').offcanvas('hide'), 50)
  });
})
