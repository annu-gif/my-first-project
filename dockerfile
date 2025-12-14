FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENV AWS_REGION=us-east-1

# Run your S3 bucket app
CMD ["node", "s3bucket.js"]
