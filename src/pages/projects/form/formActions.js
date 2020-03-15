import React from 'react';

import { Steps, Button, message, Card, Form, Input } from 'antd';

import './FormActions.css';
import ThemeForm from './formAction/themeForm';
import TypeForm from './formAction/typeForm';
import PostForm from './formAction/postForm';

const { Step } = Steps;

class FormActions extends React.Component {
  next() {
    this.check(() => {
      const current = this.props.current + 1;
      this.props.updateCurrent(current);
    });
  }

  prev() {
    const current = this.props.current - 1;
    this.props.updateCurrent(current);
  }

  check(callback) {
    this.props.form.validateFields(err => {
      if (!err) {
        this.setState(this.props.form.getFieldsValue(), callback);
      }
    });
  }

  render() {
    const { current } = this.props;
    const { getFieldDecorator } = this.props.form;

    const steps = [
      {
        title: this.props.name,
        content: (
          <>
            <Form.Item label='Nome do projeto'>
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor, insira nome do projeto.'
                  }
                ],
                initialValue: this.props.name
              })(<Input placeholder='Nome do projeto' />)}
            </Form.Item>
            <Form.Item label='Descrição'>
              {getFieldDecorator('description', {
                rules: [
                  {
                    message: 'Por favor, insira a descrição do projeto.'
                  }
                ],
                initialValue: this.props.description
              })(<Input.TextArea placeholder='Descrição do projeto' />)}
            </Form.Item>
          </>
        )
      },
      {
        title: 'Tema',
        content: (
          <ThemeForm
            theme={this.props.theme}
            themesArray={this.props.themesArray}
            selectTheme={this.props.selectTheme}
            searchTheme={this.props.selectTheme}
          />
        )
      },
      {
        title: 'Tipo do Projeto',
        content: (
          <TypeForm type={this.props.type} selectType={this.props.selectType} />
        )
      },
      {
        title: 'Detalhes',
        content: (
          <PostForm
            theme={this.props.theme}
            getFieldDecorator={getFieldDecorator}
          />
        )
      }
    ];

    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <Card style={{ margin: '16px 16px 16px 0', minHeight: '65vh' }}>
          <Form>
            <div className='steps-content'>{steps[current].content}</div>
          </Form>
        </Card>

        <div className='steps-action'>
          {current < steps.length - 1 && (
            <Button type='primary' onClick={() => this.next()}>
              Avançar
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type='primary' onClick={() => this.props.changeImg()}>
              Feito
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Voltar
            </Button>
          )}
        </div>
      </div>
    );
  }
}

const WrappedFormActions = Form.create()(FormActions);

export default WrappedFormActions;
