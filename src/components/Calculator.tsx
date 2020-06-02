import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import CalculatorScreen from './CalculatorScreen';
import CalculatorButton from './CalculatorButton';
import { MediaQueries } from './types/MediaQueries';

export enum CalculatorNumericalSymbol {
    zero, one, two, three, four, five, six, seven, eight, nine,
}
export enum CalculatorSpecialSymbol {
    plus='+',
    minus='-',
    result='=',
    times='×',
    divide='÷',
    dot='.',
    backspace='←',
}

interface CalculatorProps {}
interface CalculatorState {
    actualNumber: number,
    expression: string,
}

function getActualNumberFromExpressionString(expression: string, newSymbol?: CalculatorNumericalSymbol): number {
    let actualNumberString = expression.split(' ').pop() || ''
    if (newSymbol) {
        actualNumberString += newSymbol.toString()
    }
    let actualNumber = parseFloat(actualNumberString)
    return actualNumber
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
            // Special
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
            case 'Backspace':
                this.handleSpecialButtonClick(CalculatorSpecialSymbol.backspace)
                break;
            case '.':
                this.handleSpecialButtonClick(CalculatorSpecialSymbol.dot)
                break;

            //  Numerical
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
    }

    handleNumericalButtonClick(calculatorSymbol: CalculatorNumericalSymbol | CalculatorSpecialSymbol): void {
        calculatorSymbol = calculatorSymbol as CalculatorNumericalSymbol
        this.setState({
            expression: this.state.expression.concat(`${calculatorSymbol}`),
            actualNumber: getActualNumberFromExpressionString(this.state.expression, calculatorSymbol)
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
            case CalculatorSpecialSymbol.backspace:
                let expression =  this.state.expression
                let newExpression = expression.substr(0, expression.length - 1)
                this.setState({
                    expression: newExpression,
                    actualNumber: getActualNumberFromExpressionString(newExpression),
                })
                break;
            case CalculatorSpecialSymbol.dot:
                this.setState({
                    expression: this.state.expression + '.',
                })
                break;
            case CalculatorSpecialSymbol.result:
                let result;
                try {
                    result = eval(this.state.expression)
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
            <CalculatorScreen value={this.state.actualNumber} expression={this.state.expression} />

            <div className={css(styles.buttons)}>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.seven}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.eight}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.nine}/>
                <CalculatorButton clickHandler={this.handleSpecialButtonClick} symbol={CalculatorSpecialSymbol.backspace}/>

                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.four}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.five}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.six}/>
                <CalculatorButton clickHandler={this.handleSpecialButtonClick} symbol={CalculatorSpecialSymbol.divide}/>

                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.one}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.two}/>
                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.three}/>
                <CalculatorButton clickHandler={this.handleSpecialButtonClick} symbol={CalculatorSpecialSymbol.minus}/>

                <CalculatorButton clickHandler={this.handleNumericalButtonClick} symbol={CalculatorNumericalSymbol.zero}/>
                <CalculatorButton clickHandler={this.handleSpecialButtonClick} symbol={CalculatorSpecialSymbol.dot}/>
                <CalculatorButton clickHandler={this.handleSpecialButtonClick} symbol={CalculatorSpecialSymbol.times}/>
                <CalculatorButton clickHandler={this.handleSpecialButtonClick} symbol={CalculatorSpecialSymbol.plus}/>

                <div className={css(styles.resultButton)}>
                    <CalculatorButton clickHandler={this.handleSpecialButtonClick} symbol={CalculatorSpecialSymbol.result}/>
                </div>
            </div>
        </div>
    }
}

const styles = StyleSheet.create({
    root: {
        width: '95%',
        margin: 'auto',
        padding: '23px',
        border: '3px solid gray',
        maxWidth: '6500px',
        boxSizing: 'border-box',
        [MediaQueries.tablet]: {
            width: '60%'
        },
        [MediaQueries.laptop]: {
            width: '50%',
        },
    },
    buttons: {
        marginTop: '25px',
        textAlign: 'center',
        display: 'grid',
        gridTemplate: 'repeat(5, 70px) / repeat(4, 65px)',
        gap: '1px',
        justifyContent: 'center',
        [MediaQueries.tablet]: {
            gridTemplate: 'repeat(5, 70px) / repeat(4, 75px)',
            gap: '20px',
        }
    },
    resultButton: {
        width: '100%',
        height: '100%',
        gridColumn: '1 / -1'
    }
})
