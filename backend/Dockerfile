# Use official Node.js runtime
FROM node:18

# Create app directory
WORKDIR /app

# Copy backend files
COPY package*.json ./
RUN npm install

COPY . .

# Expose port (Cloud Run uses 8080)
EXPOSE 8080

# Start server
CMD ["npm", "start"]