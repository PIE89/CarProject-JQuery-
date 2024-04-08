"use strict";

function compilePrice() {
  const modelPrice = $("#modelPrice");
  const enginePrice = parseInt($("input[name=engine]:checked").val());
  const transmissionPrice = parseInt(
    $("input[name=transmission]:checked").val()
  );
  const packagePrice = parseInt($("input[name=package]:checked").val());
  const formatter = new Intl.NumberFormat("ru");

  const totalPrice = enginePrice + transmissionPrice + packagePrice;

  modelPrice.text(`${formatter.format(totalPrice)} рублей`);

  return totalPrice;
}
