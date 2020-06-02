import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

interface CalculatorScreenProps {
    value?: number
}


export default class CalculatorScreen extends Component<CalculatorScreenProps, {}>{
    render() {
        return (
        <div
            className={css(styles.root)}>
            {this.props.value ? this.props.value.toString() : '0'}
        </div>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        border: '1px solid black',
        textAlign: 'end',
        padding: '12px',
        borderRadius: '7px',
        fontSize: '25px',
        letterSpacing: '3px',
    }
})