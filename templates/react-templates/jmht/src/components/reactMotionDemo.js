import React, { Component } from 'react';
import { Motion, spring, TransitionMotion } from 'react-motion';

class MotionDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{ key: 'a', size: 10 }, { key: 'b', size: 20 }, { key: 'c', size: 30 }],
            height: 38
        };
    }
    componentDidMount() {
        // this.setState({
        //     items: [{ key: 'a', size: 10 }, { key: 'b', size: 20 }], // remove c.
        // });
    }

    // willLeave() {
    //     // triggered when c's gone. Keeping c until its width/height reach 0.
    //     return { width: spring(0), height: spring(0) };
    // }

    animate = () => {
        this.setState((state) => ({ height: state.height === 233 ? 38 : 233 }))
    }

    render() {
        return (
            <div className="App">
                <div style={styles.button} onClick={this.animate}>开始动起来</div>
                <Motion style={{ height: spring(this.state.height) }}>
                    {
                        (height) =>
                            <div style={Object.assign({}, styles.menu, height)} onClick={this.animate}>
                                <p style={styles.selection} onClick={() => {alert('123123')}}>selection 1</p>
                                <p style={styles.selection}>selection 2</p>
                                <p style={styles.selection}>selection 3</p>
                                <p style={styles.selection}>selection 4</p>
                                <p style={styles.selection}>selection 5</p>
                                <p style={styles.selection}>selection 6</p>
                            </div>
                    }
                </Motion>
            </div>
        );
    }
}

const styles = {
    menu: {
        overflow: 'hidden',
        border: '2px solid #ddd',
        width: 300,
        marginTop: 20,
    },
    selection: {
        padding: 10,
        margin: 0,
        borderBottom: '1px solid #ededed',
        cursor: 'pointer'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        cursor: 'pointer',
        width: 200,
        height: 45,
        border: 'none',
        borderRadius: 4,
        backgroundColor: '#ffc107',
    },
}

export default MotionDemo;