import React, { useEffect, useReducer } from "react";

const URL = 'https://jsonplaceholder.typicode.com/users'

const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        case 'UPDATE_ERROR':
            return {
                ...state,
                isError: {status: action.payload.status, msg: action.payload.msg}
            }
        case 'UPDATE_DATA':
            return {
                ...state,
                data: action.payload
            }
        case 'UPDATE_EDIT':
            return {
                ...state, 
                editValue: {isEdit: action.payload.isEdit, user_data: action.payload.user},
            }
        case 'UPDATE_EDIT_VALUE':
            return {
                ...state, 
                editData: action.payload,
            }
        default:
            return state
    }
}

export default function UseReducerAdv() {

    const initialState = {
        data: [],
        isLoading: false, 
        isError: {status: false, msg:''},
        editValue: {isEdit: false, user_data: {}},
        editData: {},
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchTheData = async (url) => {
        dispatch({type: 'UPDATE_LOADING', payload: true})
        dispatch({type: 'UPDATE_ERROR', payload:{status: false, msg:''}})
        try {
            const response = await fetch(url);
            const data_response = await response.json();
            dispatch({type: 'UPDATE_DATA', payload: data_response});
            dispatch({type: 'UPDATE_LOADING', payload: false});
            if (response.status == 404) {
                throw new Error('Data not found!');
            }
        } catch (error) {
            dispatch({type: 'UPDATE_LOADING', payload: false})
            dispatch({type: 'UPDATE_ERROR', payload: {status: true, msg: error.message || 'Error is thrown'}})
        } 
    }

    useEffect(() => {
        fetchTheData(URL)
    }, [])

    const handleDelete = (user_id) => {
        const newArr = state?.data?.filter((user) => {
            return user_id !== user.id;            
        })
        dispatch({type: 'UPDATE_DATA', payload: newArr})
        return
    }

    const handleEdit = (user_id) => {
        const newArr = state?.data?.map((user) => {
            if (user_id === user.id){
                user.name = state?.editData;
            }
            return user
        })
        dispatch({type: 'UPDATE_DATA', payload: newArr})
        dispatch({type: 'UPDATE_EDIT', payload:{isEdit: false, user: {}}})
    }
return (
    <div>
        <h2>The list of Users:</h2>
        {state?.editValue?.isEdit && <input type="text" value={state?.editData} onChange={(e) => dispatch({type: 'UPDATE_EDIT_VALUE', payload: e.target.value})}/>}
        {state?.editValue?.isEdit && <button onClick={() => {handleEdit(state?.editValue?.user_data?.id)}}>submit</button>}
        {state?.isLoading && <h2>Loading...</h2>}
        {state?.isError?.status && <h2>{state?.isError?.msg}</h2> }
        {!state?.isLoading && !state?.isError?.status && state?.data?.map((user) => {
            const {id, name, username, email} = user;
            return (
            <div key={id} style={{background: 'lightgreen'}}>
                <h4>Name: {name}</h4>
                <h5>Username: {username}</h5>
                <h6>Email: {email}</h6>
                {!state?.editValue?.isEdit && <button onClick={() => {dispatch({type: 'UPDATE_EDIT', payload:{isEdit: true, user: user}});
            dispatch({type: 'UPDATE_EDIT_VALUE', payload: name})}}>edit</button>}
                <button onClick={() => handleDelete(id)}>delete</button>
            </div>
            )
        })}
    </div>
)
} 