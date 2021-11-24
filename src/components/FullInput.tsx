import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Buttons} from "./Buttons";

type FullInputType = {
    callBack: (title: string) => void
}

export const FullInput = (props:FullInputType) => {
    let [title, setTitle] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
           callBackHandler()
        }
    }

    const callBackHandler = () => {
        props.callBack(title)
        setTitle("")
    }

    return (
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <Buttons callBack={callBackHandler} name={'+'}/>
        </div>
    )
}
