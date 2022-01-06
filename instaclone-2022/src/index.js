import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {isDarkModeVar} from "./States";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme,GlobalStyles } from "./styles";//
import Reducer from './redux/_reducers';//리듀서 : 자동으로 index.js불러옴
import { Provider } from 'react-redux';//app과 리덕스 연결
import { createStore, applyMiddleware } from 'redux';//스토어생성 , 미들웨어연결
import promiseMiddleware from 'redux-promise';//리덕스 미들웨어
import ReduxThunk from 'redux-thunk';//리덕스 미들웨어

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore); //promise미들웨어,thunk미들웨어(promise,function) -

ReactDOM.render(
  <Provider
  store={createStoreWithMiddleware(//원래 store는 객체밖에 못받기때문에 두 미들웨어를 연결해줌
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )}
>
  <React.StrictMode>
    <ThemeProvider theme={isDarkModeVar?darkTheme:lightTheme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


