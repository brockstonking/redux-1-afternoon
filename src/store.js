import { createStore } from 'redux';

const initialState = {
    name: "",
    category: "",
    authFirst: "",
    authLast: "",
    ingredients: [],
    instructions: [],
    recipeList: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST";
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST";
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';
export const DELETE_RECIPE = 'DELETE_RECIPE';

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch(type){
        case UPDATE_NAME:
            return { ...state, name: payload };
        case UPDATE_CATEGORY:
            return { ...state, category: payload };
        case UPDATE_AUTHOR_FIRST:
            return { ...state, authFirst: payload };
        case UPDATE_AUTHOR_LAST:
            return { ...state, authLast: payload };
        case ADD_INGREDIENT:
            return { ...state, ingredients: [...state.ingredients, payload] }
        case ADD_INSTRUCTION:
            return { ...state, instructions: [...state.instructions, payload] }
        case CREATE_RECIPE:
            const {
                name,
                category,
                authFirst,
                authLast,
                ingredients,
                instructions
            } = state;
            const recipe = {
                name,
                category,
                authFirst,
                authLast,
                ingredients,
                instructions
            };
            return { ...state, recipeList: [...state.recipeList, recipe] }
        case CLEAR_FIELDS:
            return {
                ...state,
                name: "",
                category: "",
                authFirst: "",
                authLast: "",
                ingredients: [],
                instructions: []
            }
        case DELETE_RECIPE:
            let newList = [...state.recipeList]
            newList.splice(payload, 1)
            return { ...state, recipeList: newList }
        default:
            return state
    }
}

export default createStore(reducer);