import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
import HeaderInfo from '../headerInfo';
import 'antd/dist/antd.css';
import './index.css';

const { Header, Sider, Content } = Layout;

class Frame extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout id="layout">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo">
                        <div className="pic" />
                        {!this.state.collapsed && <div className="title">tseo demo</div>}
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.selectKey]}>
                        <Menu.Item key="1">
                            <Link to="/">
                                <Icon type="dashboard" />
                                <span>总体数据</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/form">
                                <Icon type="form" />
                                <span>表单填写</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/rule">
                                <Icon type="table" />
                                <span>任务列表</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <HeaderInfo />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Frame;