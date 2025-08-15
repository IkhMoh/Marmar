import path from "path";
import fs from "fs";
import { MinimalUser } from "@/types/user";

export async function getUsers(): Promise<MinimalUser[]> {
  const filePath = path.join(process.cwd(), "src/data/suggestions.json");
  const rawData = fs.readFileSync(filePath, "utf-8");

  const parsedData: MinimalUser[] = JSON.parse(rawData);
  return parsedData;
}
