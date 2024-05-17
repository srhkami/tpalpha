import { pages } from '../base/pages.js';

// 超連結法規條文
function showArticle(){
	$(".showArticle").click((e) => {
		let rg_name = e.target.dataset.rg.substr(0,2);
		let article = e.target.dataset.rg.substr(3);
		let text;
		pages[rg_name].list.forEach(value => {
			if (value.article == article){
				text = value.text;
			}
		});
    let html = `
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title fs-5 text-primary fw-semibold" id="exampleModalLabel">《${pages[rg_name].title}》第 ${article} 條</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div id="shwoArticle_text" class="modal-body">
            ${text}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
          </div>
        </div>
      </div>
    `
    $('#popUpArea').html(html);
	});
}

$(document).ready(() => {
	showArticle();
});