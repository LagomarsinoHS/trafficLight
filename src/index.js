import React from "react";
import ReactDOM from "react-dom";
import { Contenedor } from "./components/contenedor";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./css/style.css";

let hora1 = 2;
let hora2 = 3;
let min1 = 5;
let min2 = 9;
let seg1 = 5;
let seg2 = 5;

function reset(){
    
 hora1 = 0;
 hora2 = 0;
 min1 = 0;
 min2 = 0;
 seg1 = 0;
 seg2 = -1;
}

let stop = setInterval(() => {
    seg2++;
    if (seg2 === 10) {
        seg1++;
        seg2 = 0;
    }

    if (seg1 === 6) {
        min2++;
        seg1 = 0;
    }

    if (min2 === 10) {
        min1++;
        min2 = 0;
    }

    if (min1 === 6) {
        hora2++;
        min1 = 0;

    }

    if (hora2 === 4) {
        hora1++;
        hora2 = 0;
    }

    if (hora1 === 3) {
        hora1 = 0;
        hora2 = 0;
        min1 = 0;
        min2 = 0;
        seg1 = 0
        seg2 = 0;
    }


    ReactDOM.render(<Contenedor hora1={hora1} hora2={hora2} min1={min1} min2={min2} seg1={seg1} seg2={seg2} stop={stop} reset={reset} />, document.querySelector("#root"));
}, 1000);






















/*
    function tick() {
        const element = (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        ReactDOM.render(element, document.getElementById('root'));
    }

    setInterval(tick, 1000);
      */