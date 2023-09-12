# pull official base image
FROM node:18.0.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@5.0.1 -g

# add app
COPY . ./

# Expose port 3000 to the Docker host
EXPOSE 3000

# start app
CMD ["npm", "start"]
