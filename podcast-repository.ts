import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const dbPath = path.join(__dirname, "podcasts.json");

export const getAll = (): PodcastModel[] => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data) as PodcastModel[];
};
