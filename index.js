// index.js

const express = require('express');
const app = express();
const PORT = 3000;

// A simple route
app.get('/', (req, res) => {
  res.send('Hello from my Dockerized Node.js app on EC2!');
});

npm install @aws-sdk/client-s3
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";

const s3 = new S3Client({
  region: "us-east-1"
});

async function uploadFile() {
  const fileStream = fs.createReadStream("test.txt");

  const command = new PutObjectCommand({
    Bucket: "test-water-bucket",
    Key: "uploads/test.txt",
    Body: fileStream
  });

  await s3.send(command);
  console.log("File uploaded");
}

uploadFile();


// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
