import { PodcastModel } from "../models/podcast-model";
import { getAll } from "../repositories/podcast-repository";

export const listEpisodes = (): PodcastModel[] => {
  return getAll();
};

export const filterByCategory = (category: string): PodcastModel[] => {
  const podcasts = getAll();
  return podcasts.filter((p) =>
    p.category.some((c) => c.toLowerCase() === category.toLowerCase())
  );
};

export const filterByPodcast = (name: string): PodcastModel[] => {
  const podcasts = getAll();
  return podcasts.filter((p) =>
    p.podcastName.toLowerCase().includes(name.toLowerCase())
  );
};
