# Use an official base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 4200

# Define the command to run the application
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]