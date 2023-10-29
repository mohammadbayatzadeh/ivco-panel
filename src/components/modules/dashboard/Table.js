//styles
import styles from "./Table.module.css";

function Table({ headers, example, modal = false }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.headers}
        style={{
          gridTemplate: `1fr / repeat(${headers.length},1fr)`,
          borderTopRightRadius: modal && 0,
        }}
      >
        {headers.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      {example.length ? (
        <div
          className={styles.example}
          style={{ gridTemplate: `1fr / repeat(${headers.length},1fr)` }}
        >
          {example.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Table;
