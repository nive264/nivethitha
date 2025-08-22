import React from "react";
import StudentItem from "./StudentItem";

function StudentList({ students, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>Students</h3>
      {students.length === 0 ? (
        <p className="small-muted">No students added yet</p>
      ) : (
        <div>
          {students.map(s => (
            <StudentItem key={s._id} student={s} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;
