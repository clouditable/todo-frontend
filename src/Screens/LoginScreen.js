import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { loginService } from "../services/auth/api";
import {
  Button,
  Division,
  Input,
  Paragraph,
} from "../Components/Common/styles/Common.styles";
import { LoginWrappper } from "./styles/LoginScreen.styles";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => ({
    auth: state.auth,
  }));
  const { error, isLoading } = auth;

  useEffect(() => {
    if (error) {
      toast.error("Lütfen girdiğiniz bilgileri kontrol edin.", {
        position: "top-right",
        closeOnClick: true,
      });
    }
  }, [error]);
  const [data, setData] = useState({ username: "user", password: "123456" });

  const isButtonEnabled = () =>
    !isLoading &&
    data.username.trim() &&
    data.password.trim() &&
    data.password.trim().length > 4;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = data;
    dispatch(loginService({ username, password }));
  };
  return (
    <LoginWrappper>
      <div>
        <Paragraph align="center">Hoş Geldiniz</Paragraph>

        <form>
          <div>
            <Paragraph>Kullanıcı Adı</Paragraph>
            <Input
              placeholder="Kullanıcı adını giriniz"
              name="username"
              data-testid="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <Paragraph>Şifre</Paragraph>
            <Input
              type="password"
              placeholder="Şifre"
              name="password"
              data-testid="password"
              onChange={handleChange}
              value={data.password}
            />
          </div>
          <Division>
            <Button
              primary
              onClick={handleSubmit}
              disabled={!isButtonEnabled()}
              data-testid="login-btn"
              variant={isButtonEnabled() ? "primary" : "secondary"}
              type="submit"
            >
              Giriş
            </Button>
          </Division>
        </form>
      </div>
    </LoginWrappper>
  );
};
