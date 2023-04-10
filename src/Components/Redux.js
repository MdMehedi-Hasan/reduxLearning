import React, { useReducer } from 'react';

const Redux = () => {
    // Initial state is to given for primary value
    const initialState = 0
    // Reducer is the function where we write logic based on action type
    const reducer = (state,action)=>{
        switch (action.type){
            case 'add' :
                return (state+1)
                case 'subtract' :
                    return (state-1)
                    case 'addEven' :
                        return state+2
                        case 'addOdd' :
                            return state+1
                            case 'reset':
                                return 0
                                default :
                                    return (state)
        }
    }
    // Here is the useReducer hook
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <div className='flex justify-center items-center h-96 mt-20'>
        <div className='w-4/12 border rounded h-48 mt-10 flex flex-col items-center h-full bg-neutral-800'>
        <h1 className="text-xl font-bold">Child sibling</h1>
        <h5 className="text-lg text-sky-600 font-bold">Output</h5>
        <span className="text-4xl font-bold">{state}</span>
        <div className="w-full flex justify-around items-center h-full gap-5">
        <button type="button" className="text-4xl font-bold border border-2 rounded w-3/12 active:scale-90 scale-100 ease-in-out duration-200" onClick={()=>dispatch({type:'subtract'})}>-</button>
        <span className="border w-6/12 h-10 rounded text-center text-2xl font-bold">{state}</span>
        <button type="button" className="text-4xl font-bold border border-2 rounded w-3/12 active:scale-90 scale-100 ease-in-out duration-200" onClick={()=>dispatch({type:'add'})}>+</button>
        </div>
        <div className="w-full flex justify-around items-center h-full gap-5">
        <button type="button" className="text-lg font-bold border border-2 rounded p-2 active:scale-90 scale-100 ease-in-out duration-200" onClick={()=> dispatch({type:'addEven'})}>Add Even</button>
        <button type="button" className="text-lg font-bold border border-2 rounded p-2 active:scale-90 scale-100 ease-in-out duration-200" onClick={()=> dispatch({type:'addOdd'})}>Add Odd</button>
        <button type="button" className="text-lg font-bold border border-2 rounded p-2 active:scale-90 scale-100 ease-in-out duration-200" onClick={()=> dispatch({type:'reset'})}>Reset</button>
        </div>
        </div>
      </div>
    );
};

export default Redux;