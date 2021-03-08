import React, { useEffect } from 'react'
import {
    useRecoilState,
    useRecoilValue,
    atom,
    selector
} from 'recoil'

const textState = atom({
    key: 'textState',
    default: ''
});

const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
        const text = get(textState);
        return text.length;
    }
})

function CharacterCounter() {
    return (
        <>
        <TextInput/>
        <CharacterCount/>
        </>
    )
}

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);
    const onChange = e => {
        setText(e.target.value);
    }

    return(
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br/>
            Echo: { text }
        </div>
    )
}


const CharacterCount = () => {
    const count = useRecoilValue(charCountState);
    return <>Character count: {count}</>
}

export default CharacterCounter
