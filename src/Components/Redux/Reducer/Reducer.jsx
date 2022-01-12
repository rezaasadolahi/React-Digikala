import { ActionType } from '../Action Type/ActionType'



// use into header
const StateValSearchBoxHead = {
    searche: ''
}

export const Searchee = (state = StateValSearchBoxHead, action) => {
    switch (action.type) {
        case ActionType.SEARCH:
            return {
                ...state,
                searche: action.payload
            }

        default:
            return state
    }
}



// Sign In / Up
const getEmail = {
    EmailUser: ''
}

export const Email = (state = getEmail, action) => {
    switch (action.type) {
        case ActionType.Email:
            return {
                ...state,
                EmailUser: action.payload
            }

        default:
            return state
    }
}


const getPassword = {
    PasswordUser: ''
}

export const Password = (state = getPassword, action) => {
    switch (action.type) {
        case ActionType.Passwprd:
            return {
                ...state,
                PasswordUser: action.payload
            }

        default:
            return state
    }
}


//* Vaqti sabtenamkardim va tuye safhe sign in ruye button vorud zadim barmigardim be safeike qablan dakhelesh budim
const getPage = {
    PageName: ''
}

export const WhichPage = (state = getPage, action) => {
    switch (action.type) {
        case ActionType.WHICH_PACH:
            return {
                ...state, // dar khat zir address haye page tekrari hazf mishavand
                PageName: [...new Set(state.PageName), action.payload]
            }

        default:
            return state
    }
}

