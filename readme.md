# 🎙️ Podcast Manager - Express API

API REST de gerenciamento de podcasts estilo Netflix, feita com Node.js, Express e TypeScript. Projeto desenvolvido durante a formação da DIO.

---

## 💡 Sobre o projeto

A API permite listar episodios de podcasts e filtrá-los por categoria ou nome do podcast, com uma estrutura organizada em camadas (controller, service, repository).

---

## 🚀 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/episodes` | Lista todos os episodios |
| GET | `/api/episodes?category=saude` | Filtra por categoria |
| GET | `/api/episodes?podcast=flow` | Filtra por nome do podcast |

### Categorias disponíveis
`humor`, `entretenimento`, `esporte`, `saude`, `tecnologia`, `ia`, `games`

---

## ▶️ Como rodar

Precisa ter o **Node.js v20+** instalado.

```bash
# clone o repositorio
git clone https://github.com/seu-usuario/nodejs-express-api

# entra na pasta
cd nodejs-express-api

# instala as dependencias
npm install

# roda em modo desenvolvimento
npm run start:dev
```

Servidor sobe em `http://localhost:3333`

---

## 🧪 Testando

```
GET http://localhost:3333/api/episodes
GET http://localhost:3333/api/episodes?category=saude
GET http://localhost:3333/api/episodes?podcast=flow
```

---

## 📁 Estrutura

```
nodejs-express-api/
│
├── src/
│   ├── controllers/
│   │   └── podcast-controller.ts
│   ├── models/
│   │   └── podcast-model.ts
│   ├── repositories/
│   │   ├── podcast-repository.ts
│   │   └── podcasts.json
│   ├── routes/
│   │   └── podcast-routes.ts
│   ├── services/
│   │   └── podcast-service.ts
│   └── app.ts
│
├── package.json
└── readme.md
```

---

## 🛠️ Tecnologias

- Node.js
- Express
- TypeScript
- tsx / tsup

---

## 🔗 Links úteis

- [Repositorio original - DIO](https://github.com/digitalinnovationone/nodejs-express-api)
- [Express.js](https://expressjs.com)
- [DIO](https://dio.me)

---

Feito com 💙 durante a formação Node.js da DIO
