import React, {Component} from 'react';

class LoginForm extends Component {
    render() {
        return (
            <form id="loginform" method="post" action="/login">
                <input type="text" name="username" placeholder="Логин" id="login"/>
                <input type="password" name="password" placeholder="Пароль" id="pass"/>
                <input type="submit" className="log_reg_button" value="Войти" />
            </form>
        );
    }
}

export default LoginForm;