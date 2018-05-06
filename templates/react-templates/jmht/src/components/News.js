import React, { Component } from 'react'
import eye from '../image/home/eye.svg'

export default class News extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="news">
                <div className="banner"></div>
                <div className="container">
                    <div className="news-item">
                        <div className="l1"></div>
                        <div className="r">
                            <div className="title">人活一壶茶</div>
                            <div className="p">不能想象，乡下的老茶馆若是消失了，那人们还怎么活下去。那茶叶，粗的；那茶壶，不但粗，还拙笨。窑场上的废壶，瘪的无妨，残的无妨，只要不漏水，拣了来，用久了，一样放出黯光来。那是人气，俗…</div>
                            <div className="b">
                                <div className="time">2018-4-12</div>
                                <div className="eye"><img src={eye} alt=""/></div>
                                <div className="n">6130</div>
                            </div>
                        </div>
                    </div>
                    <div className="news-item">
                        <div className="l2"></div>
                        <div className="r">
                            <div className="title">茶为席魂，心饮为上</div>
                            <div className="p">茶，解渴清心，以品为上。茶滋于水，水籍乎器。茶汤无形，无器不盛。器，为茶之父，道由器传。由茶和器而入的茶道，是一门生活化的细致的艺术，茶席则是茶道有规则、有秩序地具体表现。《道德经》…</div>
                            <div className="b">
                                <div className="time">2018-4-10</div>
                                <div className="eye"><img src={eye} alt=""/></div>
                                <div className="n">7107</div>
                            </div>
                        </div>
                    </div>
                    <div className="news-item">
                        <div className="l3"></div>
                        <div className="r">
                            <div className="title">茶为席魂，心饮为上</div>
                            <div className="p">茶，解渴清心，以品为上。茶滋于水，水籍乎器。茶汤无形，无器不盛。器，为茶之父，道由器传。由茶和器而入的茶道，是…</div>
                            <div className="b">
                                <div className="time">2018-4-10</div>
                                <div className="eye"><img src={eye} alt=""/></div>
                                <div className="n">8901</div>
                            </div>
                        </div>
                    </div>
                    <div className="news-item">
                        <div className="l4"></div>
                        <div className="r">
                            <div className="title">人活一壶茶</div>
                            <div className="p">不能想象，乡下的老茶馆若是消失了，那人们还怎么活下去。那茶叶，粗的；那茶壶，不但粗，还拙笨。窑场上的废壶，瘪的无妨，残的无妨，只要不漏水，拣了来，用久了，一样放出黯光来。那是人气，俗…</div>
                            <div className="b">
                                <div className="time">2018-4-10</div>
                                <div className="eye"><img src={eye} alt=""/></div>
                                <div className="n">8312</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

