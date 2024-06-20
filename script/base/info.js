import { pages } from './pages.js';
import { list_kp } from '../data/kp_list.js';
import {WebData} from '../data/database.js';

// 版本
export const appVer = `1.21.0`;
// 組建：用以判斷版本前後
export const buildNumber = 1130613;
// 資料庫版本
export const defaultDataVer = 1130613;

// 公告
export const notice = `
  <span id="newVerNotice"></span>
  「交通鴿手」v1.21更新重點：
  <ul>
  <li>「違規代碼查詢」已更新到最新代碼表，重新上線</li>
  </ul>
  <br>已知問題：
  <ul>
  <li>違規代碼查詢為即時運算，輸入會較為延遲敬請見諒。</li>
  <li>附件連結至全國法規資料庫，在首次點擊時總會失效。</li>
  <li>使用內網瀏覽設置規則圖片可能無法顯示。</li>
  </ul>
`;

// 手機版檢查新版本及刷新圖片
export function checkMobileVer(){
  let sheet = new WebData('15WEuG9RoXWdaGws3yhIgYj_0G0Q7ukmMwKe5CXNZZfs', 'info', 'AIzaSyAHvCcIcGd3RaTSi5VhW0AsQos-7qIPH4g');
  $.get(sheet.url, (json) => {
    let lastBuildNumber = json.values[2][2];
    if (lastBuildNumber > buildNumber) {
      $('#newVerNotice').html(`
        <big class="text-danger">APP有新版本，請立即至「關於」更新！！</big><hr>
        `)
    }
    let indexImageLinks = JSON.parse(json.values[4][2]);
    console.log(indexImageLinks);
    let html1 = '';
    let html2 = '';
    indexImageLinks.forEach((link, index) => {
      if(index == 0){
        html1 += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="active"></button>`
        html2 += `<div class="carousel-item active">${link}</div>`
      }
      else{
        html1 += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}"></button>`
        html2 += `<div class="carousel-item">${link}</div>`
      }
    })
    $('.carousel-indicators').html(html1);
    $('.carousel-inner').html(html2);
  })
}

// 更新日誌
  // 新功能用info
  // 更新功能用success
  // 修復用danger
  // <li class="text-info"></li>
  export const updataText = `
<h5 class="text-primary">※ 1.21：</h5>
  <ul>
    <li class="text-success">「搜尋」現在也可查看設置規則附圖。</li>
    <li class="text-danger">「違規代碼查詢」已更新到最新代碼表，重新上線。</li>
    </ul>
  <h5 class="text-primary">※ 1.20：</h5>
  <ul>
    <li class="text-info">更新了整體介面、排版，將選單列移至側邊。</li>
    <li class="text-info">加入「違規代碼查詢」頁面。</li>
    <li class="text-info">加入「書籤」功能。</li>
    <li class="text-info">「關於」頁面加入「介面設定」功能。</li>
    <li class="text-success">首頁「快速導航」及「到案日期」功能改版，現在可自訂是否顯示。</li>
    <li class="text-success">調整了意見回饋的內容，「文章投稿」替換為「網站投稿」。</li>
    <li class="text-success">改善了快速搜尋的預設內容，在非法規頁面為全域搜尋 。</li>
  </ul>
  <h5 class="text-primary">※ 1.13：</h5>
  <ul>
    <li class="text-info">加入「意見回饋」頁面。</li>
    <li class="text-info">所有頁面底端增加了版權及免責聲明。</li>
    <li class="text-info">「法規」增加了章節顯示（陸續更新）。</li>
    <li class="text-success">改善主題切換的機制。</li>
    <li class="text-success">更新了「關於」頁面顯示佈局，增加「手機版下載」及「收錄法規」。</li>
    <li class="text-success">「速查功能」增加查看源文件按鈕、修正內容與佈局。</li>
    <li class="text-danger">修復「法規」及「搜尋」頁面，清單動態高亮失效、最底部條目被遮掩問題。</li>
  </ul>
  <h5 class="text-primary">※ 1.12：</h5>
  <ul>
    <li class="text-info">加入「超載計算機」頁面。</li>
    <li class="text-success">部分法規新增了附件連結（連結至全國法規資料庫）。</li>
    <li class="text-success">「設置規則」增加了大部分條目的附圖（少數仍有缺漏）。</li>
    <li class="text-success">追加收錄「車輛審驗辦法」法規。</li>
    <li class="text-success">「違規取締」下各頁面法條皆加入快速預覽功能。</li>
    <li class="text-danger">修復搜尋功能在首頁失效的問題。</li>
    <li class="text-danger">修復法規條目清單部分區域無法觸發點擊的問題。</li>
    <li class="text-danger">修正「駕照違規」再犯的說明錯誤。</li>
  </ul>
  <h5 class="text-primary">※ 1.11：</h5>
  <ul>
    <li class="text-success">改進搜尋功能，增加「快速搜尋」及「再檢索」功能。</li>
    <li class="text-danger">修復手機版容易誤觸下滑重新整理的問題。</li>
    <li class="text-danger">修復頁面高度過窄時跑版問題。</li>
  </ul>
  <h5 class="text-primary">※ 1.10：</h5>
  <ul>
   <li class="text-info">全面啟用Bootstrap5.3新介面。</li>
   <li class="text-info">增加主題切換功能，可以透過選單列按鈕切換。</li>
  <li class="text-info">加入「違規舉發要點」頁面。</li>
   <li class="text-success">追加收錄「事故處理辦法」、「警職法」、「警械使用條例」、「刑法」、「刑事訴訟法」、「社維法」等法規。</li>
  </ul>
  <h5 class="text-primary">※ 1.02：</h5>
  <ul>
   <li class="text-info">使用Bootstrap5逐步汰換原始介面。</li>
   <li class="text-info">首頁的快速導航加入自訂功能。</li>
  </ul>
  <h5 class="text-primary">※ 1.00：</h5>
  <ul>
   <li class="text-info">建立程式基礎功能及介面。</li>
   <li class="text-info">加入「法規」頁面及「搜尋」功能。</li>
   <li class="text-info">收錄「處理條例」、「安全規則」、 「處理細則」、「設置規則」等法規。</li>
   <li class="text-info">加入「駕照違規速查」及「牌照違規速查」功能。</li>
  </ul>
`;

// 關於此網站
export const aboutThisWeb = `
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
// 收錄法規
export function collectionRG() {
  let html = '<ul class="ps-3">';
  Object.values(pages).forEach((value) => {
    if (value.type == '法規') {
      html += `
        <li>
        <h6 class="text-primary">${value.name}</h6>
        <p>修訂日期：${value.revision}</p>
        </li>
      `
    }
  })
  html += '</ul>'
  return html;
}
// 收錄文章
export function collectionEssay() {
  let html = '';
  list_kp.forEach((value) => {
    html += `
      <h6 class="text-primary">◎ ${value.title}</h6>
      <ul>
        <li>作者：${value.author}</li>
        <li>編輯日期：${value.update}</li>
      </ul>
    `
  })
  return html;
}

// 函式：彈出視窗的HTML
export function popUpHTML(title, text){
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
