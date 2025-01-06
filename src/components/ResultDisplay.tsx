import React from 'react';

interface ResultDisplayProps {
  nodeNames: string[];
  distance: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ nodeNames, distance }) => {
  return (
    <div>
      <h3>Shortest Path</h3>
      <p>Nodes: {nodeNames.join(', ')}</p>
      <p>Total Distance: {distance}</p>
    </div>
  );
};

export default ResultDisplay;
