import React, { useState } from 'react';
import './timesheet.css';
import { projects, tasks } from '../services/api';


function DayPickerSidebar({ selectedDay, setSelectedDay, timesheetData }) {
  return (
    <aside className="day-picker-sidebar">
      <div className="week-selector">
        <label>Week Starting</label>
        <input type="date" />
      </div>

      <div className="day-list">
        {Object.keys(timesheetData).map(day => (
          <div
            key={day}
            className={`day-card ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            <div className="day-info">
              <span className="day-name">{day}</span>
              <span className="day-total">
                {timesheetData[day].reduce((sum, t) => sum + Number(t.hours || 0), 0)}h
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function TaskDetailsArea({timesheetData, selectedDay, addTask}) {

  console.log(selectedDay);


  return (
    <main className="task-details-area">
      <h2>{selectedDay} Log</h2>

      <div className="task-header-row">
        <span>Project</span>
        <span>Task</span>
        <span>Hours</span>
        <span>Notes</span>
      </div>

      {timesheetData[selectedDay].map((entry) => (
        <div key={entry.id} className="task-row">
          <select><option>Select Project</option></select>
          <select><option>Select Task</option></select>
          <input type="number" placeholder="0.0" className="hrs-input" />
          <input type="text" placeholder="What did you do?" className="note-input" />
        </div>
      ))}

      <button className="add-task-btn" onClick={addTask}>+ Add Task</button>
    </main>
  );
}


export default function TimesheetPage() {
  const [selectedDay, setSelectedDay] = useState('Monday');

  // Data structure: An object where keys are days, containing arrays of tasks
  const [timesheetData, setTimesheetData] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  });

  const addTask = () => {
    const newTask = { id: Date.now(), project: '', task: '', hours: '', note: '' };
    setTimesheetData(prev => ({
      ...prev,
      [selectedDay]: [...prev[selectedDay], newTask]
    }));
  };

  console.log(selectedDay);
  console.log(timesheetData);

  return (
    <div className="timesheet-container">
      {/* LEFT: Week Picker & Day Summary */}
      <DayPickerSidebar selectedDay={selectedDay} setSelectedDay={setSelectedDay} timesheetData={timesheetData} />

      {/* RIGHT: Task List for selected day */}
      <TaskDetailsArea timesheetData={timesheetData} selectedDay={selectedDay} addTask={addTask} />
    </div>
  );
}