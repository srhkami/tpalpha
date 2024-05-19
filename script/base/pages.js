import { list_PH, list_SR, list_DR, list_ML, list_PA, list_PW, list_TA, list_CC, list_CP, list_SO, list_VS } from '../list/rg_list.js';

//頁面預設類別
class Page {
  constructor(
    type, //種類
    code, //代稱
    title, //標題用縮寫
    name, //全稱
    revision, //修訂日期
    icon, //圖示路徑
    href, //網址路徑
    list //法規清單
  ) {
    this.type = type;
    this.code = code;
    this.title = title;
    this.name = name;
    this.revision = revision;
    this.icon = icon;
    this.href = href;
    this.list = list;
  }
}

export const pages = {
  PH: new Page(
    'RG',
    'PH',
    '處罰條例',
    '道路交通管理處罰條例',
    '民國 112 年 05 月 03 日',
    '/icons/icon_policeman.png',
    '/pages/regulations.html?rg=PH',
    list_PH,
  ),
  SR: new Page(
    'RG',
    'SR',
    '安全規則',
    '道路交通安全規則',
    '民國 113 年 01 月 18 日',
    '/icons/icon_stop.png',
    '/pages/regulations.html?rg=SR',
    list_SR
  ),
  DR: new Page(
    'RG',
    'DR',
    '處理細則',
    '違反道路交通管理事件統一裁罰基準及處理細則',
    '民國 112 年 11 月 24 日',
    '/icons/icon_cars.png',
    '/pages/regulations.html?rg=DR',
    list_DR
  ),
  ML: new Page(
    'RG',
    'ML',
    '設置規則',
    '道路交通標誌標線號誌設置規則',
    '民國 112 年 02 月 23 日',
    '/icons/icon_curbExtension.png',
    '/pages/regulations.html?rg=ML',
    list_ML
  ),
  TA: new Page(
    'RG',
    'TA',
    '事故處理辦法',
    '道路交通事故處理辦法',
    '民國 113 年 02 月 17 日 ',
    '/icons/icon_accident.png',
    '/pages/regulations.html?rg=TA',
    list_TA
  ),
  VS: new Page(
    'RG',
    'VS',
    '車輛審驗辦法',
    '車輛型式安全審驗管理辦法',
    '民國 113 年 01 月 05 日 ',
    '/icons/icon_car.png',
    '/pages/regulations.html?rg=VS',
    list_VS
  ),
  PA: new Page(
    'RG',
    'PA',
    '警職法',
    '警察職權行使法',
    '民國 100 年 04 月 27 日',
    '/icons/icon_police.png',
    '/pages/regulations.html?rg=PA',
    list_PA
  ),
  PW: new Page(
    'RG',
    'PW',
    '警械使用條例',
    '警械使用條例',
    '民國 111 年 10 月 19 日',
    '/icons/icon_gun.png',
    '/pages/regulations.html?rg=PW',
    list_PW
  ),

  DL: new Page(
    'PAGE',
    'DL',
    '駕照違規速查',
    '駕照違規速查',
    '民國 113 年 04 月 08 日',
    '/icons/icon_DL.png',
    '/pages/driveLicense.html',
    ''
  ),
  CL: new Page(
    'PAGE',
    'CL',
    '牌照違規速查',
    '牌照違規速查',
    '民國 113 年 04 月 08 日',
    '/icons/icon_CL.png',
    '/pages/carLicense.html',
    ''
  ),
  overload: new Page(
    'PAGE',
    'overload',
    '超載計算機',
    '超載計算機',
    '',
    '/icons/icon_cargo2.png',
    '/pages/overload.html',
    ''
  ),
  keyPoint: new Page(
    'PAGE',
    'keyPoint',
    '違規舉發要點',
    '違規舉發要點',
    '',
    '/icons/icon_policeFine.png',
    '/pages/keypoint.html',
    ''
  ),
  about: new Page(
    'PAGE',
    'about',
    '關於',
    '關於「交通鴿手」',
    '',
    '/icons/icon_about.png',
    '/pages/about.html',
    ''
  ),
  feedback: new Page(
    'LINK',
    'feedback',
    '意見回饋',
    '意見回饋',
    '',
    '/icons/icon_message.png',
    'https://forms.gle/egpyVq19MYJAydS28',
    ''
  ),
  search: new Page(
    'PAGE',
    'search',
    '搜尋',
    '搜尋',
    '',
    '/icons/icon_search_2.png',
    '/pages/search.html',
    ''
  ),
  index: new Page(
    'PAGE',
    'index',
    '首頁',
    '首頁',
    '',
    '/icons/icon_home.png',
    '/index.html',
    ''
  ),
  CC: new Page(
    'RG',
    'CC',
    '刑法',
    '刑法',
    '民國 112 年 12 月 27 日',
    '/icons/icon_detain.png',
    '/pages/regulations.html?rg=CC',
    list_CC
  ),
  CP: new Page(
    'RG',
    'CP',
    '刑事訴訟法',
    '刑事訴訟法',
    '民國 112 年 12 月 27 日',
    '/icons/icon_handcuffs.png',
    '/pages/regulations.html?rg=CP',
    list_CP
  ),
  SO: new Page(
    'RG',
    'SO',
    '社維法',
    '社會秩序維護法',
    '民國 110 年 05 月 26 日',
    '/icons/icon_chase.png',
    '/pages/regulations.html?rg=SO',
    list_SO
  ),
}