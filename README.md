# omnistack-week9

Sobre: Repositório com os códigos executados na semana omnistack 9, alterar no arquivo server.js a url de conexão do atlasdb para funcionar. 
Abaixo algumas informações aleatórias que anotei para estudo próprio.

_______________________________________________________________________________

Aula 1
app: aircnc 

sketch - para modelar o app (design)
websockets - comunicação em tempo real para aceite de algo no app e no backend
instalar {
    nodejs
    npm
    chocolatey
    yarn
}

vscode opcionais{
    material icon theme
    dracula theme
    rocketseat reactjs
    rocketseat react native
    fira code
}

_______________________________________________________________________________

Aula 2

ferramentas para testar o rest{
    insomnia - usado na aula
    postman
}

Criar environment no insomnia para facilitar{
    No environment > manage environment > { "base_url" : http://localhost:3333 }
}

Corrigir erro - MongoError: cannot do raw queries on admin in atlas{
    alterar na string nome do banco admin para o banco criado
}

mkdir backend => cria pasta
yarn init -y => cria arquivo de configuração 

opcionais{
    code . => abre outro vscode direto na pasta
}

criar pasta src => mkdir src
crio arquivo server.js dentro de src



yarn add express => adiciona o express
yarn add nodemon -D => node sem precisar restartar
yarn add mongoose => facilita o trabalho com mongodb
yarn add multer => lib para upload de imagens



bd - vai usar mongo atlas - feito na web
portquiz.net:27017 => testar porta
//autenticacao JWT - ler sobre

_______________________________________________________________________________

Aula 3

babel - compilador js

yarn create react-app frontend 
ou npm create-react-app frontend

facilitar criação de html - settings.json do vscode - ctrl + shift + p{
    "emmet.syntaxProfiles":{
        "javascript":"jsx",
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
    },
}

yarn add axios

componentização e estado - ler
desestrutração = ler

Continuar após 48m