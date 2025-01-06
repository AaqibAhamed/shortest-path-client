import React, { useState } from 'react';
import Form from './components/Form';
import ResultDisplay from './components/ResultDisplay';
import { calculateShortestPath } from './services/api';
import { Graph } from './types/graph';

const App: React.FC = () => {
  const [result, setResult] = useState<{ nodeNames: string[]; distance: number } | null>(null);

  const sampleGraph: Graph = {
    graphNodes: [
      { name: 'A', edges: [{ targetNode:  { name: 'B' }, weight: 4 }, { targetNode:  { name: 'C' }, weight: 2 }] },
      { name: 'B', edges: [{ targetNode: { name: 'C' }, weight: 5 }, { targetNode: { name: 'D' }, weight: 10 }] },
      { name: 'C', edges: [{ targetNode: { name: 'D' }, weight: 3 }] },
      { name: 'D', edges: [] },
    ],
  };
  const handleFormSubmit = async (data: { fromNode: string; toNode: string }) => {
    try {
      const response = await calculateShortestPath(data.fromNode, data.toNode, sampleGraph);
      setResult(response);
    } catch (error) {
      console.error('Error fetching shortest path:', error);
      alert('Failed to fetch the shortest path. Please try again.');
    }
  };

  return (
    <div>
      <h1>Shortest Path Finder</h1>
      <Form onSubmit={handleFormSubmit} />
      {result && <ResultDisplay nodeNames={result.nodeNames} distance={result.distance} />}
    </div>
  );
};

export default App;
