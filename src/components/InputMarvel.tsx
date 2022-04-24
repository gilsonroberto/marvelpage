import { InputHTMLAttributes } from 'react'
import '../styles/global.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function InputMarvel(props: InputProps) {

    return (
        
        <input className='input-marvel' {...props} />
        
    );
}