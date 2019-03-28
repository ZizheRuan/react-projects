import React from 'react';
import {Row, Col, BackTop} from 'antd';
import PcIndex from './pc_header';
import PcFooter from './pc_footer';
import PcNewsImageBlock from './pc_news_image_block';

export default class PcNewsDetails extends React.Component {
	constructor(){
		super();
		this.state = {
			newsItem: ''
		};
	}

	componentDidMount(){
		var myFetchOptions = {
			method: 'GET'
		};
		// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
		fetch("http://app.meljianghu.com/api/activity/get_by_cate/67/1/1@2@3@4@5@6" + this.props.params.uniquekey, myFetchOptions)
		.then(response => response.json())
		.then(json => {
			this.setState({newsItem: json[0]});
			document.title = this.state.newsItem.title + " | 江湖活动平台";
		})
		console.log(this.state)
	}

	//将请求到的html结构放入div里
	createMarkup() {
		// return {__html: this.state.newsItem.pagecontent};
		return {__html: this.state.newsItem.title};
	}

	render(){
		return (
			<div>
				<PcIndex/>
				<Row>
					<Col span={2}></Col>
					<Col span={14} className="container">
						<div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
						<div>details</div>
						<div>{this.state.newsItem.title}</div>
					</Col>
					<Col span={6}>
						<PcNewsImageBlock count={20} type="top" width="100%" cardTitle="相关新闻" imageWidth="140px" />
					</Col>
					<Col span={2}></Col>
				</Row>
				<PcFooter/>
				<BackTop/>
			</div>
		);
	}


}
