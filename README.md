This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### First

Before you start using Yarn, you'll first need to install it on your system:

[https://yarnpkg.com/en/docs/install#mac-stable](https://yarnpkg.com/en/docs/install#mac-stable)

### After

In the project directory, you can run:

### `yarn`

After run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### Sugested by:

[https://github.com/TiagoGouvea](https://github.com/TiagoGouvea)


### Docker Resumo

O que é um docker?
	Docker é uma tecnologia baseada em containers, sua finalidade é gerar builds com seu próprio mundo, sendo portátil, escalável, garantindo a execução sem complicações independente do ambiente onde se encontra.
	Container: são partes de tecnologias agrupadas. Por exemplo, vc tem uma aplicação x, e essa aplicação precisa de banco de dados, precisa de uma série de dependências de serviços,  como APIs que se comunicam com outros banco, assim gerando uma binário, ou contêiner, contendo todas as dependências necessárias. E o kernel que vai ser utilizado, vai ser da máquina localhost onde o docker está instalado.
	Imagem: é todo arquivo que compõe apenas o necessário de um sistema, uma parte necessária de um SO por exemplo, sendo um ponto de partida de um contêiner.

Comandos docker:
docker run: executa uma imagem existente na máquina, senão, busca no docker hub e baixa.
docker contêiner ps: exibe os contamines em execução;
docker container ps -a: exibe todos os contamines que foram executados e que podem estar ainda ocupando espaço;
docker run -ti nome_do_container comando_container: terminal interativo, t é para que tenha um terminal e o i é para que tenha uma interação com contêiner;
docker run -d nome_do_container comando_container: rode como se fosse um deamon, em background;
CTRL+p+q: sai do contêiner e deixa ele rodando;
docker attach containerID: volta para o container;
docker Create: cria o contêiner mas deixa ele parado;
docker Stop containerID: parar o container
docker Start containerID: iniciar o container
docker pause containerID: pausar o container;
docker unpause containerID: voltar a executar o container;
docker stats containerID: informações de consumo do contêiner;
docker top containerID: mostra os processos que estão rodando nesse contêiner;
docker logo containerID: mostra os blogs do contêiner, loga tudo que está em primeiro plano;
docker rm containerID: remove o container;
docker rm -f containerID: remove se estiver rodando, forçando a remoção;

#### O que é docker file?
	arquivo onde descrevemos as definições das imagens que queremos criar. A partir dele, podemos pedir ao docker para fazer o Build e gerar um contêiner.
	configura as imagens para gerar um contêiner.
#### O que é docker compose?
	arquivo onde descrevemos os containers que foram parte de um todo, onde se tem uma aplicação rodando em um contêiner, servidor de banco de dados em outro, e então se juntam em um documento, assim facilitando o escalonamento e levantamento dessa aplicação.
	configura as imagens para os containers e a comunicação entre eles.
#### O que é volume?
	um compartilhamento de um diretório de um contêiner com o dockerhost, onde é possível manipular tanto dentro quanto fora do contêiner. Comando para inspecionar o diretório fora do contêiner, “docker inspect containerID”.
	

### Dockerfile:
#### FROM debian
	imagem base para a aplicação que está sendo feita

#### MAINTAINER Lucas lucasf@gmail.com

#### ADD apo.txt /diretorio/
	Serve para adicionar um arquivo para um contêiner, copiar arquivo, diretório, arquivo.tar….

#### CMD [“sh”,”-c”, “echo”, “$HOME”]
	entry point: cmd é o princpal parametro para o entrypoint

#### LABEL description=“blablabla”
	sao metedatas 

#### COPY opa.txt /diretorio/
	somente copia arquivo ou diretório de um host para contêiner

#### ENTRYPOINT [“/usr/bin/apache2ctl”, “-D”, “FOREGOUND”]
	determina uma ancora, caso esse contêiner morra, o outro contêiner fecha para que nao fique ligado atoa, determinando como principal processo

#### ENV 	nomedavariavel=“Nome fulano”
	variáveis de ambiente

#### EXPOSE 80
	expõe a porta de um contêiner 

#### RUN apt-get update
	executa comandos, porem cria uma camada para cada RUN

#### USER root ou USER fulano
	usuario root por default ou usuario que por passado

#### WORKDIR /teste
	diretório de trabalho, onde é iniciado o contêiner nesse diretório

#### VOLUME /diretorio
	volume onde será criado o diretório do contêiner

### Dcoker-compose:
indica o caminho do seu dockerfile
#### build: .

envia um comando para executar no contêiner
#### command: docker ps

nome do container
#### container_name: nome_do_container

servidor dns para container
#### dns: 8.8.8.8

search domain para seu arquivo example.com
#### dns_search: example.com

nome alternativo
#### dockerfile: Dockerfile-alternativo

especifica um arquivo com varieáveis de ambiente
#### env_file: .env

adiciona variável de ambiente
#### environment:
	RACK_ENV: development

expõe portas do container
#### expose: 
- “3000”
- “8000”

external_links = “linka” containers que não estão especificado no docker-compose atual
#### external_links:
- redis_1
- project_db_1:mysql

extra_hosts = adiciona uma entrada no /etc/hosts do container
#### extra_hosts:
- “somehost: 162.242.195.82”
- “otherhost: 50.31.209.229”

image = indica uma imagem
#### image: ubuntu:14.04

labels = adiciona metadata ao container
#### labels:
	com.example.description: “accounting webapp”
	com.example.department: “finance”

links = linka containers dentro do mesmo docker-compose
#### links:
- db
- Db:database

log_driver = indica o formato do log a ser gerado, por ex: syslog, json-file, etc
#### log_driver: syslog
Ou
#### logging:
	driver: syslog

log_opt = indica onde mandar os blogs, pode ser local ou em um syslog remoto
#### log_opt:
	syslog-address: “tcp://192.168.0.42:123”

ou

#### logging:
	driver: syslog
	options:
		syslog-address: “tcp://192.168.0.42:123”

#### net = modo de uso da rede
net: “bridge”
net: “host”

ports = expoõe as portas do container e do hosts
#### ports:
- “3000”
- “8000:8000”

volumes, volume_driver = monta volumes no container
#### volumes:
	# just specify a path and let the engine create a volume
- /var/lib/mysql

	#### specify an absolute path mapping
- /opt/data:/var/lib/mysql

	#### path on the host, relative to the compose file
- ./cache:/tmp/cache

volumes_from = monta volumes através de outro container
#### volumes_from:
- service_name
- service_name: ro
