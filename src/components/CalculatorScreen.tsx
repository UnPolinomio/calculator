import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { MediaQueries } from './types/MediaQueries';

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
            <span className={css(styles.value)}>{this.props.value ? this.props.value.toString() : '0'}</span>
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
        fontSize: '30px',
        letterSpacing: '3px',
        backgroundColor: '#f3eec9',
        [MediaQueries.tablet]: {
            fontSize: '40px',
        },
    },
    value: {
        display: 'block',
        overflowX: 'auto',
    },
    expression: {
        fontSize: '20px',
        display: 'block',
        overflowX: 'auto',
        [MediaQueries.tablet]: {
            fontSize: '25px'
        },
        borderBottom: '1px dotted gray'
    },
})