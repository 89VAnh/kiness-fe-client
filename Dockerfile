	# Use an official Node.js LTS version as the base image
FROM node:18.17 as build-stage
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json to the working directory
COPY package*.json yarn.lock ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of the application code to the working directory
COPY . .

RUN npm run build

ENV VITE_BASE_URL=http://3.24.161.147/api
 
# Expose the port that the React app will run on
EXPOSE 3465

FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
