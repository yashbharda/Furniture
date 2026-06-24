import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async function handler(req, res) {

  const folder = req.query.folder;

  if (!folder) {
    return res.status(400).json({ error: "Folder name required" });
  }

  try {

    const result = await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    const images = result.resources.map(img => ({
      url: img.secure_url
    }));

    return res.status(200).json(images);

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }

}