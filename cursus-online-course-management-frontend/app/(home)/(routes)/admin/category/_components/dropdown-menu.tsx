"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pencil, MoreHorizontal } from "lucide-react";
import { Fragment, useState } from "react";
import ModalEdit from "./modal-edit";
import { Category } from "@/types/Category";
import ModalDelete from "./modal-delete";

interface DropdownMenuActionsProps {
  categoryId: string;
  onCategoryChange: (newCategory: Category) => void;
}

const DropdownMenuActions: React.FC<DropdownMenuActionsProps> = ({
  categoryId,
  onCategoryChange,
}) => {
  const [showModalEdit, setShowModalEdit] = useState(false);

  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleCategoryChange = (newCategory: Category) => {
    if (onCategoryChange) {
      onCategoryChange(newCategory);
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-4 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Fragment>
              <button
                className="flex items-center space-x-2 w-full"
                onClick={() => setShowModalEdit(true)}
              >
                <Pencil className="h-4 w-4 mr-2" />
                Edit
              </button>
            </Fragment>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Fragment>
              <button
                className="flex items-center space-x-2 w-full"
                onClick={() => setShowModalDelete(true)}
              >
                <Pencil className="h-4 w-4 mr-2" />
                Delete
              </button>
            </Fragment>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ModalEdit
        isVisible={showModalEdit}
        onClose={() => setShowModalEdit(false)}
        categoryUpdateId={categoryId}
        onCategoryChange={handleCategoryChange}
      />
      <ModalDelete
        isVisible={showModalDelete}
        onClose={() => setShowModalDelete(false)}
        categoryDeleteId={categoryId}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
};

export default DropdownMenuActions;
