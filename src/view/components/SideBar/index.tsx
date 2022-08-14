import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux";
import { actions, selectors } from "../../../redux/ducks";
import { Point } from "../../UI";
import { MapType } from "../MapComponents/types";
import Modal from "react-modal";

import {
  AlertText,
  Button,
  Container,
  FlexContainer,
  HeaderContainer,
  RelativeContainer,
  Sidebard,
} from "./styles";
import { useState } from "react";
import FormAdd from "../FormAdd";
import { useNavigate } from "react-router-dom";
import { Exit } from "../../UI/icons";

const SideBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [setVisible, setIsVisible] = useState(false);
  const isToken = useSelector(selectors.auth.SelectToken);

  const changeClose = () => {
    setIsVisible(false);
  };

  const signIn = () => {
    // navigate(LOGIN_ROUTE);
  };

  const signOut = () => {
    dispatch(actions.auth.signOut());
  };

  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <HeaderContainer>
      <Sidebard>
        <RelativeContainer>
          {/* <Container>
            {isToken ? (
              <FlexContainer>
                <Button onClick={() => setIsVisible(!setVisible)}>
                  Добавитть
                </Button>
                <Exit onClick={signOut} fill={"black"} />
              </FlexContainer>
            ) : (
              <>
                <Button onClick={signIn}>Войти</Button>
                <AlertText>
                  Чтобы добавить или удалить точки войдите в систему
                </AlertText>
              </>
            )}
          </Container> */}
          <aside>
            <div className="description">
              You can drag these nodes to the pane on the right.
            </div>
            <div
              className="dndnode input"
              onDragStart={(event) => onDragStart(event, "input")}
              draggable
            >
              Input Node
            </div>
            <div
              className="dndnode"
              onDragStart={(event) => onDragStart(event, "default")}
              draggable
            >
              Default Node
            </div>
            <div
              className="dndnode output"
              onDragStart={(event) => onDragStart(event, "output")}
              draggable
            >
              Output Node
            </div>
          </aside>
        </RelativeContainer>
      </Sidebard>
      <Modal
        isOpen={setVisible}
        style={{
          content: {
            zIndex: 999999999999,
            maxWidth: 500,
            margin: "0 auto",
            padding: 20,
            // minHeight: "55%",
            // height: "fit-content",
          },
        }}
        ariaHideApp={false}
        // className={styles.overlay}
        overlayClassName="Overlay"
        shouldCloseOnEsc
        contentLabel="onRequestClose Example"
        shouldCloseOnOverlayClick={true}
        onRequestClose={changeClose}
        // key={cardId}
      >
        {/* <FormAdd setIsVisible={setIsVisible} /> */}
      </Modal>
    </HeaderContainer>
  );
};

export default SideBar;
