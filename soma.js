//-------------------------------------Massa óssea---------------------------------------------

function calcular(opMedida1, opMedida2, opMedida3) {
  var altura = document.calcform.altura.value;
  var punho = document.calcform.punho.value;
  var femur = document.calcform.femur.value;

  if (opMedida1 == "centimetros") {
    punho = punho / 100.00;
  } else {
    if (opMedida1 == "milimetros") {
      punho = punho / 1000.0;
    }
  }

  if (opMedida2 == "centimetros") {
    femur = femur / 100.00;
  } else {
    if (opMedida2 == "milimetros") {
      femur = femur / 1000.0;
    }
  }

  if (opMedida3 == "centimetros") {
    altura = altura / 100.00;
  }

  var res = (altura * altura) * (punho * femur * 400);

  var resultado = (3.02 * (Math.pow(res, 0.712)));

  document.calcform.resultado.value = resultado.toFixed(0);

}

//------------------------------------Taxa metabolismo Basal----------------------------------------------
function calcular2(oper,opAltura2) {
  var valor1 = document.calcform.valor1.value;
  var valor2 = document.calcform.valor2.value;
  var valor3 = document.calcform.valor3.value;

  if (opAltura2 == "metros") {
    valor2 = valor2 / 0.010000;
  }

  if (oper == "masculino") {
    document.calcform.res.value = ((13.7 * valor1) + (5.0 * valor2) - (6.8 * valor3) + 66);
  } else {
    if (oper == "feminino") {
      document.calcform.res.value = ((9.6 * valor1) + (1.8 * valor2) - (4.7 * valor3) + 665);
    }
  }
}

//------------------------------Cálculo do Gasto Energético Basal (GEB)---------------------------------------------

function calcular3(oper2,opAltura3) {
  var valor4 = document.calcform.valor4.value;
  var valor5 = document.calcform.valor5.value;
  var valor6 = document.calcform.valor6.value;

  if (opAltura3 == "metros") {
    valor5 = valor5 / 0.010000;
  }

  if (oper2 == "masculino") {
    document.calcform.res2.value = (66.5 + (13.8 * valor4) + (5.0 * valor5) - (6.8 * valor6));
  } else {
    if (oper2 == "feminino") {
      document.calcform.res2.value = (655 +(9.6 * valor4) + (1.7 * valor5) - (4.7 * valor6));
    }
  }
}

//------------------------------Estimativa de peso---------------------------------------------

function calcular4(oper3) {
  var valor7 = document.calcform.valor7.value;
  var valor8 = document.calcform.valor8.value;
  var valor9 = document.calcform.valor9.value;
  var valor10 = document.calcform.valor10.value;

 

  if (oper3 == "masculino") {
    document.calcform.res3.value = ((0.98 * valor7) + (1.16 * valor8) + (1.73 * valor9) + (0.37 * valor10) - 81.69);
  } else {
    if (oper3 == "feminino") {
      document.calcform.res3.value = ((1.27 * valor7) + (0.87 * valor8) + (0.98 * valor9) + (0.4 * valor10) - 62.35);
    }
  }
}

//----------------------------------------------------------------------------------

function apagaForm() {
	document.calcform.altura.value="";
  document.calcform.punho.value="";
  document.calcform.femur.value="";
  document.calcform.resultado.value="";
}

function apagaForm1() {
	document.calcform.valor1.value="";
  document.calcform.valor2.value="";
  document.calcform.valor3.value="";
  document.calcform.res.value="";
}

function apagaForm2() {
	document.calcform.valor4.value="";
  document.calcform.valor5.value="";
  document.calcform.valor6.value="";
  document.calcform.res2.value="";
}

function apagaForm3() {
	document.calcform.valor7.value="";
  document.calcform.valor8.value="";
  document.calcform.valor9.value="";
  document.calcform.valor10.value="";
  document.calcform.res3.value="";
}




function somenteNumeros(num) {
        var er = /[^0-9.]/;
        er.lastIndex = 0;
        var campo = num;
        if (er.test(campo.value)) {
          campo.value = "";
        }
    }