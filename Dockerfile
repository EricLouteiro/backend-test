# Building layer
FROM node:lts-alpine as development
WORKDIR /app

# Copy configuration files
COPY . .


# Install dependencies from package-lock.json
RUN yarn install
RUN yarn add @nestjs/swagger

# Copy application sources (.ts, .tsx, js)
COPY src/ src/

# Build application (produces dist/ folder)
RUN yarn build

# Runtime (production) layer
FROM node:lts-alpine as production

WORKDIR /app

# Copy dependencies files
COPY package*.json ./

# Install runtime dependecies (without dev/test dependecies)

# Copy production build
COPY --from=development /app/dist/ ./dist/

# Expose application port
EXPOSE 3000

# Start application
CMD [ "node", "dist/main.js" ]