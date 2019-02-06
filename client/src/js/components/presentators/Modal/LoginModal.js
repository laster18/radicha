/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { withState, withHandlers, pure, compose } from 'recompose';
import Color from '../constants/Color';

const enhancer = compose(
  withState('inputText', 'updateText', ''),
  withHandlers({
    onChangeText: ({ updateText }) => e => {
      updateText(e.target.value);
    },
    clearText: ({ updateText }) => () => {
      updateText('');
    },
  }),
  pure,
);

export default enhancer(({ loginUser, inputText, onChangeText, hideModal }) => (
  <Modal>
    <InputName type="text" value={inputText} onChange={onChangeText} />
    <Button
      onClick={() => {
        loginUser(inputText);
        hideModal('login');
      }}
    >
      Login
    </Button>
  </Modal>
));

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -30%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -30%);
  }
`;
const Modal = styled.div`
  width: 50%;
  height: 70%;
  margin: 1.5em auto 0;
  padding: 10px 20px;
  border: 2px solid #aaa;
  background: #fff;
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 0.5s ease 0s 1 normal;
`;
const InputName = styled.input`
  height: 40px;
  width: 70%;
  margin-right: 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 0.9em;
  padding: 0 10px;
  border: 1px solid ${Color.gray20};
  &:focus {
    outline: 2px ${Color.skyblue} solid;
  }
`;
const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  height: 40px;
  overflow: visible;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: palevioletred;
    color: white;
    transition: 0.3s;
  }
`;
