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

		var cun = [];
		var indexFound = "";
		fetch("http://app.meljianghu.com/api/activity/get_by_cate/16/1/1@2@3@4@5@6", myFetchOptions)
			.then(response => response.json())
			.then(json => {
				console.log(JSON.stringify(json[2]));
				console.log(this.props.params.id);

				if (json[2].id=="1408"){
					console.log("yes");
					console.log(typeof (json));
					console.log(this.props.params.id);
					console.log(length.json);
				}
				for (let item of json){
					if (item.id == this.props.params.id){
						console.log(item);
						console.log(item.id);
						this.setState({newsItem: item});
						this.setState({imageBottom: this.state.newsItem.img_url_bottom.replace('\\','').replace("/home/meljianghu","http:/")});
						document.title = this.state.newsItem.title + " | 江湖活动平台";
					}
				}

				// this.setState({newsItem: found});
				// this.setState({imageBottom: this.state.newsItem.img_url_bottom.replace('\\','').replace("/home/meljianghu","http:/")});
				// document.title = this.state.newsItem.title + " | 江湖活动平台";
			})

		// fetch("http://app.meljianghu.com/api/activity/get_by_cate/16/1/1@2@3@4@5@6", myFetchOptions)
		// .then(response => response.json())
		// .then(json => {
		// 	this.setState({newsItem: json[2]});
		// 	this.setState({imageBottom: this.state.newsItem.img_url_bottom.replace('\\','').replace("/home/meljianghu","http:/")});
		// 	document.title = this.state.newsItem.title + " | 江湖活动平台";
		// })


	}

	myFunction(value){
		console.log(value);
		console.log("value.id="+value[0]);
		console.log(this.props.params.id);
		return value.id.toString()==this.props.params.id.toString();
	}

	findItem(cun) {
		cun.map((cunItem,index)=>{
			console.log(this.props.params.id);
			console.log(index)
			if (cunItem.id == this.props.params.id){
				return index
			}
		});
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
						<img className="responsive-picture" src={this.state.imageBottom} alt={this.state.group_logo_url} />
						{/*<div>{this.state.imageBottom}</div>*/}
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
