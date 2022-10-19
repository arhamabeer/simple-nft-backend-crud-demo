import { FetchNft, SaveNft, UpdateNft } from "../controller/nft_controller";
import express from "express";
const router = express.Router();

router.post("/saveNft", SaveNft);
router.post("/updateNft", UpdateNft);
router.get("/fetchNft/:s/:n", FetchNft);

export default router;
