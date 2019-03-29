import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
export default class PcNewsBlock extends React.Component {
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
		// .then(response => response.json())
		// .then(json => this.setState({news: json}));

		fetch("http://app.meljianghu.com/api/activity/get_by_cate/"+this.props.cate+"/1/1@2@3@4@5@6", myFetchOptions)
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
	}

	render(){
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<li key={index}>
					<Link to={`details/${newsItem.id}`} target="_blank">
						{newsItem.title}
					</Link>
				</li>
			))
			: '没有加载到任何新闻';

		return (
			<div className="topNewsList">
				<Card>
					<ul>
						{newsList}
					</ul>
				</Card>	
			</div>
		)
	}

}