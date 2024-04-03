import './header.css';
import logoImg from './../../img/Icon Container.svg';
import triangleImg from './../../img/triangle.svg';
import rusLanguageImg from './../../img/image 156.svg';
import personImg from './../../img/akar-icons_person.svg';
import registrationImg from './../../img/heroicons-outline_login.svg';

function Header(){
    return(

        <header className='header'>
            <div className="header__wrapper">
                <div className="header__row">
                    <div className="header__logo-text">
                        <a href="#">
                            <img className='logo' src={logoImg} alt="Нет соединения" />
                            <span className='logo-text'>Human Recovery+</span>
                        </a>
                        
                    </div>
                    <div className="header__nav">
                        <a className='o-nas' href="#">
                            <span>О нас</span>
                        </a>
                        <a className='klientam' href="#">
                            <span>Клиентам</span>
                        </a>
                        <a className='faq' href="">
                            <span>FAQ</span>
                        </a>
                        <a className='kontakty' href="">
                            <span>Контакты</span>
                        </a>
                        <div className="change-language">
                            <img className='triangle' src={triangleImg} alt="" />
                            <img className='language-img' src={rusLanguageImg} alt="" />
                            <div className="dropdown__wrapper">
                                <div className="dropdown__content">
                                    <div className="kaz-language">kz</div>
                                    <div className="rus-language">rus</div>
                                </div>
                            </div>
                        </div>
                        <a className='login' href="">
                            <div className="log-in">
                                <span>Вход</span>
                                <img src={personImg} alt="" />
                            </div>
                        </a>
                        <a href="#">
                            <div className="registration-block">
                                <span>Регистрация</span>
                                <img src={registrationImg} alt="" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;