import React, {Component} from 'react';
import './Style.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {loginClass: "", searchClass: ""};
    }

    toggleExpandLogin() {
        if (this.state.loginClass === "") {
            this.setState({loginClass: " expand", searchClass: ""});
        } else {
            this.setState({loginClass: ""});
        }
    }

    toggleExpandSearch() {
        if (this.state.searchClass === "") {
            this.setState({loginClass: "", searchClass: " expand"});
        } else {
            this.setState({searchClass: ""});
        }
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
                                <a ref="btn" className="navtext" onClick={this.toggleExpandLogin.bind(this)}>
                                    <img src="img/login3.png" alt="Login Icon"/>
                                </a>
                                <div id="formcontainer" className={"logincontainer" + this.state.loginClass}>
                                    <form id="loginform" method="post" action="/login">
                                        <input type="text" name="username" placeholder="Логин" id="login"/>
                                        <input type="password" name="password" placeholder="Пароль" id="pass"/>
                                        <input type="submit" value="Войти" styles={{'cursor': 'pointer'}}/>
                                        <div styles={{'display': 'flex', 'justify-content': 'center'}}>
                                            <a href="/register"
                                               styles={{
                                                   'color': 'initial',
                                                   'cursor': 'pointer',
                                                   'text-decoration': 'underline'
                                               }}>Зарегистрироваться.</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="searchicon">
                                <a className="navtext" onClick={this.toggleExpandSearch.bind(this)}>
                                    <img src="img/search2.png" alt="Search Icon"/>
                                </a>
                                <div id="searchcontainer" className={"searchcontainer" + this.state.searchClass}>
                                    <form id="searchform" action="/search" method="GET">
                                        <input type="text" placeholder="Поиск" name="search" value=""/>
                                        <input type="submit" value="Искать" styles={{'display': 'none'}}/>
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