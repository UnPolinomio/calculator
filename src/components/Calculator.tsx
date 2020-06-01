import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import CalculatorScreen from './CalculatorScreen';
import CalculatorButton from './CalculatorButton';

export enum CalculatorSymbol {
    zero, one, two, three, four, five, six, seven, eight, nine,
    plus='+',
    minus='-',
    result='='
}

export default class Calculator extends Component{
    constructor() {
        super({})
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>, calculatorSymbol: CalculatorSymbol): void {
        console.log(event)
        console.log(calculatorSymbol)
    }

    render() {

        return <div className={css(styles.root)}>
            <CalculatorScreen value={0} />

            <div className={css(styles.numericButtons)}>
                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.nine}/>
                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.eight}/>
                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.seven}/>
                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.six}/>
                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.five}/>
                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.four}/>
                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.three}/>
                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.two}/>
                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.one}/>
                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.zero}/>

                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.plus}/>
                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.minus}/>
                <CalculatorButton clickHandler={this.handleButtonClick} symbol={CalculatorSymbol.result}/>
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
