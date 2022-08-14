import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  width: 100%;
  max-width: 300px;
  padding: 40px;
  // border: 1px solid black;
  border-radius: 15px;
  background: #202940;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  & > h2 {
    text-align: center;
    margin: 0 0;
  }
`;

export const Input = styled.input`
  background: none;
  color: hsla(0, 0%, 100%, 0.8) !important;
  // border: 1px solid #d2d6da;
  border: 1px solid #d2d6da;
  border-color: hsla(0, 0%, 100%, 0.4) !important;
  border-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem !important;
  border-top-left-radius: 0.375rem !important;
  line-height: 1.3 !important;
  padding: 0.625rem 0.75rem !important;
`;

export const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  transition: 0.2s ease;
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  color: #fff;
  border: none;
  padding: 13px;
  border-radius: 6px;
  background-image: linear-gradient(195deg, #ec407a, #d81b60);
  cursor: pointer;
  margin-bottom: 10px;
`;

export const UnderText = styled.p`
  line-height: 1.5;
  margin-bottom: 0;
  color: #fff !important;
  opacity: 0.8;
  text-align: center !important;
  & > span {
    opacity: 1;
  }
`;

export const HrefText = styled.span`
  font-weight: 800 !important;
  color: #e91e63 !important;
  margin-left: 0.25rem !important;
  margin-right: 0.25rem !important;
  cursor: pointer;
`;
