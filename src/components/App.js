import React from 'react'

import { Global, css } from '@emotion/core'

import Main from './Main'
import LoginContainer from './LoginContainer'
import WelcomeMessage from './WelcomeMessage'
import Balloon from './Balloon'
import LoginForm from './LoginForm'
import InputContainer from './InputContainer'

const App = () => (
  <>
    <Global styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        transition: all 0.25s;
      } 

      body {
        font-family: sans-serif;
      }
    `} />
    <Main>
      <LoginContainer>
        <WelcomeMessage>
          <Balloon>Hi</Balloon>
          <h2>Welcome back!</h2>
          <p>Keep your account logged in to access many features and to have lots of fun with personalize interface</p>
        </WelcomeMessage>
        <LoginForm>
          <div>
            <h1>Login</h1>
            <InputContainer>
              <div>
                <label>User name</label>
                <input type="text" name="username" autoComplete="off" />
              </div>
              <div>
                <label>Password</label>
                <input type="password" name="password" autoComplete="off"  />
              </div>
              <button type="submit">Login</button>
            </InputContainer>
            <a href="#">Forgot your password?</a>
          </div>
          <div>
            <p>Lets join the fun, <a href="#">Register Now</a></p>
          </div>
        </LoginForm>
      </LoginContainer>
    </Main>
  </>
)

export default App;
