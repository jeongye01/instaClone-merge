import React,{useEffect} from "react";
import Router from "./Router";
import {useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {getAuth,onAuthStateChanged} from "firebase/auth";
import {setUser,clearUser} from './redux/_actions/user_actions'


function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  const auth = getAuth()

  useEffect(() => {
   onAuthStateChanged(auth,user => { //로그인 인증변화마다 실행
      if (user) { 
        dispatch(setUser(user)) //리덕스에 user정보 전달
      } else {
        dispatch(clearUser()) //리덕스에 user정보 지워주기
      }
    })
  }, [])
  return <Router />;
}

export default App;
