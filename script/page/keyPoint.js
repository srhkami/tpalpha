import { pages } from '../base/pages.js';
import { list_kp } from '../list/kp_list.js'

// 刷新頁面
function refresh_page(){
	let search = new URLSearchParams(location.search);
	let item_code = search.get('item');
	let html = '';
	list_kp.forEach((value)=>{
		if (value.code == item_code){
			$('title').html(`${value.title} - 交通鴿手`)
			$('.card-title').html(value.title);
			$('.card-text').html(`作者：<span class="text-info mx-1 fw-semibold">${value.author} </span><br>更新日期：${value.update}`);
			$('#item_text').html(value.text);
			html += `
				<a href="../pages/keypoint.html?item=${value.code}" type="button" class="list-group-item list-group-item-action active">
					${value.title}
				</a>
			`
		}
		else{
			html += `
				<a href="../pages/keypoint.html?item=${value.code}" type="button" class="list-group-item list-group-item-action">
					${value.title}
			</a>
			`
		}
	})
	$('.list-group').html(html);
}

refresh_page();
