import React, {Component} from 'react';
import './Style.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {loginExpand: false, searchExpand: false};
    }

    toggleLoginExpand() {
        this.setState({loginExpand: !this.state.loginExpand, searchExpand: false});
    }

    toggleSearchExpand() {
        this.setState({searchExpand: !this.state.searchExpand, loginExpand: false});
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
                                <div id="formcontainer" className={this.state.loginExpand ? "logincontainer expand" : "logincontainer"}>
                                    <form id="loginform" method="post" action="/login">
                                        <input type="text" name="username" placeholder="Логин" id="login"/>
                                        <input type="password" name="password" placeholder="Пароль" id="pass"/>
                                        <input type="submit" className="log_reg_button" value="Войти" />
                                        <div className="link_div">
                                            <a href="/register" className="register_link">Зарегистрироваться.</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="searchicon">
                                <a className="navtext" onClick={this.toggleSearchExpand.bind(this)}>
                                    <img src="img/search2.png" alt="Search Icon"/>
                                </a>
                                <div id="searchcontainer" className={this.state.searchExpand ? "searchcontainer expand" : "searchcontainer"}>
                                    <form id="searchform" action="/search" method="GET">
                                        <input type="text" placeholder="Поиск" name="search" value=""/>
                                        <input type="submit" className="hidden_button" value="Искать" />
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
