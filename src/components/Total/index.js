import React, { Component } from 'react';
import { Card, Icon, Tooltip, Col, Row } from 'antd';
import G2 from '@antv/g2';
import './total.css';

class Total extends Component {
	componentDidMount() {
		var data = [{
			year: '5/12',
			value: 4123
		}, {
			year: '5/13',
			value: 4236
		}, {
			year: '5/14',
			value: 5612
		}, {
			year: '5/15',
			value: 7651
		}, {
			year: '5/16',
			value: 3456
		}, {
			year: '5/17',
			value:4446
		}, {
			year: '5/18',
			value: 5876
		}, {
			year: '5/19',
			value: 4988
		}];
		var chart = new G2.Chart({
			container: 'canvas',
			width: 1000,
			height: 400, 
		});
		chart.source(data);
		chart.scale('value', {
			tickInterval: 1000
		});
		chart.interval().position('year*value');
		chart.render();
	}

	render() {
		return (
			<div>
				<Row>
					<Col span={6}>
						<Card title="页面访问量" extra={<Tooltip placement="top" title={'统计页面PV'}><Icon type="info-circle-o" /></Tooltip>} >
							<span className="specifyData" style={{ color: '#536ef1'}} >1123653</span>
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
						<Card title="交易金额趋势(k)" extra={<Tooltip placement="top" title={'总交易金额趋势图'}><Icon type="info-circle-o" /></Tooltip>} >
							<div id="canvas" />
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Total;