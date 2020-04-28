import React, {Component} from 'react'

export class ProgressBar extends Component {
    scrollBar(){
            const scrollTop = document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight;
            const windHeight = document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / (docHeight - windHeight));
            const scrollBar = document.getElementById('scroolbar');
            scrollBar.style.width = `${scrollPercent * 100}%`;
    }
    componentDidMount() {
        window.addEventListener('scroll',this.scrollBar);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.scrollBar);
    }
    render() {
        const {
            color = 'red',
            height = '5px',
            bgColor = 'transparent',
            borderRadius = '0',
            zIndex = '100000000',
            top = '0',
            left = '0',
            position = 'fixed',
            ContainerStyle,
            ProgressBarStyle
        } = this.props;
        return (
            <div
                style={{
                zIndex: zIndex,
                position: position,
                top: top,
                left: left,
                width: '100%',
                height: height,
                backgroundColor: bgColor,
                overflow: 'hidden',
                ...ContainerStyle
            }}>
                <div
                    id="scroolbar"
                    style={{
                    height: '100%',
                    width: 0,
                    backgroundColor: color,
                    borderRadius: borderRadius,
                    ...ProgressBarStyle
                }}></div>
            </div>
        )
    }
}

export default ProgressBar;
