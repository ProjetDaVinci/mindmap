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
import { NodesItem } from "../../../redux/ducks/nodes/types";
type FormRes = {
  input: string;
};

type FormModal = {
  setIsVisible: (item: boolean) => void;
};
const FormProject: FC<FormModal> = ({ setIsVisible }) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectNode = useSelector(selectors.oneNode.SelectOneNode);

  const selectNodes = useSelector(selectors.nodes.SelectNodes);

  const onSubmit = ({ input }: FormRes) => {
    setIsVisible(false);
    if (input.length !== 3) {
      dispatch(actions.project.addProject({ text: input }));
    } else {
      alert("Введите не менее 3 символов");
    }
  };

  return (
    <div className="text-black">
      <div className="modal_header">
        <p className="hedder_text">Добавить проект </p>
        <Close onClick={() => setIsVisible(false)} fill="black" />
      </div>
      <div className="modal_body">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Field name="input">
                {({ input, meta }) => (
                  <InputColumn>
                    Название
                    <Input
                      {...input}
                      type="text"
                      placeholder="Название проекта"
                    />
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
                Сохранить
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default FormProject;
