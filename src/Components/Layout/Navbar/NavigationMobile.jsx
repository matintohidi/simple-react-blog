import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from '../../../context/Auth';
import { v1 as uuid } from 'uuid';

const Navigation = () => {
  let { userData } = useAuth();

  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" , path: "/" },
    { name: "Blog", icon: "newspaper-outline", dis: "translate-x-16" , path: "/blog" },
    { name: "Team", icon: "person-outline", dis: "translate-x-32" , path: "/team" },
    { name: "Write", icon: "pencil-outline", dis: "translate-x-64" , path: "/createarticle" },
    { name: "Profile", icon: "settings-outline", dis: "translate-x-48" , path: `/${userData.username}` },
  ];

  return (
    <nav className="bg-[#2d8bff] flex md:hidden fixed bottom-0 w-screen z-50">
      <ul className="flex justify-center w-full relative">
        {Menus.map((menu) => (
          <NavLink key={uuid()} className="w-16 text-white flex flex-col text-center pt-6" to={menu.path}>
            <span className={`bg-[#2d8bff] duration-500 hidden h-16 w-16 absolute top-0 rounded-full indiactor`}></span>
            <span className="text-xl cursor-pointer duration-500">
              <ion-icon name={menu.icon}></ion-icon>
            </span>
            <h3 className="text-xs opacity-0 translate-y-10">
              {menu.name}
            </h3>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;