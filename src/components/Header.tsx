import { useNavigate } from 'react-router-dom'
import Background from './Background'
import '../styles/global.scss';
import { LogotipoMarvelMenu, MenuNavigation } from '../styled-components/styles'
import { useSelector } from 'react-redux'

export function Header() {
    const navigate = useNavigate();
    const nameNavigation = useSelector((state: { data: any; }) => state.data)
    console.log(nameNavigation)

    return (
        <div>
            <Background />        
            <div className='container'>
                <div className='menu_div'>
                    <div className='menu_div_col1'>
                        <LogotipoMarvelMenu>
                            <p>MARVEL</p>
                        </LogotipoMarvelMenu>
                    </div>
                    <nav className='menu_div_col2'>
                        {nameNavigation.map((names: {title: string, url: string}, index: number) =>
                            <MenuNavigation>
                                <span onClick={() => navigate(names.url)}>
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
                            <span onClick={() => navigate('/google')}>Sair</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}