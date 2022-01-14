import { BrowserRouter , Switch, Route,useHistory } from "react-router-dom";
import { useState,useEffect } from 'react';
import Login from "./screens/LoginPage/Login";
import SignUp from "./screens/SignUpPage/SignUp";
import MyProfile from "./screens/ProfilePage/MyProfile"
import MyprofileSetting from "./screens/ProfilePage/MyProfileSetting";
import { authService } from "./fbase";
import { setUser, clearUser } from './redux/_actions/user_actions'
import { useDispatch } from 'react-redux';

function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [init, setInit] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user)) //리덕스에 user정보 전달
        setIsLoggedIn(true);
        
      } else {
        setInit(true)
        setIsLoggedIn(false)
        console.log("로그아웃")
        dispatch(clearUser()) //리덕스에 user정보 지워주기
        
      }
      setInit(true);
    })
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <>
          {init ?
            <Route exact path="/" >
              {isLoggedIn ? <MyProfile /> : <Login />}
            </Route> : null}
          <Route path="/myprofile-setting" exact>
            {isLoggedIn ? <MyprofileSetting /> : <Login />}
          </Route>
          {!isLoggedIn ? (
            <Route path="/sign-up" exact>
              <SignUp />
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


