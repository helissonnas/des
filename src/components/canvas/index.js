import React from 'react';
import CanvasSettings from './canvasSettings';

import Layouts from './Layouts.const';
import Fonts from './Fonts.const';

const dimensions = [
  { width: 250, height: 250 },
  { width: 250, height: 325 },
  { width: 250, height: 450 }
];

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bg_url: '',
      logo_url: '',
      logo_load: false,
      layout: Layouts.Post,
      font: Fonts.Roboto
    };

    this._changeImg = this._changeImg.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  _changeImg() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    const base_image = new Image();
    base_image.src =
      this.state.bg_url ||
      'https://media.istockphoto.com/vectors/abstract-white-background-geometric-texture-vector-id1047507744';

    const logo = new Image();
    logo.src =
      this.state.logo_url ||
      'https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente14.png?fit=696%2C696&ssl=1';

    base_image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(base_image, 0, 0, canvas.width, canvas.height);

      ctx.drawImage(logo, 440, 450, 50, 50);
    };
  }

  setValue(key, value) {
    switch (key) {
      case 'bg_url':
        this.setState({ bg_url: value });
        break;
      case 'logo_url':
        this.setState({ logo_url: value });
        break;
      case 'layout':
        this.setState({ layout: value });
        break;
      case 'font':
        this.setState({ font: value });
        break;
      default:
        break;
    }

    this._changeImg();
  }

  render() {
    return (
      <div>
        <CanvasSettings
          bg_url={this.state.bg_url}
          logo_url={this.state.logo_url}
          layout={this.state.layout}
          font={this.state.font}
          setValue={this.setValue}
        />
        <button
          onClick={e => {
            e.preventDefault();
            this._changeImg();
          }}
        >
          Criar imagem
        </button>
        <canvas
          id='myCanvas'
          width={dimensions[this.state.layout].width}
          height={dimensions[this.state.layout].height}
        >
          Your browser does not support the canvas element.
        </canvas>
      </div>
    );
  }
}

export default Canvas;
