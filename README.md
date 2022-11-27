# Arch APIs

## About
This repository contains two API format microservices for transaction registering and balance check.

## Technologies Used
* [MongoDB](https://www.mongodb.com/)
* [Docker](https://www.docker.com/)
* [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/pt-br/)
  * [HTTP-Status-Codes](https://www.npmjs.com/package/http-status-codes)
  * [Node-Cache](https://www.npmjs.com/package/node-cache)

## Running the services inside a Docker container

### Cloning the repository
```
git clone git@github.com:marllomartin/arch-api.git

cd arch-api
```
### Starting Docker
```
docker-compose up --build
```

## Transactions API (transactions-api)

### Running Transactions

Requisition Type: **POST**

URL: **http://localhost:3001/transaction**

Body Example:
```
{
  "type": "credit",
  "value": 100,
  "approved": true,
  "userId": "test",
}
```
| Name   | Description                                   | Type |
| :---------- | :---------------------------------- | :------- |
| `type` |  The transaction type (credit, debit...). | String |
| `value` |  The transaction value. | Number |
| `approved` | Informs if the transaction was approved or not. | Boolean |
| `userId` | The ID of the user requesting the transaction. | String |

<br>

Insomnia Example:

![Transaction](https://github.com/marllomartin/arch-api/blob/main/public/images/transaction.jpg)


## Balance API (userbalance-api)

### Checking Balance

Requisition Type: **GET**

URL: **http://localhost:3000/balance/{userId}**

| Parameter   | Description                                   | Type |
| :---------- | :---------------------------------- | :------- |
| `userId` |  The ID of the user requesting a balance check. | String |

<br>

Insomnia Example:

![Balance](https://github.com/marllomartin/arch-api/blob/main/public/images/balance.jpg)
