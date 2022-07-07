import React from 'react';

import Modal from './Modal';
import { StyledMediumButton } from '../Buttons/Button.styled';
const CustomErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header={props.title}
      show={!!props.error}
      footer={<><div>{props.message}</div><StyledMediumButton onClick={props.onClear}>Okay</StyledMediumButton></>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default CustomErrorModal;
