"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const NotesModal = ({ isOpen, onClose, onSave, currentNotes, companyName }) => {
  const [notes, setNotes] = useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setNotes(currentNotes || "");
      setCharCount((currentNotes || "").length);
    }
  }, [isOpen, currentNotes]);

  const handleNotesChange = (e) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setNotes(value);
      setCharCount(value.length);
    }
  };

  const handleSave = () => {
    onSave(notes);
    onClose();
  };

  const handleCancel = () => {
    setNotes(currentNotes || "");
    setCharCount((currentNotes || "").length);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[500px] max-w-[90vw] max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[#3C3E41]">
            Edit Notes - {companyName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-[#6D778E] mb-2">
            Notes (max 500 characters)
          </label>
          <textarea
            value={notes}
            onChange={handleNotesChange}
            className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#0A85C2] focus:border-transparent bg-white text-gray-900"
            placeholder="Enter notes about this company..."
            maxLength={500}
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-gray-500">
              {charCount}/500 characters
            </span>
            {charCount === 500 && (
              <span className="text-xs text-red-500">
                Character limit reached
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-[#6D778E] border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#0A85C2] text-white rounded-md hover:bg-[#1860A3] transition-colors"
          >
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesModal; 