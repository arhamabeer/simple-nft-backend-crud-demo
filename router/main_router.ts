import express from "express";
const router = express.Router();
import saveNft from "./nft_router";
import UpdateNft from "./nft_router";
import FetchNft from "./nft_router";

router.use("/", saveNft);
router.use("/", UpdateNft);
router.use("/", FetchNft);

export default router;
