import React from 'react';
import { Row } from 'antd';

const types = [
  {
    name: 'Post promovido no Instagram',
    key: 'insta-post-prom',
    description: 'Post promovido no Instagram',
    src:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGR9UsB5nJ8eQg3J8lX3SM7FA-KcwXQ4CXHOkNXWlTYfgLeBYw'
  },
  {
    name: 'Stories no Instagram',
    key: 'insta-post-stories',
    description: 'Post para storie do Instagram',
    src:
      'https://www.smallbizgenius.net/wp-content/uploads/2019/06/influencer-marketing-statistics.png'
  },
  {
    name: 'Post para feed de Instagram',
    key: 'insta-post-feed',
    description: 'Post para o feed do Instagram',
    src:
      'https://www.success.com/wp-content/uploads/2019/12/5-Tips-to-Become-a-Micro-Influencer.jpg'
  },
  {
    name: 'Post para Facebook',
    key: 'insta-post-facebook',
    description: 'Post para o feed do Facebook',
    src:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqwj12-581T1rl0uO5xViAhoS3krzEsqCbXd8eIYTWEndQxnBB'
  }
];

const Type = props => {
  return (
    <Row>
      <div className={`post-type`} onClick={() => props.select(props.type.key)}>
        <img src={props.type.src} alt='Capa do tipo' />
        <span>
          {props.selected && <div className='selected'></div>}
          {props.type.name}
        </span>
      </div>
    </Row>
  );
};

const TypeForm = props => {
  return (
    <>
      {types.map(type => (
        <Type
          key={type.key}
          type={type}
          selected={props.type ? props.type === type.key : false}
          select={props.selectType}
        />
      ))}
    </>
  );
};

export default TypeForm;
