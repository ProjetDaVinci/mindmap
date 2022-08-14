import { useSelector } from "react-redux";
import { selectors } from "../../../redux/ducks";
import { Close } from "../icons";
import { Container, Content, TextContainer, Title } from "./styles";
import { PropsEvent, PropsPoint } from "./types";

const Point = ({ title, onDelete, id }: PropsPoint & PropsEvent) => {
  const isToken = useSelector(selectors.auth.SelectToken);

  return (
    <Container>
      <Content>
        <TextContainer>
          <Title>{title}</Title>
        </TextContainer>
        {isToken ? <Close fill="black" onClick={() => onDelete(id)} /> : <></>}
      </Content>
    </Container>
  );
};

export default Point;
