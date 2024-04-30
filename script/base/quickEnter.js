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
                  id="quickSwitch_${pages.PH.name_simple}" value="${pages.PH.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.PH.name_simple}">
                  ${pages.PH.name_title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.SR.name_simple}" value="${pages.SR.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.SR.name_simple}">
                  ${pages.SR.name_title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.DR.name_simple}" value="${pages.DR.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.DR.name_simple}">
                  ${pages.DR.name_title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.ML.name_simple}" value="${pages.ML.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.ML.name_simple}">
                  ${pages.ML.name_title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.TA.name_simple}" value="${pages.TA.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.TA.name_simple}">
                  ${pages.TA.name_title}
                </label>
              </div>
            </div>
            <div class="col-12">
              <hr>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.DL.name_simple}" value="${pages.DL.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.DL.name_simple}">
                  ${pages.DL.name_title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.CL.name_simple}" value="${pages.CL.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.CL.name_simple}">
                  ${pages.CL.name_title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.keyPoint.name_simple}" value="${pages.keyPoint.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.keyPoint.name_simple}">
                  ${pages.keyPoint.name_title}
                </label>
              </div>
            </div>
            <div class="col-12">
              <hr>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.PA.name_simple}" value="${pages.PA.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.PA.name_simple}">
                  ${pages.PA.name_title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.PW.name_simple}" value="${pages.PW.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.PW.name_simple}">
                  ${pages.PW.name_title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.CC.name_simple}" value="${pages.CC.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.CC.name_simple}">
                  ${pages.CC.name_title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.CP.name_simple}" value="${pages.CP.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.CP.name_simple}">
                  ${pages.CP.name_title}
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" role="switch" name="quickSwitch"
                  id="quickSwitch_${pages.SO.name_simple}" value="${pages.SO.name_simple}">
                <label class="form-check-label" for="quickSwitch_${pages.SO.name_simple}">
                  ${pages.SO.name_title}
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
            <img class="img-fluid mx-auto" src=".${pages[name].icon}" alt="${pages[name].name_short}" data-name="${pages[name].name_simple}">
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


