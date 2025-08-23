// src/App.js
import { useState } from 'react';
import Header from './components/Header/Header';
import Instructions from './components/Instructions/Instructions';
import Tabs from './components/Tabs/Tabs';
import BrotherForm from './components/BrotherForm/BrotherForm';
import IndicatorsTable from './components/IndicatorsTable/IndicatorsTable';
import ManagementTable from './components/ManagementTable/ManagementTable';
import CompleteListTable from './components/CompleteListTable/CompleteListTable';
import Footer from './components/Footer/Footer';
import { useBrothers } from './hooks/useBrothers';
import styles from './App.module.css';

function App() {
  const { brothers, updateBrother, deleteBrother } = useBrothers();
  const [activeTab, setActiveTab] = useState(0);

  const handleUpdateBrother = (index, brother) => {
    updateBrother(index, brother);
  };

  const handleDeleteBrother = (index) => {
    if (window.confirm('Tem certeza que deseja excluir este irmão?')) {
      deleteBrother(index);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <Instructions />
      
      <Tabs activeTab={activeTab} onChangeTab={setActiveTab}>
        <div title="Sorteio">
          <IndicatorsTable brothers={brothers} />
        </div>
        <div title="Gerenciar Irmãos">
          
          {/* <BrotherForm onSave={handleSaveBrother} /> */}
          
          <ManagementTable 
            brothers={brothers}
            onUpdate={handleUpdateBrother}
            onDelete={handleDeleteBrother}
          />
        </div>
        <div title="Lista Completa">
          <h2>Lista Completa de Irmãos</h2>
          <p>Visualize todos os irmãos e suas posições permitidas.</p>
          
          <CompleteListTable brothers={brothers} />
        </div>
      </Tabs>
      
      <Footer />
    </div>
  );
}

export default App;