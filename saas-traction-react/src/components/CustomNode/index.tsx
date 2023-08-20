import React, { memo, useContext } from 'react';
import { Position } from 'reactflow';
import CustomHandle from './CustomHandle';
import { iconToComponentMap } from './iconToComponentMap';
import { AppContext } from '../../context/appContext';

const CustomNode = ({ data }: any) => {
  const { selectedNode } = useContext(AppContext);
  const { isConnectable, maxConnections, label, nodeId, icon, iconbgColor } =
    data;

  const styles = {
    background: 'white',
    padding: 5,
    border:
      selectedNode?.id === nodeId ? '1px solid #ff0072' : '1px solid lightgrey',
    opacity: isConnectable ? '100%' : '50%',
    fontSize: '0.5rem',
    borderRadius: '2px',
    width: '15vh',
  };
  const IconComponent = iconToComponentMap[icon];
  return (
    <div style={styles}>
      <div
        style={{
          display: 'inline-block',
          backgroundColor: iconbgColor,
          marginRight: '5px',
          borderRadius: '2px',
          padding: '2px',
        }}
      >
        {
          <IconComponent
            sx={{
              height: '10px',
              width: '14px',
            }}
          />
        }
      </div>
      <CustomHandle
        position={Position.Bottom}
        isConnectable={isConnectable}
        maxConnections={maxConnections}
        type="source"
        id={`source_${nodeId}`}
      />
      {label}
      <CustomHandle
        position={Position.Top}
        isConnectable={isConnectable}
        maxConnections={maxConnections}
        type="target"
        id={`target_${nodeId}`}
      />
    </div>
  );
};

export default memo(CustomNode);
