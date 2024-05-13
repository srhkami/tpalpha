import { pages } from '../base/pages.js';

// 函式：刷新條目清單
function refresh_list(r_list) {
  let html = '';
  r_list.forEach((value, index) => {
    if (value.article == '-1') {
      //pass
    }
    else {
      html += `
      <a class="list-group-item list-group-item-action d-flex border-start-0 border-end-0" href="#article-${value.article}">
          <div class="list-article-no">第 ${value.article} 條</div>
          <div class="list-article-title text-secondary-emphasis">${value.title}</div>
      </a>
      `;
    }
  });
  $('#list_article').html(html);
}

// 函式：刷新所有條文
function refresh_text(r_list, r_object) {
  let html;
  if (r_object.code == 'ML') {
    // 標題卡片
    html = `
        <div class="card rounded-3">
            <div class="row mx-0">
                <div class="p-0 d-flex align-items-center justify-content-center div_icon_page">
                    <img src="..${r_object.icon}" class="card-img-right ps-3" alt="...">
                </div>
                <div class="col p-0">
                    <div class="card-body">
                        <h2 class="card-title">${r_object.name}</h2>
                        <p class="card-text text-secondary-emphasis">
                          修訂日期：${r_object.revision}<br>
                          來源：全國法規資料庫<br>
                          備註：部分條目附圖仍有缺漏，敬請見諒
                        </p>
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
            <a class="anchor-link" href="#article-${value.article}"></a>
            <button type="button" class="bth_attachment btn btn-primary btn-sm me-2 h-75" data-bs-toggle="modal" data-bs-target="#popUpArea" data-article="${value.article}">附圖</button>
          </div>
          <div class="col-data">
            <div class="law-article">
                ${value.text}
            </div>
          </div>
        </div>
        `
    });
  }
  else if (r_object.code == 'SR' || r_object.code == 'VS' || r_object.code == 'DR') {
    // 標題卡片
    html = `
          <div class="card rounded-3">
              <div class="row mx-0">
                  <div class="p-0 d-flex align-items-center justify-content-center div_icon_page">
                      <img src="..${r_object.icon}" class="card-img-right ps-3" alt="...">
                  </div>
                  <div class="col p-0">
                      <div class="card-body">
                          <h2 class="card-title">${r_object.name}</h2>
                          <p class="card-text text-secondary-emphasis">修訂日期：${r_object.revision}<br>來源：全國法規資料庫</p>
                          <button href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#popUpArea">附件</button>
                      </div>
                  </div>
              </div>
          </div>
      `;
    //主文
    r_list.forEach((value, index) => {
      if (index == 0) {
        //pass
      }
      else {
        html += `
        <div id="article-${value.article}" class="article">
          <div class="article-title d-flex mt-4 mb-2 pb-1 border-bottom border-primary-subtle">
            <h4  class="d-inline me-auto" >第 ${value.article} 條</h4>
            <a class="anchor-link" href="#article-${value.article}"></a>
          </div>
          <div class="col-data">
            <div class="law-article">
                ${value.text}
            </div>
          </div>
        </div>
        `
      }
    });
    // 附件
    let attachmentHtml = `
    <div class="modal-dialog" >
      <div class="modal-content" >
        <div class="modal-header">
          <h5 class="modal-title">附件</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-secondary" >
          <div id="attachment">
            <h6>連結自：全國法規資料庫</h6>
            <table class="table">
              ${r_list[0].text}
            </table>
          </div>
      </div>
      <div class="modal-footer">
        <p class="me-auto text-secondary"></p>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
      </div>
    </div>
  </div>    
    `;
    $('#popUpArea').html(attachmentHtml);
  }
  else {
    // 標題卡片
    html = `
          <div class="card rounded-3">
              <div class="row mx-0">
                  <div class="p-0 d-flex align-items-center justify-content-center div_icon_page">
                      <img src="..${r_object.icon}" class="card-img-right ps-3" alt="...">
                  </div>
                  <div class="col p-0">
                      <div class="card-body">
                          <h2 class="card-title">${r_object.name}</h2>
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
            <a class="anchor-link" href="#article-${value.article}"></a>
            <!--<button type="button" class="btn btn-primary btn-sm me-2 h-75" data-bs-toggle="modal" data-bs-target="#popUpArea">函釋<span class="badge text-bg-info">0</span></button>
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
  }
  return html
}

// 函式：顯示設置規則附件
function showAttachment(r_list) {
  $('.bth_attachment').click((e) => {
    let article = e.target.dataset.article
    r_list.forEach((value) => {
      if (article == value.article) {
        let html = `
        <div class="modal-dialog" >
          <div class="modal-content" >
            <div class="modal-header">
              <h5 class="modal-title">附件圖片</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-secondary" >
              ${value.img}
            </div>
            <div class="modal-footer">
              <p class="me-auto text-secondary">註：建議使用亮色主題觀看</p>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
            </div>
          </div>
        </div>    
        `
        $('#popUpArea').html(html);
      }
    })
  })
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
$('title').html(`${r_object.title} - 交通鴿手`);
$('#article_text').html(refresh_text(r_list, r_object));
$(document).ready(() => {
  //偵測側邊欄點擊
  $("#sidebar a,.btn-close").click(() => {
    setTimeout(() => $('.offcanvas-lg').offcanvas('hide'), 50)
  });
  showAttachment(r_list);
})
