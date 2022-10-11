import React from "react";
import image from "./stella.jpeg"

export function InfosUsuario () {
    return (
        <div>
            <img src={image} width="100px"/>
            <p>Autor: Stella de Oculos</p>
        </div>
    )
}