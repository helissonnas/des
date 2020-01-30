import React from 'react';
import { Row, Col } from 'antd';
import Canvas from '../../../components/canvas';
import FormActions from './formActions';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };

    this.changeCurrent = this.changeCurrent.bind(this);
  }

  changeCurrent(value) {
    this.setState({ current: value });
  }

  render() {
    return (
      <Row style={{ height: '75vh' }} gutter={16}>
        <Col span={this.state.current < 2 ? 24 : 8}>
          <FormActions
            current={this.state.current}
            updateCurrent={this.changeCurrent}
          />
        </Col>
        <Col span={this.state.current < 2 ? 0 : 16}>
          <Canvas />
        </Col>
      </Row>
    );
  }
}

export default ProjectForm;
