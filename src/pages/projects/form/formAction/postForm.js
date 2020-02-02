import React from 'react';
import { Row } from 'antd';

const OfficeFormal = props => {
  return <Row></Row>;
};

const PostForm = props => {
  const form = {
    'office-formal': {},
    'personal-development': {},
    health: {}
  };

  return form[props.theme];
};

export default PostForm;
