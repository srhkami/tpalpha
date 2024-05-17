import { violation_list, dispose_list, violation_code_a, violation_code_b, violation_code_c } from '../list/cl_list.js';



//函式：搜尋按鈕監聽器
function ok_click() {
  $('#btn_ok').on('click', () => {
    const x = Number($('#approvedWeight').val());
    const y = Number($('#realWeight').val());
    if (!x || !y) {
      alert('選項請勿留空！');
    }
    else {
      calculate(x, y);
    };
  });
}

// 函式：無條件捨去
function roundDown( num, decimal ){ 
  return Math.floor( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal );
}

// 函式：搜尋開始
function calculate(x, y) {
  let z = y - x;
  let ratio = roundDown((z / x), 4);
  console.log(ratio);
  z = Math.ceil(z, 3);
  ratio = Math.ceil(ratio * 100)
  let fine;
  let text;
  if (z <= 0) {
    alert('未超載！')
  }
  else {
    $('#text_overload').html(`${z} 公噸（${ratio} %）`)
    if (z > 30) {
      fine = z * 5000;
    }
    else if (z > 20) {
      fine = z * 3000;
    }
    else if (z > 10) {
      fine = z * 2000;
    }
    else {
      fine = z * 1000;
    }
    fine += 10000;
    $('#text_fine').html(`處新臺幣 ${fine} 元罰鍰`)
    if (ratio > 20) {
      text =  '當場卸貨分裝、禁止其通行';
      }
    else if (ratio > 10) {
      text = '應當場卸貨分裝，或責令其於二小時內改正<br>逾二小時不改正者，得連續舉發';
    }
    else {
      text =  '得以勸導代替舉發<br>如經舉發，應當場卸貨分裝，或責令其於二小時內改正<br>逾二小時不改正者，得連續舉發';
    }
    $('#text_dispose').html(text);
  }
}



// 主程式開始
//鎖定判斷
$('#a_type').on('change', () => a_type_judge());
$('#is_same').on('change', () => is_same_judge());
//查詢按鈕判斷
ok_click();

