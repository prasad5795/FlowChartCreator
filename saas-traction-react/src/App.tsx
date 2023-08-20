import { useRef, useState } from 'react';
import { CanvasComponent } from './components/CanvasComponent';
import { FormComponent } from './components/FormComponent';
import { Sidebar } from './components/Sidebar';
import { AppContext } from './context/appContext';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from 'reactflow';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import 'reactflow/dist/style.css';
import './globals.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: 'http://localhost:4000/graphql',
  }),
});

const App = () => {
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [selectedNode, setSelectedNode] = useState(undefined);
  const [availableNodes, setAvailableNodes] = useState([]);
  const [canvasNodes, setNodes, onNodesChange] = useNodesState([]);
  const [canvasEdges, setEdges, onEdgesChange] = useEdgesState([]);

  const fitToView = () => {
    setTimeout(() => {
      reactFlowInstance.fitView();
    }, 500);
  };

  return (
    <ApolloProvider client={client}>
      <AppContext.Provider
        value={{
          selectedNode,
          setSelectedNode,
          reactFlowInstance,
          setReactFlowInstance,
          fitToView,
          availableNodes,
          setAvailableNodes,
          canvasNodes,
          setNodes,
          onNodesChange,
          canvasEdges,
          setEdges,
          onEdgesChange,
          // currentNodes,
          // setCurrentNodes,
        }}
      >
        <div className="w-screen h-screen grid grid-cols-12">
          <ReactFlowProvider>
            <Sidebar />
            <CanvasComponent />
          </ReactFlowProvider>
          {selectedNode && <FormComponent />}
        </div>
      </AppContext.Provider>
    </ApolloProvider>
  );
};

export default App;
