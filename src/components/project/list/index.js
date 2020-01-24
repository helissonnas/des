import React from 'react';
import { Pagination, Row, Col } from 'antd';
import ProjectModel from '../ProjectModel';
import ProjectCard from '../card';

const projs_mock = [
  new ProjectCard({
    id: 'wewe',
    name: 'Project 1',
    layout: 0,
    components: [],
    background: 'https://images.pexels.com/photos/1227520/pexels-photo-122752'
  })
];

class ProjectList extends React.Component {
  render() {
    return (
      <div>
        <Row>
          {projs_mock.map(proj => (
            <ProjectCard project={proj} />
          ))}
        </Row>
        <Row>
          <Pagination defaultCurrent={1} total={10} />
        </Row>
      </div>
    );
  }
}

export default ProjectList;
