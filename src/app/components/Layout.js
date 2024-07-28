// components/Layout.js
import React from 'react';
import TemporaryDrawer from './TemporaryDrawer';


const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <TemporaryDrawer />
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
