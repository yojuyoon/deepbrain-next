import React from "react";
import Nav from "app/Nav";
import style from "../../../styles/app/Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={style.main}>{children}</main>
    </>
  );
}

export default Layout;
