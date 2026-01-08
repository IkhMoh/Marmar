"use client";
import React, { useRef, useState } from "react";
import { X, Image as ImageIcon, Video } from "lucide-react";

type CreatePostDialogProps = {
  setOpenCreatePostDialog: (value: boolean) => void;
  dialogRef: React.RefObject<HTMLDivElement | null>;
};
const CreatePostDialog = ({
  setOpenCreatePostDialog,
  dialogRef,
}: CreatePostDialogProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Trigger the hidden file input when button is clicked
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Handle file selection via button
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
      console.log("Files selected:", files);
      // You can add logic here to show a preview
    }
  };

  // Handle Drag and Drop logic
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necessary to allow a drop
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files);
      setSelectedFiles(files);
      console.log("Files dropped:", files);
    }
  };
  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4"
    >
      {/* Modal Container */}
      <div className="bg-white w-full max-w-[500px] rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 text-center">
          <div className="w-8" />
          <h2 className="text-base font-semibold text-gray-900 flex-1">
            Create new post
          </h2>
          <button
            className="text-gray-500 hover:text-black transition-colors"
            onClick={() => setOpenCreatePostDialog(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex flex-col">
          {/* Text Inputs Section */}
          <div className="p-4 space-y-3 border-b border-gray-100">
            <input
              type="text"
              placeholder="Title"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800 transition-all"
            />
            <textarea
              placeholder="Body (Details of the post)"
              rows={3}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800 resize-none transition-all"
            />
          </div>

          {/* Drag & Drop Zone */}
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="flex flex-col items-center justify-center py-16 space-y-4"
          >
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              accept="image/*,video/*"
              className="hidden"
            />
            <div className="flex -space-x-3 items-center">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 rotate-[-10deg]">
                <ImageIcon
                  size={32}
                  strokeWidth={1.5}
                  className="text-gray-700"
                />
              </div>
              <div className="p-3 bg-white rounded-xl shadow-md border border-gray-100 z-10">
                <Video size={40} strokeWidth={1.5} className="text-gray-900" />
              </div>
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 rotate-[10deg]">
                <ImageIcon
                  size={32}
                  strokeWidth={1.5}
                  className="text-gray-700"
                />
              </div>
            </div>
            <p className="text-xl text-gray-900 pointer-events-none font-medium">
              {selectedFiles.length > 0
                ? `${selectedFiles.length} files ready`
                : "Drag photos and videos here"}
            </p>

            <button
              onClick={
                selectedFiles.length === 0 ? handleButtonClick : undefined
              }
              className={`font-semibold py-2 px-4 rounded-lg text-sm transition-all shadow-sm 
              ${
                selectedFiles.length > 0
                  ? "bg-gray-400 cursor-not-allowed text-white" // Style when files are selected
                  : "bg-[#0095F6] hover:bg-[#1877F2] text-white active:scale-95 cursor-pointer" // Original style
              }`}
            >
              {selectedFiles.length > 0
                ? "Files Selected"
                : "Select from computer"}
            </button>

            {/* Optional: Add a "Clear" button so they can change their mind */}
            {selectedFiles.length > 0 && (
              <button
                onClick={() => setSelectedFiles([])}
                className="text-xs text-red-500 hover:underline mt-2"
              >
                Clear selection
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostDialog;
