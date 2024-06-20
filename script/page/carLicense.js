import {violation_list, dispose_list, violation_code_a, violation_code_b, violation_code_c} from '../data/cl_list.js';

//函式：相符狀態的鎖定
function lock_judge(){
    if ($('#is_same').val() == '0'){
        $('#b_type').attr('disabled',true);
        if ($('#a_type').val() == '1'){
            $('#b_type').val('1');
        }
        else if ($('#a_type').val() == '2'){
            $('#b_type').val('3');
        }
        else if ($('#a_type').val() == '5'){
            $('#b_type').val('4');
        }
        else{
            $('#b_type').attr('disabled',false);
            $('#b_type').val('0');
        }
    }  
}

//函式：車牌狀態的鎖定判定
function a_type_judge(){
    if ($('#a_type').val() == '3' || $('#a_type').val() == '7'){
        $('#is_same').val('1');
        $('#is_same').attr('disabled',true);
        $('#b_type').attr('disabled',false);
    }
    else{
        $('#is_same').attr('disabled',false);
    }
    lock_judge();
    if ($('#a_type').val() == '4'){
        alert('用以「變造」之號牌，經還原後，若與車體一致，請在選擇『相符』；若是不同車輛之號牌，請選擇『不相符』')
    }
}

//函式：是否相符的鎖定判定
function is_same_judge(){
    if ($('#is_same').val() == '0'){
        $('#b_type').attr('disabled',true);
    }
    else{
        $('#b_type').attr('disabled',false);
    }
    lock_judge();
}

//函式：搜尋按鈕監聽器
function ok_click(){
    $('#btn_ok').on('click',()=>{
        const a_type = Number($('#a_type').val());
        const b_type = Number($('#b_type').val());
        const is_same = Number($('#is_same').val());
        const is_stop = Number($('#is_stop').val());
        if (a_type == 0 || b_type == 0){
            alert('選項請勿留空！'); 
        }
        else if (a_type == 6 && is_same == 0 && b_type != 5 && b_type != 6){
            alert('輸入錯誤：A/B相符時，A/B應皆為遺失竊！')
        }
        else{
            $('.tip').html('　'); 
            search_start(a_type, b_type, is_same, is_stop);
        };
    });
}

// 函式：搜尋開始
function search_start(a_type, b_type, is_same, is_stop){
    let x = 0;
    if (is_stop == 1){
        x += 112;
    }
    if (a_type == 7){
        x += 0;
    }
    else if (is_same == 0 && a_type != 7){
        x += a_type*8;
    }
    else if (is_same == 1 && a_type != 7){
        x = x + 48 + a_type*8;
    }
    x += b_type;
    const code_a = violation_code_a[x];
    const code_b = violation_code_b[x];
    const code_c = violation_code_c[x];
    $('#cl_ot_a1').html(violation_list[code_a]);
    $('#cl_ot_a2').html(dispose_list[code_a]);
    $('#cl_ot_b1').html(violation_list[code_b]);
    $('#cl_ot_b2').html(dispose_list[code_b]);
    $('#cl_ot_c1').html(violation_list[code_c]);
    $('#cl_ot_c2').html(dispose_list[code_c]);
}

// 主程式開始
//鎖定判斷
$('#a_type').on('change',()=> a_type_judge());
$('#is_same').on('change',()=> is_same_judge());
//查詢按鈕判斷
ok_click();

