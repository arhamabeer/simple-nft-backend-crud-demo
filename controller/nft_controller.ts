import nft from "../model/nft_model";

// SAVE
const SaveNft = async (req: any, res: any) => {
  const {
    name,
    symbol,
    description,
    seller_fee_basis_points,
    image,
    attributes,
    properties,
    _id,
  } = req.body;
  try {
    let data = new nft({
      name,
      symbol,
      description,
      seller_fee_basis_points,
      image,
      attributes,
      properties,
      _id,
    });

    const response = await data.save();
    return res
      .status(200)
      .send({ msg: "NFT saved successfully", res: response });
  } catch (e) {
    return res.status(500).send({ message: "Internal Server Error", error: e });
  }
};

// UPDATE
const UpdateNft = async (req: any, res: any) => {
  try {
    const response = await nft.findOneAndUpdate(
      { _id: req.body._id },
      { ...req.body },
      { new: true }
    );
    return res
      .status(200)
      .send({ msg: "NFT updated successfully", res: response });
  } catch (e) {
    return res.status(500).send({ message: "Internal Server Error", error: e });
  }
};

//FETCH
const FetchNft = async (req: any, res: any) => {
  console.log(req.params);
  const { s, n } = req.params;

  const pageSize = s ? parseInt(s) : 2;
  const pageNumber = n ? parseInt(n) - 1 : 0;
  const pageSkip = pageNumber * pageSize;

  try {
    const response = await nft.aggregate([
      {
        $skip: pageSkip,
      },
      {
        $limit: pageSize,
      },
    ]);
    return res
      .status(200)
      .send({ msg: "NFT fecthed successfully", res: response });
  } catch (e) {
    return res.status(500).send({ message: "Internal Server Error", error: e });
  }
};

export { SaveNft, UpdateNft, FetchNft };
