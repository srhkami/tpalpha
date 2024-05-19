import { pages } from './pages.js';
import { list_kp } from '../list/kp_list.js'

// 版本號(大版本.小版本.日+時)
const app_ver = `1.13.1916`;

// 公告
const notice = `
  v1.12 主要更新內容(113/05/18)：
  <br>
  <br>　◎ 加入「超載計算機」頁面
  <br>　◎ 部分法規新增附件或附圖
  <br>　<button type="button" id="showUpdate" class="btn btn-outline-secondary mt-3" data-bs-toggle="modal"
  data-bs-target="#popUpArea">查看更新日誌</button>
  <br>
  <br>已知問題：
  <br>　◎ 附件連結至全國法規資料庫，在首次點擊時總會失效
`;

//尚未實現
const future = `
  這是一個，以交通為志趣的小小警員，
  <br>所架設的簡易網站，  
  <br>目標是整理所有與交通執法、交通安全有關的資訊，
  <br>成為各位學長姐工作上的最佳幫手。
  <br>
  <br>如果剛好幫助到你，
  <br>歡迎向更多人分享推廣！
  <br>如果你也是在交通路上默默耕耘的鬥士，
  <br>也請不吝賜教，幫助這裡變得更好！
  <br>
  <br>若有任何問題或寶貴意見，
  <br>歡迎使用選單中「更多→意見回饋」讓我知道。 
`;

// 更新日誌
const updata_text = `
  <p>
    ※　1.12：
    <br>　加入「超載計算機」頁面。
    <br>　部分法規新增了附件連結（連結至全國法規資料庫）。
    <br>　「設置規則」增加了大部分條目的附圖（少部分仍有缺漏）。
    <br>　追加蒐錄「車輛審驗辦法」法規。
    <br>　「違規取締」下各頁面法條皆加入快速預覽功能。
    <br>　修復搜尋功能在首頁失效的問題。
    <br>　修復法規條目清單部分區域無法觸發點擊的問題。
  </p>
  <p>
    ※　1.11：
    <br>　改進搜尋功能，增加「快速搜尋」及「再檢索」功能。
    <br>　修復手機版容易誤觸下滑重新整理的問題。
    <br>　修復頁面高度過窄時跑版問題。
  </p>
  <p>
    ※　1.10：
    <br>　啟用Bootstrap5.3新介面。
    <br>　增加淺/深色模式切換功能，可以透過選單列按鈕切換。
    <br>　加入「違規舉發要點」頁面。
    <br>　追加蒐錄「事故處理辦法」、「警職法」、「警械使用條例」、「刑法」、「刑事訴訟法」、「社維法」等法規。
  </p>
  <p>
    ※　1.02：
    <br>　使用Bootstrap5逐步汰換原始介面。
    <br>　首頁的快速導航加入自訂功能。
  </p>
  <p>
    ※　1.0：
    <br>　建立程式基礎功能及介面。
    <br>　加入「法規」頁面及「搜尋」功能。
    <br>　蒐錄「處理條例」、「安全規則」、 「處理細則」、「設置規則」等法規。
    <br>　加入「駕照違規速查」及「牌照違規速查」功能。
  </p>
`;

// 收錄法規
function collectionRG() {
  let html = '';
  Object.values(pages).forEach((value) => {
    if (value.type == 'RG') {
      html += `
        <p class="collection_text">◎　${value.name}
          <br>　　修訂日期：${value.revision}
        </p>
      `
    }
  })
  return html;
}
// 收錄文章
function collectionEssay() {
  let html = '';
  list_kp.forEach((value) => {
    html += `
      <p class="collection_text">◎　${value.title}
        <br>　　作者：${value.author}
        <br>　　編輯日期：${value.update}
      </p>
    `
  })
  return html;
}


// 函式：彈出視窗的HTML
function popUpHTML(title, text){
  let html=`
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title fs-5 text-primary fw-semibold" id="exampleModalLabel">${title}</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${text}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
      </div>
    </div>
  </div>
  `;
  $('#popUpArea').html(html);
}

// 刷新首頁
$(document).ready(() => {
  $('#notice').html(notice);
  $('#future').html(future);
  $('#app_ver').html(app_ver);
  $('#showUpdate').click(()=>{popUpHTML('更新日誌', updata_text)});
  $('#showRG').click(()=>{popUpHTML('收錄法規', collectionRG())});
  $('#showEssay').click(()=>{popUpHTML('收錄文章', collectionEssay())});
  
})
