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
			imageTop: '',
			imageBottom: ''
		};
	}

	componentDidMount(){
		var myFetchOptions = {
			method: 'GET'
		};

		fetch("http://app.meljianghu.com/api/activity/get_by_cate/46/1/1@2@3@4@5@6", myFetchOptions)
			.then(response => response.json())
			.then(json => {
				for (let item of json){
					if (item.id == this.props.params.id){
						this.setState({newsItem: item});
						this.setState({imageBottom: this.state.newsItem.img_url_bottom.replace('\\','').replace("/home/meljianghu","http:/")});
						this.setState({imageTop: this.state.newsItem.img_url_top.replace('\\','').replace("/home/meljianghu","http:/")});
						document.title = this.state.newsItem.title + " | 江湖活动平台";
						break;
					}
				}
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
					<Col span={14} className="detail-page">
						{/*<div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>*/}
						<h1>{this.state.newsItem.title}</h1>
						<p id={"view-count"}>{`浏览${this.state.newsItem.count_views_real}次`}</p>
						<p id="price">{`$${this.state.newsItem.unit_price}`}</p>
						<p id={"address"}>{`${this.state.newsItem.address}`}</p>
						<p id={"time"}>{`${this.state.newsItem.start_time} - ${this.state.newsItem.end_time}`}</p>
						<p id={"detail"}>{`活动详情：${this.state.newsItem.content}`}</p>
						{/*<img className="responsive-picture" src={this.state.imageTop} alt={this.state.group_logo_url} />*/}
						<img className="responsive-picture" src={this.state.imageBottom} alt={this.state.group_logo_url} />
					</Col>
					<Col span={6}>
						<PcNewsImageBlock count={20} type="top" width="100%" cardTitle="相关活动" imageWidth="140px" />
					</Col>
					<Col span={2}></Col>
				</Row>
				<PcFooter/>
				<BackTop/>
			</div>
		);
	}

}
