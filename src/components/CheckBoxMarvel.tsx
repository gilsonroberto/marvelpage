import { InputHTMLAttributes } from 'react'
import '../styles/global.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function CheckBoxMarvel(props: InputProps) {

    return (
        
        <input className='checkbox-marvel' {...props} />
        
    );
}