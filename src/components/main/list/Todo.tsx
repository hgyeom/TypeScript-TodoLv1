import React from "react";
import * as S from "./Styled.Todo";
import Card from "../card/Card";
import { Props, todo } from "../../../model/todos";

type TodoProps = {
  todoList: todo[];
  setTodoList: Props["setTodoList"];
  isDone: boolean;
};

const Todo = ({ todoList, isDone, setTodoList }: TodoProps) => {
  return (
    <S.TodoContainer>
      {isDone ? (
        <S.TodoIsDone>Done</S.TodoIsDone>
      ) : (
        <S.TodoIsDone>Working</S.TodoIsDone>
      )}
      <S.TodoList>
        {todoList
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => {
            return (
              <Card
                key={todo.id}
                todo={todo}
                todoList={todoList}
                setTodoList={setTodoList}
              ></Card>
            );
          })}
      </S.TodoList>
    </S.TodoContainer>
  );
};

export default Todo;
