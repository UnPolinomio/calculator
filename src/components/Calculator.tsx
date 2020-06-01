import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import CalculatorScreen from './CalculatorScreen';

export default class Calculator extends Component{
    render() {
        return <div className={css(styles.root)}>
            <CalculatorScreen value={0} />
        </div>
    }
}

const styles = StyleSheet.create({
    'root': {
        width: '50%',
        margin: 'auto',
        padding: '15px',
        border: '2px solid gray',
    }
})
