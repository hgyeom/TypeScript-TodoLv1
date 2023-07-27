import { Dispatch, SetStateAction } from "react";

export type Props = {
  todo: todo;
  setTodoList: Dispatch<SetStateAction<todo[]>>;
  isDone: boolean;
};

export type todo = {
  id: string;
  title: string;
  body: string;
  isDone: boolean;
};
