import React from 'react';

import Layouts from './Layouts.const';
import Fonts from './Fonts.const';
import cell from '../../assets/cell/post.png';

import './Canvas.css';

const dimensions = [
  { width: 250, height: 250 },
  { width: 250, height: 325 },
  { width: 250, height: 450 }
];

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: Layouts.Post,
      font: Fonts.Roboto
    };
  }

  render() {
    return (
      <div>
        <div>
          <img src={cell} className='cell' alt='cellphone' />
          <canvas
            id='myCanvas'
            width={dimensions[this.state.layout].width}
            height={dimensions[this.state.layout].height}
          >
            Your browser does not support the canvas element.
          </canvas>
        </div>
      </div>
    );
  }
}

export default Canvas;
