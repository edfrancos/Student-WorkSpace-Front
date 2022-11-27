import React from "react";
import Carta from "./cartas";

function Tarjetas(){
    return(
        <div className="containerd-flex justify-content-center align-items-center">

            <div className="row align-items-start">
                
                <div className="col-md-4">
                    <Carta/>
                </div>

                <div className="col-md-4">
                    <Carta/>
                </div>
                
                <div className="col-md-4">
                    <Carta/>
                </div>

                <div className="col-md-4">
                    <Carta/>
                </div>

                <div className="col-md-4">
                    <Carta/>
                </div>

                <div className="col-md-4">
                    <Carta/>
                </div>

                <div className="col-md-4">
                    <Carta/>
                </div>

                <div className="col-md-4">
                    <Carta/>
                </div>
                
                <div className="col-md-4">
                    <Carta/>
                </div>

            </div>

        </div>
    )
}


export default Tarjetas;