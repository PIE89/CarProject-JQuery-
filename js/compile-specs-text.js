"use strict";

function compileSpecsText() {
  const modelSpecsHolder = $("#modelSpecs");

  const engine = $("input[name=engine]:checked + label").text();
  const transmission = $("input[name=transmission]:checked + label").text();
  const packageText = $("input[name=package]:checked + label").text();

  const text = `${engine}, ${transmission}, ${packageText}`;

  modelSpecsHolder.text(text);
}
