import { pages } from "./pages.js";

//函式：搜尋視窗預設HTML
const html_searchArea =`
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">搜尋</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="../pages/search.html" method="get">
            <div class="input-group">
                <input type="text" id="keyword" class="form-control" name="keyword" placeholder="請輸入搜尋內容" required="required">
                <button class="btn btn-outline-secondary" id="btn_search_reset" type="reset">清除</button>
                <button id="btn_search_start" class="btn btn-primary" type="submit">開始搜尋</button>
            </div>
        </form>
        <form  action="../pages/search.html" method="get">  
          <h6 class="mt-4">搜尋法規範圍：</h6>
          <div class="container mt-4">
            <div class="row row-cols-2">
              <div class="col">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.PH.name_simple}" value="${pages.PH.name_simple}">
                    <label class="form-check-label" for="switch_${pages.PH.name_simple}">${pages.PH.name_title}</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.SR.name_simple}" value="${pages.SR.name_simple}">
                    <label class="form-check-label" for="switch_${pages.SR.name_simple}">${pages.SR.name_title}</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.DR.name_simple}" value="${pages.DR.name_simple}">
                    <label class="form-check-label" for="switch_${pages.DR.name_simple}">${pages.DR.name_title}</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.ML.name_simple}" value="${pages.ML.name_simple}">
                    <label class="form-check-label" for="switch_${pages.ML.name_simple}">${pages.ML.name_title}</label>
                </div>
              </div>
              <div class="col">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.TA.name_simple}" value="${pages.TA.name_simple}">
                    <label class="form-check-label" for="switch_${pages.TA.name_simple}">${pages.TA.name_title}</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.PA.name_simple}" value="${pages.PA.name_simple}">
                    <label class="form-check-label" for="switch_${pages.PA.name_simple}">${pages.PA.name_title}</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" name="searchSwitch" id="switch_${pages.PW.name_simple}" value="${pages.PW.name_simple}">
                    <label class="form-check-label" for="switch_${pages.PW.name_simple}">${pages.PW.name_title}</label>
                </div>
              </div>  
            </div>
            <div class="row">
              <div class="col-12 d-flex">
                <lable for="keyword"></lable>
                <p></p>
                <button id="btn_search_advance" class="btn btn-primary ms-auto" type="submit">進階搜尋</button>
              </div>
              </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  `;

  //讀取瀏覽器設定，刷新搜尋區域
function load_searchBar(html_searchArea) {
  if ($('title').html() == '首頁'){
    $('#searchArea').html(html_searchArea.replaceAll('..','.'));
  }
  else{
    $('#searchArea').html(html_searchArea);
  }
}

  //函式：點擊選項開關，儲存搜尋設定進瀏覽器
function save_options(){
  $('input[name="searchSwitch"]').on('change',()=>{
      let search_options = {
          PH: $('#switch_PH').prop('checked'),
          SR: $('#switch_SR').prop('checked'),
          DR: $('#switch_DR').prop('checked'),
          ML: $('#switch_ML').prop('checked'),
          TA: $('#switch_TA').prop('checked'),
          PA: $('#switch_PA').prop('checked'),
          PW: $('#switch_PW').prop('checked')
      };
      localStorage.setItem('sh_options', JSON.stringify(search_options));
  });;
}
  //函式：讀取瀏覽器儲存之設定；若沒有設定，則儲存預設值
function load_options(){
  if(localStorage.getItem('sh_options')){
    let search_optiones = JSON.parse(localStorage.getItem('sh_options'));
    $('#switch_PH').prop('checked',search_optiones['PH']);
    $('#switch_SR').prop('checked',search_optiones['SR']);
    $('#switch_DR').prop('checked',search_optiones['DR']);
    $('#switch_ML').prop('checked',search_optiones['ML']);
    $('#switch_TA').prop('checked',search_optiones['TA']);
    $('#switch_PA').prop('checked',search_optiones['PA']);
    $('#switch_PW').prop('checked',search_optiones['PW']);
  }
  else{
      localStorage.setItem('sh_options',  JSON.stringify({"PH":true,"SR":true,"DR":true,"ML":true,"TA":true,"PA":false,"PW":false} ));
  }
}

// 主程式
load_searchBar(html_searchArea);
$(document).ready(()=>{
  save_options();
  load_options();
});
