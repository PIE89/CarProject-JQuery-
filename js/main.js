"use strict";

$(document).ready(function () {
  let totalPrice;
  let usdRate;
  const currencyUrl = "https://www.cbr-xml-daily.ru/daily_json.js";

  changeColor();
  compileSpecsText();
  totalPrice = compilePrice();

  $.ajax({
    url: currencyUrl,
    cache: false,
    success: function (data) {
      usdRate = JSON.parse(data).Valute.USD.Value;
      calculateUSD(totalPrice, usdRate);
    },
  });

  $("#autoForm input").on("change", function () {
    compileSpecsText();
    totalPrice = compilePrice();
    calculateUSD(totalPrice, usdRate);
  });
});
