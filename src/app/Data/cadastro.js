"use client";
import React, { useState } from "react";

const cadastroForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function valida(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) valida(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    error,
    valida: () => valida(value),
    onBlur: () => valida(value),
  };
};

export default cadastroForm;
