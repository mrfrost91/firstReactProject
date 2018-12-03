import React, {Component} from 'react';

class ScrollTopButton extends Component {
    constructor(props) {
        super(props);
        this.state = {isScrollTopBtnShown: false};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.showScrollTopBtn.bind(this));
    }

    showScrollTopBtn() {
        if (window.pageYOffset > 400) {
            this.setState({isScrollTopBtnShown: true});
        } else {
            this.setState({isScrollTopBtnShown: false});
        }
    }

    scrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="button_scroll_top" onClick={this.scrollTop.bind(this)}
                 className={this.state.isScrollTopBtnShown ? "show" : "hide"}>
                <div>🢁</div>
            </div>
        );
    }
}

export default ScrollTopButton;
