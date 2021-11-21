import React from "react";
type buttonPropsType = {
    name: string
    callBack: ()=> void
}

export const Buttons = (props:buttonPropsType) => {
    const onClickHandler = ()=> {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}
