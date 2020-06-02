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

        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.handleNumericalButtonClick = this.handleNumericalButtonClick.bind(this)
        this.handleSpecialButtonClick = this.handleSpecialButtonClick.bind(this)
    }

    componentDidMount() {
        document.body.addEventListener('keyup', this.handleKeyUp)
    }
    componentWillUnmount() {
        document.body.removeEventListener('keyup', this.handleKeyUp)
    }

    handleKeyUp(event: KeyboardEvent): void {
        switch(event.key) {
            case '+':
                this.handleSpecialButtonClick(CalculatorSpecialSymbol.plus)
                break;
            case '-':
                this.handleSpecialButtonClick(CalculatorSpecialSymbol.minus)
                break;
            case '*':
                this.handleSpecialButtonClick(CalculatorSpecialSymbol.times)
                break;
            case '/':
                this.handleSpecialButtonClick(CalculatorSpecialSymbol.divide)
                break;
            case 'Enter':
            case '=':
                this.handleSpecialButtonClick(CalculatorSpecialSymbol.result)
                break;

            case '0':
                this.handleNumericalButtonClick(CalculatorNumericalSymbol.zero)
                break;
            case '1':
                this.handleNumericalButtonClick(CalculatorNumericalSymbol.one)
                break;
            case '2':
                this.handleNumericalButtonClick(CalculatorNumericalSymbol.two)
                break;
            case '3':
                this.handleNumericalButtonClick(CalculatorNumericalSymbol.three)
                break;
            case '4':
                this.handleNumericalButtonClick(CalculatorNumericalSymbol.four)
                break;
            case '5':
                this.handleNumericalButtonClick(CalculatorNumericalSymbol.five)
                break;
            case '6':
                this.handleNumericalButtonClick(CalculatorNumericalSymbol.six)
                break;
            case '7':
                this.handleNumericalButtonClick(CalculatorNumericalSymbol.seven)
                break;
            case '8':
                this.handleNumericalButtonClick(CalculatorNumericalSymbol.eight)
                break;
            case '9':
                this.handleNumericalButtonClick(CalculatorNumericalSymbol.nine)
                break;
        }
        console.log(event.key)
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
