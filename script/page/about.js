import { pages } from "../base/pages.js";

console.log(pages);

let html='';
Object.values(pages).forEach((i)=>{
  console.log(i.type)
  if(i.type=='法規'||i.type=='速查'){
    html +=`
    <div class="col-6 col-md-4">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="page-${i.code}">
        <label class="form-check-label" for="page-${i.code}">
          <img src="..${i.icon}" class="i-15" alt="">
          ${i.title}
          <span class="badge text-bg-warning">0</span>
        </label>
      </div>
    </div>
    `
  }

})
$('#bookmarkSetting').html(html);