import { SET_USER ,CLEAR_USER} from '../_actions/types'

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
type CounterState  = {
    currentUser: {}
  };
  
  // 초기상태를 선언합니다.
  const initialState: CounterState = {
    currentUser: {}
  };



export default function (state:CounterState = initialState, action :any) {
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