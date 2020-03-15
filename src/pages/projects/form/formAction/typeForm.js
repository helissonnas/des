import React from 'react';
import { Row } from 'antd';

import data from '../../../../assets/data';

const { types } = data;

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
