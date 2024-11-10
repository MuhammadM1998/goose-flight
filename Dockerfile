# ----- Base -----
# Install Node
FROM node:lts-alpine3.18 AS base

# Updating system dependencies
RUN apk upgrade --no-cache


# ----- Build -----
FROM base AS build

# Set working directory
RUN mkdir -p /src
WORKDIR /src

# Enable PNPM via Corepack
RUN corepack enable pnpm

# Install dependencies
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm i --frozen-lockfile

# Copy the application code 
COPY . .

# Set memory size for Node.js to 8GB to avoid unexpected crashes in build
ENV NODE_OPTIONS="--max-old-space-size=8192"

# Build the app
RUN pnpm run generate


# ----- Production -----
FROM base

# Exposing port 3000 from the container (We still need to bind our local port to this port when running the container)
EXPOSE 3000

# Copying only the '.output' folder from the 'build' stage to minmize the image size
COPY --from=build /src/.output /.output

# Enable PNPM via Corepack
RUN corepack enable pnpm

# Serve the public folder
CMD ["pnpm", "dlx", "serve", ".output/public"]
