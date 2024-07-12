# Mvp4RespondaRapidoApp

Este é o microserviço principal (Frontend) do MVP 4 disciplina de Arquitetura de Sofware do curso de pós graduação da PUC-Rio em Engenharia de Software

# Arquitetura

Frontend
 - Frontend Angular 
Backends
 - API de Questões
 - API de Respostas
 - API de Gameficação
 - API de Acesso

# Como executar os projetos usuando o Docker 

Crie uma rede

```  docker network create mvp4 ```

## Executando no docker o serviço de API de Questões

Clone o serviço 1 (API de Questões)

``` git clone ```

Acesso do diretorio onde foi baixado o serviço 1 e execute o comando:

``` docker build -t servico_1 . ```

Inicie o serviço:

``` docker run -d --name servico_1 --network mvp4 -p 5000:5000 servico_1```

## Executando no docker o serviço de API de Resposta

Clone o serviço 2 (API de Respostas)

``` git clone ```

Acesso do diretorio onde foi baixado o serviço 2 e execute o comando:

``` docker build -t servico_2 . ```

Inicie o serviço:

``` docker run -d --name servico_2 --network mvp4 -p 5001:5001 servico_2```

## Executando no docker o serviço de API de Gameficação

Clone o serviço 3 (API de Gameficacao)

``` git clone ```

Acesso do diretorio onde foi baixado o serviço 3 e execute o comando:

``` docker build -t servico_3 . ```

Inicie o serviço:

``` docker run -d --name servico_3 --network mvp4 -p 5002:5002 servico_3```


## Executando o componente principal Frontend


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

