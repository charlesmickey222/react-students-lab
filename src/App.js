
import './App.css';
import { useState } from 'react';
import { studentData } from './components/data/data';
import Student from './components/Student/Student';
import './components/Student/Student.css'

function App() {
  return (
    <>
    <ul>
      {studentData.map(student=>(
        <li className="studentCard">
          <Student key={student.id} student={student}/>
        </li>
      ))}
    </ul>
    </>
  );
}

export default App;
