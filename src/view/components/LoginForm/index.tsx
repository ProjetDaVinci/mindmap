import { FC } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { Route, Router, useNavigate } from "react-router-dom";
import { emailPattern } from "../../../constants";
import { AppDispatch } from "../../../redux";
import { actions, thunks } from "../../../redux/ducks";
import { REGISTER_ROUTE } from "../../routes/AuthRoutes/routes";
import { MAPS_ROUTE } from "../../routes/UserRoutes/routes";
import {
  Button,
  Container,
  HrefText,
  Input,
  InputColumn,
  UnderText,
} from "./styles";
import { FormRes } from "./types";

const LoginForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const onSubmit = ({ email, password }: FormRes) => {
    if (email === "" && password === "") {
      alert("Please enter login and password");
    } else {
      dispatch(
        thunks.auth.login({
          login: email,
          password_hash: password,
        })
      );
      dispatch(actions.edges.deleteEdges([]));
      dispatch(actions.nodes.deleteNode([]));
    }
  };

  const toReg = () => {
    navigate(REGISTER_ROUTE);
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors: FormRes = {} as FormRes;
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
              Войти
            </Button>
          </form>
        )}
      />
      <UnderText>
        Нет аккаунта? <HrefText onClick={toReg}>Создать аккаунт</HrefText>
      </UnderText>
    </Container>
  );
};

export default LoginForm;
