FROM node:0.11-slim
ADD . /app
CMD ["node", "/app/index.js"]
