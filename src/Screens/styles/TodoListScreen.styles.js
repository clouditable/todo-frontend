import styled from "styled-components";

export const TodoListContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid palevioletred;
  border-radius: 10px;
  height: 300px;
  margin: 10px;
  width: 300px;
`;
