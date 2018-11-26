import React, {Component} from 'react';
import Header from "./common/header/Header";
import Field from './dashboard/Field';
import Footer from './common/Footer';
import ScrollTopButton from './common/ScrollTopButton';

class App extends Component {
    render() {
        return (
            <div id={'page'}>
                <Header/>
                <div className={'Fieldscontainer'}>
                    <Field/>
                </div>
                <Footer/>
                <ScrollTopButton/>
            </div>
        );
    }
}

export default App;
