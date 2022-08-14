import { FC, useState } from "react";
import { AppWrapper, MapComponents } from "../../../components";
import SideBar from "../../../components/SideBar";
import { Menu } from "../../../UI/icons";
import { Button, Container } from "./styles";

const MapsPage: FC = () => {
  const [openMenu, setIsOpenMenu] = useState(false);

  return (
    <AppWrapper>
      <Container>
        <MapComponents />
        <Button
          onClick={() => setIsOpenMenu(!openMenu)}
          style={{
            position: "absolute",
            top: 10,
            right: openMenu ? "22vw" : 10,
            zIndex: 99999999,
          }}
        >
          <Menu />
        </Button>
        {openMenu ? <SideBar /> : null}
      </Container>
    </AppWrapper>
  );
};

export default MapsPage;
