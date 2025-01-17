# Mvp4RespondaRapidoApp

Este é o microserviço principal (Frontend) do MVP 4 disciplina de Arquitetura de Sofware do curso de pós graduação da PUC-Rio em Engenharia de Software

# Arquitetura

Frontend
 - Frontend Angular
   
Backends
 - API de Questões
 - API de Respostas
 - API de Gameficação
 - API de Imagem (Externa)

![image](https://github.com/user-attachments/assets/74918945-89ae-44fa-bb29-badc1761ed41)


# Como executar os projetos usuando o Docker 

Crie uma rede

```  docker network create mvp4 ```

## Executando no docker o serviço de API de Questões

Clone o serviço 1 (API de Questões)

``` git clone https://github.com/dirceus/pos-grad-mvp4-servico-1-questao-api.git```

Acesse o diretório onde foi baixado o serviço 1 e execute o comando:

``` docker build -t servico_1 . ```

Inicie o serviço:

``` docker run -d --name servico_1 --network mvp4 -p 5000:5000 servico_1```

## Executando no docker o serviço de API de Resposta

Clone o serviço 2 (API de Respostas)

``` git clone https://github.com/dirceus/pos-grad-mvp4-servico-2-responder-api.git```

Acesse ó diretorio onde foi baixado o serviço 2 e execute o comando:

``` docker build -t servico_2 . ```

Inicie o serviço:

``` docker run -d --name servico_2 --network mvp4 -p 5001:5001 servico_2```

## Executando no docker o serviço de API de Gameficação

Clone o serviço 3 (API de Gameficação)

``` git clone https://github.com/dirceus/pos-grad-mvp4-servico-3-gameficacao-api.git```

Acesse o diretório onde foi baixado o serviço 3 e execute o comando:

``` docker build -t servico_3 . ```

Inicie o serviço:

``` docker run -d --name servico_3 --network mvp4 -p 5002:5002 servico_3```


## Executando o componente principal Frontend

Clone o serviço principal (esse repositório)

``` git clone https://github.com/dirceus/pos-grad-mvp4-servico_principal-frontend.git```

Acesse o diretorio onde foi baixado o serviço principal e execute o comando:

``` docker build -t servico_principal . ```

Inicie o serviço:

``` docker run -d --name servico_principal --network mvp4 -p 4200:4200 servico_principal```


