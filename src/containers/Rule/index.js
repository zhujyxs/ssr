import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Progress } from 'antd';
import { fetchRuleList } from '../../actions/ruleList';
import Frame from '../../components/Frame';
import './index.css';

const columns = [{
    title: '工单名称',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '截止日期',
    dataIndex: 'date',
    key: 'date',
}, {
    title: '发起人',
    dataIndex: 'people',
    key: 'people',
}, {
    title: '工号',
    key: 'id',
    dataIndex: 'id',
}, {
    title: '进度',
    key: 'progress',
    dataIndex: 'progress',
    render: number => <Progress percent={Number(number)} status={Number(number) === 100 ? 'success' : 'active'} />
}];

class Rule extends Component {
    static loadData({store, props}) {
        return store.dispatch(fetchRuleList());
    }

    componentDidMount() {
        this.props.dispatch(fetchRuleList());
    }

    render() {
        return (
            <Frame selectKey={'3'}>
                <div className="tableConatiner">
                    <Table dataSource={this.props.ruleList||[]} columns={columns} />
                </div>
            </Frame>
        );
    }
}

function mapStateToProps(state) {
    const { ruleList, dispatch } = state;
    return {
        ruleList,
        dispatch
    };
}

export default connect(mapStateToProps)(Rule);