import React, { useState, useEffect } from 'react';
import Display from './Display';

function Calculator() {
  const [expression, setExpression] = useState('');

  useEffect(() => {
    const savedExpression = localStorage.getItem('calculatorExpression');
    if (savedExpression) {
      setExpression(savedExpression);
    }
  }, []);

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(expression);
      setExpression(result);
      localStorage.setItem('calculatorExpression', result);
    } catch (error) {
      console.error('Error evaluating expression:', error);
    }
  };

  const handleClear = () => {
    setExpression('');
    localStorage.removeItem('calculatorExpression');
  };

  return (
    <div className="Calculator">
      <Display expression={expression} />
      <div className="buttons">
        <button className='calculator-button' onClick={() => handleButtonClick('7')}>7</button>
        <button className='calculator-button' onClick={() => handleButtonClick('8')}>8</button>
        <button className='calculator-button' onClick={() => handleButtonClick('9')}>9</button>
        <button className='calculator-button' onClick={() => handleButtonClick('/')}>/</button>
        <button className='calculator-button' onClick={() => handleButtonClick('4')}>4</button>
        <button className='calculator-button' onClick={() => handleButtonClick('5')}>5</button>
        <button className='calculator-button' onClick={() => handleButtonClick('6')}>6</button>
        <button className='calculator-button' onClick={() => handleButtonClick('*')}>*</button>
        <button className='calculator-button' onClick={() => handleButtonClick('1')}>1</button>
        <button className='calculator-button' onClick={() => handleButtonClick('2')}>2</button>
        <button className='calculator-button' onClick={() => handleButtonClick('3')}>3</button>
        <button className='calculator-button' onClick={() => handleButtonClick('-')}>-</button>
        <button className='calculator-button' onClick={() => handleButtonClick('0')}>0</button>
        <button className='calculator-button' onClick={() => handleButtonClick('.')}>.</button>
        <button className='calculator-button' onClick={() => handleButtonClick('+')}>+</button>
        <button className='calculator-button' onClick={handleCalculate}>=</button>
        <button className='calculator-button' onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;
