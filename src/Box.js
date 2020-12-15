import { Component } from 'react';
import { randomArr } from './helpers.js';
import './Box.css';

class Box extends Component {
    static defaultProps = {
        colors: [
            '#F44336',
            '#FFEBEE',
            '#FFCDD2',
            '#EF9A9A',
            '#E57373',
            '#EF5350',
            '#E53935',
            '#D32F2F',
            '#C62828',
            '#B71C1C',
            '#FF8A80',
            '#FF5252',
            '#FF1744',
            '#D50000',
            '#FCE4EC',
            '#F8BBD0',
            '#F48FB1',
            '#F06292',
            '#EC407A',
            '#E91E63',
            '#D81B60',
            '#C2185B'
        ]
    }

    constructor(props) {
        super(props);
        const colors = this.props.colors;
        this.randomColor = this.randomColor.bind(this);
        this.state = {
            color: colors[Math.floor(Math.random() * colors.length)]
        }
    }

    randomColor() {
        let color; 

        do {
            color = randomArr(this.props.colors);
        } while(color === this.state.color);

        this.setState({color});        

        // this.setState(pervSt => {
        //     if(pervSt.color === color) {
        //         this.randomColor();
        //     } else {
        //         return {color}
        //     }
        // });
    }

    render() {
        return <div className='Box' onClick={this.randomColor} style={{background: this.state.color}}></div>
    }
}

export default Box;