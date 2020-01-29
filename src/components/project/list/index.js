import React from 'react';
import { Pagination, Row, Col } from 'antd';
import ProjectModel from '../ProjectModel';
import ProjectCard from '../card';

const projs_mock = [
  {
    id: 'wewe',
    name: 'Project 1',
    layout: 0,
    components: [],
    background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDsp7-sF6INZfYxQ7FYRhrokEyyD7fVJFBEDwXYi2LrfrsJq4Q'
  },
  {
    id: 'wewe',
    name: 'Project 1',
    layout: 0,
    components: [],
    background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDsp7-sF6INZfYxQ7FYRhrokEyyD7fVJFBEDwXYi2LrfrsJq4Q'
  },
  {
    id: 'wewe',
    name: 'Project 1',
    layout: 0,
    components: [],
    background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDsp7-sF6INZfYxQ7FYRhrokEyyD7fVJFBEDwXYi2LrfrsJq4Q'
  },
  {
    id: 'wewe',
    name: 'Project 1',
    layout: 0,
    components: [],
    background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDsp7-sF6INZfYxQ7FYRhrokEyyD7fVJFBEDwXYi2LrfrsJq4Q'
  }
];

class ProjectList extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={16} style={{ marginBottom: '16px', minHeight: '65vh' }}>
          {projs_mock.map((proj, idx) => (
            <Col span={6}>
              <ProjectCard key={idx} project={proj} />
            </Col>
          ))}
        </Row>
        <Row type='flex' align='middle'>
          <Pagination defaultCurrent={1} total={3} />
        </Row>
      </div>
    );
  }
}

export default ProjectList;
