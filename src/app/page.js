import Counter from "./components/Counter";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <h1>This is the example of the Redux in the Next js</h1>
      <Counter />
    </div>
  );
}
