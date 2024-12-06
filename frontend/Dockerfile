# Use Node.js as the base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Build app
RUN npm run build

# Expose port (Vite preview default port is 4173)
EXPOSE 4173

# Start Vite preview server
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
