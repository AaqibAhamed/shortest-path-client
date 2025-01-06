import axios from 'axios';
import { Graph, ShortestPathResponse } from '../types/graph';

const API_BASE_URL = 'http://localhost:5085/api'; // Replace with your API base URL.

export const calculateShortestPath = async (
    fromNode: string,
    toNode: string,
    graph: Graph
): Promise<ShortestPathResponse> => {
    const response = await axios.post<ShortestPathResponse>(`${API_BASE_URL}/ShortestPath/shortest-path`, {
        fromNode,
        toNode,
        graphNodes: graph.graphNodes,
    });
    return response.data;
};
