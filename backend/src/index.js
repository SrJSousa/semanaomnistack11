const express = require('express');    /* para importar o express (pasta que eu criei) */
const cors = require('cors');
const routes = require('./routes')

const app = express();      /* para amramzenaar o express a uma variável */

app.use(cors());
app.use(express.json());  /* usado para conversar com o express e avisar que todas as requisições serão no método JSON */
app.use(routes);

/* * Rota / recurso

MÉTODOS HTTP:

*GET: Buscar uma informação do back-end
*POST: Criar uma informação do back-end
*PUT: Alterar uma informação do back-end
*delete: Deletar uma informação do back-end

**

TIPOS DE PARÂMETROS

* Query Parms: Parâmetyros nomeados enviados na rota após "?" 
* Rout Parms: Paramentros usados para identificar recursos
* Requet Body: Corpo da Requisição, utilizado para criar ou alterar recursos

**
BANCO DE DADOS

*SQL: MySQL, PostresSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc

* Driver: SELECT * FROM users
* Query Builder 

*/






app.listen(3333);      /* para rodar o servidor na porta */
                                                                                                                                                                                                                                                                                                                    