import React, {Component} from 'react';
import '../Style.css';
import Header from "./common/header/Header";
import Field from './dashboard/Field';
import Footer from './common/Footer';
import Audio from './common/Audio';
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
                <Audio/>
            </div>
        );
    }
}

export default App;
