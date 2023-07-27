import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 배열이라 상수화 시켜서 return한다.
  return [value, handler] as const;
};

export default useInput;
