# Deploy - Google Cloud

- Criar uma VM na google cloud.
- Criar uma chave ssh com o comando:
```ssh
ssh-keygen
```
- Habilitar o uso da chave ssh no windows com os comandos:
```ssh
eval $(ssh-agent)
```
```ssh
ssh-add <caminho do arquivo ssh>
```
- Setar a chave ssh gerada localmente na google cloud.
- Acessar o servidor na google com o comando:
```ssh 
ssh <IP do servidor>
```
- Atualizar o sistema e fazer o upgrade com os comandos:
```bash 
sudo apt update
```
```bash 
sudo apt upgrade
```
- No windows, adicionar um novo repositório remoto, no caso o repo na cloud, e pushar o projeto para ele.
- Na cloud, iniciar um repositório com:
```git
git init --bare.
```
- Criar um diretório para armazenar o projeto e adicionar um repositório remoto nele, que no caso é o repositório criado na cloud. Após isso, dar pull no diretório.
- Instalar o node e o pm2.
- Instalar as dependencias do projeto com npm i
- Renomear o .env.example pra .env e setar as keys.
- Iniciar o pm2 com o comando: 
```bash 
pm2 start <caminho do arquivo que inicia o servidor> --name <nome do projeto>
```
- Instalar o nginx.
- Configurar o nginx.