import React, { Component } from 'react'

export default class ContactUS extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="contactus">

                <div className="banner"></div>

                <div className="container">

                    <div className="title">全球城市合伙人招募热线</div>

                    <div className="num">400 930 6667</div>

                    <div className="address">
                        <div>总机：020-86000678</div>
                        <div>传真：020-86000108</div>
                        <div>地址：中国.广州市白云区机场路1962号国际单位E栋602</div>
                    </div>

                    <div className="map"></div>
                </div>

            </div>
        )
    }
}

