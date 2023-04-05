function add() {
    var num1 = parseFloat(document.getElementById("Num1").value);
    var num2 = parseFloat(document.getElementById("Num2").value);
    var res = num1+num2;
    document.getElementById("results").innerHTML = "The sum of <b>" + num1 + "</b> and <b>" + num2 + "</b> is <b>" + res + "</b>";
  }
  function sub() {
    var num1 = parseFloat(document.getElementById("Num1").value);
    var num2 = parseFloat(document.getElementById("Num2").value);
    var res = num1-num2;
    document.getElementById("results").innerHTML = "The difference of <b>" + num1 + "</b> and <b>" + num2 + "</b> is <b>" + res + "</b>";
  }
  function mult() {
    var num1 = parseFloat(document.getElementById("Num1").value);
    var num2 = parseFloat(document.getElementById("Num2").value);
    var res = num1*num2;
    document.getElementById("results").innerHTML = "The product of <b>" + num1 + "</b> and <b>" + num2 + "</b> is <b>" + res + "</b>";
  }
  function div() {
    var num1 = parseFloat(document.getElementById("Num1").value);
    var num2 = parseFloat(document.getElementById("Num2").value);
    var res = num1/num2;
    document.getElementById("results").innerHTML = "The quotient of <b>" + num1 + "</b> and <b>" + num2 + "</b> is <b>" + res + "</b>";
  }
  function mod() {
    var num1 = parseFloat(document.getElementById("Num1").value);
    var num2 = parseFloat(document.getElementById("Num2").value);
    var res = num1%num2;
    document.getElementById("results").innerHTML = "The modulo of <b>" + num1 + "</b> and <b>" + num2 + "</b> is <b>" + res + "</b>";
  }