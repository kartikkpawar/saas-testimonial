"use server";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const createProject = async (formData: FormData) => {
  const { userId } = auth();
  const data = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    url: formData.get("url") as string,
    userId,
  };

  const [newProject] = await db
    .insert(projects)
    .values(data)
    .returning({ insertedId: projects.id });

  redirect(`/projects/${newProject.insertedId}/instructions`);
};
