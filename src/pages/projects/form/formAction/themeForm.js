import React from 'react';
import { Row, Input } from 'antd';

const Theme = props => {
  return (
    <Row>
      <div
        className={`post-theme`}
        onClick={() => props.select(props.theme.key)}
      >
        <img src={props.theme.src} alt='Capa do tema' />
        <span>
          {props.selected && <div className='selected'></div>}
          {props.theme.title}
        </span>
      </div>
    </Row>
  );
};

const ThemeForm = props => {
  return (
    <>
      <Row>
        <Input.Search
          placeholder='Buscar tema'
          className='form-search'
          onSearch={value => props.searchTheme(value)}
        />
      </Row>
      <Row>
        {props.themesArray.map(theme => (
          <Theme
            key={theme.key}
            theme={theme}
            selected={props.theme ? props.theme === theme.key : false}
            select={props.selectTheme}
          />
        ))}
      </Row>
    </>
  );
};

export default ThemeForm;
