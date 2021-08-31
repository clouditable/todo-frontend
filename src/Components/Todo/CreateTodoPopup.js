import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodoService, updateTodoService } from "../../services/todo/api";
import {
  Button,
  Input,
  ModalBG,
  ModalContainer,
  Paragraph,
} from "../Common/styles/Common.styles";
import { ButtonContainer } from "./styles/CreateTodoPopup.styles";

export const CreateTodoPopup = ({ handleClose, todo }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState(todo?.content || "");
  const handleSubmit = () => {
    if (!todo?._id) {
      dispatch(createTodoService({ content }));
    } else {
      dispatch(updateTodoService({ todoId: todo._id, content }));
    }
  };

  return (
    <ModalBG show={true}>
      <ModalContainer openPos="center">
        <Paragraph align="center">{todo ? "Görevi Güncelle" : "Yeni Görev"}</Paragraph>

        <div>
          <form>
            <div>
              <Paragraph>Görev İçeriği</Paragraph>
              <Input
                placeholder="Görev içeriğini giriniz"
                onChange={(e) => setContent(e.target.value)}
                value={content}
              />
            </div>
          </form>
        </div>

        <ButtonContainer>
          <Button onClick={handleClose}>İptal</Button>
          <Button
            onClick={handleSubmit}
            disabled={!content.trim()}
            primary
          >
            Kaydet
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalBG>
  );
};
