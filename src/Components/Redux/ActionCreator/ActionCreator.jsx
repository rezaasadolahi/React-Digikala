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


//* Vaqti sabtenamkardim va tuye safhe sign in ruye button vorud zadim barmigardim be safeike qablan dakhelesh budim
export const WhichPage = (text) => {
    return {
        type: ActionType.WHICH_PACH,
        payload: text
    }
}


//* Vaqti ruye ghalb tuye product detail mizanim product be list favorit ezafemishe
export const GetFavorit = (par) => {
    return {
        type: ActionType.FAVORIT,
        payload: par
    }
}
export const RemoveFavorit = (par) => {
    return {
        type: ActionType.REMOVE_FAVORIT,
        payload: par
    }
}


//* Gereftane Data dakhele Product
export const getDataInProduct = (par) => {
    return {
        type: ActionType.GET_DATA_PRODUCT,
        payload: par
    }
}

//* Gereftane product dakhele productdetail
export const GetProduct_Detail = (par) => {
    return {
        type: ActionType.GET_PRODUCt_IN_DETAIL,
        payload: par
    }
}
