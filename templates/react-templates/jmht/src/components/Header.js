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
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar g-default-color">
                    {/* <div style={{ color: this.state.navClicked === "home" ? "#FA6C05" : "" }} onClick={() => { this.setState({ navClicked: 'home' }) }}><Link to="/" className="link">首页</Link></div>
                    <div style={{ color: this.state.navClicked === "product" ? "#FA6C05" : "" }} onClick={() => { this.setState({ navClicked: 'product' }) }}><Link to="/product" className="link">产品</Link></div>
                    <div style={{ color: this.state.navClicked === "joinus" ? "#FA6C05" : "" }} onClick={() => { this.setState({ navClicked: 'joinus' }) }}><Link to="/joinus" className="link">加盟</Link></div>
                    <div style={{ color: this.state.navClicked === "news" ? "#FA6C05" : "" }} onClick={() => { this.setState({ navClicked: 'news' }) }}><Link to="/news" className="link">资讯</Link></div>
                    <div style={{ color: this.state.navClicked === "aboutus" ? "#FA6C05" : "" }} onClick={() => { this.setState({ navClicked: 'aboutus' }) }}><Link to="/aboutus" className="link">关于</Link></div>
                    <div style={{ color: this.state.navClicked === "contact" ? "#FA6C05" : "" }} onClick={() => { this.setState({ navClicked: 'contact' }) }}><Link to="/contactus" className="link">联系</Link></div> */}
                    <Link style={{ color: this.state.navClicked === "home" ? "#FA6C05" : "" }} onClick={() => { this.setState({ navClicked: 'home' }) }} to="/" className="link">首页</Link>
                    <Link style={{ color: this.state.navClicked === "product" ? "#FA6C05" : "" }} onClick={() => { this.setState({ navClicked: 'product' }) }} to="/product" className="link">产品</Link>
                    <Link style={{ color: this.state.navClicked === "joinus" ? "#FA6C05" : "" }} onClick={() => { this.setState({ navClicked: 'joinus' }) }} to="/joinus" className="link">加盟</Link>
                    <Link style={{ color: this.state.navClicked === "news" ? "#FA6C05" : "" }} onClick={() => { this.setState({ navClicked: 'news' }) }} to="/news" className="link">资讯</Link>
                    <Link style={{ color: this.state.navClicked === "aboutus" ? "#FA6C05" : "" }} onClick={() => { this.setState({ navClicked: 'aboutus' }) }} to="/aboutus" className="link">关于</Link>
                    <Link style={{ color: this.state.navClicked === "contact" ? "#FA6C05" : "" }} onClick={() => { this.setState({ navClicked: 'contact' }) }} to="/contactus" className="link">联系</Link>
                </div>
            </div>
        )
    }
}
