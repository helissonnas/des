import React from 'react';
import { Card } from 'antd';

class ProjectCard extends React.Component {
  render() {
    console.log(this.props.project);
    return <Card>{this.props.project.name}</Card>;
  }
}

export default ProjectCard;
