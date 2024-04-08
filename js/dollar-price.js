"use strict";

function calculateUSD(totalPrice, usdRate) {
  const formatter = new Intl.NumberFormat("ru");
  const totalPriceUsd = formatter.format(Math.round(totalPrice / usdRate));
  const modelPriceUsd = $("#modelPriceUSD");
  modelPriceUsd.text(`${totalPriceUsd} $`);
}
