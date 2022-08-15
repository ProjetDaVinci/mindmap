import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { EdgeType, MapType, NewPoint } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors, thunks } from "../../../redux/ducks";
import { AppDispatch } from "../../../redux";
import Modal from "react-modal";

import "./dnd.css";
import ReactFlow, {
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  applyNodeChanges,
  addEdge,
  Background,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
  applyEdgeChanges,
  ReactFlowProvider,
} from "react-flow-renderer";
import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initial-elements";
import SideBar from "../SideBar";
import ContextMenu from "../ContextMenu";
import { Button, ButtonDemo } from "./styles";
import TextUpdaterNode from "../TextUpdater";
import FormAdd from "../FormAdd";
import { useNavigate } from "react-router-dom";
import { DEMO_ROUTE } from "../../routes/UserRoutes/routes";
import { Menu } from "../../UI/icons";
import { ButtonEdge } from "../ButtonEdge";
import { NodesItem } from "../../../redux/ducks/nodes/types";
import FormProject from "../FormProject";

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const onInit = (reactFlowInstance: any) =>
  console.log("flow loaded:", reactFlowInstance);

const MapComponents = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const reactFlowWrapper = useRef(null);
  const nodesRedux = useSelector(selectors.nodes.SelectNodes);
  const edgesRedux = useSelector(selectors.edges.SelectEdges);
  // const selectedProject = useSelector(selectors.projectNew2.selectSelected());
  const projects = useSelector(selectors.projectNew2.selectLastProject());
  const selectNode = useSelector(selectors.oneNode.SelectOneNode);
  const stateSelect = useSelector(selectors.selectedProject.SelectProject);

  const [loading, setLoading] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(nodesRedux);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgesRedux);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [idNde, setIdnode] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [setVisible, setIsVisible] = useState(false);
  const [isOpenProject, setIsOpenProject] = useState(false);
  const [setVisibleProject, setIsVisibleProject] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [oldName, setNewName] = useState("");

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  // const onDragOver = useCallback((event: any) => {
  //   event.preventDefault();
  //   event.dataTransfer.dropEffect = "move";
  // }, []);

  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge({ ...params, type: "buttonedge" }, eds));
    dispatch(actions.edges.changeEdges(edges));
  }, []);

  // useEffect(() => {
  //   dispatch(actions.edges.changeEdges(edges));
  // }, [onEdgesChange, edges]);

  // useEffect(() => {
  //   dispatch(actions.nodes.changeNodes(nodes));
  // }, [onNodesChange, nodes]);

  const navigateToDemo = () => {
    navigate(DEMO_ROUTE);
  };

  const onContextMenu = (e: any) => {
    let attrId = e.target.attributes[1].value;
    console.log(attrId);
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIdnode(attrId);
    setIsOpen(true);
  };

  const deleteNode = () => {
    setNodes((els: any) =>
      els.filter((element: { id: number }) => element.id !== idNde)
    );
    dispatch(actions.nodes.changeNodes(nodes));

    setIsOpen(false);
  };

  const changeLabel = (e: any) => {
    let attrId = e.target.attributes[1].value;
    console.log({ x: e.target, y: e.target });

    const findItem = nodes.find((value) => value.id === attrId);

    if (findItem) {
      setNewName(findItem.data.label);
      dispatch(actions.oneNode.changeNode(findItem));
      setIsVisible(true);
    }
    dispatch(actions.nodes.changeNodes(nodes));

    setIsOpen(false);
  };

  const onLoad = (connection: any) => {
    console.log("====================================");
    console.log("flow loaded", connection);
    console.log("====================================");
  };

  const createNew = () => {
    const newNode: NodesItem = {
      id: (nodes.length + 1).toString(),
      data: { label: "default text" },
      position: { x: 30, y: 20 },
      width: 150,
      height: 38,
    };
    setNodes((prevState) => [...prevState, newNode]);
    dispatch(actions.nodes.addNodes(newNode));
  };

  const changeClose = () => {
    setIsVisible(false);
  };

  const changeCloseProjectModal = () => {
    setIsVisibleProject(false);
  };

  const saveChange = () => {
    dispatch(actions.nodes.changeNodes(nodes));
    dispatch(actions.edges.changeEdges(edges));

    // console.log(selectedProject);
    if (stateSelect === undefined) {
      setIsVisibleProject(true);
      dispatch(
        thunks.projectNew2.createProject(projects?.name || "новый проект")
      );
    }
  };

  // const edgeTypes = {
  //   buttonedge: ButtonEdge,
  // };

  const edgeTypes = {
    [EdgeType.buttonedge]: ButtonEdge,
  };
  const openButton = (e: any) => {
    let attrId = e.target.attributes[1].value;

    console.log(attrId);
    const findItem = nodes.find((value) => value.id === attrId);
    console.log({ x: e.clientX, y: e.clientY });

    setButtonPosition({ x: e.clientX, y: e.clientY } || { x: 0, y: 0 });
    setButtonVisible(true);
  };

  const closeButton = () => {
    setButtonVisible(false);
  };

  return !loading ? (
    <>
      {/* <div className="dndflow"> */}
      {/* <ReactFlowProvider> */}
      <Button
        onClick={createNew}
        style={{ position: "absolute", top: "0", zIndex: 12312321 }}
      >
        Create
      </Button>
      <ButtonDemo
        onClick={navigateToDemo}
        style={{ position: "absolute", top: 60, zIndex: 12312321 }}
      >
        Demo
      </ButtonDemo>

      <Button
        onClick={saveChange}
        style={{ position: "absolute", top: 120, zIndex: 12312321 }}
      >
        Save
      </Button>

      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeContextMenu={onContextMenu}
        onLoad={onLoad}
        onConnect={onConnect}
        // onMouseOver={change}
        onNodeMouseEnter={openButton}
        onNodeMouseLeave={closeButton}
        onNodeDoubleClick={changeLabel}
        edgeTypes={edgeTypes}
        fitView
        attributionPosition="top-right"
        style={{
          backgroundColor: "#1a2035",
        }}
      >
        {buttonVisible ? (
          <ButtonDemo
            // onClick={navigateToDemo}
            style={{
              position: "absolute",
              left: buttonPosition.x,
              top: buttonPosition.y,
              zIndex: 12312321,
            }}
          >
            Кнопка
          </ButtonDemo>
        ) : null}

        <ContextMenu
          isOpen={isOpen}
          position={position}
          onMouseLeave={() => setIsOpen(false)}
          actions={[
            { label: "Delete", effect: deleteNode },
            { label: "changeLabel", effect: changeLabel },
          ]}
        />
        {/* <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === "input") return "#0041d0";
          if (n.type === "output") return "#ff0072";
          if (n.type === "default") return "#1a192b";

          return "#eee";
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return "#fff";
        }}
        nodeBorderRadius={2}
      /> */}
        <Controls />
        <Background color="red" gap={16} />
      </ReactFlow>

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
        <FormAdd
          setIsVisible={setIsVisible}
          setNewName={setNewName}
          setNodes={setNodes}
        />
      </Modal>
      <Modal
        isOpen={setVisibleProject}
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
        onRequestClose={changeCloseProjectModal}
        // key={cardId}
      >
        <FormProject setIsVisible={setIsVisibleProject} />
      </Modal>
      {/* </ReactFlowProvider> */}
      {/* </div> */}
    </>
  ) : (
    <>Loading...</>
  );
};

export default MapComponents;
