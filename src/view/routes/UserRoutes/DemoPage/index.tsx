import { FC } from "react";
import { AppWrapper, MapComponents } from "../../../components";
import MapDemo from "../../../components/MapDemo";
import { Container } from "./styles";

const DemoPage: FC = () => {
  return (
    <AppWrapper>
      <Container>
        <MapDemo />
      </Container>
    </AppWrapper>
  );
};

export default DemoPage;
