import IconList from './icons';
import {NavLink} from 'react-router-dom'


interface ItemProps{
  label?:string|"Default",
  icon?:string,
  href:string
}

function IconWrapper(iconData:string){
  return(
    <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
      <path d={`${iconData}`}>
      </path>
    </svg>
  )
}

const active = "text-blue-500 bg-gradient-to-r border-r-4 border-blue-500 from-gray-700 to-gray-800 border-r-4 border-blue-500";


function MenuItem({label,icon,href}:ItemProps) {
  const iconData = Object.values(IconList)[Object.keys(IconList).indexOf(Object.keys(IconList).filter(e=>e===icon)[0])];

  return (
    <NavLink 
      // className={`w-full font-thin uppercase flex items-center p-4 my-2 transition-colors duration-200 justify-start ${selected?"text-blue-500 bg-gradient-to-r border-r-4 border-blue-500 from-gray-700 to-gray-800 border-r-4 border-blue-500":"hover:text-blue-500 text-white"}`} 
      className={`w-full font-thin uppercase flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500 text-white`}
      activeClassName={active}
      to={href}
    >
      <span className="text-left">
        {IconWrapper(iconData)}
      </span>
      <span className="mx-4 text-sm font-normal">
        {label}
      </span>
    </NavLink>
  )
}

export default MenuItem
