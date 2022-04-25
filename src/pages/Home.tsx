import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Background from '../components/Background'
import '../styles/global.scss';
import { LogotipoMarvelMenu, MenuNavigation } from '../styled-components/styles'
import { useSelector } from 'react-redux'
import { SectionCharacter } from '../components/SectionCharacter'

export const Home = () => {
    const navigate = useNavigate()
    const nameNavigation = useSelector((state: { data: any; }) => state.data)
    const [page, setPage] = useState<JSX.Element>()
    const [ check, setCheck ] = useState('')

    function handleNavigation(url: string, name: any) {
        navigate(url)
        setCheck(name)
    }

    useEffect(function () {
        switch (check) {
          case 'Personagens': setPage(<SectionCharacter />); setCheck(check); break;
          default: setPage(<SectionCharacter />); setCheck('Personagens'); break;
        }
    }, [check])

    return (
        <div>
            <Background />        
            <div className='container'>
                <div className='menu_div'>
                    <div className='menu_div_col1'>
                        <LogotipoMarvelMenu>
                            <span onClick={() => navigate('/home')}>MARVEL</span>
                        </LogotipoMarvelMenu>
                    </div>
                    <nav className='menu_div_col2'>
                        {nameNavigation.map((names: {title: string, url: string}, index: number) =>
                            <MenuNavigation>
                                <span onClick={() => handleNavigation(names.url, names.title)}>
                                    <p key={index}>
                                        {names.title}
                                    </p>
                                </span>
                            </MenuNavigation>
                        )}
                    </nav>
                    <div className='menu_div_col3'>
                        <div>
                            <img src="https://github.com/gilsonroberto.png" alt="Gilson Roberto" />
                            <span onClick={() => navigate('/')}>Sair</span>
                        </div>
                    </div>
                </div>
                {page}
            </div>
        </div>
    )
}
