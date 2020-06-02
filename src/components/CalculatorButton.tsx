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

    clickHandler(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.props.clickHandler(this.props.symbol)
    }

    render() {
        return (
            <div className={css(styles.root)} onClick={this.clickHandler}>
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