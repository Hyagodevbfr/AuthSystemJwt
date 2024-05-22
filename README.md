# Auth System JWT

API de Cadastro de Usuários e Administradores

## Descrição

Este projeto consiste em uma API backend, construída com .NET 8 e Sqlite, que interage com um frontend desenvolvido em Angular 17. A aplicação permite o cadastro de usuários e administradores, onde diferentes roles (funções) são atribuídas para limitar acessos. Utiliza validação de token JWT para segurança nas operações de autenticação e autorização.

## Funcionalidades
![image](https://github.com/Hyagodevbfr/AuthSystemJwt/assets/110845341/c0eeb38a-f212-496c-a3db-81b1e3c2f2e5)

### Usuários Comuns

- **Registro**: Qualquer usuário pode se registrar na aplicação.
  ![image](https://github.com/Hyagodevbfr/AuthSystemJwt/assets/110845341/60a755cf-c2d7-4a31-a99b-db69aa864568)


- **Login**: Usuários registrados podem fazer login.

  ![image](https://github.com/Hyagodevbfr/AuthSystemJwt/assets/110845341/cbd09567-37af-439e-9780-b204e5bf0f71)

- **Visualizar Informações**: Usuários podem visualizar suas próprias informações.
  ![image](https://github.com/Hyagodevbfr/AuthSystemJwt/assets/110845341/e848ed3c-dfbb-4d0a-9d53-c460a956fdad)

- **Alterar Senha**: Usuários podem alterar suas senhas.
  ![image](https://github.com/Hyagodevbfr/AuthSystemJwt/assets/110845341/cc42fff4-96e1-4033-886c-159637c7537c)

- **Recuperação de Senha**: Em caso de senha perdida, usuários podem recuperar a senha através de um email de recuperação usando o [Mailtrap.io](https://mailtrap.io).
  ![image](https://github.com/Hyagodevbfr/AuthSystemJwt/assets/110845341/92b36ece-e0cd-4196-97e5-bdaa290f0dce)


### Administradores

- **Listar Usuários**: Administradores podem listar todos os usuários cadastrados.
  ![image](https://github.com/Hyagodevbfr/AuthSystemJwt/assets/110845341/4bcd1e54-2856-4d3d-9494-caa22b7820aa)
- **Criar Novas Roles**: Administradores podem criar novas roles.
- **Alterar Roles**: Administradores podem mudar as roles dos usuários.
- **Quantidade de usuários**: Administradores podem ver quantos usuarios pertencem a determinada role.
  ![image](https://github.com/Hyagodevbfr/AuthSystemJwt/assets/110845341/6e78a33d-36b5-4971-a511-d08dc3a7c99f)







### Segurança

- **Autenticação JWT**: A aplicação utiliza tokens JWT para autenticação e autorização, garantindo que apenas usuários autenticados possam acessar determinadas funcionalidades.

## Tecnologias Utilizadas

- **Frontend**: Angular 17
- **Backend**: .NET 8
- **Banco de Dados**: Sqlite
- **Serviço de Email**: Mailtrap.io

## Instalação e Configuração

### Pré-requisitos

- Node.js
- .NET SDK
- Sqlite

### Passos para Instalação

1. **Clone o repositório**

   ```sh
   git clone https://github.com/Hyagodevbfr/AuthSystemJwt
   cd AuthSystemJwt
   ```

2. **Configuração do Backend**

   - Navegue até o diretório do backend
   - Restaure as dependências

     ```sh
     cd Api
     dotnet restore
     ```

   - Execute as migrações do banco de dados

     ```sh
     dotnet ef database update
     ```

   - Inicie o servidor

     ```sh
     dotnet run
     ```

3. **Configuração do Frontend**

   - Navegue até o diretório do frontend
   - Instale as dependências

     ```sh
     cd client
     npm install
     ```

   - Inicie a aplicação Angular

     ```sh
     ng serve
     ```

4. **Acesse a Aplicação**

   - Abra seu navegador e acesse `http://localhost:4200`

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- **Nome:** Hyago Brito
- **Email:** hyago.sbrito@gmail.com
- **LinkedIn:** (https://www.linkedin.com/in/hyago-brito-184bb3242/)
