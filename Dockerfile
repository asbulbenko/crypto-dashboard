FROM node:16-alpine
WORKDIR /app
COPY package*.json /app
COPY ./ ./
RUN npm i
#Backend starting on port 8000
EXPOSE 8000
#Frontend starting on port 3000
EXPOSE 3000
CMD ["npm", "run", "start"]
