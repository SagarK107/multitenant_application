# 1. Use an official Node.js runtime as the base image
FROM node:20-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy package files first (for better caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY . .

# 6. Expose the port your app runs on
EXPOSE 3000

# 7. Start the application
CMD ["node", "src/app.js"]
