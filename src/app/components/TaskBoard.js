// components/TaskBoard.js
import React from 'react';
import TaskCard from './TaskCard';
import { Typography, Button } from '@mui/material';

const TaskBoard = ({ title, tasks = [] }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <div className="flex flex-col space-y-4">
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
        <Button variant="contained" color="primary">Add new</Button>
      </div>
    </div>
  );
};

export default TaskBoard;
