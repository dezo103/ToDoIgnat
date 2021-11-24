import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type InputPropsType = {
    callBack: () => void
    setTitle: (title: string)=> void
    title: string
}

export const Input = ({setTitle, title, ...props}: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
           props.callBack()
        }
    }

    return (
        <input value={title}
               onChange={ onChangeHandler }
               onKeyPress={ onKeyPressHandler }
        />
    )
}
