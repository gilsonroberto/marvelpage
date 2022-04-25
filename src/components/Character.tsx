import { useEffect, useState, useContext } from 'react';
import IsEnableContext from '../shared/Context'
import starOn from '../assets/images/star-on.png'
import starOff from '../assets/images/star-off.png'
import '../styles/character.scss'

export function Character(props: { img: string, name: string, description: string, appearances: JSX.Element, fansRate: number }) {

    const context = useContext(IsEnableContext)
    const [ shadow, setShadow ] = useState(!context)
    const [ star, setStar ] = useState([] as any)

    useEffect(function () {
        const ArrayStar = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= props.fansRate) {
                ArrayStar.push(<img src={starOn} alt=''/>)
            } else {
                ArrayStar.push(<img src={starOff} alt=''/>)
            }
        }
        setStar(ArrayStar);
    },[props.fansRate])

    function handleChar() {
        setShadow(context)
    }

  return (
    <div>
        <div onClick={handleChar} style={{ display: (shadow ? 'initial' : 'none'), zIndex: (shadow ? 10 : 'initial') }} className='shadow'></div>
        <div className='content'>
            <div style={{ zIndex: (shadow ? 15 : 'initial') }} className='main'>
                <img className='image-character' src={props.img} alt='Imagem do Personagem' />
                <div style={{ display: (shadow ? 'none' : '') }} className='description-card'>
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                    <p onClick={() => setShadow(context)}>Ver Detalhes</p>                    
                </div>
            </div>
            <div style={{ display: (shadow ? 'initial' : 'none'), zIndex: (shadow ? 14 : 'initial') }} className='description'>
                <div className='content-description'>
                    <span onClick={() => setShadow(!context)} className='close' >ⓧ</span>
                    <h3>{props.name}</h3>
                    <div>
                        <h4>Aparições: </h4>
                        {props.appearances}
                    </div>
                    <div>
                        <h4>Avaliações dos Fãs:</h4>
                        {star}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
