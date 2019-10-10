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

//----------------------------------------------------------------------------------
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