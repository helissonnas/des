import React from 'react';

import { Steps, Button, message, Card, Row, Form, Input } from 'antd';

import './FormActions.css';

const { Step } = Steps;

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
      <div
        className={`post-type ${props.selected ? 'selected' : ''}`}
        onClick={() => props.select(props.type.key)}
      >
        <img src={props.type.src} alt='Capa do tipo' />
        <span>{props.type.name}</span>
      </div>
    </Row>
  );
};

class FormActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Novo Projeto',
      description: '',
      type: null
    };

    this.select = this.select.bind(this);
  }

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

  select(key) {
    this.setState({ type: key });
  }

  render() {
    const { current } = this.props;
    const { getFieldDecorator } = this.props.form;

    const steps = [
      {
        title: this.state.name,
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
                initialValue: this.state.name
              })(<Input placeholder='Nome do projeto' />)}
            </Form.Item>
            <Form.Item label='Descrição'>
              {getFieldDecorator('description', {
                rules: [
                  {
                    message: 'Por favor, insira a descrição do projeto.'
                  }
                ],
                initialValue: this.state.description
              })(<Input.TextArea placeholder='Descrição do projeto' />)}
            </Form.Item>
          </>
        )
      },
      {
        title: 'Tipo do Projeto',
        content: (
          <>
            <Input.Search
              placeholder='Buscar tipo'
              className='form-search'
              onSearch={value => console.log(value)}
            />
            {types.map(type => (
              <Type
                key={type.key}
                type={type}
                selected={
                  this.state.type ? this.state.type === type.key : false
                }
                select={this.select}
              />
            ))}
          </>
        )
      },
      {
        title: 'Last',
        content: 'Last-content'
      }
    ];

    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <Card style={{ margin: '16px 16px 16px 0' }}>
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
            <Button
              type='primary'
              onClick={() => message.success('Processing complete!')}
            >
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
