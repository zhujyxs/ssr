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
    constructor() {
        super();
        this.state = {
            loading: false,
        }
    }

    submitForm() {        
        const $ = (id) => {
            if(id !== 'date')
                return document.getElementById(id);
            else return document.getElementsByClassName('ant-calendar-picker-input')[0];
        }
    
        const array = ['name', 'people', 'id', 'date'];
        let url = 'http://localhost/addRule.php?';
        let isRight = true;
        array.forEach((attr) => {
            const value = $(attr).value;
            if(value) url = url + attr + '=' + value + '&';
            else {
                alert(attr+'不能为空');
                isRight = false;
            }
        });

        if(!isRight) return;
        this.setState({loading: true});
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = (res) => {
            if (res.target.response === 'success') {
                this.setState({ loading: false });
                document.forms[0].reset();
                $('date').value = '';
                notification.open({
                    message: '工单动态提醒',
                    description: '工单已提交，请关注后续动态',
                    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
                });
            }
            else console.log(res);
        };
        xhr.send();
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
                            <Input id="name" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout_short}
                            label="申报人姓名"
                        >
                            <Input id="people" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout_short}
                            label="申报人工号"
                        >
                            <Input id="id" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="申报理由"
                        >
                            <Input />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="截止日期"
                        >
                            <DatePicker id="date" showTime format="YYYY-MM-DD" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout_short}
                            label="是否接收动态通知"
                        >
                            <Switch defaultChecked />
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" loading={this.state.loading} onClick={this.submitForm.bind(this)}>提交</Button>
                        </FormItem>
                    </Form>
                </div>
            </Frame>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(SelfForm);