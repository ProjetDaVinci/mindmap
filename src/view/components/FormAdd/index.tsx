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
  setNewName: (item: string) => void;
  setNodes: any;
};
const FormAdd: FC<FormModal> = ({ setIsVisible, setNewName, setNodes }) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectNode = useSelector(selectors.oneNode.SelectOneNode);

  const selectNodes = useSelector(selectors.nodes.SelectNodes);

  const onSubmit = ({ input }: FormRes) => {
    console.log("input", input);
    setIsVisible(false);
    dispatch(actions.oneNode.changeLabel({ text: input }));
    setNewName(input);
    const findItem = selectNodes.find((value) => value.id === selectNode.id);
    if (findItem) {
      console.log("selectNode.data.label", selectNode.data.label);

      setNodes((els: any) =>
        els.map((element: { id: string; data: { label: string } }) =>
          element.id === findItem.id
            ? {
                ...element,
                data: { label: input },
              }
            : element
        )
      );
    }
  };

  return (
    <div className="text-black">
      <div className="modal_header">
        <p className="hedder_text">Изменение</p>
        <Close onClick={() => setIsVisible(false)} fill="black" />
      </div>
      <div className="modal_body">
        <Form
          onSubmit={onSubmit}
          initialValues={{ input: selectNode.data.label }}
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
                Сохранить
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default FormAdd;
