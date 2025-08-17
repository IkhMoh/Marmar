import path from "path";
import fs from "fs";
import { Story } from "@/types/stories";

export async function getStories(): Promise<Story[]> {
  const filePath = path.join(process.cwd(), "src/data/stories.json");
  const rawData = fs.readFileSync(filePath, "utf-8");

  const parsedData: Story[] = JSON.parse(rawData);
  return parsedData;
}
