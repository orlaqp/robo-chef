

# RoboChef

## Intro

At a high level this proof of concept was put together using the following tech stack:

- Nx (https://nx.dev/) Among other reasons it was used to managed multiple projects withint a single repository. 
- NextJS: For Ui implementation
- NestJS: For backend implementation
- ELK stack: As a repository for recipes information
- Material UI Library: To style app using material design principles
- Docker: To manage containers and orchestration

## Project structure

When using Nrwl workspaces it is very common to have multiple apps and libraries within a single repository (projects). This project is not an exception. For example:

Root
  - apps
    - api (backend implementation)
    - elk-stack (elk stack apps)
    - web (frontend implementation)
    - web-e2e (end to end test cases for frontend implementation)
  - libs
    - api
      - config (api configuration)
      - search (search module)
    - shared
      - model (shared layer between frontend and backend )
    - web
      - graphql (graphql client definition)
      - search (search module for frontend)
        - data-access (data access library for search module)
        - feature (ui implementation for search module)
           

## How to run the app

- Build base image first: `docker build . -t my-base-image:nx-base`
- Start docker compose: `docker-compose up -d`

