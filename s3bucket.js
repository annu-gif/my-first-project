const express = require("express");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const app = express();
const PORT = 3000;

const s3 = new S3Client({
  region: process.env.AWS_REGION || "us-east-1"
});

const BUCKET_NAME = "test-water-bucket";
const FILE_KEY = "uploads/testfile.txt";

app.get("/", async (req, res) => {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: FILE_KEY
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

    res.send(`
      <h2>S3 File Viewer</h2>
      <a href="${url}" target="_blank">View file</a>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching file from S3");
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("App running on port 3000");
});

