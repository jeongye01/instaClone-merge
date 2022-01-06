import { BrowserRouter , Switch, Route } from "react-router-dom";
import { useState,useEffect } from 'react';
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import MyProfile from "./screens/MyProfile"
import MyprofileSetting from "./screens/MyProfileSetting";
import {authService} from "./fbase";
function Router() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [init,setInit]=useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <>
          {init ?
            <Route path="/" exact>
              {isLoggedIn ? <MyProfile /> : <Login />}
            </Route>
            : <h1>Initializing...</h1>}
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
        </>
      </Switch>
    </BrowserRouter>
  
  );
}
export default Router;