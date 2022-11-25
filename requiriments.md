# Api



# Hidra

## NodeJS

<p>Instalar Node:</p>

``` bash
# download do binário
$ wget https://nodejs.org/dist/v14.21.1/node-v14.21.1-linux-x64.tar.xz

# Variaveis de ambiente
$ VERSION=v14.21.1
$ DISTRO=linux-x64
$ export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH

# recarregar profile
$ . ~/.profile

# Testar instalação
$ node -v
$ npm -v
$ npx -v
```

<a href="https://github.com/nodejs/help/wiki/Installation">Mais informações para instalar o Node Binário.</a>


## Criar Projeto

<p>Criar Projeto:</p>

``` bash
$ mkdir nomeDoDiretorio\hidra\src
$ cd nomeDoDiretorio\hidra\src
$ npm init -y
```

<p>Instalar bibliotecas dentro do diretório "hidra >> src": </p>

``` bash
npm i @grpc/grpc-js
npm i @grpc/proto-loader
npm i path nodemon mongoose jsonwebtoken bcryptjs
```

