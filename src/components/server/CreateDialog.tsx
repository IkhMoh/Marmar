import { SquarePlus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import CreatePostDialog from "./CreatePostDialog";
import CreateMenuPanel from "./CreateMenuPanel";

type CreateDialogProps = {
  isCollapsed?: boolean;
};

const CreateDialog = ({ isCollapsed }: CreateDialogProps) => {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openCreatePostDialog, setOpenCreatePostDialog] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpenCreateDialog(false);
      }
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        setOpenCreatePostDialog(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={panelRef} className="w-full">
      <div
        className={`flex items-center p-3 hover:bg-[#efefef] rounded-md cursor-pointer ${
          isCollapsed ? "w-fit" : "w-full"
        }`}
        onClick={() => setOpenCreateDialog((prev) => !prev)}
      >
        <SquarePlus size={25} />
        <p className={`${isCollapsed ? "hidden" : "hidden lg:block"} pl-4`}>
          Create
        </p>
      </div>

      {openCreateDialog && (
        <CreateMenuPanel
          setOpenCreatePostDialog={setOpenCreatePostDialog}
          setOpenCreateDialog={setOpenCreateDialog}
        />
      )}

      {openCreatePostDialog && (
        <CreatePostDialog
          dialogRef={dialogRef}
          setOpenCreatePostDialog={setOpenCreatePostDialog}
        />
      )}
    </div>
  );
};

export default CreateDialog;
