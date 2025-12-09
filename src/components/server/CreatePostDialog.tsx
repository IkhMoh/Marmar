import React from "react";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type CreatePostDialogProps = {
  setOpenCreatePostDialog: (value: boolean) => void;
  dialogRef: React.RefObject<HTMLDivElement | null>;
};

const CreatePostDialog = ({
  setOpenCreatePostDialog,
  dialogRef,
}: CreatePostDialogProps) => {
  return (
    <div>
    {/* Dialog */}
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      className="sm:max-w-[425px] w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-6 rounded-xl shadow-xl"
    >
      <h2 className="text-lg font-semibold text-gray-800">Edit Profile</h2>
  
      <div className="grid gap-4 mt-5">
        <div className="grid gap-2">
          <Label htmlFor="name-1">Name</Label>
          <Input
            id="name-1"
            name="name"
            defaultValue="Pedro Duarte"
            className="bg-gray-50 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
  
        <div className="grid gap-2">
          <Label htmlFor="username-1">Username</Label>
          <Input
            id="username-1"
            name="username"
            defaultValue="@peduarte"
            className="bg-gray-50 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>
  
      <div className="mt-6 flex justify-end gap-3">
        <Button
          variant="outline"
          onClick={() => setOpenCreatePostDialog(false)}
        >
          Cancel
        </Button>
        <Button type="submit">Save changes</Button>
      </div>
    </div>
  
    {/* Backdrop */}
    <div
      className="fixed inset-0 bg-black/50 z-40"
      onClick={() => setOpenCreatePostDialog(false)}
    />
  </div>
  
  );
};

export default CreatePostDialog;
