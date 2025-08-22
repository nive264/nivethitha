import React from "react";

function StudentItem({ student, onEdit, onDelete }) {
  return (
    <div className="list-item">
      <div>
        <strong>{student.name}</strong>
        <div className="small-muted">{student.email} — {student.department}</div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="btn-ghost" onClick={() => onEdit(student)}>Edit</button>
        <button className="btn-danger" onClick={() => onDelete(student._id)}>Delete</button>
      </div>
    </div>
  );
}

export default StudentItem;
