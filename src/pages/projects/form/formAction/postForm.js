import React from 'react';
import { Row } from 'antd';

import data from '../../../../assets/data';

const { formFields } = data;

const PostForm = props => {
  return (
    <Row>
      <Row>Post Title</Row>
      <Row>Post text</Row>
      <Row>Pallet Color Select</Row>
      <Row>Pallet Color Select</Row>
      <Row>Pallet Color Select</Row>
      <Row>Pallet Color Select</Row>
    </Row>
  );
};

export default PostForm;
