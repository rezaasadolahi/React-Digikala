import { ActionType } from '../Action Type/ActionType'


//* use in Header
export const Search = (text) => {
    return {
        type: ActionType.SEARCH,
        payload: text
    }
}


//* Sign up / in
export const Emailuser = (text) => {
    return {
        type: ActionType.Email,
        payload: text
    }
}

export const PasswordUser = (text) => {
    return {
        type: ActionType.Passwprd,
        payload: text
    }
}


