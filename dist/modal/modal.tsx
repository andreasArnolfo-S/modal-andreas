import React, { FC } from 'react';
import styles from './modal.module.css';

interface ModalProps {}

const Modal: FC<ModalProps> = () => (
  <div className={styles.Modal}>
    Modal Component
  </div>
);

export default Modal;
