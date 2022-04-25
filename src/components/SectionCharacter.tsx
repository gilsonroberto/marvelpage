import { useEffect, useState } from 'react'
import { Character } from './Character'
import Aranha from '../assets/images/homem-aranha.png'
import Hulk from '../assets/images/hulk.png'
import Thanos from '../assets/images/thanos.png'
import Wanda from '../assets/images/wanda.png'
import left from '../assets/images/Icon awesome-arrow-left.png'
import right from '../assets/images/Icon awesome-arrow-right.png'
import '../styles/character.scss'
import { LeftArrow, RightArrow } from '../styled-components/styles'

export function SectionCharacter() {

  const [ charArray, setCharArray] = useState([] as any)
  const [ count, setCount ] = useState(1)

  useEffect(function(){
    setCount(count);
  },[count]);

  useEffect(() => {
    const ArrayCharacter = [
      <Character 
        key={0}
        img={Aranha}
        name='Homem-Aranha'
        description='Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.'
        appearances={
          <ul>
            <li>Vingadores - Era de Ultron</li>
            <li>Capitão América - Guerra Civil</li>
            <li>Vingadores - Guerra Infinita</li>
            <li>Vingadores - Ultimato</li>
          </ul>
        }
        fansRate={4}
      />,
      <Character
        key={1}
        img={Wanda}
        name='Wanda Maximoff'
        description='Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.'
        appearances={
          <ul>
            <li>Vingadores - Era de Ultron</li>
            <li>Capitão América - Guerra Civil</li>
            <li>Vingadores - Guerra Infinita</li>
            <li>Vingadores - Ultimato</li>
          </ul>}
        fansRate={4}
      />,
      <Character
        key={2}
        img={Thanos}
        name='Thanos'
        description="A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais."
        appearances={
          <ul>
            <li>Vingadores</li>
            <li>Guardiões da Galáxia - vol. I</li>
            <li>Vingadores - Guerra Infinita</li>
            <li>Vingadores - Ultimato</li>
          </ul>}
        fansRate={5}
      />,
      <Character
        key={3}
        img={Hulk}
        name='Hulk'
        description="Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar."
        appearances={
          <ul>
            <li>Vingadores</li>
            <li>Vingadores - Era de Ultron</li>
            <li>Thor - Ragnarok</li>
            <li>Vingadores - Guerra Infinita</li>
            <li>Vingadores - Ultimato</li>
          </ul>}
        fansRate={5}
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
      <RightArrow style={{display: charArray.slice((count-1)*3,((count-1)*3)+3).length === 3 ? 'initial' : 'none'}} onClick={()=>handleArrow('right')}>
        <img src={right} alt='Seta Direita' />
      </RightArrow>
    </section>
  )
}
