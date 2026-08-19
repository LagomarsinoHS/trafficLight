import React from "react";

export function Botones(props) {
    return <div className="row">
        <div className="card-body">
            <h5 className="card-title mt-5">
                <button type="button" className="btn btn-primary btn-lg mx-3">Inicio</button>
                <button type="button" className="btn btn-success btn-lg mx-3" onClick={props.reset}>Reset</button>
                <button type="button" className="btn btn-info btn-lg mx-3">Resume</button>
                <button type="button" className="btn btn-primary btn-lg mx-3" onClick={() => clearInterval(props.stop)}>Stop</button>
            </h5>
            <p className="card-text">{/* input */}</p>

        </div>
    </div>

}

