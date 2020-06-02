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
    result='=',
    times='×',
    divide='÷',
}

interface CalculatorProps {}
interface CalculatorState {
    actualNumber: number,
    expression: string,
}

export default class Calculator extends Component<CalculatorProps, CalculatorState>{
    constructor(props: CalculatorProps) {
        super(props)

        this.state = {
            actualNumber: 0,
            expression: ''
        }

        this.handleNumericalButtonClick = this.handleNumericalButtonClick.bind(this)
        this.handleSpecialButtonClick = this.handleSpecialButtonClick.bind(this)
    }

    handleNumericalButtonClick(calculatorSymbol: CalculatorNumericalSymbol | CalculatorSpecialSymbol): void {
        calculatorSymbol = calculatorSymbol as CalculatorNumericalSymbol
        let expression = 
        this.setState({
            expression: this.state.expression.concat(`${calculatorSymbol}`),
            actualNumber: parseFloat(this.state.actualNumber.toString().concat(calculatorSymbol.toString()))
        })
    }
    handleSpecialButtonClick(calculatorSymbol: CalculatorNumericalSymbol | CalculatorSpecialSymbol): void {
        calculatorSymbol = calculatorSymbol as CalculatorSpecialSymbol
        switch (calculatorSymbol) {
            case CalculatorSpecialSymbol.minus:
                this.setState({
                    expression: this.state.expression + ' - ',
                    actualNumber: 0,
                })
                break;
            case CalculatorSpecialSymbol.plus:
                this.setState({
                    expression: this.state.expression + ' + ',
                    actualNumber: 0,
                })
                break;
            case CalculatorSpecialSymbol.times:
                this.setState({
                    expression: this.state.expression + ' * ',
                    actualNumber: 0,
                })
                break;
            case CalculatorSpecialSymbol.divide:
                this.setState({
                    expression: this.state.expression + ' / ',
                    actualNumber: 0,
                })
                break;
            case CalculatorSpecialSymbol.result:
                let result;
                try {
                    result = eval(this.state.expression) || 0
                } catch (error) {
                    this.launchError()
                    break;
                }

                if (!isFinite(result)) {
                    this.launchError()
                    break;
                }


                this.setState({
                    expression: `${result}`,
                    actualNumber: result
                })
                break;
        }
    }

    launchError() {
        alert('Error. Something were wrong with your query. Try again, please.')
        this.setState({
            actualNumber: 0,
            expression: ''
        })
    }

    render() {

        return <div className={css(styles.root)}>
            <CalculatorScreen value={this.state.actualNumber} />

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
                <CalculatorButton clickHandler={this.handleSpecialButtonClick} symbol={CalculatorSpecialSymbol.times}/>
                <CalculatorButton clickHandler={this.handleSpecialButtonClick} symbol={CalculatorSpecialSymbol.divide}/>
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
