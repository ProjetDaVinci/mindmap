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
import FormProject from "../FormProject";

const SideBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [setVisible, setIsVisible] = useState(false);
  const isToken = useSelector(selectors.auth.SelectToken);

  const project = useSelector(selectors.project.SelectProject);

  const changeClose = () => {
    setIsVisible(false);
  };

  const signIn = () => {
    // navigate(LOGIN_ROUTE);
  };

  const onDelete = (id: number) => {
    dispatch(actions.project.deleteProject(id));
  };

  const signOut = () => {
    dispatch(actions.auth.signOut());
  };

  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <>
      <Sidebard>
        <RelativeContainer>
          <Container>
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
            {project.map((point, key) => (
              <Point
                title={point.name}
                key={key}
                id={point.id}
                onDelete={onDelete}
              />
            ))}
          </Container>
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
        <FormProject setIsVisible={setIsVisible} />
      </Modal>
    </>
  );
};

export default SideBar;
