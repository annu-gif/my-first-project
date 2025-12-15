app.get("/", async (req, res) => {
  try {
    const command = new GetObjectCommand({
      Bucket: test-water-bucket,
      Key: uploads/testfile.txt
    });

    const data = await s3.send(command);
    const bodyContents = await streamToString(data.Body);

    res.send(`
      <h2>Contents of testfile.txt</h2>
      <pre>${bodyContents}</pre>
    `);

  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching file from S3");
  }
});

// Helper to convert S3 stream to string
async function streamToString(stream) {
  return await new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
  });
}
