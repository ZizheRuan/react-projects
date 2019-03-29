import React from 'react';
import {Row, Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import PcNewsBlock from './pc_news_block';
import PcNewsImageBlock from './pc_news_image_block';
import PcProduct from './pc_products';

const TabPane = Tabs.TabPane;

export default class PcNewsContainer extends React.Component {
	render() {

    const settings = {
        dots:true,
        infinite:true,
        speed: 500,
        slidesToShow:1,
        autoplay:true,
        touchMove: true,
        swipeToSlide: true
    }; 

		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">

                        <div className="leftContainer">
                          <div className="carousel">
                            <Carousel {...settings}>
                              <div><img src="./src/images/carousel_1.png"/></div>
                              <div><img src="./src/images/carousel_2.png"/></div>
                              <div><img src="./src/images/carousel_3.jpg"/></div>
                              <div><img src="./src/images/carousel_4.png"/></div>
                            </Carousel>
                          </div>
                          <PcNewsImageBlock count={6} type="guoji" width="400px" cartTitle="精选活动" imageWidth="112px"/>
                        </div>

                        <Tabs className="tabs_news">
                                        <TabPane tab="为您推荐" key="1">
                                            <PcNewsBlock count={22} type="top" bordered="false" />
                                        </TabPane>
                                        <TabPane tab="种草专区" key="2">
                                            <PcNewsBlock count={22} type="guoji" bordered="false" />
                                        </TabPane>
                        </Tabs>

                        <Tabs class="tabs_product">
                          <TabPane tab="当季最热活动" key="1">
                            <PcProduct/>
                          </TabPane>
                        </Tabs>

                        <div>
                          <PcNewsImageBlock count={8} cate="46" width="100%" cartTitle="当季最热活动" imageWidth="132px"/>
                          <PcNewsImageBlock count={8} cate="46" width="100%" cartTitle="活跃社团" imageWidth="132px"/>
                        </div>

                     </Col>

					 <Col span={2}></Col>
				</Row>
			</div>
		);
	};
}