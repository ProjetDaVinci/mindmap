import { FC } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { Route, Router, useNavigate } from "react-router-dom";
import { emailPattern } from "../../../constants";
import { AppDispatch } from "../../../redux";
import { actions } from "../../../redux/ducks";
import { thunks } from "../../../redux/ducks";
import { LOGIN_ROUTE } from "../../routes/AuthRoutes/routes";
import { MAPS_ROUTE } from "../../routes/UserRoutes/routes";
import {
  Button,
  Container,
  HrefText,
  Input,
  InputColumn,
  UnderText,
} from "./styles";
import { FormReg } from "./types";

const RegistrationForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const onSubmit = ({ email, password, login }: FormReg) => {
    if (email === "" && password === "" && login === "") {
      alert("Please enter login and password");
    } else {
      dispatch(
        thunks.auth.registration({
          name: login,
          login: email,
          password_hash: password,
        })
      );
      dispatch(actions.selectedProject.clear(1));

      dispatch(actions.edges.deleteEdges([]));
      dispatch(actions.nodes.deleteNode([]));
    }
  };

  const toLogin = () => {
    navigate(LOGIN_ROUTE);
  };

  return (
    <Container>
      <h2>Registration</h2>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors: FormReg = {} as FormReg;
          if (!new RegExp(emailPattern).test(values?.email)) {
            errors.email = "Incorrect Email format";
          }
          if (!values.password) {
            errors.password = "Required";
          }

          return errors;
        }}
        render={({ handleSubmit, form }) => (
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", appearance: "none" }}
          >
            <Field name="login" type="login">
              {({ input, meta }) => (
                <InputColumn>
                  <Input {...input} type="login" placeholder="Login" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </InputColumn>
              )}
            </Field>
            <Field name="email" type="email">
              {({ input, meta }) => (
                <InputColumn>
                  <Input {...input} type="email" placeholder="Email" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </InputColumn>
              )}
            </Field>
            <Field name="password" type="password">
              {({ input, meta }) => (
                <InputColumn>
                  <Input {...input} type="password" placeholder="Password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </InputColumn>
              )}
            </Field>
            <Button
              type="submit"
              // disabled={submitting}
              className="btn mt-4 bg-gradient-primary w-100"
              onClick={handleSubmit}
            >
              Создать аккаунт
            </Button>
          </form>
        )}
      />
      <UnderText>
        Уже есть аккаунт? <HrefText onClick={toLogin}>Войдите</HrefText>
      </UnderText>
    </Container>
  );
};

export default RegistrationForm;
