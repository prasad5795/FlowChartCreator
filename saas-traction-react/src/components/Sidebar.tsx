import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AppContext } from '../context/appContext';

export const Sidebar = () => {
  const { availableNodes, setAvailableNodes } = useContext(AppContext);

  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  useEffect(() => {
    const fetchNodes = async () => {
      const response: any = await axios.get('http://localhost:4000/get-nodes');
      setAvailableNodes(response?.data);
    };
    fetchNodes();
  }, []);

  return (
    <div className="col-span-2 sidebar">
      <div className="description">Available Steps</div>
      {availableNodes &&
        availableNodes.map((node: any) => (
          <div
            className="draggablesidebarnode default"
            onDragStart={(event) => onDragStart(event, `${node.id}`)}
            draggable
            key={node.label}
          >
            {node.label}
          </div>
        ))}
    </div>
  );
};
