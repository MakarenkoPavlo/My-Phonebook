import DocumentTitle from "../../Component/DocumentTitle";
import css from './Home.module.css'

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>
          Welcome Phonebook        
        </h1>
      </div>
    </>
  );
}
