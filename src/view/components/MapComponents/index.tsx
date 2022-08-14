import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MapType, NewPoint } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../../redux/ducks";
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
import { Button } from "./styles";
import TextUpdaterNode from "../TextUpdater";
import FormAdd from "../FormAdd";

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 5,
};
let id = 10;
const getId = () => `dndnode_${id++}`;

const onInit = (reactFlowInstance: any) =>
  console.log("flow loaded:", reactFlowInstance);

const MapComponents = () => {
  const dispatch = useDispatch<AppDispatch>();
  const reactFlowWrapper = useRef(null);
  const nodesRedux = useSelector(selectors.nodes.SelectNodes);
  const selectNode = useSelector(selectors.oneNode.SelectOneNode);

  const [loading, setLoading] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(nodesRedux);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [idNde, setIdnode] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [setVisible, setIsVisible] = useState(false);
  const [newName, setNewName] = useState("");

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  // const onDragOver = useCallback((event: any) => {
  //   event.preventDefault();
  //   event.dataTransfer.dropEffect = "move";
  // }, []);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  // const onEdgesChange = useCallback(
  //   (changes: EdgeChange[]) =>
  //     setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // );
  // const onConnect = useCallback(
  //   (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
  //   [setEdges]
  // );

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
    setIsOpen(false);
  };

  const changeLabel = () => {
    const findItem = nodes.find((value) => value.id === idNde);
    if (findItem) {
      setNewName(findItem.data.label);
      dispatch(actions.oneNode.changeNode(findItem));
      setIsVisible(true);
    }

    if (newName.length > 0) {
      if (findItem) {
        console.log("newName", newName);

        setNodes((els: any) =>
          els.map((element: { id: number; data: { label: string } }) =>
            element.id === idNde
              ? {
                  ...element,
                  data: { label: selectNode.data.label },
                }
              : element
          )
        );
      }
    }

    setIsOpen(false);
  };

  const onLoad = (connection: any) => {
    console.log("====================================");
    console.log("flow loaded", connection);
    console.log("====================================");
  };

  const createNew = () => {
    const newNode = {
      id: getId(),
      // type: "customnode",
      data: { label: " An input", type: "node" },
      position: { x: 30, y: 20 },
      // sourcePosition: "right",
    };
    setNodes((es) => es.concat(newNode));
  };

  const changeClose = () => {
    setIsVisible(false);
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
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeContextMenu={onContextMenu}
        onLoad={onLoad}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right"
        style={{
          backgroundColor: "#1a2035",
        }}
      >
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
      {/* <SideBar /> */}
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
          inititalName={newName}
        />
      </Modal>
      {/* </ReactFlowProvider> */}
      {/* </div> */}
    </>
  ) : (
    <>Loading...</>
  );
};

export default MapComponents;
