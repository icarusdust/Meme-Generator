import React from 'react'
import Aux from '../hoc/Aux'

const input = (props) => {
    return(
    <Aux>

        <input type = "text" 
            onChange = {props.change} 
            placeholder ="Left Text" 
            value = {props.value} 
            name = "inputTextLeft"/>
            
        <input type = "text" 
            onChange = {props.change} 
            placeholder ="Right text" 
            value = {props.value2} 
            name = "inputTextRight"/>

    </Aux>
    )
}
export default input