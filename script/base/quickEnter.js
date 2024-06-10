import { pages } from '../base/pages.js'



function load_quick() {
  let bookmarkOption = [];
  if (localStorage.getItem('bookmark')) {
    bookmarkOption = JSON.parse(localStorage.getItem('bookmark'));
  }
  let quickOption = bookmarkOption.slice(0, 5)
  let html = '';
  if (quickOption.length == 0){
    html =`
    <div class="col-12 d-flex">
      <a href="../pages/about.html" class="btn btn-outline-secondary mx-auto">
          <img class="i-15 mx-auto" src="./icons/icon_setting.png" alt="">
          點此前往設定
      </a>
    </div>
    `;
  }
  else{
    quickOption.forEach(name => {
      html += `
        <div class="col-3">
          <a href=".${pages[name].href}" class="d-flex">
              <img class="img-fluid mx-auto" src=".${pages[name].icon}" alt="${pages[name].title}">
          </a>
        </div>
        `;
    })
  }
  $('#quickEnter').html(html);
}

function set_quick() {
  $('#save_quick').click(() => {
    let quick_options = [];
    $('input:checkbox:checked[name="quickSwitch"]').each((index, value) => {
      quick_options[index] = $(value).val();
    })
    if (quick_options.length > 4) {
      alert('選項請勿超過四個！');
    }
    else if (quick_options.length == 0) {
      alert('選項請勿留空！');
    }
    else {
      localStorage.setItem('qk_options', JSON.stringify(quick_options));
      alert('儲存成功！');
      location.reload();
    }
  })
}


load_quick();
set_quick();


