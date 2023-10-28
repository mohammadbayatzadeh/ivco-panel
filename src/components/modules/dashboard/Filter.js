//styles
import styles from "./Filter.module.css";

function Filter({ statuses, filter, setFilter }) {
  return (
    <div className={styles.filter}>
      {statuses.map((item, index) => (
        <span
          key={index}
          onClick={() => setFilter(item)}
          style={{ color: filter === item ? "gold" : "white" }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default Filter;
