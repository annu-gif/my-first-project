FROM node:18

WORKDIR /app

# Copy package files first (for layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Environment variables
ENV AWS_REGION=us-east-1

# Expose app port
EXPOSE 3000

# Start the app
CMD ["node", "s3bucket.js"]
