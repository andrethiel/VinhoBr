"use client";
import React, { useState } from "react";

const types = {
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
    message:
      "A senha deve ter no mínimo 1 caractér maiúsculo, 1 mimúsculo e com no mínimo 8 caractéres ",
  },
};

const usuarioForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function valida(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    }
    if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
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

export default usuarioForm;
