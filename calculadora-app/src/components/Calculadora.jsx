import React, { useRef } from 'react';
import "../App.css";

function Calculadora() {

    const inputCalc = useRef(),
        inputResult = useRef();

    const handleClick = (digit) => {

        if(digit !== "="){
            inputCalc.current.value += digit;
        }

        if(digit === "C"){
            inputCalc.current.value = "";
            inputResult.current.value = "";
        }

        if(digit === "="){
            const lastDigit = inputCalc.current.value.split("");
    
            if(lastDigit[lastDigit.length-1] === "0" && /[(/)]/.test(inputCalc.current.value)) inputResult.current.value = new Error("No se puede dividir entre 0");
            else inputResult.current.value = eval(inputCalc.current.value);
        }

    }


    return (
        <section className='w-1/4 md:w-1/4 lg:w-1/4 sm:w-2/4 xs:w-full border-1 rounded-md border-black bg-gray-700 flex flex-col gap-5 py-4'>
            <article className='mx-auto flex flex-col justify-center items-center gap-2 w-11/12'>
                <input type="text" ref={inputCalc} name="calculator" id="calculator" placeholder='0' disabled className='w-full bg-orange-200 px-2 py-3 border-4 border-gray-800 rounded-md text-md text-right' />
                <input type="text" ref={inputResult} name="result" id="result" disabled placeholder='0' className='w-full bg-orange-200 px-2 py-3 border-4 border-gray-800 rounded-md text-md text-right'/>
            </article>
            <article className='grid grid-cols-4 gap-2 px-3'>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('7')}>7</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('8')}>8</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('9')}>9</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('/')}>/</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('6')}>6</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('5')}>5</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('4')}>4</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('*')}>*</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('3')}>3</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('2')}>2</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('1')}>1</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('+')}>+</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('0')}>0</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('-')}>-</button>
                <button className='bg-white p-2 font-semibold text-center rounded border border-gray-700 cursor-pointer transtion hover:bg-gray-300' onClick={() => handleClick('C')}>C</button>
                <div className='grid grid-cols-subgrid col-span-1'>
                    <button className='col-start-1 w-full bg-red-600 text-white text-center font-bold rounded border-2 border-red-700 transtion hover:bg-red-700' onClick={() => handleClick('=')}>=</button>
                </div>
            </article>
        </section>
    );
}

export default Calculadora;