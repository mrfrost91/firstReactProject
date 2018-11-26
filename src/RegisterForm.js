import React, {Component} from 'react';
import './Style.css';

class RegisterForm extends Component {
    render() {
        return (
            <form id="loginform" method="post" action="/register">
                <input type="text" name="firstname" placeholder="Имя" id="firstname"/>
                <input type="text" name="lastname" placeholder="Фамилия" id="lastname"/>
                <input type="text" name="username" placeholder="Логин" id="login"/>
                <input type="password" name="password" placeholder="Пароль" id="pass"/>
                <input type="password" name="password2" placeholder="Повторите пароль" id="pass2"/>
                <input type="submit" className="log_reg_button" value="Зарегистрироваться"/>
            </form>
        );
    }
}

export default RegisterForm;