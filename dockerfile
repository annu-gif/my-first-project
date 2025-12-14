FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
ENV AWS_REGION=us-east-1
# Run your app
CMD ["node", "s3bucket.js"]
