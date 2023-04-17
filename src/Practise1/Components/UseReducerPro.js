import React, { useReducer } from 'react';
import { initialState, reducer } from './States';

const UseReducerPro = () => {
    /* const initialState = {
        firstName:"",
        lastName:"",
        email:"",
        education:"",
        number:0,
        gender:"",
        feedback:""
    }
    const reducer = (state,action)=>{
        switch (action.type) {
            case "INPUT":
            return{
                ...state,
                [action.payload.name] : action.payload.value,
            }
            case "RADIO":
            return{
                ...state,
                [action.payload.name] : action.payload.value,
            }
        
            default:
                return(state)
        }
    } */
    const [state,dispatch] = useReducer(reducer,initialState)

    const submit =(e)=>{
        e.preventDefault()
        console.log(state);
    }
    return (
        <div>
            <h1 className='text-center pt-20'>Testing <span className='text-2xl font-bold'>useReducer</span> according to <br /> <span className='font-serif text-4xl font-bold'>Mir vai</span></h1>
            <form className='bg-gray-50 w-full max-w-4xl mx-auto mt-10 p-10 rounded-lg grid grid-cols-2 items-end' onSubmit={(e)=>submit(e)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input name='firstName' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black" onBlur={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input name='lastName' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black" onBlur={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black" onBlur={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}/>
                </div>
                <div className="form-control">
                    <h1 className='text-black mt-3'>Gender</h1>
                    <label className="label cursor-pointer">
                        <span className="label-text">Male</span>
                        <input onClick={(e)=>dispatch({type:"RADIO",payload:{name:'gender', value:'male'}})} type="radio" name="radio-10" className="radio checked:bg-red-500"/>
                        <span className="label-text">Female</span>
                        <input onClick={(e)=>dispatch({type:"RADIO",payload:{name:'gender', value:'female'}})} type="radio" name="radio-10" className="radio checked:bg-red-500"/>
                        <span className="label-text">Others</span>
                        <input onClick={(e)=>dispatch({type:"RADIO",payload:{name:'gender', value:'others'}})} type="radio" name="radio-10" className="radio checked:bg-red-500"/>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input name='education' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black" onBlur={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number</span>
                    </label>
                    <input name='number' type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black" onBlur={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Feedback</span>
                    </label>
                    <textarea name='feedback' className="textarea textarea-bordered h-24 w-full max-w-xs text-black" placeholder="..." onBlur={(e)=>dispatch({type:"INPUT",payload:{name:e.target.name,value:e.target.value}})}></textarea>
                </div>
                <div className="form-control">
                    <input type="submit" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black" />
                </div>
            </form>
        </div>
    );
};

export default UseReducerPro;