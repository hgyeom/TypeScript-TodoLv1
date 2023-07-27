import React from "react";
import Header from "./header/Header";
import * as S from "./Styled.Layout";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <S.Layout>
      <Header />
      <main>{props.children}</main>
    </S.Layout>
  );
};

export default Layout;
