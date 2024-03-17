"use strict";

const firstNum = document.querySelector("#firstNumber");
const secondNum = document.querySelector("#secondNumber");
const multiplicationBtn = document.querySelector("#multiplication");
const divisionBtn = document.querySelector("#division");
const answer = document.querySelector("#answer");

const getAnswer = function (ans) {
  answer.textContent = String(ans);

  firstNum.value = "";
  secondNum.value = "";
};

multiplicationBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (firstNum.value === "" || secondNum.value === "") {
    getAnswer("Really bruh??");
    return;
  }

  const ans = Number(
    (Number(firstNum.value) * Number(secondNum.value)).toFixed(5)
  );

  if (
    firstNum.value === "60" ||
    secondNum.value === "60" ||
    Number(firstNum.value) + Number(secondNum.value) === 60
  )
    console.log("true");

  getAnswer(ans);
});

divisionBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (firstNum.value === "" || secondNum.value === "") {
    getAnswer("Really bruh??");
    return;
  }

  const ans = Number(
    (Number(firstNum.value) / Number(secondNum.value)).toFixed(5)
  );

  if (
    firstNum.value === "60" ||
    secondNum.value === "60" ||
    Number(firstNum.value) + Number(secondNum.value) === 60
  )
    console.log("true");

  getAnswer(ans);
});
