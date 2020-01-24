import React from 'react';
import { Layout, Menu } from 'antd';
import UrlPaths from '../../constants/UrlPaths';
import { Link } from 'react-router-dom';
import './Template.css';

const { Header, Content, Footer } = Layout;

class Template extends React.Component {
  render() {
    return (
      <Layout className='layout'>
        <Header theme='light'>
          <div className='logo' />
          <Menu
            theme='light'
            mode='horizontal'
            defaultSelectedKeys={['projects ']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key='projects'>
              <Link to={UrlPaths.projects}>Projetos</Link>
            </Menu.Item>
            <Menu.Item key='settings'>
              <Link to={UrlPaths.settings}>Configurações</Link>
            </Menu.Item>
            <Menu.Item key='payments'>
              <Link to={UrlPaths.payments}>Pagamento</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <div style={{ padding: 24 }}>{this.props.children}</div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Des ©2020 Beautifully simple.
        </Footer>
      </Layout>
    );
  }
}

export default Template;
