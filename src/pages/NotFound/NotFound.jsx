import { Link } from 'react-router-dom';
import css from './NotFound.module.css'
import { TbHomeStats } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className={css.container}>
      <h1>Opps, page not found</h1>
      <Link to="/" className={css.link}><TbHomeStats />Back to home page</Link>
    </div>
  );
}