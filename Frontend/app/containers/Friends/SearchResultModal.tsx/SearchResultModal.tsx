import Modal from '@components/common/Modal/Modal';
import { useState } from 'react';

interface SearchResultModalProps {
  modalVisible: boolean;
  onModalClosed: any;
}

const SearchResultModal = ({ modalVisible, onModalClosed }: SearchResultModalProps) => {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal modalVisible={modalVisible} onModalClosed={onModalClosed} />
    </>
  );
};

export default SearchResultModal;
