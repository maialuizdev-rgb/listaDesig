// src/components/ManagementTable/ManagementTable.jsx
import { useState } from 'react';
import Modal from '../Modal/Modal';
import BrotherForm from '../BrotherForm/BrotherForm';
import styles from './ManagementTable.module.css';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";


const ManagementTable = ({ brothers, onUpdate, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingBrother, setEditingBrother] = useState(null);

  const handleEdit = (index, brother) => {
    setEditingIndex(index);
    setEditingBrother(brother);
    setIsModalOpen(true);
  };

  const handleSave = (brother) => {
    onUpdate(editingIndex, brother);
    setIsModalOpen(false);
    setEditingIndex(-1);
    setEditingBrother(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingIndex(-1);
    setEditingBrother(null);
  };

  return (
    <div>
      <h3>Irmãos Cadastrados</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Posições Permitidas</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {brothers.map((brother, index) => (
            <tr key={index} className={!brother.ativo ? styles.inactive : ''}>
              <td>{brother.nome}</td>
              <td>{brother.posicoes.join(', ')}</td>
              <td>{brother.ativo ? 'Ativo' : 'Inativo'}</td>
              <td>
                <button className={styles.btn} onClick={() => handleEdit(index, brother)}>
                  <FaEdit />
                </button>
                <button className={`${styles.btn} ${styles.btnDanger}`} onClick={() => onDelete(index)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title="Editar Irmão"
      >
        <BrotherForm 
          editingBrother={editingBrother}
          onSave={handleSave}
          onCancel={handleCloseModal}
          isEditing={true}
        />
      </Modal>
    </div>
  );
};

export default ManagementTable;