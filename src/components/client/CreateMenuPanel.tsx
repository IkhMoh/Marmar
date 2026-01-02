"use client";

import { ImageDown } from "lucide-react";
import { Card, CardContent } from "../ui/card";

type CreateMenuPanelProps = {
  setOpenCreateDialog: (value: boolean) => void;
  setOpenCreatePostDialog: (value: boolean) => void;
};

const CreateMenuPanel: React.FC<CreateMenuPanelProps> = ({
  setOpenCreateDialog,
  setOpenCreatePostDialog,
}) => {
  return (
    <Card
      onClick={() => {
        setOpenCreatePostDialog(true);
        setOpenCreateDialog(false);
      }}
      className="p-0 w-52 h-fit fixed shadow-lg rounded-xl border overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl"
    >
      <CardContent className="p-2">
        <div className="flex justify-between items-center px-3 py-2 text-md font-medium hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg">
          <span>Posts</span>
          <ImageDown className="" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CreateMenuPanel;
