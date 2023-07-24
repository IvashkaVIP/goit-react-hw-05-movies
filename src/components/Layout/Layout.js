import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layot.module.css'

const Layout = () => {
  return (
    <div className={css['container']}>
      <nav className={css['header']}>
        <ul className={css['wrap-nav']}>
          <li>
            <NavLink className={css['wrap-link']} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css['wrap-link']} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
