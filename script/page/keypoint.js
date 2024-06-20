import { list_kp } from '../data/kp_list.js'

// 刷新頁面
function refresh_page(){
	let search = new URLSearchParams(location.search);
	let essay_code = search.get('essay');
	let html = '';
	list_kp.forEach((value)=>{
		if (value.code == essay_code){
			$('title').html(`${value.title} - 交通鴿手`)
			$('.card-title').html(value.title);
			$('.card-text').html(`作者：<span class="text-info mx-1 fw-semibold">${value.author} </span><br>編輯日期：${value.update}`);
			$('#mainText').html(value.text);
			html += `
				<a href="../pages/keypoint.html?essay=${value.code}" type="button" class="list-group-item list-group-item-action active">
					${value.title}
				</a>
			`
		}
		else{
			html += `
				<a href="../pages/keypoint.html?essay=${value.code}" type="button" class="list-group-item list-group-item-action">
					${value.title}
				</a>
			`
		}
	})
	$('.list-group').html(html);
}

refresh_page();
