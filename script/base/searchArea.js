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
                    <button class="btn btn-primary" type="submit">快速搜尋</button>
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
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.PH.code}" value="${pages.PH.code}">
                  <label class="form-check-label" for="switch_${pages.PH.code}">${pages.PH.title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.SR.code}" value="${pages.SR.code}">
                  <label class="form-check-label" for="switch_${pages.SR.code}">${pages.SR.title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.DR.code}" value="${pages.DR.code}">
                  <label class="form-check-label" for="switch_${pages.DR.code}">${pages.DR.title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.ML.code}" value="${pages.ML.code}">
                  <label class="form-check-label" for="switch_${pages.ML.code}">${pages.ML.title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.TA.code}" value="${pages.TA.code}">
                  <label class="form-check-label" for="switch_${pages.TA.code}">${pages.TA.title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.VS.code}" value="${pages.VS.code}">
                  <label class="form-check-label" for="switch_${pages.VS.code}">${pages.VS.title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.keyPoint.code}" value="${pages.keyPoint.code}">
                  <label class="form-check-label" for="switch_${pages.keyPoint.code}">${pages.keyPoint.title}</label>
              </div>
            </div>
            <div class="col-12">
              <hr>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.PA.code}" value="${pages.PA.code}">
                  <label class="form-check-label" for="switch_${pages.PA.code}">${pages.PA.title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.PW.code}" value="${pages.PW.code}">
                  <label class="form-check-label" for="switch_${pages.PW.code}">${pages.PW.title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.CC.code}" value="${pages.CC.code}">
                  <label class="form-check-label" for="switch_${pages.CC.code}">${pages.CC.title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.CP.code}" value="${pages.CP.code}">
                  <label class="form-check-label" for="switch_${pages.CP.code}">${pages.CP.title}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.SO.code}" value="${pages.SO.code}">
                  <label class="form-check-label" for="switch_${pages.SO.code}">${pages.SO.title}</label>
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

// 函式：前往搜尋結果頁面
function output(keyWord){
  if($('title').html() == '首頁 - 交通鴿手'){
    location.href =`./pages/search.html?keyword=${keyWord}`;
  }
  else{
    location.href =`../pages/search.html?keyword=${keyWord}`;   
  }
}

// 函式：偵測搜尋按鈕
function search_go(){
  $('form').on('submit',(e)=>{
    e.preventDefault();
    const keyWord = $('#keyWord').val()
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
      output(keyWord);    
  })
  $('#btn_advanceSearch').click(()=>{
    const keyWord = $('#keyWord').val()
    if (!keyWord){
      alert('關鍵字請勿留空！')
    }
    else{
      let searchOptionGo = JSON.parse(localStorage.getItem('searchOption'));
      localStorage.setItem('searchOptionGo', JSON.stringify(searchOptionGo));
      output(keyWord); 
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
