"use client";

import { useState } from 'react';

type Field = {
  key: string;
  type: string;
  value: string;
};

export default function ComponentCreatorPage() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [fields, setFields] = useState<Field[]>([]);

  const [newField, setNewField] = useState<Field>({ key: '', type: 'text', value: '' });
  const [message, setMessage] = useState('');

  const addField = () => {
    if (!newField.key) return;
    setFields((prev) => [...prev, newField]);
    setNewField({ key: '', type: 'text', value: '' });
  };

  const handleSubmit = async () => {
    const userId = "mock-user-id"; // nanti diganti dengan session user

    const res = await fetch('/api/components', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        name,
        type,
        fields
      }),
    });

    if (res.ok) {
      setMessage('Component saved!');
      setName('');
      setType('');
      setFields([]);
    } else {
      setMessage('Error saving component');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Component Creator</h1>

      <div className="mb-4">
        <label className="block font-semibold">Name</label>
        <input
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Type</label>
        <input
          className="border p-2 w-full"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>

      <hr className="my-4" />

      <h2 className="text-lg font-bold mb-2">Add Field</h2>
      <div className="flex gap-2 mb-2">
        <input
          className="border p-2 flex-1"
          placeholder="Key"
          value={newField.key}
          onChange={(e) => setNewField({ ...newField, key: e.target.value })}
        />
        <select
          className="border p-2"
          value={newField.type}
          onChange={(e) => setNewField({ ...newField, type: e.target.value })}
        >
          <option value="text">text</option>
          <option value="color">color</option>
          <option value="image">image</option>
          <option value="link">link</option>
          <option value="richText">richText</option>
        </select>
        <input
          className="border p-2 flex-1"
          placeholder="Value"
          value={newField.value}
          onChange={(e) => setNewField({ ...newField, value: e.target.value })}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded"
          onClick={addField}
        >
          Add
        </button>
      </div>

      <div className="mb-4">
        <h3 className="font-bold">Fields</h3>
        {fields.map((f, idx) => (
          <div key={idx} className="p-2 border rounded mb-2 flex justify-between">
            <span>{f.key} ({f.type}): {f.value}</span>
            <button
              className="text-red-500"
              onClick={() =>
                setFields(fields.filter((_, i) => i !== idx))
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        className="bg-green-600 text-white py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Save Component
      </button>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
