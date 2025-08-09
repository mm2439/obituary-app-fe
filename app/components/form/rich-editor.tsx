"use client";

import React, { useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

type Props = {
  value: string;
  handleChange: (value: string) => void;
  wrapperClassName?: string;
};

function RichTexEditor({ value, handleChange }: Props) {
  const ref = useRef<ReactQuill>(null);

  return (
    <div className="relative bg-white text-[#3C3E41] border rounded-lg h-full overflow-auto">
      <ReactQuill
        ref={ref}
        className="custom-editor border [&_.ql-container]:min-h-[180px] [&_.ql-container]:border-none [&_.ql-toolbar]:border-t-0 [&_.ql-toolbar]:border-borderBg [&_.ql-toolbar]:rounded"
        theme="snow"
        value={value}
        onChange={handleChange}
        formats={[
          "header",
          "bold",
          "italic",
          "blockquote",
          "align",
          "underline",
          "strike",
          "list",
          // "color",
          "link",
        ]}
        modules={{
          toolbar: {
            container: [
              [{ header: [3, 4, 5, 6, false] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ align: [] }],
              // [
              //   {
              //     color: [
              //       "#2563eb", // Blue
              //       "#16a34a", // Green
              //       "#dc2626", // Red
              //       "#9333ea", // Purple
              //       "#ea580c", // Orange
              //       "#0d9488", // Teal
              //       "#be185d", // Pink
              //       "#854d0e", // Amber
              //       "#1e293b", // Slate
              //       "#4338ca", // Indigo
              //       "#000000", // Black
              //       "#f3f4f6", // Light Gray
              //     ],
              //   },
              // ],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link"],
            ],
          },
        }}
      />
    </div>
  );
}

export default React.memo(RichTexEditor);
