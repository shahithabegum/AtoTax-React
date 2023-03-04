FROM node:18.14.1
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --force
RUN npm install react-scripts@5.0.1 -g --force
COPY . ./
CMD ["npm", "start"]
