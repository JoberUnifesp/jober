# How To Run
O servidor e o cliente estão rodando em portas distintas por enquanto, então é preciso rodar os dois lados simultâneamente:

## Run React App
> 1. Abrir um novo terminal na pasta raiz
> 2. Rodar o comando `yarn (ou npm) start`, para colocar a aplicação no ar
> 3. A interface estará rodando em <http://localhost:3000/jober>

## Run Node Server
> 1. Abrir um segundo terminal
> 2. Rodar o comando `cd server`, para entrar no diretório dos scripts de servidor
> 3. Rodar o comando `yarn (ou npm) start`, para colocar o servidor no ar
> 4. O servidor estará rodando em <http://localhost:3001/jober/SignUp>


# How to Connect to the Database
Por hora, foi criada uma instância do mysql no azure, para que seja possível acessar o banco de qualquer máquina. É preciso criar uma conexão local pra que as requisições funcionem corretamente:

## Pre requisites
- É preciso ter instalado o mySql workbench na máquina. Guia didático: <https://www.youtube.com/watch?v=KYaZVqHHXpM>

## Create connection
> 1. Vá até a página inicial do workbench <img width="51" alt="image" src="https://user-images.githubusercontent.com/72479557/192607475-9f753445-091e-4fc2-9851-dab21b7e3c98.png">
> 2. Ao lado de 'MySQL Connections', clique no símbolo + <img width="201" alt="image" src="https://user-images.githubusercontent.com/72479557/192607718-9392cfb9-7ca0-490c-9a18-e2c70b731ae5.png">
> 3. Insira as credenciais da conta azure na tela (contate o administrador pra saber mais) <img width="595" alt="image" src="https://user-images.githubusercontent.com/72479557/192607967-a63c0fea-7034-44be-8b8e-b14462817b54.png">
Altere o hostname, username e clique em 'Store in Vault' para inserir a senha.
> 4. Clique em ok e em seguida clique em ok novamente.
> 5. A conexão será gerada e então clique sobre ela para visualizar o conteúdo


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
