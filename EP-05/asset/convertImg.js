const fs = require("fs");
const path = require("path");

// Folder containing images
const imageFolder = "./images";

// Function to convert images to Base64
const convertImagesToBase64 = (folderPath) => {
  const images = fs.readdirSync(folderPath); // Read all files in the folder
  const base64Images = [];

  images.forEach((file, index) => {
    const filePath = path.join(folderPath, file);
    const fileExtension = path.extname(file).toLowerCase();
    const validExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];

    // Check if the file is an image
    if (validExtensions.includes(fileExtension)) {
      const fileBuffer = fs.readFileSync(filePath); // Read the file
      const base64String = fileBuffer.toString("base64"); // Convert to Base64
      const mimeType = `image/${fileExtension.replace(".", "")}`;

      // Add to the result array
      base64Images.push({
        id: index + 1,
        fileName: file,
        base64: `data:${mimeType};base64,${base64String}`,
      });
    }
  });

  return base64Images;
};

// Convert and save to JSON
const base64Images = convertImagesToBase64(imageFolder);
fs.writeFileSync("imagesBase64.json", JSON.stringify(base64Images, null, 2));

console.log("Conversion complete! Base64 data saved to imagesBase64.json");
