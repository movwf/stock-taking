import MenuItem from './MenuItem';
import Logo from './Logo';

function Menu() {
  return (
    <div className="h-full rounded-tr-2xl rounded-br-2xl bg-gray-700">
    <div className="flex items-center justify-center pt-6">
      <Logo />
    </div>
    <nav className="mt-6">
      <div>
        <MenuItem label={"Dashboard"} icon={"compass"} href={"/dashboard"} />
        <MenuItem label={"Inventory"} icon={"idcard"} href={"/inventory"} />
        {/* <MenuItem label={"My Tasks"} icon={"android"} href={"/#"} />*/}
        <MenuItem label={"Stock-Taking"} icon={"android"} href={"/stock-taking"} /> 
        <MenuItem label={"Settings"} icon={"qmark"} href={"/settings"} />
      </div>
    </nav>
    </div>
  )
}

export default Menu;
