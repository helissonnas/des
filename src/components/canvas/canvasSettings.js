import React from 'react';
import Fonts from './Fonts.const';
import Layouts from './Layouts.const';

class CanvasSettings extends React.Component {
  fontsList = Object.keys(Fonts);
  layoutsList = Object.keys(Layouts);

  render() {
    console.log(this.props);
    return (
      <div>
        <label htmlFor='bg-input'>Background</label>
        <input
          id='bg-input'
          type='text'
          value={this.props.bg_url}
          onChange={e => {
            e.preventDefault();
            this.props.setValue('bg_url', e.target.value);
          }}
        />

        <label htmlFor='logo-input'>Logo</label>
        <input
          id='logo-input'
          type='text'
          value={this.props.logo_url}
          onChange={e => {
            e.preventDefault();
            this.props.setValue('logo_url', e.target.value);
          }}
        />

        <label htmlFor='font-input'>Fonte</label>
        <select
          id='font-input'
          value={this.props.font}
          onChange={e => {
            e.preventDefault();
            this.props.setValue('font', e.target.value);
          }}
        >
          {this.fontsList.map((fontName, idx) => (
            <option value={idx + 1} key={fontName + idx}>
              {fontName}
            </option>
          ))}
        </select>

        <label htmlFor='layout-input'>Layout</label>
        <select
          id='laytout-input'
          value={this.props.layout}
          onChange={e => {
            e.preventDefault();
            this.props.setValue('layout', e.target.value);
          }}
        >
          {this.layoutsList.map((layoutName, idx) => (
            <option value={idx + 1} key={layoutName + idx}>
              {layoutName}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default CanvasSettings;
