import NewProject from "@/components/NewProject";
import { db } from "@/db";
import { projects } from "@/db/schema";
import React from "react";
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  const { userId } = auth();

  return (
    <div>
      <NewProject />
    </div>
  );
}
