import React, { Component } from 'react'
import ReactSwiper from "reactjs-swiper"
import '../css/home.css'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        const items = [{
            image: 'http://img.mp.itc.cn/upload/20170502/073f32d8f7584aa098b3bd0034f5ac4b_th.jpg',
            title: '图片1',
            // link: 'http://img.mp.itc.cn/upload/20170502/073f32d8f7584aa098b3bd0034f5ac4b_th.jpg'
        }, {
            image: 'http://img1.imgtn.bdimg.com/it/u=1612673997,300400264&fm=27&gp=0.jpg',
            title: '图片2',
        }, {
            image: 'http://n1.itc.cn/img8/wb/recom/2016/08/26/147219038975867386.JPEG',
            title: '图片3',
        }, {
            image: 'http://i2.hdslb.com/bfs/archive/c9b6cb35a57ece5bf85056c7c17fc95fd3f6a527.jpg',
            title: '图片4',
        }]
        const swiperOptions = {
            preloadImages: true,
            autoplay: 30000,
            autoplayDisableOnInteraction: false,
            // loop: true,
            // slidesPerView : 1.2,
            loop: true,
            slidesPerView: 'auto',
            loopedSlides: 8,
        };
        return (
            <div className="h-content">
                {/* <div className="h-swiper"> */}
                <ReactSwiper swiperOptions={swiperOptions} showPagination items={items} className="h-swiper" />
                {/* </div> */}
                <div className="h-wecando">
                    <div className="title xl-font g-default-color">关于九亩花田</div>
                    <div className="box">
                        <div className="top">
                            <div className="left">
                            </div>
                            <div className="right">
                                <div className="t"></div>
                                <div className="b"></div>
                            </div>
                        </div>
                        <div className="bottom"></div>
                    </div>
                </div>

                <div className="h-products">
                    <div className="product-series">
                        <div className="title xl-font g-default-color">茶饮系列</div>
                        <div className="product-swiper"></div>
                    </div>
                    <div className="product-series">
                        <div className="title xl-font g-default-color">软欧包系列</div>
                        <div className="product-swiper"></div>
                    </div>
                </div>

                <div className="h-store-distribution">
                    <div className="title x-font g-default-color">全国店铺分布</div>
                    <div className="mapbox">
                        <div className="map"></div>
                        <div className="alalytics">
                            <div className="item">
                                <div className="icon"></div>
                                <div className="text">
                                    <div className="name g-default-color x-font">覆盖重点城市</div>
                                    <div className="number">50+</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon"></div>
                                <div className="text">
                                    <div className="name g-default-color x-font">服务加盟门店</div>
                                    <div className="number">120+</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon"></div>
                                <div className="text">
                                    <div className="name g-default-color x-font">服务都市消费人群</div>
                                    <div className="number">4,000,000+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="desc g-default-color">
                        公司合伙开店体系有着稳定踏实的经营策略，及强而有力的市场趋势，给合伙人提供更多帮助，减低经营风险，稳定获利。公司具有完备的后勤支援管道，让九亩花田合伙人无后顾之忧，并以相互合理服务，良好的疏通到店原则，与创业合伙人一同开创事业的成功。
                    </div>
                </div>

                <div className="h-cooperation-process">
                    <div className="title g-default-color xl-font">合作流程</div>
                    <div className="process-list">
                        <div className="process-item">
                            <div className="avator"></div>
                            <div className="text">
                                <div className="title g-default-color">项目咨询</div>
                                <div className="desc g-default-color">前期沟通，对公司及项目进行了解</div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="avator"></div>
                            <div className="text">

                                <div className="title g-default-color">实地考察</div>
                                <div className="desc g-default-color">合作商有意向后实地考察公司了解</div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="avator"></div>
                            <div className="text">

                                <div className="title g-default-color">资格审核</div>
                                <div className="desc g-default-color">总部对合作商进行资格审核，确保</div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="avator"></div>
                            <div className="text">
                                <div className="title g-default-color">合作签约</div>
                                <div className="desc g-default-color">正式签约成为城市合伙人，合作商…</div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="avator"></div>
                            <div className="text">
                                <div className="title g-default-color">总部培训</div>
                                <div className="desc g-default-color">总部对合伙人进行技术及经营管理</div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="avator"></div>
                            <div className="text">
                                <div className="title g-default-color">新店开业</div>
                                <div className="desc g-default-color" >门店试营业，总部在经营期间提供</div>
                            </div>
                        </div>
                    </div>
                    <div className="detail g-default-color hvr-fade"><p>了解详情</p></div>
                </div>

                <div className="h-aboutus">
                    <div className="title g-default-color xl-font">
                        企业介绍
                    </div>
                    <div className="content">
                        <div className="text">
                            <div className="title g-default-color x-font">20年专注健康生活服务产业</div>
                            <p className="g-default-color l-font">广州本源健康产业有限公司，是一家多元化发展的企业，涉猎四大产业：餐饮连锁产业、餐饮原料产业、茶业产业、美妆服务产业。

公司创办已有20多年历史，并于2015年在广州股权交易中心挂牌上市。公司本着“万物之本，包罗万象，源源不断”的品牌理念，以“上善若水“为品牌内涵，对产品严格品控，层层把关，致力于为消费者提供健康、有品质的生活。
</p>
                        </div>
                        <div className="coperation-introduce"></div>
                    </div>
                </div>

                <div className="h-news">
                    <div className="title g-default-color xl-font">新闻资讯</div>
                    <div className="news-list">
                        <div className="news-item">
                            <div className="img"></div>
                            <div className="title"></div>
                            <div className="content"></div>
                            <div className="b">
                                <div className="time"></div>
                                <div className="count"></div>
                            </div>
                        </div>
                        <div className="news-item">
                            <div className="img"></div>
                            <div className="title"></div>
                            <div className="content"></div>
                            <div className="b">
                                <div className="time"></div>
                                <div className="count"></div>
                            </div>
                        </div>
                        <div className="news-item">
                            <div className="img"></div>
                            <div className="title"></div>
                            <div className="content"></div>
                            <div className="b">
                                <div className="time"></div>
                                <div className="count"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-contact-us">
                    <div className="title g-default-color xl-font">联系我们</div>
                    <div className="section">
                        <div className="roadmap">
                        </div>
                        <div className="phonenumber">
                            <div className="g-default-color x-font">城市合伙人招募热线</div>
                            <div className="g-color" style={{ fontSize: 48 }}>400-969-8256</div>
                            <div className="g-default-color" style={{ fontSize: 16, paddingBottom: 5, marginTop: 10 }}>电话：020-86000108</div>
                            <div className="g-default-color" style={{ fontSize: 16, paddingBottom: 5 }}>传真：020-86000678</div>
                            <div className="g-default-color" style={{ fontSize: 16 }}>地址：广州市白云区机场路1962号国际单位E栋602</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

