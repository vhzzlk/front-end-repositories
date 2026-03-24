import styles from './Breadcrumb.module.css';

export default function Breadcrumb({
  items = ['Home', 'Products', 'Electronics', 'Laptop'],
}) {
  return (
    <div style={{ margin: '20px 0' }}>
      <strong>Breadcrumb (CSS Modules)</strong>
      <nav aria-label="breadcrumb" className={styles.breadcrumb}>
        <ol className={styles.list}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={index}
                className={isLast ? styles.activeItem : styles.item}
                aria-current={isLast ? 'page' : undefined}
              >
                {item}
                {!isLast && <span className={styles.separator}>/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
