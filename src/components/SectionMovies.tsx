import { useEffect, useState } from 'react'
import { Movies } from './Movies'
import HomemFerro from '../assets/images/homem-de-ferro.png'
import HomemFerro2 from '../assets/images/homem-de-ferro-2.png'
import Thor from '../assets/images/thor-movie.png'
import CapAmerica from '../assets/images/cap-america-movie.png'
import CapMarvel from '../assets/images/cap-marvel.png'
import disney from '../assets/images/disney-plus.png'
import left from '../assets/images/Icon awesome-arrow-left.png'
import right from '../assets/images/Icon awesome-arrow-right.png'
import '../styles/character.scss'
import { LeftArrow, RightArrow } from '../styled-components/styles'

export function SectionMovies() {

  const [ charArray, setCharArray] = useState([] as any)
  const [ count, setCount ] = useState(1)

  useEffect(function(){
    setCount(count);
  },[count]);

  useEffect(() => {
    const ArrayCharacter = [
      <Movies 
        key={0}
        img={HomemFerro}
        name='Homem de Ferro'
        description='Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.'
        fansRate={3} 
        movieName={'Homem de Ferro'} 
        movieBuy={[<a href="/#"><img key={12} src={disney} alt="Disney Plus" /></a>]}      
      />,
      <Movies
        key={1}
        img={HomemFerro2}
        name='Homem de Ferro 2'
        description='O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas'
        fansRate={4} 
        movieName={'Homem de Ferro 2'} 
        movieBuy={[<a href="/#"><img key={12} src={disney} alt="Disney Plus" /></a>]}      
      />,
      <Movies
        key={2}
        img={Thor}
        name='Thor'
        description='Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. '
        fansRate={5} 
        movieName={'Thor'} 
        movieBuy={[<a href="/#"><img key={12} src={disney} alt="Disney Plus" /></a>]}      
      />,
      <Movies
        key={3}
        img={CapAmerica}
        name='Capitão América'
        description='Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. '
        fansRate={5} 
        movieName={'Capitão América'} 
        movieBuy={[<a href="/#"><img key={12} src={disney} alt="Disney Plus" /></a>]}      
      />,
      <Movies
        key={4}
        img={CapMarvel}
        name='Capitã Marvel'
        description='Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. '
        fansRate={5} 
        movieName={'Capitã Marvel'} 
        movieBuy={[<a href="/#"><img key={12} src={disney} alt="Disney Plus" /></a>]}      
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
