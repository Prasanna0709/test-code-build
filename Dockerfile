# Build stage
# Pulling the Node image as a Base Image
FROM node:22-alpine as build

# Working dir for image creation purpose
WORKDIR /app

# Copying all the files from our app folder to the working directory folder
COPY . .

# RUN npm install command to install all the dependencies
RUN npm install

# Expose port number
EXPOSE 3000

# Running our image using the command below 
CMD ["node", "server.js"]