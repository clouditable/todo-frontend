/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logoutService } from "../../services/auth/api";
import { Button, Paragraph } from "./styles/Common.styles";
import { NavContainer } from "./styles/Header.styles";

export const Header = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({
    auth: state.auth,
  }));
  const { user } = auth;

  const handleLogout = () => dispatch(logoutService());
  return (
    <NavContainer>
      <Paragraph> Hoşgeldiniz {user?._doc?.username || "-"} </Paragraph>
      <Button style={{ width: 150 }} onClick={handleLogout}>
        Çıkış Yap
      </Button>
    </NavContainer>
  );
};
