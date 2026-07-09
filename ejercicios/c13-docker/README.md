# C13 - Docker + Librería

## Descripción

En esta actividad se configuró un entorno básico utilizando Docker para la aplicación de la librería desarrollada en las clases anteriores.

El objetivo fue ejecutar una API en Node.js junto con una base de datos PostgreSQL mediante Docker Compose, permitiendo levantar todo el entorno con un único comando.

## Tecnologías utilizadas

- React + Vite
- Node.js + Express
- PostgreSQL
- Docker
- Docker Compose

## Estructura del proyecto

```
c13-docker/
├── backend/
│   ├── Dockerfile
│   ├── src/
│   └── package.json
├── src/
├── public/
├── docker-compose.yml
└── README.md
```

## Implementación realizada

Se agregó:

- Un backend desarrollado con Express.
- Un contenedor Docker para la API.
- Un contenedor PostgreSQL.
- Configuración mediante `docker-compose.yml`.
- Variables de entorno mediante `.env.example`.

## Ejecución

Para iniciar el entorno se utiliza:

```bash
docker compose up --build
```

La API queda disponible en:

- http://localhost:3000/
- http://localhost:3000/health

## Resultado

Se verificó el correcto funcionamiento de la API y de la base de datos ejecutándose dentro de Docker Compose.
