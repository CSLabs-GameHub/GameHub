FROM node:20-alpine

WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY . .

CMD ["npm", "run", "dev"]
# CMD ["npm", "run", "build", "&&", "npm", "start"]