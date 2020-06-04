import React from "react";

export function Botones(props) {
    return <div className="row">
        <div class="card-body">
            <h5 class="card-title mt-5">
                <a href="#" class="btn btn-primary btn-lg  mx-3">Inicio</a>
                <a href="#" class="btn btn-success  btn-lg mx-3" onClick={props.reset}>Reset</a>
                <a href="#" class="btn btn-info btn-lg mx-3">Resume</a>
                <a href="#" class="btn btn-primary btn-lg  mx-3" onClick={()=>clearInterval(props.stop)}>Stop</a>
            </h5>
            <p class="card-text">{/* input */}</p>

        </div>
    </div>

}

