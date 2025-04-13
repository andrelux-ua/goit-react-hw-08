import css from './Layouts.module.css';
import img from '../../assets/images/s15.png';
import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';

function Layouts() {
  return (
    <main className={css.app}>
      <img src={img} alt="telephone" className={css.images} />
      <div className={css.contentWrapper}>
        <AppBar />
        <Outlet />
      </div>
    </main>
  );
}

export default Layouts;
