import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { Dashboard } from './components';

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '20px 50px' }}>
          <div className="site-layout-content">
            <Dashboard />
          </div>
        </Content>
      </Layout>
      ,
    </div>
  );
};

export default App;
