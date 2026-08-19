import React from "react";


export function Cronometro() {
    return <div className="row">
        <div className="col-md-12">
            <div className="numero"><i className="fas fa-stopwatch"></i></div>

            <div className="numero">0</div>
            <div className="numero">0</div>
            <div className="separador">:</div>
            <div className="numero">0</div>
            <div className="numero">0</div>

        </div>
    </div>
}