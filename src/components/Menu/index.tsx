import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-menu.svg';
import Cart from './Cart';
import Profile from './Profile';

const Menu = () => {
  return (
    <header className="flex flex-row border-b-4 border-b-light-grayish-blue px-3 md:px-0 md:mx-2 h-[100px] md:h-[150px] gap-3 md:gap-10 items-stretch">
      <img src={logo} alt="logo" className="w-[175px] h-[30px] self-center order-2 md:order-1" />
      <div className="flex md:flex-1 items-stretch order-1 md:order-2">
        <img src={hamburger} alt="" className="md:hidden w-6 h-6 text-black self-center" />
        <div className="hidden md:flex flex-row ">
          <div className="nav-item nav-active">Collections</div>
          <div className="nav-item">Men</div>
          <div className="nav-item">Woman</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Contact</div>
        </div>
      </div>
      <div className="flex flex-row self-center ml-auto items-center gap-5 md:gap-12 order-3">
        <Cart />
        <Profile />
      </div>
    </header>
  );
};

export default Menu;
