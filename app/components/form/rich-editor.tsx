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
        className="custom-editor border [&_.ql-container]:min-h-[180px] [&_.ql-container]:max-h-[300px] [&_.ql-container]:overflow-y-auto [&_.ql-container]:border-none [&_.ql-toolbar]:border-t-0 [&_.ql-toolbar]:border-borderBg [&_.ql-toolbar]:rounded"
        theme="snow"
        value={value}
        onChange={handleChange}
        formats={["bold", "italic", "underline", "list", "link"]}
        modules={{
          toolbar: {
            container: [
              ["bold", "italic", "underline"],
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
