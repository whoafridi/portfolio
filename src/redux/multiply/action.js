import { MULTIPLY, ADD } from "./actionTypes";

export const multiply = (value) =>{
    return {
        type: MULTIPLY,
        payload: value
    }
}

export const add = (value) =>{
    return {
        type: ADD,
        payload: value
    }
}