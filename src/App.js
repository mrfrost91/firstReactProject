import React, {Component} from 'react';
import Header from "./Header";
import Field from './Field';
import Footer from './Footer';
import ScrollTopButton from './ScrollTopButton';

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
