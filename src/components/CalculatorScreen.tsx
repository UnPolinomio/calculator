import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

interface CalculatorScreenProps {
    value?: number,
    expression?: string,
}


export default class CalculatorScreen extends Component<CalculatorScreenProps, {}>{
    render() {
        return (
        <div
            className={css(styles.root)}>
            <span className={css(styles.expression)}>{this.props.expression ? this.props.expression : ''}</span>
            <span>{this.props.value ? this.props.value.toString() : '0'}</span>
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
    },
    expression: {
        fontSize: '20px',
        display: 'block',
    }
})