import React from 'react';
import {Row, Col, BackTop} from 'antd';
import PcIndex from './pc_header';
import PcFooter from './pc_footer';
import PcNewsImageBlock from './pc_news_image_block';

export default class PcNewsDetails extends React.Component {
	constructor(){
		super();
		this.state = {
			newsItem: '',
			imageBottom: ''
		};
	}

	componentDidMount(){
		var myFetchOptions = {
			method: 'GET'
		};
		// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
		fetch("http://app.meljianghu.com/api/activity/get_by_cate/67/1/1@2@3@4@5@6", myFetchOptions)
		.then(response => response.json())
		.then(json => {
			this.setState({newsItem: json[2]});
			this.setState({imageBottom: this.state.newsItem.img_url_bottom.replace('\\','').replace("/home/meljianghu","http:/")});
			document.title = this.state.newsItem.title + " | 江湖活动平台";
		})

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
						{/*<div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>*/}
						<div>{this.state.newsItem.title}</div>
						<div>{`浏览${this.state.newsItem.count_views_real}次`}</div>
						<div>{`$${this.state.newsItem.unit_price}`}</div>
						<div>{`${this.state.newsItem.address}`}</div>
						<div>{`${this.state.newsItem.start_time} - ${this.state.newsItem.end_time}`}</div>
						<div>{`详情：${this.state.newsItem.des}`}</div>
						<img src={this.state.imageBottom} alt={this.state.group_logo_url} />
						<div>{this.state.imageBottom}</div>
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
