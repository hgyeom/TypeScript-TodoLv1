import React from "react";
import * as S from "./Styled.Card";
import { Props, todo } from "../../../model/todos";

type CardProps = {
  todo: todo;
  todoList: todo[];
  setTodoList: Props["setTodoList"];
};

const Card = ({ todo, todoList, setTodoList }: CardProps) => {
  const onClickToggleBtnHandler = (id: string) => {
    const changeTodo = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
        return todo;
      } else {
        return todo;
      }
    });
    setTodoList([...changeTodo]);
  };

  const onClickDeleteBtnHandler = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <S.Card key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <S.CardBtnContainer>
        <S.CardBtn onClick={() => onClickToggleBtnHandler(todo.id)}>
          {todo.isDone ? "완료하기" : "취소하기"}
        </S.CardBtn>
        <S.CardBtn onClick={() => onClickDeleteBtnHandler(todo.id)}>
          삭제
        </S.CardBtn>
      </S.CardBtnContainer>
    </S.Card>
  );
};

export default Card;
