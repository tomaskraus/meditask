# meditask

"medical treatment TODO and scheduler"

Jedná se o backendovou aplikaci, poskytující RESTové API ohledně úkolů od lékaře pro jeho pacienty.

Řešení zadání [TypeScript_MongoDB Developer](assignment/Zadání - TypeScript_MongoDB Developer.pdf)
[TypeScript_MongoDB Developer](assignment/Zadání_TypeScript_MongoDB_Developer.pdf)

### Instalace

1. npm

```
npm i
```

2. docker

```
docker compose up
```

### Spuštění

1. v kořenovém adresáři projektu

```
docker compose up
```

2. v podadresáři meditask-be

```
npm start
```

endpoint aplikace:

http://127.0.0.1:3000/tasks

online API dokumentace:

http://127.0.0.1:3000/api

OpenAPI JSON:

http://127.0.0.1:3000/api-json

### DB

connection string: `mongodb://localhost:27017`  
db name: `test2`

## O Řešení

Vypracoval jsem řešení během dne a půl tak, aby kromě požadavků v zadání splňovalo ještě toto:

- funkční, spustitelná aplikace: **meditask**
- využívající známé, používané knihovny s dobrou dokumentací
- co nejméně věcí dělat "na koleně", vlastními silami
- automatické generování schémat a dokumentace tam, kde je to možné
- snadná instalace a spuštění na jiném prostředí

K tomu všemu jsem jako opěrný bod použil:

- [Nest.js](https://nestjs.com/): backend framework pro Node.js TypeScript
- [MongoDB](https://www.mongodb.com/) a [Mongoose](https://mongoosejs.com/docker): NoSQL databáze a wrapper
- [Docker](https://www.docker.com/): kontejner (zatím jen pro MongoDB)

Aplikace nabízí REST API. K automatickému generování dokumentace jsem použil Open API (Swagger) plugin pro Nest.js. Ten udržuje dokumentaci aktuální, podle anotací v kódu aplikace.

### Tooling

IDE: [VS Code](https://code.visualstudio.com/)
formatter: [Prettier](https://prettier.io/)

K verzování používám [Git](https://git-scm.com/). Snažím se o verzovací komentáře podle [Conventional Commits](https://www.conventionalcommits.org)  
Používám _Feature Branches_.

Platforma: Linux - [Ubuntu](https://ubuntu.com/)

## Zbytek Řešení

Zde odpovídám na věci v zadání, které nebyly určeny k naprogramování, nebo jsem je nestihnul. Seznam budu průběžně doplňovat, ale na otázky jsem připraven reagovat ihned.

#### REST API pro mobilní aplikaci:

#### Generování jednotlivých úkolů:

### K Promyšlení

#### Označení úkolu jako splněného:

#### Notifikace:

#### Autentizace:

#### Synchronizace úkolů do mobilní aplikace:

#### Testování:
