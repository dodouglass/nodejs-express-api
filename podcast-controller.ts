import { Request, Response } from "express";
import { listEpisodes, filterByCategory, filterByPodcast } from "../services/podcast-service";

export const getEpisodes = (req: Request, res: Response) => {
  const { category, podcast } = req.query;

  if (category) {
    const result = filterByCategory(category as string);
    if (result.length === 0) {
      return res.status(404).json({ message: "Nenhum episodio encontrado para essa categoria" });
    }
    return res.status(200).json(result);
  }

  if (podcast) {
    const result = filterByPodcast(podcast as string);
    if (result.length === 0) {
      return res.status(404).json({ message: "Nenhum podcast encontrado com esse nome" });
    }
    return res.status(200).json(result);
  }

  const result = listEpisodes();
  return res.status(200).json(result);
};
