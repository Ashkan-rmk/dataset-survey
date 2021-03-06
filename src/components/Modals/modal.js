import React, { Component } from 'react';
import '../../dist/css/index.css';
import 'antd/dist/antd.css';
import { Modal, Button, Icon, Slider } from 'antd';

class Modals extends Component {
	state = {
		loading: false,
		values: [],
		subjects: [],
		value: 0,
	};
	componentDidMount(){
		
	}

	handleOk = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false });
			this.handleCancel();
		}, 3000);
	};

	handleCancel() {
		this.props.closeModal();
	}

	handleChange = value => {
		this.setState({ value });
	};

	render() {
		const { loading } = this.state;

		const max = 5;
		const min = 1;
		const { value } = this.state;
		const mid = ((max - min) / 2).toFixed(5);
		const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
		const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';

		return (
			<div>
				<Modal
					visible={this.props.visible}
					title="Title"
					onOk={this.handleOk}
					onCancel={this.handleCancel.bind(this)}
					footer={[
						<Button key="back" onClick={this.handleCancel.bind(this)}>
							Return
						</Button>,
						<Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
							Submit
						</Button>,
					]}>

					<div style={{ display: 'flex' }}>
						<div className="icon-wrapper" style={{ flex: 1 }}>
							<Icon style={{ color: preColor }} type="frown-o" />
							<Slider max={5} min={1} onChange={this.handleChange} value={value} />
							<Icon style={{ color: nextColor }} type="smile-o" />
						</div>
						<p style={{ flex: 0.1 }}>روانشناسی</p>
					</div>
					<div style={{ display: 'flex' }}>
						<div className="icon-wrapper" style={{ flex: 1 }}>
							<Icon style={{ color: preColor }} type="frown-o" />
							<Slider max={5} min={1} onChange={this.handleChange} value={value} />
							<Icon style={{ color: nextColor }} type="smile-o" />
						</div>
						<p style={{ flex: 0.1 }}>سلامت</p>
					</div>
					<div style={{ display: 'flex' }}>
						<div className="icon-wrapper" style={{ flex: 1 }}>
							<Icon style={{ color: preColor }} type="frown-o" />
							<Slider max={5} min={1} onChange={this.handleChange} value={value} />
							<Icon style={{ color: nextColor }} type="smile-o" />
						</div>
						<p style={{ flex: 0.1 }}>اجتماعی</p>
					</div>
				</Modal>
			</div>
		);
	}
}

export default Modals;
