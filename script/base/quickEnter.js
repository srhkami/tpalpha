import { pages } from '../base/pages.js'

// 快速導航設定視窗預設HTML
const html_quickArea = [`
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">快速導航設定</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.PH.code}" value="${pages.PH.code}">
                <label class="form-check-label" for="quickSwitch_${pages.PH.code}">
                  ${pages.PH.title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.SR.code}" value="${pages.SR.code}">
                <label class="form-check-label" for="quickSwitch_${pages.SR.code}">
                  ${pages.SR.title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.DR.code}" value="${pages.DR.code}">
                <label class="form-check-label" for="quickSwitch_${pages.DR.code}">
                  ${pages.DR.title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.ML.code}" value="${pages.ML.code}">
                <label class="form-check-label" for="quickSwitch_${pages.ML.code}">
                  ${pages.ML.title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.TA.code}" value="${pages.TA.code}">
                <label class="form-check-label" for="quickSwitch_${pages.TA.code}">
                  ${pages.TA.title}
                </label>
              </div>
            </div>
            <div class="col-12">
              <hr>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.DL.code}" value="${pages.DL.code}">
                <label class="form-check-label" for="quickSwitch_${pages.DL.code}">
                  ${pages.DL.title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.CL.code}" value="${pages.CL.code}">
                <label class="form-check-label" for="quickSwitch_${pages.CL.code}">
                  ${pages.CL.title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.keyPoint.code}" value="${pages.keyPoint.code}">
                <label class="form-check-label" for="quickSwitch_${pages.keyPoint.code}">
                  ${pages.keyPoint.title}
                </label>
              </div>
            </div>
            <div class="col-12">
              <hr>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.PA.code}" value="${pages.PA.code}">
                <label class="form-check-label" for="quickSwitch_${pages.PA.code}">
                  ${pages.PA.title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.PW.code}" value="${pages.PW.code}">
                <label class="form-check-label" for="quickSwitch_${pages.PW.code}">
                  ${pages.PW.title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.CC.code}" value="${pages.CC.code}">
                <label class="form-check-label" for="quickSwitch_${pages.CC.code}">
                  ${pages.CC.title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.CP.code}" value="${pages.CP.code}">
                <label class="form-check-label" for="quickSwitch_${pages.CP.code}">
                  ${pages.CP.title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.SO.code}" value="${pages.SO.code}">
                <label class="form-check-label" for="quickSwitch_${pages.SO.code}">
                  ${pages.SO.title}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <p>自訂快速導航功能，最多能選四個選項</p>
        <button type="button" class="btn btn-primary" id="save_quick">儲存</button>
      </div>
    </div>
  </div>
`];


function load_quick() {
  let quick_options = ['PH', 'SR', 'DL', 'CL'];
  if (localStorage.getItem('qk_options')) {
    quick_options = JSON.parse(localStorage.getItem('qk_options'));
  }
  else {
    localStorage.setItem('qk_options', JSON.stringify(quick_options));
  }
  let html = '';
  quick_options.forEach((name, index) => {
    html += `
      <div class="col-3 quick_col" data-name="PH">
        <a href=".${pages[name].href}" class="d-flex">
            <img class="img-fluid mx-auto" src=".${pages[name].icon}" alt="${pages[name].title}" data-name="${pages[name].code}">
        </a>
      </div>
      `;
  })
  $('#quickArea').html(html);
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

$('#quickSetting').html(html_quickArea);
load_quick();
set_quick();


