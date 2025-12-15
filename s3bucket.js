// index.js
import express from "express";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const app = express();
const port = 3000;

const s3 = new S3Client({ region: "us-east-1" });
const bucketName = "test-water-bucket";

// Route to view file
app.get("/", async (req, res) => {
  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: "testfile.txt", // Your S3 file path
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 3600 }); // valid for 1 hour
    res.send(`<a href="${url}" target="_blank">View myfile.txt</a>`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching file from S3");
  }
});

app.listen(3000, "0.0.0.0", () => {
  console.log("App running on port 3000");
});
