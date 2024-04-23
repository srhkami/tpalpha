import { pages } from '../base/pages.js';

$(".showArticle").click((e) => {
	console.log(e.target.dataset.rg);
	let rg_name = e.target.dataset.rg.substr(0,2);
	let article = e.target.dataset.rg.substr(3);
	console.log(rg_name+';'+article)
	$('.modal-title').html(`《${pages[rg_name].name_title}》第 ${article} 條`);
	let text;
	pages[rg_name].list.forEach(value => {
		if (value.article == article){
			text = value.text;
		}
	});
	$('.modal-body').html(text);
});