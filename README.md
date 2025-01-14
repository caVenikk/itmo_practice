# Глоссарий терминов ВКР и семантический граф

## Описание проекта

Проект представляет собой веб-приложение для визуализации и управления глоссарием терминов ВКР. Разработан в рамках практики в ИТМО.

### Реализованный функционал

1. **Бэкенд (Python/FastAPI)**

   - REST API для доступа к терминам и их определениям
   - Структурированное хранение данных глоссария
   - Эндпоинты для получения терминов и связей между ними

2. **Фронтенд (Vue.js/TypeScript)**

   - Глоссарий терминов
   - Интерактивный семантический граф терминов
   - Визуализация связей между терминами

3. **Контейнеризация**
   - Docker-контейнеры для фронтенда и бэкенда
   - Docker Compose для оркестрации сервисов
   - Готовность к развертыванию на любой платформе

### Технологический стек

- **Фронтенд:**

  - Vue 3
  - TypeScript
  - Vue Flow (визуализация графа)
  - SCSS
  - Vite

- **Бэкенд:**

  - Python
  - FastAPI
  - Pydantic

- **Контейнеризация:**
  - Docker
  - Docker Compose

## Инструкция по запуску

### Предварительные требования

1. Установленный Docker
2. Установленный Docker Compose
3. Git для клонирования репозитория

### Шаги по развертыванию

1. **Клонирование репозитория**

   ```bash
   git clone https://github.com/caVenikk/itmo_practice
   cd itmo_practice
   ```

2. **Сборка и запуск контейнеров**

   ```bash
   docker-compose up --build
   ```

3. **Доступ к приложению**
   - [Фронтенд](https://lilnikky.ru/)
   - [API бэкенда (Swagger)](https://lilnikky.ru/api/docs)

### Развертывание из Docker Hub

```bash
docker pull lilnikky/itmo_practice_frontend
docker pull lilnikky/itmo_practice_backend
```

Затем написать docker-compose.yml со следующим содержимым:

```yaml
services:
  frontend:
    image: lilnikky/itmo_practice_frontend
    ports:
      - "80:4173" # Или указать тут другой порт вместо 80
    depends_on:
      - backend
    environment:
      - VITE_API_URL=http://backend:8000

  backend:
    image: lilnikky/itmo_practice_backend
    ports:
      - "8000:8000"
```

И запустить командой `docker-compose up --build`. Фронтенд будет доступен по [ссылке](http://localhost/) (если не менять порт в docker-compose.yml).

### Структура проекта

```txt
itmo_practice/
├── backend/              # Бэкенд приложения
│   ├── src/             # Исходный код
│   ├── Dockerfile       # Конфигурация контейнера бэкенда
|   └── requirements.txt  # Зависимости Python
├── frontend/              # Фронтенд приложения
│   ├── src/              # Исходный код
│   ├── Dockerfile        # Конфигурация контейнера фронтенда
│   └── package.json      # Зависимости и скрипты
└── docker-compose.yml    # Конфигурация Docker Compose
```
