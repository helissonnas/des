import React from 'react';
import { Row, Col } from 'antd';
import Canvas from '../../../components/canvas';
import FormActions from './formActions';

import data from '../../../assets/data';

const { themes } = data;

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      name: 'Novo Projeto',
      description: '',
      theme: '',
      bg_url: '',
      logo_url: '',
      logo_load: false,
      type: null,
      themesArray: themes
    };

    this.changeCurrent = this.changeCurrent.bind(this);
    this.selectTheme = this.selectTheme.bind(this);
    this.selectType = this.selectType.bind(this);
    this.changeImg = this.changeImg.bind(this);
  }

  changeCurrent(value) {
    this.setState({ current: value });
  }

  selectType(key) {
    this.setState({ type: key });
  }

  selectTheme(key) {
    this.setState({ theme: key });
  }

  searchTheme(value) {
    this.setState({
      themesArray: themes.filter(th => !!th.keywords.find(key => key === value))
    });
  }

  changeImg() {
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
      <Row style={{ height: '75vh' }} gutter={16}>
        <Col span={this.state.current < 3 ? 24 : 16}>
          <FormActions
            current={this.state.current}
            updateCurrent={this.changeCurrent}
            name={this.state.name}
            description={this.state.description}
            theme={this.state.theme}
            type={this.state.type}
            themesArray={this.state.themesArray}
            selectType={this.selectType}
            selectTheme={this.selectTheme}
            searchTheme={this.searchTheme}
            changeImg={this.changeImg}
          />
        </Col>
        <Col span={this.state.current < 3 ? 0 : 8}>
          <Canvas theme={this.state.theme} type={this.state.type} />
        </Col>
      </Row>
    );
  }
}

export default ProjectForm;
