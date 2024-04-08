"use strict";

function changeColor() {
  const colorBtns = $("#colorsSelector .colorItem");
  const mainImg = $("#imgHolder img");

  colorBtns.on("click", function () {
    const imgPath = $(this).attr("data-img-path");

    mainImg.attr("src", imgPath);
  });
}
