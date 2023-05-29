import styled from "styled-components";

interface ModalProps {
  showModal: boolean;
}

export const Container = styled.div`
  position: fixed;
  top: ${({ showModal }: ModalProps) => (showModal ? "0%" : "-110%")};
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1004;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  transition: 0.2s;
`;

export const Form = styled.div`
  background-color: #fff;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 3rem 2rem;
  bottom: 4rem;
  width: 30%;
  border-radius: 0.5rem;
  h2 {
    text-align: center;
    color: #1ba6e2;
  }
`;

export const Footer = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CancelButton = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const ContinueButton = styled(CancelButton)``;
