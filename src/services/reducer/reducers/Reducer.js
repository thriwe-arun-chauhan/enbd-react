import { USER_DATA, CONFIG } from '../../Constants'
// const initialState = {
//     cardData: []
// }
export default function cardItems(state = [], action) {
    switch (action.type) {

        case CONFIG:
            state = {...state,
                configData: action.data};
            break;

        case USER_DATA:
            state = {...state,
                userData: action.data};
            break;

        default:
            return state
    }
    return state;
}
