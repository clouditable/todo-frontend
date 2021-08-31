import React from "react";

export const EmptyTodoContent = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%" }}>
        <div>Henüz eklenmiş bir görev bulunmamaktadır.</div>
      </div>
    </div>
  );
};
