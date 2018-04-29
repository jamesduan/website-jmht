import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'

const PTea = (props) => {
    return (
        <div className="ptea">
            <div className="t1">
                <div className="title">
                    <div className="c-name">解忧答案茶</div>
                    <div className="e-name">JIE YOU DA AN CHA</div>
                </div>
                <div className="images">
                    <div className="img1"></div>
                    <div className="img2"></div>
                    <div className="img3"></div>
                    <div className="img4"></div>
                    <div className="img5"></div>
                    <div className="img6"></div>
                    <div className="img7"></div>
                </div>
            </div>
            <div className="t2">
                <div className="title">
                    <div className="c-name">鲜果物语</div>
                    <div className="e-name">XIAN GUO WU YU</div>
                </div>
                <div className="images">
                    <div className="img1"></div>
                    <div className="img2"></div>
                    <div className="img3"></div>
                    <div className="img4"></div>
                </div>
            </div>
            <div className="t3">
                <div className="title">
                    <div className="c-name">网说新茶</div>
                    <div className="e-name">WANG SHUO XIN CHA</div>
                </div>
                <div className="images">
                    <div className="img1"></div>
                    <div className="img2"></div>
                    <div className="img3"></div>
                    <div className="img4"></div>
                    <div className="img5"></div>
                    <div className="img6"></div>
                </div>
            </div>
        </div>
    )
}

const PR = (props) => {
    return (
        <div className="pr">
            <div className="t1">
                <div className="title">
                    <div className="c-name">DIY软欧包</div>
                    <div className="e-name">DIY RUAN OU BAO</div>
                </div>
                <div className="images">
                    <div className="img1"></div>
                    <div className="img2"></div>
                    <div className="img3"></div>
                    <div className="img4"></div>
                    <div className="img5"></div>
                    <div className="img6"></div>
                    <div className="img7"></div>
                </div>
            </div>
        </div>
    )
}

export default class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {
            switchName: 'ptea'
        }
    }

    render() {
        return (
            <div className="product">
                <div className="banner"></div>
                <div className="product-type">
                    <Link to="/product/ptea" className={this.state.switchName === 'ptea' ? "name-plus" : "name"} onClick={() => { this.setState({ switchName: 'ptea' }) }}>茶饮系列</Link>
                    <Link to="/product/pr" className={this.state.switchName === 'pr' ? "name-plus" : "name"} onClick={() => { this.setState({ switchName: 'pr' }) }}>软欧包系列</Link>
                </div>

                <Switch>
                    <Route exact path='/product/ptea' component={PTea} />
                    <Route path='/product/pr' component={PR} />
                    <Redirect path="/product" to={{ pathname: "/product/ptea" }}></Redirect>
                </Switch>
            </div>
        )
    }
}

