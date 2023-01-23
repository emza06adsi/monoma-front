import React, { FC } from 'react';
import './header.styl';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className="header" data-testid="Header">
    Header Component
  </div>
);

export default Header;
