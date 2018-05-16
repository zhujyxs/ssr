import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, DatePicker, Switch, notification, Icon } from 'antd';
import Frame from '../../components/Frame';
import './index.css';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const formItemLayout_short = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailFormItemLayout = {
    wrapperCol: { span: 16, offset: 8 }
};

class SelfForm extends Component {
    submitForm() {
        notification.open({
            message: '工单动态提醒',
            description: '工单已提交，请关注后续动态',
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        });
    }

    render() {
        return (
            <Frame selectKey={'2'}>
            <div className="formContainer">
                <Form>
                    <FormItem
                        {...formItemLayout_short}
                        label="工单名称"
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                        {...formItemLayout_short}
                        label="申报人姓名"
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                        {...formItemLayout_short}
                        label="申报人工号"
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="申报理由"
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="申报日期"
                    >
                        <DatePicker showTime format="YYYY-MM-DD" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout_short}
                        label="是否接收动态通知"
                    >
                        <Switch defaultChecked />
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" onClick={this.submitForm}>提交</Button>
                    </FormItem>
                </Form>
            </div>
            </Frame>
        );
    }
}

function mapStateToProps(state, ownProps) {
}

export default connect(mapStateToProps)(SelfForm);