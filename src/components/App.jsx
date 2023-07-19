import { Route, NavLink, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <nav>
        <NavLink>Home</NavLink>
      </nav>
      <Routes>
        <Route path="\" element={'<div>Home</div>'}></Route>
      </Routes>
    </>
  );
};
