import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 5px;
  z-index: 10;
  color: #bdbcbc;
  border: 1px solid #bdbcbc;
  padding-left:10px;
  background-color: ${({ theme }) => theme.colors.gray};
  .input-wrapper {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}px) {
    max-width: 90%;
    top: 70px;
  }
  && button {
    padding:14px;
font-size: 14px;
color: white;
background-color: LightSteelBlue;
border-radius: 2px;
outline: none;
font-weight: bold;
cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  border-radius: 10px;
  min-height: 40px;
  background-color: #f0f2f5;
`;

export const Button = styled.button`

`;
export const Container = styled.div`
  background: #000;
`;
