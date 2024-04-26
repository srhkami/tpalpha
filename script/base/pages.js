import { list_PH, list_SR, list_DR, list_ML, list_PA, list_PW, list_TA, list_CC, list_CP, list_SO } from '../list/rg_list.js';

//頁面預設類別
class Page {
  constructor(
    name_simple,
    name_title,
    name_all,
    revision,
    icon,
    href,
    list
  ) {
    this.name_simple = name_simple;
    this.name_title = name_title;
    this.name_all = name_all;
    this.revision = revision;
    this.icon = icon;
    this.href = href;
    this.list = list;
  }
}

export const pages = {
  PH: new Page(
    'PH',
    '處罰條例',
    '道路交通管理處罰條例',
    '民國 112 年 05 月 03 日',
    '/icons/icon_policeman.png',
    '/pages/regulations.html?rg=PH',
    list_PH,
  ),
  SR: new Page(
    'SR',
    '安全規則',
    '道路交通安全規則',
    '民國 113 年 01 月 18 日',
    '/icons/icon_stop.png',
    '/pages/regulations.html?rg=SR',
    list_SR
  ),
  DR: new Page(
    'DR',
    '處理細則',
    '違反道路交通管理事件統一裁罰基準及處理細則',
    '民國 112 年 11 月 24 日',
    '/icons/icon_cars.png',
    '/pages/regulations.html?rg=DR',
    list_DR
  ),
  ML: new Page(
    'ML',
    '設置規則',
    '道路交通標誌標線號誌設置規則',
    '民國 112 年 02 月 23 日',
    '/icons/icon_curbExtension.png',
    '/pages/regulations.html?rg=ML',
    list_ML
  ),
  PA: new Page(
    'PA',
    '警職法',
    '警察職權行使法',
    '民國 100 年 04 月 27 日',
    '/icons/icon_police.png',
    '/pages/regulations.html?rg=PA',
    list_PA
  ),
  PW: new Page(
    'PW',
    '警械使用條例',
    '《警械使用條例》',
    '民國 111 年 10 月 19 日',
    '/icons/icon_gun.png',
    '/pages/regulations.html?rg=PW',
    list_PW
  ),
  TA: new Page(
    'TA',
    '事故處理辦法',
    '道路交通事故處理辦法',
    '民國 113 年 02 月 17 日 ',
    '/icons/icon_accident.png',
    '/pages/regulations.html?rg=TA',
    list_TA
  ),
  DL: new Page(
    'DL',
    '駕照違規速查',
    '駕照違規速查',
    '民國 113 年 04 月 08 日',
    '/icons/icon_DL.png',
    '/pages/driveLicense.html',
    ''
  ),
  CL: new Page(
    'CL',
    '牌照違規速查',
    '牌照違規速查',
    '民國 113 年 04 月 08 日',
    '/icons/icon_CL.png',
    '/pages/carLicense.html',
    ''
  ),
  keyPoint: new Page(
    'keypoint',
    '違規舉發要點',
    '違規舉發要點',
    '',
    '/icons/icon_policeFine.png',
    '/pages/keypoint.html',
    ''
  ),
  about: new Page(
    'about',
    '關於',
    '關於「交通鴿手」',
    '民國 113 年 04 月 08 日',
    '/icons/icon_about.png',
    '/pages/about.html',
    ''
  ),
  feedback: new Page(
    'feedback',
    '意見回饋',
    '意見回饋',
    '民國 113 年 04 月 08 日',
    '/icons/icon_message.png',
    'https://forms.gle/egpyVq19MYJAydS28',
    ''
  ),
  search: new Page(
    'search',
    '搜尋',
    '搜尋',
    '民國 113 年 04 月 08 日',
    '/icons/icon_search_2.png',
    '/pages/search.html',
    ''
  ),
  index: new Page(
    'index',
    '首頁',
    '首頁',
    '民國 113 年 04 月 08 日',
    '/icons/icon_home.png',
    '/index.html',
    ''
  ),
  CC: new Page(
    'CC',
    '刑法',
    '刑法',
    '民國 112 年 12 月 27 日',
    '/icons/icon_detain.png',
    '/pages/regulations.html?rg=CC',
    list_CC
  ),
  CP: new Page(
    'CP',
    '刑事訴訟法',
    '刑事訴訟法',
    '民國 112 年 12 月 27 日',
    '/icons/icon_handcuffs.png',
    '/pages/regulations.html?rg=CP',
    list_CP
  ),
  SO: new Page(
    'SO',
    '社維法',
    '社會秩序維護法',
    '民國 110 年 05 月 26 日',
    '/icons/icon_chase.png',
    '/pages/regulations.html?rg=SO',
    list_SO
  ),
}

// export const pages_list{

// }
// class Page{
//     constructor(
//         name_title,
//         name_all,
//         icon,
//         href
//     ){
//         this.name_title = name_title;
//         this.name_all = name_all;
//         this.icon = icon;
//         this.href = href;
//     }
// };
