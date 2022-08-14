import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";

import "./styles.css";

const handleStyle = { left: 10 };

function TextUpdaterNode({ data }: any) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}

export default TextUpdaterNode;
