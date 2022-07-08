import React from "react";

const MasInformacion = (props)=>{
    console.log("Paso por aca ")

    console.log(props.dato)
    return (
      
        props.dato.map((vigente,i)=>{
            return(
                <h4>{vigente.Curso}</h4>
            )
        })
        
    )
}

export default MasInformacion