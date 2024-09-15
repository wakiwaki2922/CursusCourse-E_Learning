"use client"

import dynamic from "next/dynamic"
import { forwardRef, useMemo } from "react";
import "react-quill/dist/quill.snow.css"

interface EditorProps {
    onChange: (value: string) => void;
    value: string;
};

const Editor = forwardRef<HTMLDivElement, EditorProps>(function Editor({
    onChange,
    value
}, ref) {
    const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);

    return (
        <div className="bg-white">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
            />
        </div>
    )
});

export { Editor }
