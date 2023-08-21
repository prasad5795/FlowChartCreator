import { useCallback, useContext, useEffect, useRef } from 'react';
import ReactFlow, { Controls, MarkerType, addEdge } from 'reactflow';
import { AppContext } from '../context/appContext';

import { Button } from '@mui/material';
import axios from 'axios';
import CustomNode from './CustomNode/index';
import Toast from 'light-toast';

const nodeTypes = {
  custom: CustomNode,
};

// let id = 0;
const getId = (id = 0) => `${new Date().valueOf()}`;

export const CanvasComponent = () => {
  const reactFlowWrapper = useRef<any>(null);
  const {
    selectedNode,
    setSelectedNode,
    reactFlowInstance,
    setReactFlowInstance,
    fitToView,
    availableNodes,
    canvasNodes,
    setNodes,
    onNodesChange,
    canvasEdges,
    setEdges,
    onEdgesChange,
  } = useContext(AppContext);

  const onInit = (_reactFlowInstance: any) => {
    setReactFlowInstance(_reactFlowInstance);
  };

  const onConnect = (params: any) => {
    const { source, target } = params;
    let canMaketheConnection = true;
    canvasEdges.map((edge: any) => {
      if (edge.source === source) {
        canMaketheConnection = false;
      }
      if (edge.target === target) {
        canMaketheConnection = false;
      }
    });
    if (canMaketheConnection) {
      setEdges((eds: any) => {
        return addEdge(
          {
            ...params,
            markerEnd: {
              type: MarkerType.Arrow,
            },
          },
          eds
        );
      });
    } else {
      Toast.fail(
        "Can't make this connection as one outgoing already exists",
        2000
      );
    }
  };

  const onDragOver = (event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  // const onDrop = useCallback(
  const onDrop = (event: any) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

    const id = event.dataTransfer.getData('application/reactflow');
    if (typeof id === 'undefined' || !id) {
      return;
    }

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    const draggedNode = availableNodes.filter((node: any) => node.id === id)[0];
    const nodeId = getId(canvasNodes.length - 1);
    const newNode = {
      id: nodeId,
      map_id: id,
      type: 'custom',
      position,
      data: {
        label: draggedNode?.label,
        isConnectable: true,
        maxConnections: 2,
        nodeId,
        icon: draggedNode?.icon,
        iconbgColor: draggedNode?.iconbgColor,
      },
      connections: [],
      children: [],
      size: {},
      isGroup: false,
      config: JSON.parse(JSON.stringify(draggedNode.config)),
    };

    setNodes((nds: any) => nds.concat(newNode));
    fitToView();
  };

  const onPaneClick = (event: any) => {
    setSelectedNode();
    fitToView();
  };

  const nodeClicked = (event: any, node: any) => {
    setSelectedNode();
    setTimeout(() => {
      setSelectedNode(node);
    }, 100);
    fitToView();
  };

  const onNodesDelete = (deletedNodes: any) => {
    if (deletedNodes.map((node: any) => node.id).includes(selectedNode.id)) {
      setSelectedNode();
      fitToView();
    }
  };

  const handleSaveScene = () => {
    JSON.stringify;
    axios
      .post('http://localhost:4000/save-the-scene', {
        canvasNodes: JSON.stringify(canvasNodes),
        canvasEdges: JSON.stringify(canvasEdges),
      })
      .then(() => {
        Toast.success('Canvas state saved Successfully', 2000);
      })
      .catch((error) => {
        Toast.fail('Failed to save', 2000);
      });
  };

  useEffect(() => {
    const fetchScene = async () => {
      try {
        const res = await axios.get('http://localhost:4000/fetch-the-scene');
        const {
          canvasNodes: savedCanvasNodes = [],
          canvasEdges: savedCanvasEdges = [],
        } = res?.data?.scene;
        setNodes(savedCanvasNodes);
        setEdges(savedCanvasEdges);
      } catch (error) {
        console.log(
          '🚀 ~ file: CanvasComponent.tsx:161 ~ fetchScene ~ error:',
          error
        );
      }
    };
    fetchScene();
  }, []);

  return (
    <div
      className={`${
        selectedNode ? 'col-span-6' : 'col-span-10'
      } reactflow-wrapper border-2`}
      ref={reactFlowWrapper}
    >
      {!selectedNode && (
        <Button
          variant="contained"
          className="!absolute right-5 bottom-5 !z-10"
          onClick={handleSaveScene}
        >
          Save The Canvas
        </Button>
      )}
      <ReactFlow
        nodes={canvasNodes}
        edges={canvasEdges}
        onInit={onInit}
        onNodeClick={nodeClicked}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onPaneClick={onPaneClick}
        onNodesDelete={onNodesDelete}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};
