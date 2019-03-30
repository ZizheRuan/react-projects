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
	// componentWillMount() {
	// 	var myFetchOptions = {
	// 		method: 'GET'
	// 	};
	// 	// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
	// 	fetch("http://app.meljianghu.com/api/"+this.props.type+this.props.cate+"/1/1@2@3@4@5@6", myFetchOptions)
	// 		.then(response => response.json())
	// 		.then(json => {
	// 			var count = 0;
	// 			for (let item of json){
	// 				item.img_url_top = item.img_url_top.replace('\\','').replace("/home/meljianghu","http:/");
	// 				item.img_url_bottom = item.img_url_bottom.replace('\\','').replace("/home/meljianghu","http:/");
	// 				count += 1;
	// 				if (count >= this.props.count){
	// 					break;
	// 				}
	// 			}
	// 			json = json.slice(0,this.props.count);
	// 			this.setState({news: json})
	// 		});
	// };



	// componentWillMount() {
	// 	var {body} = {
	// 			"phone":"0415432651",
	// 			"password":"12345678",
	// 			"password_confirmation":"13345678",
	// 			"city_id":"1",
	// 			"city":"墨尔本"
	// 	}
	// 	var myFetchOptions = {
	// 		method: 'POST',
	// 		headers:{"Content-Type":"application/json","Accept":"application/json"},
	// 		body: JSON.stringify(body)
	// 	};
	// 	// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
	// 	fetch("http://app.meljianghu.com/api/user/register", myFetchOptions)
	// 		.then(response => response.json())
	// 		.then(json => {
	// 			console.log(json.length+"reponse of post:"+json);
	// 			this.setState({news: json});
	// 		});
	// };


	// componentWillMount() {
	// 	var {body} = {
	// 		"phone":"0415432651",
	// 	}
	// 	var myFetchOptions = {
	// 		method: 'POST',
	// 		// headers:{"Access-Control-Allow-Origin":"*"},
	// 		body: JSON.stringify(body)
	// 	};
	// 	// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
	// 	fetch("http://app.meljianghu.com/api/user/check-phone", myFetchOptions)
	// 		.then(response => response.json())
	// 		.then(json => {
	// 			console.log("reponse of post:"+json)
	// 			this.setState({news: json})
	// 		});
	// };


	// componentWillMount() {
	// 	var myFetchOptions = {
	// 		method: "POST",
	// 		headers:{"Content-Type":"application/json"},
	// 		body: JSON.stringify({
	// 			phone:"0415432654",
	// 			password:"12345678",
	// 			password_confirmation:"12345678"
	// 		})
	// 	};
	// 	console.log(myFetchOptions.method);
	// 	console.log(myFetchOptions.headers);
	// 	console.log(myFetchOptions.body);
	//
	// 	fetch('http://app.meljianghu.com/api/user/change-pwd', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/x-www-form-urlencoded',
	// 		},
	// 		body: JSON.stringify({
	// 			phone: '0415432654',
	// 			password: '12345678',
	// 			password_confirmation: '12345678'
	// 		})
	// 	}).then(response =>{
	// 		console.log(response);
	// 		console.log(response.text());
	// 		this.setState({news:response})
	// 	})


	componentWillMount() {
		fetch('https://cors-anywhere.herokuapp.com/https://app.meljianghu.com/api/user/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				"Accept": "application/json"
			},
			body: JSON.stringify({
				phone: '0415432653',
				password: '12345678',
				password_confirmation:'12345678',
				city_id:'1',
				city:'melbourne'
			})
		}).then(response =>{
			console.log(response);
			console.log(response.text());
			this.setState({news:response})
		})




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
