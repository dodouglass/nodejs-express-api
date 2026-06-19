import { Router } from "express";
import { getEpisodes } from "../controllers/podcast-controller";

const router = Router();

// GET /api/episodes - lista todos, filtra por ?category= ou ?podcast=
router.get("/episodes", getEpisodes);

export default router;
