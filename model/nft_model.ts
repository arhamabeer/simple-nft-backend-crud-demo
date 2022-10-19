import mongoose, { Schema } from "mongoose";

const NftSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  description: { type: String, required: true },
  seller_fee_basis_points: { type: String, required: true },
  image: { type: String, required: true },
  attributes: [
    {
      trait_type: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  properties: {
    edition: { type: Number, required: false },
    files: [
      {
        uri: { type: String, required: true },
        type: { type: String, required: true },
      },
    ],
    category: { type: String, required: true },
    creators: [
      {
        address: { type: String, required: true },
        share: { type: Number, required: true },
      },
    ],
    compiler: { type: String, required: false },
  },
});

export default mongoose.model("NFTs", NftSchema);
