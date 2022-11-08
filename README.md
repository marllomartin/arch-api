# Arch APIs

## Sobre
O repositório conta com dois microsserviços em formato de APIs para registro de transações e checagem de saldo.

## Tecnologias Utilizadas
* [MongoDB](https://www.mongodb.com/)
* [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/pt-br/)
  * [HTTP-Status-Codes](https://www.npmjs.com/package/http-status-codes)
  * [Node-Cache](https://www.npmjs.com/package/node-cache)

## Variáveis de Ambiente

Para rodar as APIs, você vai precisar renomear o arquivo `.env.example` localizado na raíz de cada API para `.env` e adicionar as seguintes variáveis de ambiente:

`DB_USER = arch`

`DB_PASSWORD = Os3b2CNjzfkM9Kff`
 
## API de Transações (transactions-api)

### Instalando as dependências

```
npm install
```

### Rodando a API
```
npm start
```

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


## API de Saldo (userbalance-api)

### Instalando as dependências
```
npm install
```

### Rodando a API
```
npm start
```

### Checagem de saldo

Tipo de Requisição: **GET**

URL: **http://localhost:3000/{userId}**
