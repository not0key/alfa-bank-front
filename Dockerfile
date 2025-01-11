# Используем образ Node.js версии 18.18.0
FROM node:18.18.0-alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock для установки зависимостей
COPY ./package.json ./yarn.lock ./

# Устанавливаем зависимости с помощью yarn
RUN yarn install --frozen-lockfile

# Копируем остальные файлы проекта
COPY . .

# Собираем приложение
RUN yarn build

# Stage 2: Serve the application using 'vite' (instead of react-scripts)
FROM node:18.18.0-alpine AS production

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем билд из первого этапа
COPY --from=build /app/dist /app/dist

# Устанавливаем 'vite' глобально для продакшн-режима
RUN yarn global add vite

# Открываем порт, который будет использовать приложение
EXPOSE 5173

# Запускаем приложение с помощью 'vite'
CMD ["vite", "preview", "--port", "5173"]
