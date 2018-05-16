import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import Frame from '../../components/Frame';
import './index.css';

const dataSource = [{
    key: '1',
    name: '工单1',
    date: '2018-05-12',
    people: '张一瞻',
    progress: '50'
}, {
    key: '2',
    name: '工单2',
    date: '2018-05-13',
    people: '张一瞻',
    progress: '40'
}, {
    key: '3',
    name: '工单3',
    date: '2018-05-14',
    people: '张一瞻',
    progress: '100'
}, {
    key: '4',
    name: '工单4',
    date: '2018-05-15',
    people: '张一瞻',
    progress: '50'
}, {
    key: '5',
    name: '工单5',
    date: '2018-05-16',
    people: '张一瞻',
    progress: '50'
}];

const columns = [{
    title: '任务名称',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '提交日期',
    dataIndex: 'date',
    key: 'date',
}, {
    title: '发起人',
    dataIndex: 'people',
    key: 'people',
}, {
    title: '进度',
    dataIndex: 'progress',
    key: 'progress',
}];

class Rule extends Component {
    render() {
        return (
            <Frame selectKey={'3'}>
                <div className="tableConatiner">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </Frame>
        );
    }
}

function mapStateToProps(state, ownProps) {
}

export default connect(mapStateToProps)(Rule);