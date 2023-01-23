import React, { FC } from 'react';
import './login.styl';

interface LoginProps {}

const Login: FC<LoginProps> = () => (
  <div className="login" data-testid="Login">
    Login Component
  </div>
);

export default Login;
