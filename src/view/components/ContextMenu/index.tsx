import React, { memo } from "react";

type ContextType = {
  isOpen: boolean;
  position: { x: number; y: number };
  actions: { label: string; effect: (e: any) => void }[];
  onMouseLeave: () => void;
};

const ContextMenu = memo(
  ({ isOpen, position, actions, onMouseLeave }: ContextType) => {
    return isOpen ? (
      <div
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          zIndex: 1000,
          border: "1px solid red",
          borderRadius: 3,
          backgroundColor: "#fff",
          padding: 5,
          display: "flex",
          flexDirection: "column",
        }}
        onMouseLeave={onMouseLeave}
      >
        {actions.map((action) => (
          <button key={action.label} onClick={action.effect}>
            {action.label}
          </button>
        ))}
      </div>
    ) : null;
  }
);

export default ContextMenu;
