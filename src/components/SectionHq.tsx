import { useEffect, useState } from 'react'
import { Hq } from './Hq'
import Surfista from '../assets/images/surfista-hq.png'
import Thor from '../assets/images/thor-hq.png'
import Wolverine from '../assets/images/wolverine-hq.png'
import amazon from '../assets/images/amazon.png'
import americanas from '../assets/images/americanas.png'
import left from '../assets/images/Icon awesome-arrow-left.png'
import right from '../assets/images/Icon awesome-arrow-right.png'
import '../styles/character.scss'
import { LeftArrow, RightArrow } from '../styled-components/styles'

export function SectionHq() {

  const [ charArray, setCharArray] = useState([] as any)
  const [ count, setCount ] = useState(1)

  useEffect(function(){
    setCount(count);
  },[count]);

  useEffect(() => {
    const ArrayCharacter = [
      <Hq 
        key={0}
        img={Thor}
        name='Thor: Vikings'
        description='Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.'
        fansRate={5} 
        buy={[
          <a href="/#"><img key={12} src={americanas} alt="Americanas" /></a>,
          <a href="/#"><img key={12} src={amazon} alt="Amazon" /></a>
        ]}      
      />,
      <Hq
        key={1}
        img={Surfista}
        name='Surfista Prateado: Parábola'
        description='O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?'
        fansRate={5} 
        buy={[
          <a href="/#"><img key={12} src={americanas} alt="Americanas" /></a>,
          <a href="/#"><img key={12} src={amazon} alt="Amazon" /></a>
        ]}      
      />,
      <Hq
        key={2}
        img={Wolverine}
        name='Wolverine: Origens'
        description='Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine. '
        fansRate={5} 
        buy={[
          <a href="/#"><img key={12} src={americanas} alt="Americanas" /></a>,
          <a href="/#"><img key={12} src={amazon} alt="Amazon" /></a>
        ]}      
      />
    ]
    setCharArray(ArrayCharacter)
  }, [])

  function handleArrow(item: string) {

    if (item === 'left') {
      setCount(count-1)
    } else if (item === 'right') {
      setCount(count+1)
    }

  }

  return (
    <section className="section-character">
      <LeftArrow style={{display: count === 1 ? 'none' : 'initial'}} onClick={()=>handleArrow('left')}>
        <img src={left} alt='Seta Esquerda' />
      </LeftArrow>
      <div className='container-character'>
        {charArray.slice((count-1)*3,((count-1)*3)+3)}
      </div>
      <RightArrow style={{display: charArray.slice((count-1)*3,((count-1)*3)+3).length > 3 ? 'initial' : 'none'}} onClick={()=>handleArrow('right')}>
        <img src={right} alt='Seta Direita' />
      </RightArrow>
    </section>
  )
}
