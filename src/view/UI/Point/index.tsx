import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux";
import { actions, selectors, thunks } from "../../../redux/ducks";
import { Close } from "../icons";
import { Container, Content, TextContainer, Title } from "./styles";
import { PropsEvent, PropsPoint } from "./types";

const Point = ({ title, id, onPlacemarkClick }: PropsPoint & PropsEvent) => {
  const isToken = useSelector(selectors.auth.SelectToken);
  const selected = useSelector(selectors.selectedProject.SelectProject);
  const dispatch = useDispatch<AppDispatch>();

  const onClick = (id: number) => {
    onPlacemarkClick(id);
  };

  const onDelete = (id: number) => {
    dispatch(thunks.projectNew2.deleteProject(id));
    dispatch(actions.projectNew2.delete(id));
  };

  return (
    <Container
      style={{
        backgroundImage:
          selected.id === id
            ? "linear-gradient(195deg, #ec407a, #d81b60)"
            : undefined,
        borderRadius: selected.id === id ? 10 : undefined,
      }}
    >
      <Content onClick={() => onClick(id)}>
        <TextContainer>
          <Title>{title}</Title>
        </TextContainer>
        {isToken ? (
          <Close
            fill="#fff"
            style={{ zIndex: 99999999 }}
            onClick={() => onDelete(id)}
          />
        ) : (
          <></>
        )}
      </Content>
    </Container>
  );
};

export default Point;
