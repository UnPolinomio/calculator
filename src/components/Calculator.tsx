import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';

export default class Calculator extends Component{
    render() {
        return <h1 className={css(styles.green)}>Hello, world</h1>
    }
}

const styles = StyleSheet.create({
    'green': {
        color: 'green'
    }
})
