import React from 'react'

export default function Recipe({title,calories,image,ingredients}) {
    return (
        <center>
             <div style={{}}>
            <img src={image} alt=""/>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <p>{calories} </p>
            <hr/>
        </div>
        </center>
    )
        
       
}
