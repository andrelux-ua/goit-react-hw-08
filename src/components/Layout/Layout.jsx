import css from './Layout.module.css';
import img from '../../assets/images/s15.png';

function Layout({ children }) {
  return (
    <main className={css.app}>
      <img src={img} alt="telephone" className={css.images} />
      <div className={css.contentWrapper}>{children}</div>
    </main>
  );
}

export default Layout;
