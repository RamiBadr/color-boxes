import { Component } from 'react';
import Box from './Box';
import './BoxesContainer.css';

class BoxesContainer extends Component{
    static defaultProps = {
        numBoxes: 20,
    };

    render() {
        const boxes = Array.from({length: this.props.numBoxes});
        return (
            <div className='BoxesContainer'>
                {boxes.map(() => <Box />)}
            </div>
        )
    }
}

export default BoxesContainer;