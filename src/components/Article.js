import React from "react";

function Article({title,date="July 13,",preview}){

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
    

</article>
    )

}
 export default Article