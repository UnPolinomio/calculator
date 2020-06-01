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
    render() {
        
        return <div className={css(styles.root)}>
            <CalculatorScreen value={0} />

            <div className={css(styles.numericButtons)}>
                <CalculatorButton symbol={CalculatorSymbol.nine}/>
                <CalculatorButton symbol={CalculatorSymbol.eight}/>
                <CalculatorButton symbol={CalculatorSymbol.seven}/>
                <CalculatorButton symbol={CalculatorSymbol.six}/>
                <CalculatorButton symbol={CalculatorSymbol.five}/>
                <CalculatorButton symbol={CalculatorSymbol.four}/>
                <CalculatorButton symbol={CalculatorSymbol.three}/>
                <CalculatorButton symbol={CalculatorSymbol.two}/>
                <CalculatorButton symbol={CalculatorSymbol.one}/>
                <CalculatorButton symbol={CalculatorSymbol.zero}/>

                <CalculatorButton symbol={CalculatorSymbol.plus}/>
                <CalculatorButton symbol={CalculatorSymbol.minus}/>
                <CalculatorButton symbol={CalculatorSymbol.result}/>
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
