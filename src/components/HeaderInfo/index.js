import React, { Component } from 'react';
import { Badge, Icon, Menu, Dropdown, Avatar } from 'antd';
import './index.css';

const menu = (
    <Menu>
        <Menu.Item>
            <Icon style={{ backgroundColor: '#fe5d58' }} type="mail" />
            <span >你收到了一份新消息</span>
        </Menu.Item>
        <Menu.Item>
            <Icon style={{ backgroundColor: '#fe5d58' }} type="mail" />
            <span>你收到了一份新消息</span>
        </Menu.Item>
        <Menu.Item>
            <Icon style={{ backgroundColor: '#3391e5' }} type="pushpin-o" />
            <span>任务已提交</span>
        </Menu.Item>
    </Menu>
);

class HeaderInfo extends Component {
    render() {
        return (<div className="headerInfo">
            <Dropdown overlay={menu} placement="bottomRight">
                <Badge count={3}>
                    <Icon type="bell" />
                </Badge>
            </Dropdown>
            <Avatar className="userIcon" style={{ backgroundColor: '#87d068' }} size="middle" icon="user" />
            <span>张一瞻</span>
        </div>);
    }
}

export default HeaderInfo;
