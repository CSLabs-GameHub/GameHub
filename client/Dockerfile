FROM node:20-alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

# CMD ["npm", "start"]
# CMD ["npm", "run", "start:dev"]
CMD ["npm", "run", "dev"]