FROM node:18.18.0-alpine AS build

WORKDIR /app

COPY ./package.json ./yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:18.18.0-alpine AS production

WORKDIR /app

COPY --from=build /app/dist /app/dist

RUN yarn global add vite

EXPOSE 5173

CMD ["vite", "preview", "--port", "5173", "--host"]
