import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoginFormExpanded: false, isSearchFormExpanded: false, isLoginSwitchedToRegister: false, isMouseOverLogo: false};
    }

    toggleLoginExpand() {
        this.setState({isLoginFormExpanded: !this.state.isLoginFormExpanded, isSearchFormExpanded: false});
    }

    toggleSearchExpand() {
        this.setState({isSearchFormExpanded: !this.state.isSearchFormExpanded, isLoginFormExpanded: false});
    }

    switchLoginAndRegisterForms() {
        this.setState({isLoginSwitchedToRegister: !this.state.isLoginSwitchedToRegister});
    }
    highlightDokaLogo() {
        this.setState({isMouseOverLogo: !this.state.isMouseOverLogo});
    }

    render() {
        return (
            <div className="Header">
                <header>
                    <div className="headercontent">
                        <a className="dokalogo" onMouseOver={this.highlightDokaLogo.bind(this)} onMouseOut={this.highlightDokaLogo.bind(this)}>
                            <img id="logoimg" src={this.state.isMouseOverLogo ? "img/dota_logo_hover.png" : "img/dota_logo.png"} alt="Logo"/>
                            <h1>doka 2 trade</h1>
                        </a>
                        <nav>
                            <ul>
                                <li>
                                    <a className="navtext" href="/news">новости</a>
                                </li>
                                <li>
                                    <a className="navtext" href="/articles">статьи</a>
                                </li>

                                <li>
                                    <a className="navtext" href="/reviews">обзоры</a>
                                </li>
                                <li>
                                    <a className="navtext" href="/forum">форум</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="icons">
                            <div className="loginicon">
                                <a ref="btn" className="navtext" onClick={this.toggleLoginExpand.bind(this)}>
                                    <img src="img/login3.png" alt="Login Icon"/>
                                </a>
                                <div id="formcontainer"
                                     className={this.state.isLoginFormExpanded ? "logincontainer expand" : "logincontainer"}>
                                    {this.state.isLoginSwitchedToRegister ? <RegisterForm/> : <LoginForm/>}
                                    <div className="link_div">
                                        <a onClick={this.switchLoginAndRegisterForms.bind(this)}
                                           className="login_register_switch">{this.state.isLoginSwitchedToRegister ? "У меня уже есть аккаунт" : "Зарегестрироваться"}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="searchicon">
                                <a className="navtext" onClick={this.toggleSearchExpand.bind(this)}>
                                    <img src="img/search2.png" alt="Search Icon"/>
                                </a>
                                <div id="searchcontainer"
                                     className={this.state.isSearchFormExpanded ? "searchcontainer expand" : "searchcontainer"}>
                                    <form id="searchform" action="/search" method="GET">
                                        <input type="text" placeholder="Поиск" name="search" value=""/>
                                        <input type="submit" className="hidden_button" value="Искать"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
