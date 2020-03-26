# imagem base do nodejs
FROM node:10.13-alpine
# variavel de ambiente
ENV NODE_ENV production
# diretorio de trabalho da aplicacao no container
WORKDIR /usr/src/app
# copia os arquivos para o diretorio raiz
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# executa o comando npm install dentro do container
RUN npm install
# fiquei na duvida, parece copiar tudo para dentro da raiz
COPY . .
# expoe a porta do container
EXPOSE 3000
# executa o comando npm start no container
CMD npm start