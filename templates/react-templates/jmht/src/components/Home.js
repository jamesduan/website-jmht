import React, { Component } from 'react'
import ReactSwiper from "reactjs-swiper"
// import '../css/home.css'
import eye from '../image/home/eye.svg'
import banner1 from '../image/home/home_banner1.jpg'
import t1 from '../image/home/p01.jpg'
import t3 from '../image/home/p03.jpg'
import t4 from '../image/home/p04.jpg'
import t5 from '../image/home/p05.jpg'
import t6 from '../image/home/p06.jpg'
import t7 from '../image/home/p07.jpg'
import t8 from '../image/home/p08.jpg'
import t9 from '../image/home/p09.jpg'
import t10 from '../image/home/p10.jpg'

import r1 from '../image/home/r01.jpg'
import r2 from '../image/home/r02.jpg'
import r3 from '../image/home/r03.jpg'
import r4 from '../image/home/r04.jpg'
import r5 from '../image/home/r05.jpg'
import r6 from '../image/home/r06.jpg'
import r7 from '../image/home/r07.jpg'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        const teaItems = [{
            image: t1,
            title: ''
        },
        {
            image: t5,
            title: ''
        },
        {
            image: t3,
            title: ''
        },
        {
            image: t4,
            title: ''
        },
        {
            image: t6,
            title: ''
        },
        {
            image: t7,
            title: ''
        },
        {

            image: t8,
            title: ''
        },
        {

            image: t9,
            title: ''
        },
        {
            image: t10,
            title: ''
        }];

        const rItems = [{
            image: r1,
            title: ''
        },
        {
            image: r2,
            title: ''
        },
        {
            image: r3,
            title: ''
        },
        {
            image: r4,
            title: ''
        },
        {
            image: r5,
            title: ''
        },
        {
            image: r6,
            title: ''
        },
        {

            image: r7,
            title: ''
        }
       ];

        const items = [{
            image: banner1,
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
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            loop: true,
            slidesPerView: 'auto',
            loopedSlides: 8,
        };

        const teaOptions = {
            preloadImages: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            loop: true,
            slidesPerView: 4,
            slidesPerGroup: 4,
            // effect : 'coverflow',
            // slidesPerView: 3,
            // centeredSlides: true,
            // navigation: {
            //     nextEl: '.tea-swiper-button-next',
            //     prevEl: '.tea-swiper-button-prev',
            // },
        }
        const rOptions = {
            preloadImages: true,
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            loop: true,
            slidesPerView: 4,
            slidesPerGroup: 4,
            // effect : 'coverflow',
            // slidesPerView: 3,
            // centeredSlides: true,
            // navigation: {
            //     nextEl: '.r-swiper-button-next',
            //     prevEl: '.r-swiper-button-prev',
            // },
        }

        return (
            <div className="h-content">
                {/* <div className="h-swiper"> */}
                <ReactSwiper options={swiperOptions} showPagination items={items} className="h-swiper" />
                {/* </div> */}
                <div className="h-wecando">
                    <div className="title xl-font g-default-color">关于九亩花田</div>
                    <div className="box">
                        <div className="top">
                            <div className="left">
                                <div className="img"></div>
                                <div className="content">
                                    <div className="title x-font g-default-color">九亩花田介绍</div>
                                    <div className="text g-p-color g-line-height">2015年本源集团着手新中式健康茶饮技术研发、茶饮品牌运营策划及茶饮技术团队建设，历时两年，2017年本源新中式健康茶饮品牌"九亩花田"正式投入市场，开启中国茶饮5.0时代。</div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="tttt hvr-grow">
                                    <div className="l"></div>
                                    <div className="r">
                                        <p className="x-font g-default-color">九亩花田茶饮</p>
                                        <div className="l-font g-default-color g-line-height">茶香喉，沁心田<br />
                                            味芳醇，意缱绻<br />
                                            九亩花田<br />
                                            九亩方圆，阳光一片<br />
                                            花田锦绣，芳华明媚</div>
                                    </div>
                                </div>
                                <div className="bbbb hvr-grow">
                                    <div className="l"></div>
                                    <div className="r">
                                        <div className="t x-font g-default-color" style={{ marginLeft: 31 }}>九亩花田软欧包</div>
                                        <div className="text l-font g-default-color font-space g-line-height" style={{ marginLeft: 31, marginTop: 10, marginRight: 31 }}>2017年本源新中式健康茶饮品牌"九亩花田"正式投入市场，开启中国茶饮5.0时代。</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom hvr-grow">
                            <div className="blank"></div>
                            <div className="info">
                                <div className="title g-default-color">形象设计/VI设计/门店设计</div>
                                <div className="content g-default-color g-line-height">2015年本源集团着手新中式健康茶饮技术研发、茶饮品牌运营策划及茶饮技术团队建设，历时两年，2017年本源新中式健康茶饮品牌”九亩花田 ” 正式投入市场，开启中国茶饮5.0时代。</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-products">
                    <div className="product-series">
                        <div className="title xl-font g-default-color">茶饮系列</div>
                        <div className="product-swiper">
                            {/* <div className="p1"></div>
                            <div className="p2"></div>
                            <div className="p3"></div>
                            <div className="p4"></div> */}
                            <ReactSwiper items={teaItems} options={teaOptions} showPagination={true}></ReactSwiper>
                            <div className="tea-swiper-button-next"></div>
                            <div className="tea-swiper-button-prev"></div>
                        </div>
                    </div>
                    <div className="product-series">
                        <div className="title xl-font g-default-color">软欧包系列</div>
                        <div className="product-swiper">
                            {/* <div className="r1"></div>
                            <div className="r2"></div>
                            <div className="r3"></div>
                            <div className="r4"></div> */}
                            <ReactSwiper items={rItems} options={rOptions} showPagination={true}></ReactSwiper>
                            <div className="tea-swiper-button-next"></div>
                            <div className="tea-swiper-button-prev"></div>
                        </div>
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
                    <div className="desc g-default-color g-line-height">
                        公司合伙开店体系有着稳定踏实的经营策略，及强而有力的市场趋势，给合伙人提供更多帮助，减低经营风险，稳定获利。公司具有完备的后勤支援管道，让九亩花田合伙人无后顾之忧，并以相互合理服务，良好的疏通到店原则，与创业合伙人一同开创事业的成功。
                    </div>
                </div>

                <div className="h-cooperation-process">
                    <div className="title g-default-color xl-font">合作流程</div>
                    <div className="process-list">
                        <div className="process-item">
                            <div className="avator01"></div>
                            <div className="text">
                                <div className="title g-default-color">项目咨询</div>
                                <div className="desc g-default-color g-line-height">前期沟通，对公司及项目进行了解</div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="avator02"></div>
                            <div className="text">

                                <div className="title g-default-color">实地考察</div>
                                <div className="desc g-default-color g-line-height">合作商有意向后实地考察公司了解</div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="avator03"></div>
                            <div className="text">
                                <div className="title g-default-color">资格审核</div>
                                <div className="desc g-default-color g-line-height">总部对合作商进行资格审核，确保</div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="avator04"></div>
                            <div className="text">
                                <div className="title g-default-color">合作签约</div>
                                <div className="desc g-default-color g-line-height">正式签约成为城市合伙人，合作商…</div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="avator05"></div>
                            <div className="text">
                                <div className="title g-default-color">总部培训</div>
                                <div className="desc g-default-color g-line-height">总部对合伙人进行技术及经营管理</div>
                            </div>
                        </div>
                        <div className="process-item">
                            <div className="avator06"></div>
                            <div className="text">
                                <div className="title g-default-color">新店开业</div>
                                <div className="desc g-default-color g-line-height" >门店试营业，总部在经营期间提供</div>
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
                            <div className="title g-default-color x-font font-space">20年专注健康生活服务产业</div>
                            <p className="g-default-color g-line-height" >广州本源健康产业有限公司，是一家多元化发展的企业，涉猎四大产业：餐饮连锁产业、餐饮原料产业、茶业产业、美妆服务产业。

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
                            <div className="img01"></div>
                            <div className="title x-font g-default-color">人活一壶茶</div>
                            <div className="content l-font g-default-color">不能想象，乡下的老茶馆若是消失了，那人们还怎么活下去。那茶叶，粗的；那茶壶，不但粗，还拙笨。窑场上的废壶，瘪的无…</div>
                            <div className="b">
                                <div className="time">2018-04-10</div>
                                <div className="count"><img src={eye} alt="查看"/></div>
                                <div className="num">17</div>
                            </div>
                        </div>
                        <div className="news-item">
                            <div className="img02"></div>
                            <div className="title x-font g-default-color">茶为席魂，心饮为上</div>
                            <div className="content l-font g-default-color">茶，解渴清心，以品为上。茶滋于水，水籍乎器。茶汤无形，无器不盛。器，为茶之父，道由器传。由茶和器而入的茶道，是…</div>
                            <div className="b">
                                <div className="time">2018-04-12</div>
                                <div className="count"><img src={eye} alt=""/></div>
                                <div className="num">9</div>
                            </div>
                        </div>
                        <div className="news-item">
                            <div className="img03"></div>
                            <div className="title x-font g-default-color">人活一壶茶</div>
                            <div className="content g-default-color">不能想象，乡下的老茶馆若是消失了，那人们还怎么活下去。那茶叶，粗的；那茶壶，不但粗，还拙笨。窑场上的废壶，瘪的无…</div>
                            <div className="b">
                                <div className="time">2018-04-12</div>
                                <div className="count"><img src={eye} alt=""/></div>
                                <div className="num">26</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-contact-us">
                    <div className="h-contact-us-img">
                        <div className="title g-default-color xl-font">联系我们</div>
                        <div className="section">
                            <div className="roadmap" onClick={() => { window.open("https://j.map.baidu.com/HMFiP", '_blank'); }}>
                            </div>
                            <div className="phonenumber">
                                <div className="g-default-color x-font">城市合伙人招募热线</div>
                                <div className="g-color" style={{ fontSize: 48 }}>400-969-8256</div>
                                <div className="g-default-color" style={{ fontSize: 16, paddingBottom: 5, marginTop: 40 }}>电话：020-86000108</div>
                                <div className="g-default-color" style={{ fontSize: 16, paddingBottom: 5 }}>传真：020-86000678</div>
                                <div className="g-default-color" style={{ fontSize: 16 }}>地址：广州市白云区机场路1962号国际单位E栋602</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

