const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
 const dotenv = require('dotenv')
 dotenv.config()
// Configure Cloudinary
   console.log(
     "cloudinary_key:",
     process.env.CLOUDINARY_CLOUD_NAME ,
       process.env.CLOUDINARY_API_KEY ,
       process.env.CLOUDINARY_API_SECRET
   )
if (
  !process.env.CLOUDINARY_CLOUD_NAME ||
  !process.env.CLOUDINARY_API_KEY ||
  !process.env.CLOUDINARY_API_SECRET
) {
  console.error("❌ Missing Cloudinary environment variables");
}
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "resumes",
    allowed_formats: ["pdf", "doc", "docx"],
    resource_type: "raw", // for non-image files
  },
});

module.exports = { cloudinary, storage };
