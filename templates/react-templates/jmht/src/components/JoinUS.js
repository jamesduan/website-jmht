import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'

const Advantage = (props) => {
    return (
        <div className="advantage">
            <div className="title">专一经营团队</div>
            <div className="process-box">
                <div className="box1">
                    <div className="img">
                    </div>
                    <div className="t">专一物流配送</div>
                    <div className="p">为维持产品品质，保证门店原物料充足，每天新鲜及时配送。</div>
                </div>
                <div className="box2">
                    <div className="img"></div>
                    <div className="t">临店引导专员</div>
                    <div className="p">每周不定期临店知道，与店东互动沟通，掌握店内状况。</div>
                </div>
                <div className="box3">
                    <div className="img"></div>
                    <div className="t">每周营业会议</div>
                    <div className="p">每周引导专员定期会议，即时反应，及时应变。</div>
                </div>
            </div>
            <div className="title">专一研发团队</div>
            <div className="p">
                专一研发团队  对于时尚茶饮，在全国市场的演变和消费动向都有着深入的了解。经由专一活力的平面设计组将较专一、较新颖、较具有品牌门店特色的一面呈现的酣畅淋漓
            </div>
            <div className="title">数据完整透明</div>
            <div className="p">门店均使用专一制作设备，大大减少出错几率，更重要的是通过标准操作，保证每杯产品让客户安心使用。先进的POS系统使用，及时掌握营业状况，通过数据资料进行数据分析，为未来的经营多一个较佳方向。</div>
            <div className="title">舒服消费空间</div>
            <div className="p">统一的品牌门店展示，明亮的店铺空间，让顾客可以清楚看到新鲜制作过程，让顾客每一口都用心与放心。通过公司的专一培训，不但提供高感度舒服空间，严选的新鲜饮品，更有专一用心的服务态度。奇异鸟各门店，给你不只是不错，还要创造您每一次消费的感动，</div>
            <div className="title">舒服消费空间</div>
            <div className="p">公司拥有专一讲师4名，均有3年以上的培训和带队经历，具有相当的理论水平和实战经验，经由他们培训，确保店员对门店运营得心应手。</div>
        </div>
    )
}

const Aptitude = (props) => {
    return (
        <div className="aptitude">
            <div className="p">
                公司合伙开店体系有着稳定踏实的经营策略，及强而有力的市场趋势，给合伙人提供更多帮助，减低经营风险，稳定获利。
                公司具有完备的后勤支援管道，让九亩花田合伙人无后顾之忧，并以相互合理服务，良好的疏通到店原则，与创业合伙人一同开创事业的成功。
            </div>
            <div className="img"><div className="i"></div></div>
            <div className="title">申请者需要符合</div>
            <div className="p" style={{ marginTop: 10 }}>1、认同“九亩花田”的商标、产品、经营理念和企业文化。<br />
                2、在相关的行业中有很好的企业人员管理经验。<br />
                3、愿意从事“九亩花田”事业的经营管理。<br />
                4、愿意按照公司的制度处理日常经营事宜。<br />
                5、拥有与经营相关的资金、固定场所、人员等。
            </div>
        </div>
    )
}

const Support = (props) => {
    return (
        <div className="support">
            <div className="p">一、总部协助评估商业圈所在地，借由长期展店经验分析，将商业圈优势发挥完美。<br />

                二、完善的加盟培训，将完整的长期经营的经验做传承与分享，降低创业失败几率。<br />

                三、循序渐进的实习课程，15天完整培训，从前台收银到后台操作，务使每一部都确实有用。<br />

                四、专职的引导团队，以丰富的经营管理经验，提供加盟主咨询服务。<br />

                五、开店后不定时安排各项加盟主进阶课程及专一培训。<br />

                六、品质保证的原物料永续提供，并拥有完善配送系统。<br />

                七、强势商品的开发研究，以新鲜水果，天然素材研发符合消费者口感的优良茶品，让九亩花田在竞争激烈的茶饮市场，能有用更多的差异化与优势。<br />

                八、总部提供完善后前支援，除了专一人员的完整量身规划培训，缩短创业的摸索期<br />
            </div>
            <div className="a">
                <div className="p1">
                    <div className="img1"></div>
                    <div className="t">商圈评估</div>
                </div>
                <div className="p2">
                    <div className="img2"></div>
                    <div className="t">全面培训</div>
                </div>
                <div className="p3">
                    <div className="img3"></div>
                    <div className="t">24小时咨询服务</div>
                </div>
                <div className="p4">
                    <div className="img4"></div>
                    <div className="t">配送系统</div>
                </div>
            </div>
        </div>
    )
}

export default class JoinUS extends Component {

    constructor(props) {
        super(props)
        this.state = {
            switchName: 'advantage'
        }
    }

    render() {
        return (
            <div className="joinus">
                <div className="banner"></div>
                <div className="joinus-type">
                    <div className="nav">
                        <Link to="/joinus/advantage" className={this.state.switchName === 'advantage' ? "name-plus" : "name"} onClick={() => { this.setState({ switchName: 'advantage' }) }}>合作优势</Link>
                        <Link to="/joinus/aptitude" className={this.state.switchName === 'aptitude' ? "name-plus" : "name"} onClick={() => { this.setState({ switchName: 'aptitude' }) }}>资质要求</Link>
                        <Link to="/joinus/support" className={this.state.switchName === 'support' ? "name-plus" : "name"} onClick={() => { this.setState({ switchName: 'support' }) }}>总部支持</Link>
                    </div>
                </div>

                <Switch>
                    <Route exact path='/joinus/advantage' component={Advantage} />
                    <Route path='/joinus/aptitude' component={Aptitude} />
                    <Route path='/joinus/support' component={Support} />
                    <Redirect path="/joinus" to={{ pathname: "/joinus/advantage" }}></Redirect>
                </Switch>
            </div>
        )
    }
}

