import { pages } from "./pages.js";

//函式：搜尋視窗預設HTML
const html_searchArea =`
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h5 class="modal-title">搜尋</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body px-3">
        <div class="container mt-4">
          <div class="row">
            <div class="col-12">
              <form action="../pages/search.html" method="get">
                <div class="input-group">
                    <input type="text" id="keyWord" class="form-control" name="keyword" placeholder="請輸入搜尋關鍵字" required="required">
                    <button class="btn btn-outline-secondary" id="btn_search_reset" type="reset" aria-label="Close">清除</button>
                    <button id="btn_quickSearch" class="btn btn-primary" type="button">快速搜尋</button>
                </div>
              </form>
              <p class="text-secondary">* 如果在法規頁面，預設會搜尋當前法規</p>
            </div> 

            <div class="col-7 d-flex my-3">
              <h5 class="my-auto">◎ 自訂範圍搜尋：</h5>
            </div>
            <div class="col-5 d-flex justify-content-end">
              <button id="btn_advanceSearch" class="btn btn-primary my-auto" type="button">進階搜尋</button>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.PH.name_simple}" value="${pages.PH.name_simple}">
                  <label class="form-check-label" for="switch_${pages.PH.name_simple}">${pages.PH.name_title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.SR.name_simple}" value="${pages.SR.name_simple}">
                  <label class="form-check-label" for="switch_${pages.SR.name_simple}">${pages.SR.name_title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.DR.name_simple}" value="${pages.DR.name_simple}">
                  <label class="form-check-label" for="switch_${pages.DR.name_simple}">${pages.DR.name_title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.ML.name_simple}" value="${pages.ML.name_simple}">
                  <label class="form-check-label" for="switch_${pages.ML.name_simple}">${pages.ML.name_title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.TA.name_simple}" value="${pages.TA.name_simple}">
                  <label class="form-check-label" for="switch_${pages.TA.name_simple}">${pages.TA.name_title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.keyPoint.name_simple}" value="${pages.keyPoint.name_simple}">
                  <label class="form-check-label" for="switch_${pages.keyPoint.name_simple}">${pages.keyPoint.name_title}</label>
              </div>
            </div>
            <div class="col-12">
              <hr>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.PA.name_simple}" value="${pages.PA.name_simple}">
                  <label class="form-check-label" for="switch_${pages.PA.name_simple}">${pages.PA.name_title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.PW.name_simple}" value="${pages.PW.name_simple}">
                  <label class="form-check-label" for="switch_${pages.PW.name_simple}">${pages.PW.name_title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.CC.name_simple}" value="${pages.CC.name_simple}">
                  <label class="form-check-label" for="switch_${pages.CC.name_simple}">${pages.CC.name_title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.CP.name_simple}" value="${pages.CP.name_simple}">
                  <label class="form-check-label" for="switch_${pages.CP.name_simple}">${pages.CP.name_title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.SO.name_simple}" value="${pages.SO.name_simple}">
                  <label class="form-check-label" for="switch_${pages.SO.name_simple}">${pages.SO.name_title}</label>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  //讀取瀏覽器設定，刷新搜尋區域
function load_searchBar(html_searchArea) {
  if ($('title').html() == '首頁 - 交通鴿手'){
    $('#searchArea').html(html_searchArea.replaceAll('..','.'));
  }
  else{
    $('#searchArea').html(html_searchArea);
  }
}

  //函式：點擊選項開關，儲存搜尋設定進瀏覽器
function save_options(){
  $('input[name="searchSwitch"]').on('change',(e)=>{
      const code = e.target.value;
      let searchOption = JSON.parse(localStorage.getItem('searchOption'));
      searchOption[code] = e.target.checked;
      localStorage.setItem('searchOption', JSON.stringify(searchOption));   
  });;
}
  // 函式：讀取瀏覽器儲存之設定；若沒有設定，則儲存預設值
function load_options(){
  // 預設值！！重要！！有新法規要更改
  let searchOption = {
    "PH":true,
    "SR":true,
    "DR":true,
    "ML":true,
    "TA":true,
    "keyPoint":true,
    "PA":false,
    "PW":false,
    "CC":false,
    "CP":false,
    "SO":false,
  };
  if(localStorage.getItem('searchOption')){
    searchOption = JSON.parse(localStorage.getItem('searchOption'));
  }
  else{
    localStorage.setItem('searchOption', JSON.stringify(searchOption));
  }
  // 刷新頁面中的checkbox
  $('input[name="searchSwitch"]').each((index, dom)=>{
    let code = $(dom).val();
    $(dom).prop("checked", searchOption[code])
  })
}


// 函式：偵測搜尋按鈕
function search_go(){
  $('#btn_quickSearch').click(()=>{
    const keyWord = $('#keyWord').val()
    if (!keyWord){
      alert('關鍵字請勿留空！')
    }
    else{
      let searchOptionGo = {};
      const getData = new URLSearchParams(location.search);
      let r_name = getData.get('rg');
      if (r_name){
        searchOptionGo = {[r_name]: true};
      }
      else{
        searchOptionGo ={
          "PH":true,
          "SR":true,
          "DR":true,
          "ML":true,
          "keyPoint":true,
        }
      }
      localStorage.setItem('searchOptionGo', JSON.stringify(searchOptionGo));
      location.href =`../pages/search.html?keyword=${keyWord}`;
    }     
  })
  $('#btn_advanceSearch').click(()=>{
    const keyWord = $('#keyWord').val()
    if (!keyWord){
      alert('關鍵字請勿留空！')
    }
    else{
      let searchOptionGo = JSON.parse(localStorage.getItem('searchOption'));
      localStorage.setItem('searchOptionGo', JSON.stringify(searchOptionGo));
      location.href =`../pages/search.html?keyword=${keyWord}`;
    }
  })
}

// 主程式
load_searchBar(html_searchArea);
$(document).ready(()=>{
  load_options();
  save_options();
  search_go();
});
