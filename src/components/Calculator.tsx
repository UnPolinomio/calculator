import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import CalculatorScreen from './CalculatorScreen';
import CalculatorButton from './CalculatorButton';

export enum CalculatorNumericalSymbol {
    zero, one, two, three, four, five, six, seven, eight, nine,
}
export enum CalculatorSpecialSymbol {
    plus='+',
    minus='-',
    result='='
}

interface CalculatorProps {

}

export default class Calculator extends Component<CalculatorProps, {}>{
    constructor(props: CalculatorProps) {
        super(props)
        this.handleNumericalButtonClick = this.handleNumericalButtonClick.bind(this)
        this.handleSpecialButtonClick = this.handleSpecialButtonClick.bind(this)
    }

    handleNumericalButtonClick(calculatorSymbol: CalculatorNumericalSymbol | CalculatorSpecialSymbol): void {
        calculatorSymbol = calculatorSymbol as CalculatorNumericalSymbol
        console.log('Numerical', calculatorSymbol)
    }
    handleSpecialButtonClick(calculatorSymbol: CalculatorNumericalSymbol | CalculatorSpecialSymbol): void {
        calculatorSymbol = calculatorSymbol as CalculatorSpecialSymbol
        console.log('Special', calculatorSymbol)
    }

    render() {

        return <div className={css(styles.root)}>
            <CalculatorScreen />

            <div className={css(styles.numericButtons)}>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.nine}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.eight}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.seven}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.six}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.five}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.four}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.three}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.two}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.one}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.zero}/>

                <CalculatorButton clickHandler={this.handleSpecialButtonClick} symbol={CalculatorSpecialSymbol.plus}/>
                <CalculatorButton clickHandler={this.handleSpecialButtonClick} symbol={CalculatorSpecialSymbol.minus}/>
                <CalculatorButton clickHandler={this.handleSpecialButtonClick} symbol={CalculatorSpecialSymbol.result}/>
            </div>
        </div>
    }
}

const styles = StyleSheet.create({
    root: {
        width: '50%',
        margin: 'auto',
        padding: '15px',
        border: '2px solid gray',
    },
    numericButtons: {
        marginTop: '20px',
        textAlign: 'center'
    }
})
