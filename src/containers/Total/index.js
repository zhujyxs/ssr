import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Tooltip, Col, Row } from 'antd';
import Frame from '../../components/Frame';
import './index.css';

class Total extends React.PureComponent {
    render() {
        return (
            <Frame selectKey={'1'}>
                <div>
                    <Row>
                        <Col span={6}>
                            <Card title="页面访问量" extra={<Tooltip placement="top" title={'统计页面PV'}><Icon type="info-circle-o" /></Tooltip>} >
                                <span className="specifyData" style={{ color: '#536ef1' }} >1123653</span>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="页面故障数" extra={<Tooltip placement="top" title={'三端统计bug数目'}><Icon type="info-circle-o" /></Tooltip>} >
                                <span className="specifyData" style={{ color: '#e82727' }}>2327</span>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="交易笔数" extra={<Tooltip placement="top" title={'总交易笔数'}><Icon type="info-circle-o" /></Tooltip>} >
                                <span className="specifyData" style={{ color: '#f78005' }}>50567</span>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="交易总金额" extra={<Tooltip placement="top" title={'总交易金额'}><Icon type="info-circle-o" /></Tooltip>} >
                                <span className="specifyData" style={{ color: '#f78005' }}>4865201</span>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Card title="全球交易分布图" extra={<Tooltip placement="top" title={'总交易金额趋势图'}><Icon type="info-circle-o" /></Tooltip>} >
                                <div id="canvas" />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Frame>
        );
    }
}

function mapStateToProps(state, ownProps) {
}

export default connect(mapStateToProps)(Total);
