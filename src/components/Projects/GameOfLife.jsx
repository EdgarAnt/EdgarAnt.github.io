import React, { useState, useEffect, useRef, useCallback } from 'react';

const GameOfLife = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [grid, setGrid] = useState([]);
  const [generation, setGeneration] = useState(0);
  const [speed, setSpeed] = useState(100);
  
  const GRID_WIDTH = 60;
  const GRID_HEIGHT = 35;
  const CELL_SIZE = 14;
  
  // Initialize empty grid
  const createEmptyGrid = useCallback(() => {
    return Array(GRID_HEIGHT).fill().map(() => Array(GRID_WIDTH).fill(false));
  }, []);
  
  // Initialize grid on component mount
  useEffect(() => {
    setGrid(createEmptyGrid());
  }, [createEmptyGrid]);
  
  // Draw grid on canvas
  const drawGrid = useCallback((currentGrid) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw cells
    for (let i = 0; i < GRID_HEIGHT; i++) {
      for (let j = 0; j < GRID_WIDTH; j++) {
        if (currentGrid[i] && currentGrid[i][j]) {
          ctx.fillStyle = '#3B82F6';
          ctx.fillRect(j * CELL_SIZE, i * CELL_SIZE, CELL_SIZE - 1, CELL_SIZE - 1);
        }
      }
    }
    
    // Draw grid lines
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 0.5;
    
    for (let i = 0; i <= GRID_WIDTH; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, GRID_HEIGHT * CELL_SIZE);
      ctx.stroke();
      
    }
    
    for (let i = 0; i <= GRID_HEIGHT; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(GRID_WIDTH * CELL_SIZE, i * CELL_SIZE);
      ctx.stroke();
    }
  }, []);
  
  // Count living neighbors
  const countNeighbors = useCallback((grid, x, y) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newX = x + i;
        const newY = y + j;
        if (newX >= 0 && newX < GRID_HEIGHT && newY >= 0 && newY < GRID_WIDTH) {
          if (grid[newX] && grid[newX][newY]) count++;
        }
      }
    }
    return count;
  }, []);
  
  // Calculate next generation
  const nextGeneration = useCallback((currentGrid) => {
    const newGrid = createEmptyGrid();
    
    for (let i = 0; i < GRID_HEIGHT; i++) {
      for (let j = 0; j < GRID_WIDTH; j++) {
        const neighbors = countNeighbors(currentGrid, i, j);
        const isAlive = currentGrid[i] && currentGrid[i][j];
        
        if (isAlive && (neighbors === 2 || neighbors === 3)) {
          newGrid[i][j] = true;
        } else if (!isAlive && neighbors === 3) {
          newGrid[i][j] = true;
        }
      }
    }
    
    return newGrid;
  }, [createEmptyGrid, countNeighbors]);
  
  // Animation loop
  const runSimulation = useCallback(() => {
    if (!isRunning) return;
    
    setGrid(currentGrid => {
      const newGrid = nextGeneration(currentGrid);
      drawGrid(newGrid);
      return newGrid;
    });
    
    setGeneration(gen => gen + 1);
    
    animationRef.current = setTimeout(runSimulation, speed);
  }, [isRunning, speed, nextGeneration, drawGrid]);
  
  // Start/stop simulation
  useEffect(() => {
    if (isRunning) {
      runSimulation();
    } else {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    }
    
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isRunning, runSimulation]);
  
  // Draw grid when it changes
  useEffect(() => {
    drawGrid(grid);
  }, [grid, drawGrid]);
  
  // Handle canvas click
  const handleCanvasClick = (event) => {
    if (isRunning) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const gridX = Math.floor(y / CELL_SIZE);
    const gridY = Math.floor(x / CELL_SIZE);
    
    if (gridX >= 0 && gridX < GRID_HEIGHT && gridY >= 0 && gridY < GRID_WIDTH) {
      setGrid(currentGrid => {
        const newGrid = currentGrid.map(row => [...row]);
        newGrid[gridX][gridY] = !newGrid[gridX][gridY];
        return newGrid;
      });
    }
  };
  
  // Preset patterns
  const loadPattern = (pattern) => {
    const newGrid = createEmptyGrid();
    const startX = Math.floor(GRID_HEIGHT / 2) - Math.floor(pattern.length / 2);
    const startY = Math.floor(GRID_WIDTH / 2) - Math.floor(pattern[0].length / 2);
    
    pattern.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (startX + i >= 0 && startX + i < GRID_HEIGHT && 
            startY + j >= 0 && startY + j < GRID_WIDTH) {
          newGrid[startX + i][startY + j] = cell === 1;
        }
      });
    });
    
    setGrid(newGrid);
    setGeneration(0);
  };
  
  // Preset patterns
  const patterns = {
    glider: [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1]
    ],
    blinker: [
      [1, 1, 1]
    ],
    toad: [
      [0, 1, 1, 1],
      [1, 1, 1, 0]
    ],
    beacon: [
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 1, 1],
      [0, 0, 1, 1]
    ]
  };
  
  const clearGrid = () => {
    setGrid(createEmptyGrid());
    setGeneration(0);
    setIsRunning(false);
  };
  
  const randomize = () => {
    const newGrid = createEmptyGrid();
    for (let i = 0; i < GRID_HEIGHT; i++) {
      for (let j = 0; j < GRID_WIDTH; j++) {
        newGrid[i][j] = Math.random() > 0.7;
      }
    }
    setGrid(newGrid);
    setGeneration(0);
  };
  
  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Conway's Game of Life</h3>
        <p className="text-gray-600 mb-4">
          Click cells to toggle them, then press play to start the simulation
        </p>
        <div className="text-lg font-semibold text-blue-600">
          Generation: {generation}
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            isRunning 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isRunning ? 'Stop' : 'Play'}
        </button>
        
        <button
          onClick={clearGrid}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          Clear
        </button>
        
        <button
          onClick={randomize}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
        >
          Random
        </button>
        
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700">Speed:</label>
          <input
            type="range"
            min="50"
            max="500"
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            className="w-20"
          />
          <span className="text-sm text-gray-600">{speed}ms</span>
        </div>
      </div>
      
      {/* Preset patterns */}
      <div className="flex flex-wrap gap-2 justify-center">
        <span className="text-sm font-medium text-gray-700 mr-2">Patterns:</span>
        {Object.keys(patterns).map(patternName => (
          <button
            key={patternName}
            onClick={() => loadPattern(patterns[patternName])}
            disabled={isRunning}
            className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {patternName.charAt(0).toUpperCase() + patternName.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Canvas */}
      <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <canvas
          ref={canvasRef}
          width={GRID_WIDTH * CELL_SIZE}
          height={GRID_HEIGHT * CELL_SIZE}
          onClick={handleCanvasClick}
          className="cursor-pointer bg-white"
        />
      </div>
      
      {/* Rules */}
      <div className="max-w-2xl text-center">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Rules</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p>• Any live cell with 2 or 3 live neighbors survives</p>
          <p>• Any dead cell with exactly 3 live neighbors becomes alive</p>
          <p>• All other live cells die, and all other dead cells stay dead</p>
        </div>
      </div>
    </div>
  );
};

export default GameOfLife;