"use client";
import { useState } from "react";

function Loading({ start }) {
  if (start) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        <img src="../loading.gif" />
      </div>
    );
  }
}

export { Loading };
