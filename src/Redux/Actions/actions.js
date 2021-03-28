export const ADDTODO = 'ADDTODO'
export const REMOVETODO = 'REMOVETODO';
export const COMPLETETODO = 'COMPLETETODO'

export const addTodo = (value) => ({
    type: ADDTODO,
    payload: value
})

export const completeItem = (value) => ({
    type: COMPLETETODO,
    payload: value
})

export const removeItem = (value) => ({
    type: REMOVETODO,
    payload: value
})
