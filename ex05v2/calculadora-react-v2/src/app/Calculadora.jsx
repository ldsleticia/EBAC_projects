"use client";
import "../app/calculadora.css";
import React, { useEffect, useState } from "react";
export default function Calculadora() {
  const [numberDigit, setNumberDigit] = useState("");
  const [isResult, setIsResult] = useState(false);
  const [lastCharIsOperator, setLastCharIsOperator] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    console.log(event.key);
    console.log(numberDigit);
    if (/^\d$/.test(event.key)) {
      handleAddNumber(event.key);
      console.log("estou no if da handleAddNumber");
      console.log("o number digit é", numberDigit);
    } else {
      if (/^[+\-*\/=Cc\n\r]$/.test(event.key)) {
        handleAddSimbol(event.key);
      }
      if (event.key === "Enter" || event.key === "Return") {
        evaluateExpression(numberDigit);
      }
    }
  };

  function handleAddNumber(number) {
    if (numberDigit && !isResult) {
      setNumberDigit((prevNumberDigit) => prevNumberDigit.concat(number));
    } else {
      setNumberDigit(number);
      setIsResult(false);
    }
  }

  function evaluateExpression(expression) {
    const regex = /^\d+[\+\-\*\/]\d+$/;
    const result = eval(expression);

    if (!lastCharIsOperator && !regex.test(expression)) {
      setNumberDigit(
        "Expressão inválida. Limpe a calculadora e refaça a expressão"
      );
      setIsResult(true);
      return;
    }

    if (expression.includes("/0")) {
      setNumberDigit("Divisão por zero não é permitida");
      setIsResult(true);
      return;
    } else {
      setNumberDigit(result.toString());
      setIsResult(false);
      console.log(result);
    }
  }

  function handleAddSimbol(simbol) {
    if (simbol === "=") {
      console.log(numberDigit);
      evaluateExpression(numberDigit);
    } else if (simbol === "C" || simbol === "c") {
      setNumberDigit("");
      setIsResult(false);
    } else if (numberDigit) {
      setNumberDigit((prevNumberDigit) => prevNumberDigit + simbol);
      setIsResult(false);
      setLastCharIsOperator(/^[+\-*\/]$/.test(simbol));
    }
  }

  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const simbols = ["/", "*", "+", "-"];
  return (
    <main className="mainClass">
      <h1>{numberDigit}</h1>
      <div className="container">
        {numbers.map((number) => (
          <button
            className="item"
            onClick={() => handleAddNumber(number)}
            key={number}
          >
            {number}
          </button>
        ))}
        {simbols.map((simbol) => (
          <button
            className="simbols"
            onClick={() => {
              handleAddSimbol(simbol);
            }}
            key={simbol}
          >
            {simbol}
          </button>
        ))}
        <button
          className="ac-button"
          onClick={() => {
            handleAddSimbol("C");
          }}
        >
          {" "}
          C{" "}
        </button>
        <button
          className="equal-button"
          onClick={() => {
            handleAddSimbol("=");
          }}
        >
          {" "}
          ={" "}
        </button>
      </div>
    </main>
  );
}
