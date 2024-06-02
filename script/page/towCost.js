
$('#btn_ok').click(()=>{
  let inTime = $('#inTime').val();
  let outTime = $('#outTime').val();
  let carType = $('#carType').val(); //車輛種類
  let isTow = $('#isTow').is(':checked'); //是否拖吊
  console.log(isTow);
  
  let costA = 0; //移置費
  let costB = 0; //保管費
  if(carType=='none'||!inTime||!outTime){
    alert('選項請勿留空！');
  }
  else{
    let inDate = new Date(`${inTime.substr(0,4)}/${inTime.substr(5,2)}/${inTime.substr(8,2)} ${inTime.substr(11,2)}:${inTime.substr(14,2)}:00`);
    let outDate = new Date(`${outTime.substr(0,4)}/${outTime.substr(5,2)}/${outTime.substr(8,2)} ${outTime.substr(11,2)}:${outTime.substr(14,2)}:00`);
    let days = Math.ceil((outDate-inDate) / 1000 / 60 / 60 / 24); //日數
    if(isTow){
      if(carType=='bigCar'){
       costA+=3000;
      }
      else if(carType=='smallCar'){
       costA+=1000;
      }
      else if(carType=='bike'){
       costA+=200;
      }
    }
    if(carType=='bigCar'){
      costB+=500*days;
    }
    else if(carType=='smallCar'){
      costB+=200*days;
    }
    else if(carType=='bike'){
      costB+=50*days;
    }
    $('#output').html(`
    共 <span class="text-danger">${days}</span> 日；
    <br>移置費 <span class="text-danger">${costA}</span> 元，
    <br>保管費 <span class="text-danger">${costB}</span> 元，
    <br>共計 <span class="text-danger">${costA+costB}</span> 元。
    `);
    
  }
})
