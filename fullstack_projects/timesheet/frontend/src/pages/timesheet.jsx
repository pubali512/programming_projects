import React, { useState } from 'react';
import './timesheet.css';
import { projects, tasks } from '../services/api';


// dateStr is in YYYY-MM-DD format 
function getMondayOfCurrentWeek() {
  const today = new Date();
  return getMondayOfWeek(today.toISOString().split('T')[0]);

};

function getMondayOfWeek(dateStr) {
  const tmpDate = new Date(dateStr);
  const dayIndex = tmpDate.getDay(); // 0 (Sun) to 6 (Sat)

  // Calculate how many days to move back to get to Monday
  // If today is Sunday (0), we move back 6 days. 
  // Otherwise, we move back (dayIndex - 1) days.
  const diff = tmpDate.getDate() - dayIndex + (dayIndex === 0 ? -6 : 1);
  const monday = new Date(tmpDate.setDate(diff));

  // Return in YYYY-MM-DD format for your HTML date input
  return monday.toISOString().split('T')[0];

}

function convertDayToDate(selectedDate, dayName) {
  const dayOffsets = {
    'Monday': 0,
    'Tuesday': 1,
    'Wednesday': 2,
    'Thursday': 3,
    'Friday': 4,
    'Saturday': 5,
    'Sunday': 6
  };

  console.log(`Converting ${dayName} with offset ${dayOffsets[dayName]} from base date ${selectedDate}`); 

  const convDate = new Date(selectedDate);
  convDate.setDate(convDate.getDate() + dayOffsets[dayName]); 
  return convDate.toISOString().split('T')[0];
}

function handleDateSelection(e, setSelectedDate) {
  const selectedDate = getMondayOfWeek(e.target.value);

  console.log(`Selected week starting date: ${selectedDate}`);
  setSelectedDate(selectedDate);
}

function handleTimeEntryChange(e, selectedDay, timesheetData, setTimesheetData, entryId) {
  const { name, value } = e.target;

  console.log(`Updating entry ${entryId} for ${selectedDay}: ${name} = ${value}`);
  setTimesheetData(prev => ({
    ...prev,
    [selectedDay]: prev[selectedDay].map(entry => entry.id === entryId ? { ...entry, [name]: value } : entry)
  }));
}


function DayPickerSidebar({ selectedDay, setSelectedDay, setSelectedDate, timesheetData }) {
  return (
    <aside className="day-picker-sidebar">
      <div className="week-selector">
        <label>Week Of </label>
        <input type="date" setdate={getMondayOfCurrentWeek()} onChange={e => handleDateSelection(e, setSelectedDate)} />
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

      <div>
        <center><button className="apply-button">Apply</button></center>
      </div>
    </aside>
  );
}

function TaskDetailsArea({ timesheetData, selectedDay, selectedDate, addTask }) {

  console.log(selectedDay);


  return (
    <main className="task-details-area">
      <h2><center>Log {selectedDay} ({convertDayToDate(selectedDate, selectedDay)})</center></h2>

      <div className="task-header-row">
        <span>Project</span>
        <span>Task</span>
        <span>Hours</span>
        <span>Notes</span>
      </div>

      {timesheetData[selectedDay].map((entry) => (
        <div key={entry.id} className="task-row">
          <select>
            <option>Select Project</option>
          </select>
          <select>
            <option>Select Task</option>
          </select>
          <input type="number" placeholder="0.0" className="hrs-input" />
          <input type="text" placeholder="What did you do?" className="note-input" />
        </div>
      ))}

      <center><button className="add-task-button" onClick={addTask}>+ Add Task</button></center>
      
    </main>
  );
}


export default function TimesheetPage() {

  // Date of year selected
  const [selectedDate, setSelectedDate] = useState(getMondayOfCurrentWeek());

  // Currently selected day of the week 
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

  return (
    <div className="timesheet-container">
      {/* LEFT: Week Picker & Day Summary */}
      <DayPickerSidebar selectedDay={selectedDay} setSelectedDay={setSelectedDay} setSelectedDate={setSelectedDate} timesheetData={timesheetData} />

      {/* RIGHT: Task List for selected day */}
      <TaskDetailsArea timesheetData={timesheetData} selectedDay={selectedDay} selectedDate={selectedDate} addTask={addTask} />
    </div>
  );
}