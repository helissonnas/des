import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bg_url: null,
      logo_url: null,
      logo_load: false
    };

    this._changeImg = this._changeImg.bind(this);
  }

  componentDidMount() {
    this._changeImg();
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

  render() {
    return (
      <div>
        <div>
          <div>
            <label for='bg-input'>Background</label>
            <input
              id='bg-input'
              type='text'
              value={this.state['bg_url']}
              onChange={e => {
                this.setState({ bg_url: e.target.value });
              }}
            />

            <label for='logo-input'>Logo</label>
            <input
              id='logo-input'
              type='text'
              value={this.state['logo_url']}
              onChange={e => {
                this.setState({ logo_url: e.target.value });
              }}
            />
            <button
              onClick={e => {
                e.preventDefault();
                this._changeImg();
              }}
            >
              Criar imagem
            </button>
          </div>
        </div>
        <canvas id='myCanvas' width='500' height='510'>
          Your browser does not support the canvas element.
        </canvas>
      </div>
    );
  }

  getValue(key) {
    return this.state[key];
  }
}

export default Canvas;
