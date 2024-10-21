import { useRef } from 'react'

export default function MyButton({ caption = '...', onClick }) {
    const countRef = useRef(0)

    const onClicFunc = e => {
        countRef.current = countRef.current + 1;
        console.log(`MyButton clicked count: ${countRef.current}`)
        onClick(e)
    }

    return (<button className='Btn' onClick={onClicFunc} >{caption}</button>)
}