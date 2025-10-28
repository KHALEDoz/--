FROM node:20-bullseye-slim
ENV ROLLUP_DISABLE_NATIVE=1
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --no-fund --no-audit && \
    npm install --no-fund --no-audit -D @rollup/rollup-linux-arm64-gnu@^4.24.0
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


