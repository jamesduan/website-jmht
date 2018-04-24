import React, { Component } from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'

import Home from './Home'
import Product from './Product'
import JoinUs from './JoinUS'
import News from './News'
import AboutUS from './AboutUS'
import ContactUS from './ContactUS'

export default class Content extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/product' component={Product} />
                    <Route path='/joinus' component={JoinUs} />
                    <Route path='/news' component={News} />
                    <Route path='/aboutus' component={AboutUS} />
                    <Route path='/contactus' component={ContactUS} />
                </Switch>
            </div>
        )
    }
}
