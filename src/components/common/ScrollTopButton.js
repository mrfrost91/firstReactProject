import React, {Component} from 'react';

class ScrollTopButton extends Component {
    constructor(props) {
        super(props);
        this.state = {showScrollTopBtn: false};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.showScrollTopBtn.bind(this));
    }

    showScrollTopBtn() {
        if (window.pageYOffset > 400) {
            this.setState({showScrollTopBtn: true});
        } else {
            this.setState({showScrollTopBtn: false});
        }
    }

    scrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="button_scroll_top" onClick={this.scrollTop.bind(this)}
                 className={this.state.showScrollTopBtn ? "show" : "hide"}>
                <div>🢁</div>
            </div>
        );
    }
}

export default ScrollTopButton;
