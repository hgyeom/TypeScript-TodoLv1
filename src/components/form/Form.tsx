import React from "react";
import * as S from "./Styled.Form";
import useInput from "../../hooks/useInput";
import { v4 as uuid } from "uuid";
import { Props, todo } from "../../model/todos";

type FormProps = {
  todoList: todo[];
  setTodoList: Props["setTodoList"];
};

const Form = ({ todoList, setTodoList }: FormProps) => {
  const [title, onTitleChange] = useInput();
  const [body, onBodyChange] = useInput();

  const onSubmitClickHandler = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !body) {
      alert("할일을 입력 해 주세요.");
      return;
    }

    const newTodo: todo = {
      id: uuid(),
      title,
      body,
      isDone: false,
    };

    setTodoList([...todoList, newTodo]);
  };

  return (
    <S.InputForm onSubmit={onSubmitClickHandler}>
      <S.InputItemBox>
        <div>
          제목 : <input type="text" value={title} onChange={onTitleChange} />
        </div>
        <div>
          내용 : <input type="text" value={body} onChange={onBodyChange} />
        </div>
        <S.InputBtn>등록</S.InputBtn>
      </S.InputItemBox>
    </S.InputForm>
  );
};

export default Form;
