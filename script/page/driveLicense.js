import {violation_list, violation_again_list, violation_text, violation_code} from '../data/dl_list.js'

// 函式：判斷開始
function search_start(drive_type, car_type, bike_type, more_type){
    let x = 0;
    x = x + (drive_type-1)*42;
    x = x + (car_type-1)*6;
    x = x + bike_type;
    const code = violation_code[x-1];
    $('#output_text_first').html(violation_text[code]);
    if (more_type == 0) {
        $('#output_title').html(violation_list[code]);
    }
        else{
        $('#output_title').html(violation_again_list[code]);
    }
    if (drive_type == 8 && code == 15){
        alert('曳引車無明文處罰規定，僅供參考'); 
    }
    if (code == 0 || code == 16) {
        $('#output_text_second').html('　');
    }
    else if (code >=1 && code <=4 || code == 15){
        if(more_type == 1){
            $('#output_text_second').html('處新臺幣二萬四千元罰鍰，並當場禁止其駕駛；如肇事致人重傷或死亡，得沒入該汽車。');
        }
        else{
            $('#output_text_second').html('駕駛人處新臺幣六千元以上二萬四千元以下罰鍰，並當場禁止其駕駛。');
        }
        
    }
    else if (code >= 5 && code <= 10){
        if(more_type == 1){
            $('#output_text_second').html('處新臺幣八萬元罰鍰，並當場禁止其駕駛；如肇事致人重傷或死亡，得沒入該汽車。');
        }
        else{
            $('#output_text_second').html('汽車所有人及駕駛人各處新臺幣四萬元以上八萬元以下罰鍰，並當場禁止其駕駛。');
        }
        
    }
    else if (code >= 11 && code <= 13) {
        $('#output_text_second').html('駕駛人處新臺幣一千八百元以上三千六百元以下罰鍰，並禁止其駕駛。');
    }
    else {
        $('#output_text_second').html('駕駛人處新臺幣六千元罰鍰，並禁止其駕駛。');
    }
};

// 主程式開始
    // 查詢按鈕判斷
    $('#btn_ok').on('click',()=>{
        const drive_type = Number($('#drive_type').val());
        const car_type = Number($('#car_type').val());
        const bike_type = Number($('#bike_type').val());
        const more_type = Number($('#more_type').val());
        if (drive_type==0 || car_type==0 || bike_type==0){
            alert('選項請勿留空！');
        }
        else{
            $('.tip').html('　'); 
            search_start(drive_type, car_type, bike_type, more_type);
        };
    });