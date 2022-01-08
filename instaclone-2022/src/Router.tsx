import { BrowserRouter , Switch, Route } from "react-router-dom";
import { useState,useEffect } from 'react';
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import MyProfile from "./screens/MyProfile"
import MyprofileSetting from "./screens/MyProfileSetting";
import { authService } from "./fbase";
import { setUser, clearUser } from './redux/_actions/user_actions'
import { useDispatch } from 'react-redux';

function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        setIsLoggedIn(true);
        dispatch(setUser(user)) //리덕스에 user정보 전달
      } else {
        setIsLoggedIn(false)
        dispatch(clearUser()) //리덕스에 user정보 지워주기
      }
      setInit(true);
    })
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <>
        {init?
          <Route exact path="/" >
            {isLoggedIn ? <MyProfile /> : <Login />}
          </Route> :null}
          {!isLoggedIn ? (
            <Route path="/sign-up" exact>
              <SignUp />
            </Route>
          ) : null}
          {isLoggedIn ?( <Route path="/myprofile-setting" exact>
              <MyprofileSetting />
          </Route>
          ) : null}
          {!isLoggedIn ? (<Route path="/log-in" exact>
            <Login />
          </Route>
          ) : null}
        </>
      </Switch>
    </BrowserRouter>
  
  );
}
export default Router;


