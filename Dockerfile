FROM node:18.13.0-alpine
WORKDIR /app

COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY . .

# Собираем React приложение
RUN yarn build

# Определяем порт, который будет использоваться приложением
EXPOSE 5173

CMD ["yarn", "start"]