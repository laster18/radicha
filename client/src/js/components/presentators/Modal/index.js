/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import LoginModal from './LoginModal';
import CreateRoomModal from './CreateRoomModal';
import EjectFromRoomModal from './EjectFromRoomModal';

export default ({
  modals,
  closeLoginModal,
  loginUser,
  createRoom,
  closeCreateRoomModal,
  closeEjectFromRoomModal,
}) => {
  const { isLoginModal, isCreateRoomModal, isEjectFromRoomModal } = modals;
  return (
    <div>
      {isLoginModal && (
        <Modal>
          <Overlay onClick={closeLoginModal} />
          <LoginModal {...{ closeLoginModal, loginUser }} />
        </Modal>
      )}
      {isCreateRoomModal && (
        <Modal>
          <Overlay onClick={closeCreateRoomModal} />
          <CreateRoomModal {...{ closeCreateRoomModal, createRoom }} />
        </Modal>
      )}
      {isEjectFromRoomModal && (
        <Modal>
          <Overlay onClick={closeEjectFromRoomModal} />
          <EjectFromRoomModal />
        </Modal>
      )}
    </div>
  );
};

const Modal = styled.div`
  width: 100%;
  height: 120%;
  position: fixed;
  z-index: 2;
`;
const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.75);
  transition: 0.3s;
`;
