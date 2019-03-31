import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, HashRouter} from 'react-router-dom';
import PcIndex from './components/pc_index';
import MobileIndex from './components/mobile_index'; 
import MediaQuery from 'react-responsive';
import PcNewsDetails from './components/pc_news_details';
import MobileDetails from './components/mobile_news_details';

export default class Root extends React.Component{ 
	render(){ 
		return ( 
			<div>   
    		<MediaQuery query='(min-device-width: 1224px)'>
    			<HashRouter>
    					<Route exact path="/" component={PcIndex}></Route>
						<Route path="/details/:id" component={PcNewsDetails}></Route>
				</HashRouter>
    		</MediaQuery>

			<MediaQuery query='(max-device-width: 1224px)'>
				<HashRouter>
					<Route exact path="/" component={MobileIndex}></Route>
					<Route path="/details/:id" component={MobileDetails}></Route>
				</HashRouter>
			</MediaQuery>
  		</div> 
		) 
	}
} 

ReactDOM.render(<Root/>, document.getElementById('main'));

