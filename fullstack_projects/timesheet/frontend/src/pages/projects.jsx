export default function ProjectsPage() {
  return <h2>Projects ABCD</h2>;
}

// import React, { useState } from 'react';
// 
// export default function ProjectsPage() {
//   // 'create_project', 'create_task', 'edit_project', 'edit_task'
//   const [mode, setMode] = useState('create_project');
// 
//   // Mock data - in a real app, this comes from your database/state
//   const existingProjects = [
//     { id: 'P001', name: 'Internal Admin' },
//     { id: 'P002', name: 'Client Alpha' }
//   ];
// 
//   const renderForm = () => {
//     switch (mode) {
//       case 'create_project':
//         return (
//           <>
//             <h3>Create New Project</h3>
//             <input type="text" placeholder="Project Name" />
//             <input type="text" placeholder="Project ID" />
//             <textarea placeholder="Description"></textarea>
//           </>
//         );
//       case 'create_task':
//         return (
//           <>
//             <h3>Create New Task</h3>
//             <select>
//               <option>Select Existing Project...</option>
//               {existingProjects.map(p => <option key={p.id}>{p.name}</option>)}
//             </select>
//             <input type="text" placeholder="Task Name" />
//             <input type="text" placeholder="Task ID" />
//             <textarea placeholder="Description"></textarea>
//             <textarea placeholder="Notes"></textarea>
//           </>
//         );
//       case 'edit_project':
//         return (
//           <>
//             <h3>Edit Project</h3>
//             <select><option>Select Project to Edit...</option></select>
//             <input type="text" placeholder="New Project Name" />
//             <textarea placeholder="New Description"></textarea>
//           </>
//         );
//       case 'edit_task':
//         return (
//           <>
//             <h3>Edit Task</h3>
//             <select><option>Select Project...</option></select>
//             <select><option>Select Task...</option></select>
//             <input type="text" placeholder="New Task Name" />
//             <textarea placeholder="New Description"></textarea>
//           </>
//         );
//       default: return null;
//     }
//   };
// 
//   return (
//     <div style={{ display: 'flex', height: '80vh', gap: '2rem' }}>
//       {/* LEFT PANEL: NAVIGATION COMMANDS */}
//       <div style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
//         <button onClick={() => setMode('create_project')}>Create Project</button>
//         <button onClick={() => setMode('create_task')}>Create Task</button>
//         <button onClick={() => setMode('edit_project')}>Edit Project</button>
//         <button onClick={() => setMode('edit_task')}>Edit Task</button>
//       </div>
// 
//       {/* RIGHT PANEL: FORM CONTEXT */}
//       <div style={{ flex: 1, position: 'relative', border: '1px solid #ddd', padding: '2rem' }}>
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//           {renderForm()}
//         </div>
//         
//         {/* ACTION BUTTON */}
//         <button style={{ position: 'absolute', bottom: '20px', right: '20px', padding: '10px 30px' }}>
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// }