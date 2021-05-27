import * as styledComponents from "styled-components";

const { default: styled } = styledComponents;

export const error = styled.span`
  color: #f00;
  width: 100%;
  display: block;
  font-size: 12px;
  margin-top:2px;
`;

export const loaderSpinner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
`;

export const loaderSpinnerChild = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Innerloader = styled.div`
  display: flex;
  height: 40vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column
`;