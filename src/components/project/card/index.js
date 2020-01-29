import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

import UrlPaths from '../../../constants/UrlPaths';

import './Card.css';

class ProjectCard extends React.Component {
  render() {
    return (
      <Link to={UrlPaths.project + '/' + this.props.project.id}>
        <Card
          className='project-card'
          cover={
            <img alt='Capa do projeto' src={this.props.project.background} />
          }
        >
          {this.props.project.name}
        </Card>
      </Link>
    );
  }
}

export default ProjectCard;
