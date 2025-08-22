import React, { useState, useEffect } from "react";

function StudentForm({ onCreate, editingStudent, onCancelEdit, onUpdate }) {
  const [form, setForm] = useState({ name: "", email: "", department: "" });

  useEffect(() => {
    if (editingStudent) setForm({
      name: editingStudent.name || "",
      email: editingStudent.email || "",
      department: editingStudent.department || ""
    });
    else setForm({ name: "", email: "", department: "" });
  }, [editingStudent]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) onUpdate(editingStudent._id, form);
    else onCreate(form);
    setForm({ name: "", email: "", department: "" });
  };

  return (
    <div className="card" style={{ marginBottom: 16 }}>
      <h3>{editingStudent ? 'Edit Student' : 'Add New Student'}</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <select name="department" value={form.department} onChange={handleChange} required>
          <option value="">Select department</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Electrical">Electrical</option>
          <option value="Civil">Civil</option>
        </select>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn-primary" type="submit">{editingStudent ? 'Update' : 'Add'}</button>
          {editingStudent && <button type="button" className="btn-ghost" onClick={onCancelEdit}>Cancel</button>}
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
