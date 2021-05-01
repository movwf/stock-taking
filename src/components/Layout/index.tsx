import React from 'react';
import Menu from './Menu/Menu'

const Layout:React.FC = ({children}) => {
  return (
  <div className="flex h-screen">
    <div className="hidden lg:block shadow-lg relative w-2/12">
      <Menu />
    </div>
    <div className="w-10/12 p-8 overflow-scroll overflow-x-auto overflow-y-auto">
      {children}
    </div>
  </div>
  )
}

export default Layout;
