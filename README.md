# Arch APIs

## Sobre
O repositório conta com dois microsserviços em formato de APIs para registro de transações e checagem de saldo.

## Tecnologias Utilizadas
* [MongoDB](https://www.mongodb.com/)
* [Docker](https://www.docker.com/)
* [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/pt-br/)
  * [HTTP-Status-Codes](https://www.npmjs.com/package/http-status-codes)
  * [Node-Cache](https://www.npmjs.com/package/node-cache)

## Rodando as APIs com o Docker

### Clonando o projeto
```
git clone git@github.com:marllomartin/arch-api.git

cd arch-api
```
### Inicializando o Docker
```
docker-compose up --build
```

## API de Transações (transactions-api)

### Executando transações

Tipo de Requisição: **POST**

URL: **http://localhost:3001/transaction**

Exemplo de Body:
```
{
  "type": "credit",
  "value": 100,
  "approved": true,
  "userId": "test",
}
```
| Parâmetro   | Descrição                                   | Tipo |
| :---------- | :---------------------------------- | :------- |
| `type` |  O tipo de transação (credit, debit...). | String |
| `value` |  O valor que será depositado ou subtraído. | Number |
| `approved` | Informa se a transação foi aprovada ou não. | Boolean |
| `userId` | O id do usuário que realizou a transação | String |

<br>

Exemplo no Insomnia:

![Transaction](https://github.com/marllomartin/arch-api/blob/main/public/images/transaction.jpg)


## API de Saldo (userbalance-api)

### Checagem de saldo

Tipo de Requisição: **GET**

URL: **http://localhost:3000/{userId}**

<br>

Exemplo no Insomnia:

![Balance](https://github.com/marllomartin/arch-api/blob/main/public/images/balance.jpg)
