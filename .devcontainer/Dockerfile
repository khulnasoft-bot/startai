# DevContainer Dockerfile

# Use the official Node.js image as a base image
FROM node:20.18.0

# Set the working directory
WORKDIR /workspace

# Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN corepack enable pnpm && pnpm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Command to run the development server
CMD ["pnpm", "run", "dev"]
