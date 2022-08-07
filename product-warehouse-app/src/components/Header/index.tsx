import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";

const Header: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      label: "Home",
      command: () => navigate("/"),
    },
    {
      label: "Warehouses",
      command: () => navigate("/warehouses"),
    },
  ];
  const start = (
    <div>
      <Link to={"/"}>Product Warehouse</Link>
    </div>
  );

  return (
    <header className="header">
      <Menubar model={items} start={start} />
    </header>
  );
};

export default Header;
