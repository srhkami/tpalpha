import { list_PH, list_SR, list_DR, list_ML, list_PA, list_PW, list_TA, list_CC, list_CP, list_SO, list_VS } from "./rg_list.js";
import { list_code } from './code_list.js';
// import { defaultDataVer } from '../base/info.js'


export class WebData {
  constructor(sheetID, sheetName, apiKey) {
    this.url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}?alt=json&key=${apiKey}`;
  }
}

// export function checkLocalData() {
//   // 檢查離線資料庫版本
//   // 如果尚未儲存或有儲存舊的資料庫版本，覆蓋掉
//   localforage.getItem('dataVer', (err, localDataVer) => {
//     if (localDataVer == null) {
//       saveLocalData();
//     }
//     else{
//       if(defaultDataVer > localDataVer){
//         saveLocalData();
//       }
//     }
//   });
// }
// 儲存離線資料庫
// function saveLocalData() {
//   console.log('有執行');
//   localforage.setItem('PH', list_PH);
//   localforage.setItem('SR', list_SR);
//   localforage.setItem('DR', list_DR);
//   localforage.setItem('ML', list_ML);
//   localforage.setItem('PA', list_PA);
//   localforage.setItem('PW', list_PW);
//   localforage.setItem('TA', list_TA);
//   localforage.setItem('CC', list_CC);
//   localforage.setItem('CP', list_CP);
//   localforage.setItem('SO', list_SO);
//   localforage.setItem('VS', list_VS);
//   localforage.setItem('dataVer', defaultDataVer);
// }

// 如果尚未儲存資料庫，先儲存

// 函式：更新資料庫
// export function updateData() {
//   let sheet = new WebData('15WEuG9RoXWdaGws3yhIgYj_0G0Q7ukmMwKe5CXNZZfs', 'info', 'AIzaSyAHvCcIcGd3RaTSi5VhW0AsQos-7qIPH4g');
//   $.get(sheet.url, (json) => {
//     let onlineDataVer = json.values[3][2];
//     // 如果比儲存的資料庫新，下載新資料庫
//     if (onlineDataVer > localforage.getItem('dataVer')) {
//       // 這裡缺一個儲存資料庫動作
//       savaDatafromWeb('PH', new WebData('1e0Qo742OBVeU0VnlTh-XDSMeh0HQZXEAWeUW9Pnf7RM', '處罰條例PH', 'AIzaSyAHvCcIcGd3RaTSi5VhW0AsQos-7qIPH4g'));
//       localforage.setItem('dataVer', onlineDataVer);
//     }
//   })
// }

// 將線上資料庫儲存到本地資料庫
// function savaDatafromWeb(code, sheet) {
//   //pass
// }