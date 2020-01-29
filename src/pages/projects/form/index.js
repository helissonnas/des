import React from 'react';
import { Row, Col } from 'antd';
import Canvas from '../../../components/canvas';
import FormActions from './formActions';

class ProjectForm extends React.Component {
  render() {
    return (
      <Row>
        <Col span={8}>
          <FormActions />
        </Col>
        <Col>
          <Canvas />
        </Col>
      </Row>
    );
  }
}

export default ProjectForm;
