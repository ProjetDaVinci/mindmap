import { type } from "os";
import { FC, useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import styles from ".";

import React from "react";

import { AppDispatch } from "../../../redux";
import { Close } from "../../UI/icons";
import { Input, InputColumn } from "./styles";
import { actions, selectors } from "../../../redux/ducks";
type FormRes = {
  input: string;
};

type FormModal = {
  setIsVisible: (item: boolean) => void;
  setNewName: (item: string) => void;
  inititalName: string;
};
const FormAdd: FC<FormModal> = ({ setIsVisible, setNewName, inititalName }) => {
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = ({ input }: FormRes) => {
    setIsVisible(false);
    setNewName(input);
  };

  return (
    <div className="text-black">
      <div className="modal_header">
        <p className="hedder_text">Добавление точки</p>
        <Close onClick={() => setIsVisible(false)} fill="black" />
      </div>
      <div className="modal_body">
        <Form
          onSubmit={onSubmit}
          initialValues={{ input: inititalName }}
          render={({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Field name="input">
                {({ input, meta }) => (
                  <InputColumn>
                    Название
                    <Input {...input} type="text" placeholder="Название" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </InputColumn>
                )}
              </Field>

              <button
                type="submit"
                // disabled={submitting}
                className="btn mt-4 bg-gradient-primary w-100"
                onClick={handleSubmit}
              >
                Добавить
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default FormAdd;
