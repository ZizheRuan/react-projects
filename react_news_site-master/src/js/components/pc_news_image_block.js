import React from 'react';
import {Card} from 'antd';
import { Link } from 'react-router'
export default class PCNewsImageBlock extends React.Component {
	constructor() {
		super();
		this.state = {
			news: ''
		};
	}
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
		fetch("http://app.meljianghu.com/api/"+this.props.type+this.props.cate+"/1/1@2@3@4@5@6", myFetchOptions)
			.then(response => response.json())
			.then(json => {
				var count = 0;
				for (let item of json){
					item.img_url_top = item.img_url_top.replace('\\','').replace("/home/meljianghu","http:/");
					item.img_url_bottom = item.img_url_bottom.replace('\\','').replace("/home/meljianghu","http:/");
					count += 1;
					if (count >= this.props.count){
						break;
					}
				}
				json = json.slice(0,this.props.count);
				this.setState({news: json})
			});
	};
	render() {
		const styleImage = {
			display: "block",
			width: this.props.imageWidth,
			height: "90px"
		};
		const styeH3 = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<div key={index} className="imageblock">
					<Link to={`details/${newsItem.id}`} target="_blank">
						<div className="custom-image">
							<img alt={newsItem.group_logo_url} style={styleImage} src={newsItem.img_url_top}/>
						</div>
						<div className="custom-card">
							<h3 style={styeH3}>{newsItem.title}</h3>
							<p>{newsItem.user_name}</p>
						</div>
					</Link>
				</div>
			))
			: '没有加载到任何活动';
		return (
			<div className="topNewsList">
				<Card title={this.props.cartTitle} bordered={true} style={{
					width: this.props.width
				}}>
					{newsList}
				</Card>
			</div>
		);
	};
}
