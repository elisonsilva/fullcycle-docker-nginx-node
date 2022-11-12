
# Desafio Full Cycle 

## Módulo Docker Nginx & NodeJS
A linguagem de programação para este desafio é Node/JavaScript.

### Resumo do desafio

Este desafio consiste basicamente em:

- A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. 
- Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
- O retorno da aplicação node.js para o nginx deverá ser: 
- ***Full Cycle Rocks!***
- *Lista de nomes cadastrada no banco de dados.*
- Gere o docker-compose de uma forma que basta apenas rodarmos: *docker-compose up -d* que tudo deverá estar funcionando e disponível na porta: 8080.



------------------
### Entrega do desafio

Rodando aplicação:

```
docker-compose up -d
```

Acesse endereço no navegador:

[http://localhost:8080/](http://localhost:8080/)

*OBS: Aguarde alguns segundos e atualize a página, caso apareça erro 502*