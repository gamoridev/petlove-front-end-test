## back-end

Servidor em NodeJS utilizando Express.
Para inicializar o servidor:
```
	npm start
```
Será inicializado port default em `localhost:3001`.
 
## front-end

Projeto de front-end feito em React.
É necessário gerar um build do projeto para que o servidor consiga encontrar os arquivos estáticos do projeto, localizados em `front-end/build/`.
Sendo assim, execute (na raiz do projeto ou na pasta `front-end/`:
```
	npm run build
```

## tests

Os testes foram feitos apenas para o front-end e estão contidos na pasta `front-end/__tests__/`, utilizando Jest e Puppeteer.
Para executar (na raiz do projeto ou na pasta `front-end/`):
```
	npm run test
```

## notas
O exercício foi bem simples e a estrutura do projeto também. Como era apenas uma página, utilizei o próprio `App.js` como Container e separei os components em `components/` junto com seus `.css` utilizando as convenções do `BEM`. 

Obrigado :D