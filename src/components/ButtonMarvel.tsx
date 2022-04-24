import { ButtonHTMLAttributes } from 'react'
import '../styles/global.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonMarvel(props: ButtonProps) {

    return (
        <button className="button-marvel" {...props} />
    );
}