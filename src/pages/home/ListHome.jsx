
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Instructions from '../../components/Instructions/Instructions';
import Tabs from '../../components/Tabs/Tabs';
import BoxPermission from '../../components/BoxPermission/BoxPermission';
import ManagementTable from '../../components/ManagementTable/ManagementTable';
import CompleteListTable from '../../components/CompleteListTable/CompleteListTable';
import Footer from '../../components/Footer/Footer';
// import { useBrothers } from '../../hooks/useBrothers';
import styles from './ListHome.module.css';

function ListHome() {
  // const { brothers, updateBrother, deleteBrother } = useBrothers();
  // const [activeTab, setActiveTab] = useState(0);

  // const handleUpdateBrother = (index, brother) => {
  //   updateBrother(index, brother);
  // };

  // const handleDeleteBrother = (index) => {
  //   if (window.confirm('Tem certeza que deseja excluir este irmão?')) {
  //     deleteBrother(index);
  //   }
  // };

  return (
    <div className={styles.container}>
      <Header />

      <Instructions />

      <BoxPermission />
      {/* <Tabs activeTab={activeTab} onChangeTab={setActiveTab}>
        <div title="Sorteio">
          <IndicatorsTable brothers={brothers} />
        </div>
        <div title="Gerenciar Irmãos">          
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
      </Tabs> */}
      
    </div>
  );
}

export default ListHome;