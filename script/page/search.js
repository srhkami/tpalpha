import { pages } from '../base/pages.js';
import { list_kp } from '../list/kp_list.js';

// 函式：開始搜尋
function search_start(keyWord, options) {
  let list_output = [];
  if (options['PH']) {
    let new_list = search_every(keyWord, pages.PH)
    list_output = list_output.concat(new_list);
  }
  if (options['SR']) {
    let new_list = search_every(keyWord, pages.SR)
    list_output = list_output.concat(new_list);
  }
  if (options['DR']) {
    let new_list = search_every(keyWord, pages.DR)
    list_output = list_output.concat(new_list);
  }
  if (options['ML']) {
    let new_list = search_every(keyWord, pages.ML)
    list_output = list_output.concat(new_list);
  }
  if (options['TA']) {
    let new_list = search_every(keyWord, pages.TA)
    list_output = list_output.concat(new_list);
  }
  if (options['PA']) {
    let new_list = search_every(keyWord, pages.PA)
    list_output = list_output.concat(new_list);
  }
  if (options['PW']) {
    let new_list = search_every(keyWord, pages.PW)
    list_output = list_output.concat(new_list);
  }
  if (options['CC']) {
    let new_list = search_every(keyWord, pages.CC)
    list_output = list_output.concat(new_list);
  }
  if (options['CP']) {
    let new_list = search_every(keyWord, pages.CP)
    list_output = list_output.concat(new_list);
  }
  if (options['SO']) {
    let new_list = search_every(keyWord, pages.SO)
    list_output = list_output.concat(new_list);
  }
  if (options['keyPoint']) {
    let new_list = search_keyPoint(keyWord)
    list_output = list_output.concat(new_list);
  }
  return list_output;
}

// 函式：依關鍵字搜尋符合條文，並修改關鍵字及標題
function search_every(keyWord, r_object) {
  let new_list = [];
  r_object.list.forEach((value) => {
    if (value.text.includes(keyWord)) {
      let netItem = {
        code: r_object.name_simple,
        article: value.article,
        index: `《${r_object.name_title}》第 ${value.article} 條`,
        title: value.title,
        text: value.text.replaceAll(keyWord, `<i class="highlight">${keyWord}</i>`)
      };
      new_list.push(netItem);
    }
  });
  return new_list;
}

// 函示：再檢索
function search_again(keyWord, old_list) {
  const new_list = old_list.filter((value, index) => {
    if (value.text.includes(keyWord)) {
      value.text = value.text.replaceAll(keyWord, `<i class="highlight">${keyWord}</i>`)
      return value;
    }
  })
  return new_list
}

// 函式：依關鍵字搜尋符合的「要點」
function search_keyPoint(keyWord) {
  let new_list = [];
  list_kp.forEach((value) => {
    if (value.text.includes(keyWord)) {
      let netItem = {
        code: 'keyPoint',
        article: value.code,
        index: value.title,
        title: value.title,
        text: value.text.replaceAll(keyWord, `<i class="highlight">${keyWord}</i>`),
      };
      new_list.push(netItem);
    }
  });
  return new_list;
}

// 函式：刷新條目清單
function refresh_list(list_output) {
  let html = '';
  list_output.forEach((value, index) => {
    html += `
    <a class="list-group-item list-group-item-action" href="#article-${value.code}-${value.article}">
      <div class="list-article-no">
        ${value.index}
      </div>
      <div class="list-article-title text-secondary-emphasis">
        ${value.title}
      </div>
    </a>
    `;
  });
  $('#list_article').html(html);
}

// 函式：刷新所有搜尋結果條文
function refresh_text(list_output, keyWord) {
  let searchResult;
  if (list_output.length == 0) {
    searchResult = `沒有找到搜尋結果`;
  }
  else {
    searchResult = `共找到 ${list_output.length} 項搜尋結果`
  }
  let html = `
    <div class="card rounded-3">
      <div class="row mx-0">
        <div class="p-0 d-flex align-items-center justify-content-center div_icon_page">
          <img src="../icons/icon_search.png" class="card-img-right ps-3" alt="...">
        </div>
        <div class="col p-0">
          <div class="card-body">
            <h2 class="card-title">
              「${keyWord}」的搜尋結果</h2>
            <p class="card-text text-secondary-emphasis">
              ${searchResult}
              <br>搜尋結果不滿意嗎？試試：
              </p>
            <button id="btn_searchAgain" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#searchAgainArea">
              再檢索
            </button>
            <button id="btn_reSearch"  class="btn btn-primary ms-2" type="button" data-bs-toggle="modal" data-bs-target="#searchArea">
              重新搜尋
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
  list_output.forEach((value, index) => {
    html += `
      <div id="article-${value.code}-${value.article}" class="article">
        <div class="article-title d-flex mt-4 mb-2 pb-1 border-bottom border-primary-subtle">
            <h4 class="d-inline me-auto" data-rg="${value.rg}">${value.index}</h4>
            <!-- <button type="button" class="btn btn-primary btn-sm me-2 h-75" disabled>分享</button> --!>
        </div>
        <div class="col-data">
            <div class="law-article">
                ${value.text}
            </div>
        </div>
      </div>
      `;
  });
  return html;
}

// 主程式開始
 // 取得關鍵字及設定值
const getData = new URLSearchParams(location.search);
let keyWord = getData.get('keyword').split(' ');
let options = JSON.parse(localStorage.getItem('searchOptionGo'));
  // 開始搜尋，刷新主頁面
let list_output =[]
keyWord.forEach((value, index) => {
  if (index == 0) {
    list_output = search_start(value, options);
    return
  }
  list_output = search_again(value, list_output)
})
refresh_list(list_output);
$('#article_text').html(refresh_text(list_output, keyWord));

$(document).ready(() => {
  //偵測側邊欄點擊
  $("#sidebar a,.btn-close").click(() => {
    setTimeout(() => $('.offcanvas-lg').offcanvas('hide'), 50)
  });
  //再檢索搜尋
  $('#btn_searchAgainGo').click(()=>{
    const keyWord = $('#keyWord2').val()
    if (!keyWord){
      alert('關鍵字請勿留空！')
    }
    else{
      location.href +=`+${keyWord}`;
    }
  })
  //重新搜尋按鈕
  $('#btn_reSearch').click(()=>{
    $('#keyWord').val(getData.get('keyword'))
  })
})



