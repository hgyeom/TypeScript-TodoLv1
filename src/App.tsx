import React, { Dispatch, SetStateAction, useState } from "react";
import Form from "./components/form/Form";
import Todo from "./components/main/list/Todo";
import { v4 as uuid } from "uuid";

export type Props = {
  todoItem: { id: string; title: string; body: string; isDone: boolean };
  setTodoList: Dispatch<SetStateAction<Props["todoItem"][]>>;
  isDone: boolean;
};

const App = () => {
  const [todoList, setTodoList] = useState<Props["todoItem"][]>([
    { id: uuid(), title: "리액트", body: "리액트 과제 끝내기", isDone: true },
    {
      id: uuid(),
      title: "리액트",
      body: "리액트 강의 다시보기",
      isDone: false,
    },
    {
      id: uuid(),
      title: "알고리즘",
      body: "프로그래머스 문제 풀기",
      isDone: false,
    },
  ]);

  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList}></Form>
      <Todo todoList={todoList} setTodoList={setTodoList} isDone={false}></Todo>
      <Todo todoList={todoList} setTodoList={setTodoList} isDone={true}></Todo>
    </div>
  );
};

export default App;
