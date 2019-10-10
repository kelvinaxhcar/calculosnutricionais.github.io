function calcular(opMedida1,opMedida2,opMedida3) {
  var peso = document.calcform.peso.value;
  var altura = document.calcform.altura.value;
  var punho = document.calcform.punho.value;
  var femur = document.calcform.femur.value;

    if(opMedida1 == "centimetros"){
      punho = punho / 100.00;
    }else{ if( opMedida1 == "milimetros"){
      punho = punho / 1000.0;
    }
  }

  if(opMedida2 == "centimetros"){
    femur = femur / 100.00;
  }else{ if( opMedida2 == "milimetros"){
    femur = femur / 1000.0;
  }
}

if(opMedida3 == "centimetros"){
  altura = altura / 100.00;
}

     var res  = (altura*altura)*(punho*femur*400);

     var resultado = (3.02*(Math.pow(res,0.712)));


     

   
  document.calcform.resultado.value = resultado.toFixed(0);
  document.calcform.res.value = res;
}
