import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Plus } from "lucide-react";
import { createProject } from "@/actions/createProject";
import { SubmitProjectButton } from "./SubmitProjectButton";

const NewProject = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="w-4 h-4 mr-1" />
          New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>Create a project to get started</DialogDescription>
        </DialogHeader>
        <form className="flex gap-4 flex-col" action={createProject}>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Project name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="url">Url</Label>
              <Input id="url" name="url" placeholder="https://example.com" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Description (optinoal)"
            />
          </div>
          <SubmitProjectButton />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProject;
