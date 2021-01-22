import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  &:hover {
    background: #f40612;
  }
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;
export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  margin-bottom: 15px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
