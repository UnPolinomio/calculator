import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import { CalculatorSymbol } from './Calculator';

interface CalculatorButtonProps {
    symbol: CalculatorSymbol
}

export default class CalculatorButton extends Component<CalculatorButtonProps, {}> {
    render() {
        return (
            <div className={css(styles.root)}>
                {this.props.symbol}
            </div>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        width: '60px',
        height: '60px',
        lineHeight: '60px',
        border: '1px solid black',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: '25px',
        borderRadius: '5px',
        marginRight: '10px',
        marginBottom: '10px',
        display: 'inline-block',
        cursor: 'pointer',
    }
})