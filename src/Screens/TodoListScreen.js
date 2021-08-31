import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../Components/Common/Loading";
import { Button } from "../Components/Common/styles/Common.styles";
import { CreateTodoPopup } from "../Components/Todo/CreateTodoPopup";
import { EmptyTodoContent } from "../Components/Todo/EmptyTodoContent";

import {
  deleteTodoService,
  fetchTodosService,
  updateTodoService,
} from "../services/todo/api";
import {
  TodoItemContainer,
  TodoListContainer,
} from "./styles/TodoListScreen.styles";

/**
 * Component for showing list of the users.
 *
 * @component
 * const data = [{content: "Todo Task", status:false}]
 * return (
 *   <TodoListScreen />
 * )
 */

export const TodoListScreen = () => {
  const dispatch = useDispatch();
  const [selectedTodo, setSelectedTodo] = useState(null);

  const { todo } = useSelector((state) => ({
    todo: state.todo,
  }));

  useEffect(() => dispatch(fetchTodosService()), []);

  const [showPopup, togglePopup] = useState(false);

  const toggleCreatePopup = () => {
    togglePopup(!showPopup);
  };

  const { data, isLoading } = todo;

  const toggleStatus = (item) => {
    const status = !item?.completed;
    dispatch(updateTodoService({ status, todoId: item._id }));
  };

  const deleteTodo = (todoId) => {
    dispatch(deleteTodoService({ todoId }));
  };

  useEffect(() => {
    togglePopup(false);
    setSelectedTodo(null);
  }, [data?.length]);

  useEffect(() => {
    if (selectedTodo) {
      toggleCreatePopup();
    }
  }, [selectedTodo]);
  console.log(isLoading);
  return (
    <>
      <div>
        <Button
          primary
          style={{ float: "right", marginBottom: 20, width: 300 }}
          onClick={toggleCreatePopup}
        >
          Yeni Görev Oluştur
        </Button>
      </div>
      <div
        style={{
          marginTop: 20,
        }}
      >
        {showPopup ? (
          <CreateTodoPopup
            todo={selectedTodo}
            handleClose={toggleCreatePopup}
          />
        ) : null}
        <TodoListContainer>
          {isLoading ? (
            <div>
              <Loading />
            </div>
          ) : data.length ? (
            data.map((item) => (
              <TodoItemContainer key={item._id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button onClick={() => setSelectedTodo(item)} primary>
                    Güncelle
                  </Button>
                  <Button
                    onClick={() => toggleStatus(item)}
                    variant={item.completed ? "warning" : "success"}
                  >
                    <i
                      className={item.completed ? "fa fa-close" : "fa fa-check"}
                      aria-hidden="true"
                    ></i>
                  </Button>
                  <Button onClick={() => deleteTodo(item._id)} variant="danger">
                    <i className={"fa fa-trash"} aria-hidden="true"></i>
                  </Button>
                </div>
                <p style={{ textAlign: "center", overflow: "auto" }}>
                  {item.content}
                </p>
              </TodoItemContainer>
            ))
          ) : (
            <div>
              <EmptyTodoContent />
            </div>
          )}
        </TodoListContainer>
      </div>
    </>
  );
};
