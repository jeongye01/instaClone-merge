import { SET_USER ,CLEAR_USER} from '../_actions/types'

type actionType = {
    type:string,
    payload:{}
}

export default function (state = {}, action :actionType) {
    console.log(action.payload)
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload, //currentUser를 firebase에서 받아온 user정보로 업데이트
            }
        case CLEAR_USER:
            return{
                ...state,
                currentUser: null  //나머지 state는 그대로고 currentUser만 null로 변경
            }
        default:
            return state
    }
}