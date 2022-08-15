import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux";
import { actions, selectors, thunks } from "../../../redux/ducks";
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
import { useEffect, useState } from "react";
import FormAdd from "../FormAdd";
import { useNavigate } from "react-router-dom";
import { Exit } from "../../UI/icons";
import FormProject from "../FormProject";
import { PropsPoint } from "../../UI/Point/types";

const SideBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [setVisible, setIsVisible] = useState(false);
  const isToken = useSelector(selectors.auth.SelectToken);

  const project = useSelector(selectors.projectNew2.SelectProject);
  const stateSelect = useSelector(selectors.selectedProject.SelectProject);
  const projectId = useSelector(
    selectors.projectNew2.selectItemId(stateSelect.id)
  );

  const changeClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    dispatch(thunks.projectNew2.getListProjects());
  }, []);

  const signIn = () => {
    // navigate(LOGIN_ROUTE);
  };

  const onDelete = (id: number) => {
    dispatch(thunks.projectNew2.deleteProject(id));
  };

  console.log(projectId?.structure);

  const signOut = () => {
    dispatch(actions.auth.signOut());
  };

  const onClickProject = (id: number) => {
    const find = project && project?.find((select) => select.id === id);
    if (find) {
      dispatch(
        actions.selectedProject.addProject({
          id: find.id,
          sort: find.sort,
          structure: find.structure,
          company_id: find.company_id,
          name: find.name,
          qr: find.qr,
          selected: true,
        })
      );
    }
    // dispatch(thunks.projectNew2.deleteProject(obj.id));
  };

  const onAdd = () => {
    setIsVisible(!setVisible);
    dispatch(actions.edges.deleteEdges([]));
    dispatch(actions.nodes.deleteNode([]));
  };

  return (
    <>
      <Sidebard>
        <RelativeContainer>
          <Container>
            {isToken ? (
              <FlexContainer>
                <Button onClick={onAdd}>Создать проект</Button>
                <Exit onClick={signOut} fill={"#fff"} />
              </FlexContainer>
            ) : (
              <>
                <Button onClick={signIn}>Создать проект</Button>
                <AlertText>
                  Чтобы добавить или удалить проект войдите в систему
                </AlertText>
              </>
            )}
            {project?.map((point, key) => (
              <Point
                title={point.name}
                key={key}
                id={point.id}
                // selected={point.selected}
                onPlacemarkClick={onClickProject}
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
