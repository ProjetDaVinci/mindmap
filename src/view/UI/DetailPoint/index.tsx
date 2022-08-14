import { useSelector } from "react-redux";
import { selectors } from "../../../redux/ducks";
import { Close } from "../icons";
import { Container, Content, TextContainer, Title } from "./styles";

const DetailPoint = () => {
  <Container>
    <Content>
      <TextContainer>
        {/* <Title>{point?.title}</Title>
          <p>{point?.descr}</p>
          {point?.coords.map((coords) => (
            <span>{coords}</span>
          ))} */}
      </TextContainer>
      <Close fill="black" />
    </Content>
  </Container>;
};

export default DetailPoint;
