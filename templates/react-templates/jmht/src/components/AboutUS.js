import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'

import arrowRight from '../image/home/ic_arrowright.svg'

const Intro = (props) => {
    return (
        <div className="intro">
            <div className="top">
                <div className="img"></div>
                <div className="text-box">
                    <div className="title">广州本源健康产业有限公司</div>
                    <div className="p">广州本源健康产业有限公司，源自1992年成立的广州本源茶叶贸易有限公司，公司历经20多年的发展，现公司已实现多元化发展，涉猎四大产业：餐饮连锁产业、餐饮原料产业、茶业产业、美妆服务产业。并于2015年在广州股权交易中心挂牌上市。</div>
                    <div className="p">从创业肇端，到发展壮大，本源健康产业一路求索，一路向往。公司本着“万物之本，包罗万象，源源不断”的品牌理念，以“大善若水“为品牌内涵，对产品严格品控，层层把关，为消费者提供天然、健康的品质生活。20多年，本源一直用心努力做好一件事，20多年，本源因为专注所以专业，20多年，本源因为专业所以领先。2018年，本源养生茶已在全球发展了独具特色的茶叶专卖店一千多家，产品远销海内外。并在全国各地茶乡建立了总面积达5700亩的无污染绿色茶叶种植基地和研发中心。特别是在餐饮行业深耕16年，主要经营原料和设备方面，是麦当劳肯德基的主要供应商，同时为国内多家餐饮品牌提供原料。</div>
                    <div className="p">2015年 本源集团着手新中式健康茶饮技术研发、茶饮品牌运营策划及茶饮技术团队建设，历时两年，2017年本源新中式健康茶饮品牌”九亩花田 ” 正式投入市场，开启中国茶饮5.0时代。未来，本源人将以不变的执着和情怀，勇往向前，谱写新的华章。</div>
                </div>
            </div>

            <div className="title">企业使命</div>
            <div className="p">为国人打造放心的健康餐饮食品，引领行业风向标。</div>
            <div className="title">企业愿景</div>
            <div className="p">创全国名牌，建标杆企业。</div>

            <div className="title">经营理念</div>
            <div className="p">以匠心打造产品，用专业引领创新 用品质立足市场。</div>
            <div className="title">企业宗旨</div>
            <div className="p">用心服务  务实诚信  以德兴企  锐意进取。</div>
        </div>
    )
}

const Evolution = (props) => {
    return (
        <div className="evo">
            <div className="p">
                <div>
                    从创业肇端，到发展壮大，本源健康产业一路求索，一路向往。<br />
                </div>
                <div>
                    公司本着“万物之本，包罗万象，源源不断”的品牌理念。<br />
                </div>
                <div>
                    以“大善若水“为品牌内涵，对产品严格品控，层层把关，为消费者提供天然、健康的品质生活。<br />
                </div>
                <div>
                    20多年，本源一直用心努力做好一件事，20多年，本源因为专注所以专业，20多年，本源因为专业所以领先。<br />
                </div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">2018年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">“九亩花田”品牌正式面向全球市场招募城市合伙人，寻求战略合作伙伴。</div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">2017年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">”九亩花田 ”新中式健康茶饮品牌投入市场，正式开启中国茶饮5.0时代</div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">2016年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">
                    本源集团着手新中式健康茶饮技术研发、茶饮品牌运营策划及茶饮技术团队建设<br />
                    本源养生茶斥巨资打造本源茶肆旗舰店，集茶叶销售、茶艺体验、商务洽谈、红木家具、香道文化于一体的综合型茶道体验馆<br />
                    为配合企业多元化发展，发展健康产业使命，广州本源投资管理有限公司正式升级为“广州本源健康产业有限公司”<br />
                </div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">2015年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">
                    公司在广州本源成功在广州股权交易中心挂牌上市<br />
                    广州白云湖成立1200平米无菌茶饮技术研发中心。<br />
                </div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">2014年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">本源养生茶加盟店突破500家，获颁发“重合同守信用”企业</div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">2013年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">本源养生茶获得农业组织颁发绿色有机认证，获得“中国茶叶百强”企业，“国内十大养生加盟品牌”</div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">2012年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">广州总部办公大楼重新装修，并更名“广州本源投资管理有限公司”</div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">2011年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">
                    广东卫视电视台合作伙伴<br />
                    通过ISO9001:2008质量管理体系认证<br />
                    成为丰田汽车100家4S店合作伙伴<br />
                </div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">2010年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">
                    参加第八届中国食品安全年会，并获得“食品安全示范单位”<br />
                    荣获上海国际世博会联合国馆指定茶供应商<br />
                </div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">2005年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">总部集中200人产品团队研发台湾养生系列茶</div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">2002年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">本源茶第一次走进广交会,首批订单金额突破600万</div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">1999年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">公司在湖南安化洞市老街建立2200亩本源黑茶产业基地</div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">1996年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">公司在福建安溪建立600亩本源绿茶种植基地</div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">1994年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">公司在云南普洱市思茅区建立2900亩本源普洱基地</div>
            </div>

            <div className="line">
                <div className="whippletree"></div>
            </div>
            <div className="text">
                <div className="l">1992年</div>
                <div className="m"><img src={arrowRight} alt="" /></div>
                <div className="r">成立“广州本源茶叶贸易有限公司”</div>
            </div>
        </div>
    )
}

const BrandStory = (props) => {
    return (
        <div className="brand-story">
            <div className="top">
                <div className="img"></div>
                <div className="text">
                    <div className="t">九亩花田</div>
                    <div className="ppp">
                        茶香喉，沁心田<br />
                        味芳醇，意缱绻<br />
                        九亩花田<br />
                        九亩方圆，阳光一片<br />
                        花田锦绣，芳华明媚<br />
                        万物美好<br />
                        你在中央<br />
                    </div>
                </div>
            </div>
            <div className="title">品牌故事</div>
            <div className="p">
                <p>在我的生命里，一直有一个九亩花田的故事，故事里有很多美的人，和美的事，错综起来像一天云锦，展开去，以至于无穷。我常常想念。我想念那时的天晴晴朗朗，春风柔柔软软，阳光像刚切开的浆果芝士一样甜腻鲜艳。我们无忧无虑，相信所有事情都是美好的。清风掠过，美丽霎时浸满全身。</p>
                <p>我常常寻味这个九亩花田的故事，忘不掉故事里的美好时光。我在想，也许每个人的心里都有一个关于九亩花田的故事，谁的生命里没有那些关于美好时光的事呢？我相信我们都是一样的。</p>
                <p>愿我们忘掉尘世的过和错，趁芳华刚好，让美梦登场。去寻味生命中的美好时光，在你我的九亩花田。</p>
            </div>
        </div>
    )
}


export default class AboutUS extends Component {

    constructor(props) {
        super(props)
        this.state = {
            switchName: 'intro'
        }
    }

    render() {
        return (
            <div className="aboutus">
                <div className="banner"></div>
                <div className="aboutus-type">
                    <div className="nav">
                        <Link to="/aboutus/intro" className={this.state.switchName === 'intro' ? "name-plus" : "name"} onClick={() => { this.setState({ switchName: 'intro' }) }}>企业简介</Link>
                        <Link to="/aboutus/evolution" className={this.state.switchName === 'evolution' ? "name-plus" : "name"} onClick={() => { this.setState({ switchName: 'evolution' }) }}>发展历程</Link>
                        <Link to="/aboutus/brand_story" className={this.state.switchName === 'brand_story' ? "name-plus" : "name"} onClick={() => { this.setState({ switchName: 'brand_story' }) }}>品牌故事</Link>
                    </div>
                </div>

                <Switch>
                    <Route exact path='/aboutus/intro' component={Intro} />
                    <Route path='/aboutus/evolution' component={Evolution} />
                    <Route path='/aboutus/brand_story' component={BrandStory} />
                    <Redirect path="/aboutus" to={{ pathname: "/aboutus/intro" }}></Redirect>
                </Switch>
            </div>
        )
    }
}

