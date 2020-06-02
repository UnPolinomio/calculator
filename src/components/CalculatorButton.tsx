import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import { CalculatorNumericalSymbol, CalculatorSpecialSymbol } from './Calculator';

let a = Object.assign({}, CalculatorSpecialSymbol, CalculatorNumericalSymbol)

interface CalculatorButtonProps {
    symbol: CalculatorNumericalSymbol | CalculatorSpecialSymbol
    clickHandler: (calculatorSymbol: CalculatorNumericalSymbol | CalculatorSpecialSymbol) => void,
}

export default class CalculatorButton extends Component<CalculatorButtonProps, {}> {
    constructor(props: CalculatorButtonProps) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        this.props.clickHandler(this.props.symbol)
    }

    render() {
        return (
            <button className={css(styles.root)} onClick={this.clickHandler}>
                {this.props.symbol}
            </button>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        fontSize: '60px',
        cursor: 'pointer',
        borderRadius: '5px',
        border: '1px solid black',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        lineHeight: '75px',
        verticalAlign: 'middle',
        outline: 'none',
        backgroundColor: '#e3f8fd',
        ':active': {
            backgroundColor: '#97e69e',
        }
    }
})