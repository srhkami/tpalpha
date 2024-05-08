import { pages } from './pages.js';

// 版本號(大版本.小版本.日+時)
const app_ver = `1.12.0822 (Beta)`;

// 公告
const notice = `
    113 / 05 / 02 更新內容： 
    <br>◎ 改進搜尋功能
    <br>◎ 修復手機版容易誤觸下滑重新整理的問題
    <br>
    <br>若有任何問題或寶貴意見，
    <br>歡迎使用選單中「更多→意見回饋」，
    <br>亦徵求有志之士一同參與製作！
`;

//尚未實現
const future = `
        已知問題：
    <br>◎ 部分按鈕目前尚未加入功能
    <br>
    <br>預計加入的功能：
    <br>◎　書籤功能
    <br>◎　設置規則之圖示
    <br>◎　法規連結相關函釋
    <br>◎　各類常用SOP、網站
    <br>　……歡迎提供其他建議！
`;

// 更新日誌
const updata_text = `
    <p>※　1.0：
    <br>建立程式基礎功能及介面。
    <br>加入「駕照違規」及「牌照違規」功能。
    <br>加入「法規」頁面及「搜尋」功能。   
    </p>
    <p>
    ※　1.02：
    <br>使用Bootstrap5逐步汰換舊版介面。
    <br>加入自訂快速導航功能。
    </p>
    <p>
    ※　1.10：
    <br>啟用更多Bootstrap5.3新介面。
    <br>增加淺/深色模式切換功能
    <br>加入「違規舉發要點」頁面。
    <br>加入更多法規。
    </p>
    <p>
    ※　1.11：
    <br>改進搜尋功能，增加「快速搜尋」及「再檢索」功能。
    <br>修復手機版容易誤觸下滑重新整理的問題。
    <br>修復頁面高度過窄時跑版問題。
    </p>
`;

// 收錄法規
function collection() {
  let html = '';
  Object.values(pages).forEach((value) => {
    if (value.type == 'RG') {
      html += `
        <p class="collection_text">◎　${value.name}
        <br>　　修訂日期：${value.revision}
      `
    }
  })
  $('#collection').html(html);
}

// 刷新首頁
$(document).ready(()=>{
  $('#notice').html(notice);
  $('#future').html(future);
  $('#app_ver').html(app_ver);
  $('#updata_text').html(updata_text);
  collection();
})
