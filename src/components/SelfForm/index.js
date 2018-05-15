import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import './index.css';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

class Total extends Component {
    render() {
        return (
            <div className="formContainer">
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="工单名称"
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
                        label="申报人姓名"
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="申报人工号"
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="申报日期"
                    >
                        <Input />
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">提交</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
}

export default connect(mapStateToProps)(Home);