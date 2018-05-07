import React, { Component } from 'react'
import logo from '../image/logo.svg'
import { Link } from 'react-router-dom'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            navClicked: 'home',
            hovered: false,
            menuItemHovered: false
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
                    {/* <Link style={{ color: this.state.navClicked === "aboutus" ? linkColor : "" }} onClick={() => { this.setState({ navClicked: 'aboutus' }) }} to="/aboutus" className="link">
                        关于
                        <div className="box">
                            <div>企业简介</div>
                            <div>发展历程</div>
                            <div>品牌故事</div>
                        </div>
                    </Link> */}
                    {/* <Dropdown overlay={menu} placement="bottomCenter">
                        <Button onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={this.state.hovered ? styles.aboutbutton : styles.nonebutton}>关于</Button>
                    </Dropdown> */}
                </div>
            </div>
        )
    }

    toggleHover = () => {
        this.setState({ hovered: !this.state.hovered })
    }

    toggleDownHover = () => {
        this.setState({ menuItemHovered: !this.state.menuItemHovered })
    }
}

// const styles = {
//     aboutbutton: {
//         borderWidth: 0,
//         color: '#eaaf37',
//         fontSize: 18
//     },
//     nonebutton: {
//         borderWidth: 0,
//         color: '#585755',
//         fontSize: 18
//     },
//     menuItem: {
//         backgroundColor: null
//     }
// }
