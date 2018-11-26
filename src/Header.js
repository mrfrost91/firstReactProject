import React, {Component} from 'react';
import './Style.css';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {loginExpand: false, searchExpand: false, showLoginForm: true};
    }

    toggleLoginExpand() {
        this.setState({loginExpand: !this.state.loginExpand, searchExpand: false});
    }

    toggleSearchExpand() {
        this.setState({searchExpand: !this.state.searchExpand, loginExpand: false});
    }

    switchLoginRegisterForms() {
        this.setState({showLoginForm: !this.state.showLoginForm});
    }

    render() {
        return (
            <div className="Header">
                <header>
                    <div className="headercontent">
                        <a className="dokalogo" href="#">
                            <img id="logoimg" src="img/dota_logo.png" alt="Logo"/>
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
                                     className={this.state.loginExpand ? "logincontainer expand" : "logincontainer"}>
                                    {this.state.showLoginForm ? <LoginForm/> : <RegisterForm/>}
                                    <div className="link_div">
                                        <a onClick={this.switchLoginRegisterForms.bind(this)}
                                           className="login_register_switch">{this.state.showLoginForm ? "Зарегестрироваться" : "Войти на сайт"}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="searchicon">
                                <a className="navtext" onClick={this.toggleSearchExpand.bind(this)}>
                                    <img src="img/search2.png" alt="Search Icon"/>
                                </a>
                                <div id="searchcontainer"
                                     className={this.state.searchExpand ? "searchcontainer expand" : "searchcontainer"}>
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
