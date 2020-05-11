import React from 'react';
import './App.css';
import { Layout, Row, Col } from 'antd';
import { Dashboard } from './components';

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          {/* <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
        </Header>
        <Content style={{ paddingTop: '20px', backgroundColor: '#fff' }}>
          <Row justify="center">
            <Col xs={22} sm={20} md={12} lg={8} xl={6}>
              <div className="site-layout-content">
                <Dashboard />
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
