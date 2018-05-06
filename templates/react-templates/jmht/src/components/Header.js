import React, { Component } from 'react'
import logo from '../image/logo.svg'
import { Link } from 'react-router-dom'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            navClicked: 'home'
        }
    }

    render() {
        const linkColor = '#eaaf37'
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar g-default-color">
                    <Link style={{ color: this.state.navClicked === "home" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'home' }) }} to="/" className="link">首页</Link>
                    <Link style={{ color: this.state.navClicked === "aboutus" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'aboutus' }) }} to="/aboutus" className="link">关于</Link>
                    <Link style={{ color: this.state.navClicked === "news" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'news' }) }} to="/news" className="link">资讯</Link>
                    <Link style={{ color: this.state.navClicked === "product" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'product' }) }} to="/product" className="link">产品</Link>
                    <Link style={{ color: this.state.navClicked === "joinus" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'joinus' }) }} to="/joinus" className="link">合作</Link>
                    <Link style={{ color: this.state.navClicked === "contact" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'contact' }) }} to="/contactus" className="link">联系</Link>
                </div>
            </div>
        )
    }
}
