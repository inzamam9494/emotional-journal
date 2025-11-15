import { Router } from "express";
import { addEntry } from "../controllers/entry.controllers.js";
import { getEntries } from "../controllers/entry.controllers.js";

const router = Router();

router.route("/add").post(addEntry);
router.route("/all").get(getEntries);

export default router;