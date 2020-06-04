import React from "react";
import { Cronometro } from "./cronometro";
import { Botones } from "./botones";



export function Contenedor(props) {
    return <>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="numero"><i className="far fa-clock"></i></div>
                    <div className="numero">{props.hora1}</div>
                    <div className="numero">{props.hora2}</div>
                    <div className="separador">:</div>
                    <div className="numero">{props.min1}</div>
                    <div className="numero">{props.min2}</div>
                    <div className="separador">:</div>
                    <div className="numero">{props.seg1}</div>
                    <div className="numero ">{props.seg2}</div>

                </div>
            </div>
        <Botones stop={props.stop} reset={props.reset}  />
        <Cronometro />
        </div>
    </>
}


