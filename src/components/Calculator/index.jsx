import React from 'react';
import * as math from 'mathjs';
import Header from '../Header';

import { Container, Keys } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setScreen } from '../../actions/Screen';

function Calculator() {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const dispatch = useDispatch();
    const result = useSelector(state => state.screen);
    
    const handleClick = (e) => {
        const str = e.target.value in numbers ? e.target.value : ' ' + e.target.value + ' ';
        const total = result.concat(str);
        dispatch(setScreen(total));
    }

    const handleResult = (e) => {
        const res = math.evaluate(result);

        dispatch(setScreen(res));
    }

    return (

        <Container>
            <Header/>
            <Keys>
                <button className="top-3" onClick={() => dispatch(setScreen(''))}>AC</button>
                <button className="top-3" disabled>+/-</button>
                <button className="top-3" onClick= {() => dispatch(setScreen(result / 100))}>%</button>
                <button value={'/'} onClick={handleClick} className="operator">÷</button>
                <button value={'7'} onClick={handleClick}>7</button>
                <button value={'8'} onClick={handleClick}>8</button>
                <button value={'9'} onClick={handleClick}>9</button>
                <button value={'*'} onClick={handleClick} className="operator">×</button>
                <button value={'4'} onClick={handleClick}>4</button>
                <button value={'5'} onClick={handleClick}>5</button>
                <button value={'6'} onClick={handleClick}>6</button>
                <button value={'-'} onClick={handleClick} className="operator">-</button>
                <button value={'1'} onClick={handleClick}>1</button>
                <button value={'2'} onClick={handleClick}>2</button>
                <button value={'3'} onClick={handleClick}>3</button>
                <button value={'+'} onClick={handleClick} className="operator">+</button>
                <button value={'0'} onClick={handleClick} className="double">0</button>
                <button value={'.'} onClick={handleClick} disabled>,</button>
                <button onClick={handleResult} className="operator">=</button>
÷
            </Keys>
        </Container>

    );
}

export default Calculator;