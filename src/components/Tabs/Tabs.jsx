// src/components/Tabs/Tabs.jsx
import styles from './Tabs.module.css';

const Tabs = ({ children, activeTab, onChangeTab }) => {
  return (
    <div>
      <div className={styles.tabs}>
        {children.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => onChangeTab(index)}
          >
            {tab.props.title}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        {children[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;