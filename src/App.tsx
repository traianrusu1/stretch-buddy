import React from 'react';
import './App.css';
import { Layout, Row, Col } from 'antd';
import { Dashboard } from './components';

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{ color: '#fff', fontSize: '24px' }}>
          <Row justify="center">
            <Col>Lengthen</Col>
          </Row>
        </Header>
        <Content style={{ paddingTop: '20px', backgroundColor: '#fff' }}>
          <Row justify="center">
            <Col xs={20} sm={20} md={12} lg={8} xl={6}>
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
