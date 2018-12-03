import React, {Component} from 'react';
import toastySound from '../../assets/toasty.mp3'


class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {numChar: 0, secretWord: ['toasty','ещфыен']};
        this.toastySound = React.createRef();
    }
    componentDidMount() {
        window.addEventListener('keypress', this.toasty.bind(this));
    }

    toasty(event) {
        let keyChar = event.key;
        if (keyChar === this.state.secretWord[0].charAt(this.state.numChar) || keyChar === this.state.secretWord[1].charAt(this.state.numChar)) {
            this.setState({numChar: this.state.numChar + 1});
        } else {
            keyChar === "t" || "е"  ? this.setState({numChar: 1}) : this.setState({numChar: 0});
            }
            if (this.state.numChar === this.state.secretWord[0].length) {
                this.toastySound.current.play();
                this.setState({numChar: 0});
            }
        }

    render() {
        return (
            <div className={"Audio"}>
                <audio  ref={this.toastySound}>
                    <source src={toastySound} type="audio/mpeg"/>
                </audio>
            </div>
        );
    }
}

export default Audio;

