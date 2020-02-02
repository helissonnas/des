import React from 'react';

import { Steps, Button, message, Card, Form, Input } from 'antd';

import './FormActions.css';
import ThemeForm from './formAction/themeForm';
import TypeForm from './formAction/typeForm';
import PostForm from './formAction/postForm';

const { Step } = Steps;

const themes = [
  {
    key: 'office-formal',
    title: 'Escritório Formal',
    src:
      'https://www.veroniquesophie.com/wp-content/uploads/2016/03/FullSizeRender-2.jpg',
    keywords: [
      'escritorio',
      'advocacia',
      'imobiliaria',
      'formal',
      'empresa',
      'direito'
    ]
  },
  {
    key: 'personal-development',
    title: 'Desenvolvimento Pessoal',
    src:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu7T9ZFr0puId890MCOT2T_Wv4k_ThjlsJV9DsG4Rj5lEuHBLC',
    keywords: [
      'mentoria',
      'coach',
      'yoga',
      'personal',
      'aula',
      'ensino',
      'revisao'
    ]
  },
  {
    key: 'health',
    title: 'Saúde e Cuidado',
    src:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlpHURpmOg1IROaWW5Q8qgUXLakcvFpQXwpKFwQEVa6T9Yb-po',
    keywords: [
      'saude',
      'medicina',
      'odontologia',
      'nutricao',
      'consultorio',
      'farmacia',
      'fisioterapia'
    ]
  }
];

class FormActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Novo Projeto',
      description: '',
      theme: '',
      type: null,
      themesArray: themes
    };

    this.selectTheme = this.selectTheme.bind(this);
    this.selectType = this.selectType.bind(this);
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

  selectType(key) {
    this.setState({ type: key });
  }

  selectTheme(key) {
    this.setState({ theme: key });
  }

  searchTheme(value) {
    this.setState({
      themesArray: themes.filter(th => !!th.keywords.find(key => key === value))
    });
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
        title: 'Tema',
        content: (
          <ThemeForm
            theme={this.state.theme}
            themesArray={this.state.themesArray}
            selectTheme={this.selectTheme}
            searchTheme={this.selectTheme}
          />
        )
      },
      {
        title: 'Tipo do Projeto',
        content: (
          <TypeForm type={this.state.type} selectType={this.selectType} />
        )
      },
      {
        title: 'Detalhes',
        content: (
          <PostForm
            theme={this.state.theme}
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
