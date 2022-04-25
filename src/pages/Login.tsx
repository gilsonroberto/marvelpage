import '../styles/login.scss';

import { useNavigate } from 'react-router-dom'
import LogoMarvel from '../components/LogoMarvel';
import { InputMarvel } from '../components/InputMarvel'
import { ButtonMarvel } from '../components/ButtonMarvel'
import { CheckBoxMarvel } from '../components/CheckBoxMarvel'


export const Login = () => {

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/main')
    }
    
  return (
    <div>
        <div className='login-effect'></div>
        <div className='login-content'>
            <div className='col1'>
                <LogoMarvel />
                <div className='form-register'>
                    <h2>Bem-vindo(a) de volta!</h2>
                    <p>Acesse sua conta:</p>
                    <form className='login-form'>
                        <InputMarvel type='text' placeholder='Usuário'/>
                        <InputMarvel type='password' placeholder='Senha'/>
                        <div className='save-data'>
                            <div>
                                <CheckBoxMarvel id="save" type="checkbox" />
                                <label htmlFor='save'>Salvar Login</label>
                            </div>
                            <a className="forgot-data" href="/">Esqueci a Senha</a>
                        </div>
                        <ButtonMarvel onClick={() => handleNavigation()} type="submit">Entrar</ButtonMarvel>
                        <div className="register">
                            <p>Ainda não tem o login?</p>
                            <a href="/" >Cadastre-se</a>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col2'></div>
        </div>
    </div>
  )
}
