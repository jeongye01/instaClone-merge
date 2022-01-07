import { BrowserRouter , Switch, Route,useHistory } from "react-router-dom";
import { useState,useEffect } from 'react';
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import MyProfile from "./screens/MyProfile"
import MyprofileSetting from "./screens/MyProfileSetting";
import {authService} from "./fbase";

function Router() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [init,setInit]=useState(false);
  const history  = useHistory()
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
        history.push("/log-in")
      }
      setInit(true);
    })
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <>
            <Route path="/" exact>
              {isLoggedIn ? <MyProfile /> : <Login />}
            </Route>
          {!isLoggedIn ? (
            <Route path="/sign-up" exact>
              <SignUp />
            </Route>
          ) : null}
          {
            isLoggedIn && <Route path="/myprofile" exact>
              <MyProfile />
            </Route>
          }
          {
            isLoggedIn && <Route path="/myprofile-setting" exact>
              <MyprofileSetting />
            </Route>
          }
          <Route path="/log-in" exact>
            <Login/>
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  
  );
}
export default Router;