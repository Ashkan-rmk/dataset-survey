import React, { Component } from 'react';
import '../../dist/css/index.css';
import 'antd/dist/antd.css';
import { Card, Row, Col, notification, Icon } from 'antd';
import Drawer from '../Drawer/drawer';

const { Meta } = Card;

const gridStyle = {
	textAlign: 'center',
};

const openNotification = () => {
	notification.open({
		message: 'عنوان تستی',
		description: 'متن توضیحات تستی',
		icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
	});
};

class Cards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			visible: false,

			visibleDrawer: false,
			visibleChildDrawer: false,
			placement: 'bottom',
		};

		this.closeDrawer = this.closeDrawer.bind(this);
	}

	notif(type) {
		notification.open({
			message: type,
			description: 'متن توضیحات تستی',
			icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
		});
	}

	showDrawer() {
		this.setState({ visibleDrawer: true });
	}

	closeDrawer() {
		this.setState({ visibleDrawer: false });
	}


	render() {
		return (
			<div>
				<h6 style={{fontSize:"3vw"}}>لطفا یکی از موضوعات زیر که پادکست‌های مرتبط با آن را شنیده‌اید انتخاب کنید</h6>
				<br />

				<Drawer
					visibleDrawer={this.state.visibleDrawer}
					closeDrawer={this.closeDrawer}
					visible={this.state.visible}
					closeModal={this.closeModal}
				/>
				<Row type="flex" justify="center" gutter={18} >
					<Col className="gutter-row"  xs={12} sm={6} style={{paddingBottom:"15px"}}	 >
						<Card key="history" hoverable style={gridStyle} onClick={this.notif.bind(this, 'تاریخ و ادبیات')}>
							<Meta title="تاریخ و ادبیات" />
						</Card>
					</Col>
					<Col className="gutter-row"  xs={12} sm={6} style={{paddingBottom:"15px"}}>
						<Card hoverable style={gridStyle} onClick={this.showDrawer.bind(this)}>
							<Meta title="تکنولوژی" />
						</Card>
					</Col>
					<Col className="gutter-row"  xs={12} sm={6}  style={{paddingBottom:"15px"}}>
						<Card hoverable style={gridStyle} onClick={this.showDrawer.bind(this)}>
							<Meta title="داستانی" />
						</Card>
					</Col>
					<Col className="gutter-row"  xs={12} sm={6} style={{paddingBottom:"15px"}}>
						<Card hoverable style={gridStyle} onClick={openNotification}>
							<Meta title="سینما و عکاسی" />
						</Card>
					</Col>
					<Col className="gutter-row"    xs={12} sm={6} style={{paddingBottom:"15px"}}  >
						<Card hoverable style={gridStyle} onClick={openNotification}>
							<Meta title="طنز" />
						</Card>
					</Col>
					<Col className="gutter-row"  xs={12} sm={6}  style={{paddingBottom:"15px"}}>
						<Card hoverable style={gridStyle} onClick={openNotification}>
							<Meta title="علمی" />
						</Card>
					</Col>
					<Col className="gutter-row"  xs={12} sm={6}  style={{paddingBottom:"15px"}}>
						<Card hoverable style={gridStyle} onClick={openNotification}>
							<Meta title="کسب و کار" />
						</Card>
					</Col>
					<Col className="gutter-row"  xs={12} sm={6} style={{paddingBottom:"15px"}} >
						<Card hoverable style={gridStyle} onClick={openNotification}>
							<Meta title="گفتگو محور" />
						</Card>
					</Col>
					<Col className="gutter-row"  xs={12} sm={6}  style={{paddingBottom:"15px"}}>
						<Card hoverable style={gridStyle} onClick={openNotification}>
							<Meta title="مسائل جنسی" />
						</Card>
					</Col>
					<Col className="gutter-row"  xs={12} sm={6} style={{paddingBottom:"15px"}}  >
						<Card hoverable style={gridStyle} onClick={openNotification}>
							<Meta title="موسیقی" />
						</Card>
					</Col>
					<Col className="gutter-row"  xs={12} sm={6} style={{paddingBottom:"15px"}} >
						<Card hoverable style={gridStyle} onClick={openNotification}>
							<Meta title="ورزش" />
						</Card>
					</Col>
					<Col className="gutter-row"  xs={12} sm={6} style={{paddingBottom:"15px"}} >
						<Card hoverable style={gridStyle} onClick={openNotification}>
							<Meta title="موضوعات دیگر" />
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Cards;
