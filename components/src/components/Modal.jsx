import { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
  margin-bottom: 15px;

  h2 {
    margin: 0;
    font-size: 1.25rem;
    color: #333;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #333;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const ActionBtn = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => (props.$primary ? '#007bff' : '#f8f9fa')};
  color: ${props => (props.$primary ? 'white' : '#333')};
  border: 1px solid ${props => (props.$primary ? '#007bff' : '#ccc')};

  &:hover {
    background-color: ${props => (props.$primary ? '#0056b3' : '#e2e6ea')};
  }
`;

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ margin: '20px 0' }}>
      <strong>Modal (Styled Components)</strong>
      <div style={{ marginTop: '10px' }}>
        <ActionBtn $primary onClick={() => setIsOpen(true)}>
          Open Modal
        </ActionBtn>
      </div>

      {isOpen && (
        <Overlay onClick={() => setIsOpen(false)}>
          <ModalContainer onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <h2>Special Offers</h2>
              <CloseButton onClick={() => setIsOpen(false)}>
                &times;
              </CloseButton>
            </ModalHeader>
            <div>
              <p>Do you want to accept our new terms and conditions?</p>
            </div>
            <ActionsContainer>
              <ActionBtn onClick={() => setIsOpen(false)}>Cancel</ActionBtn>
              <ActionBtn $primary onClick={() => setIsOpen(false)}>
                Accept
              </ActionBtn>
            </ActionsContainer>
          </ModalContainer>
        </Overlay>
      )}
    </div>
  );
}
