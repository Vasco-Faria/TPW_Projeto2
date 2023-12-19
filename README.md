# Projeto TPW2 (Rede Social)

## 1. Membros do Grupo

| NMec | Name | email | 
|:---: |:---|:---:|
| 108317 | Miguel Aido Miragaia          | [miguelmiragaia@ua.pt](https://github.com/Miragaia)      |
| 107323 | Vasco Miguel Fernandes Faria  | [vascomfaria@ua.pt](https://github.com/Vasco-Faria)      |
| 107634 | Rodrigo Martins Graça         | [rodrigomgraca@ua.pt](https://github.com/rodrigograc4)   |

## 2. Descrição do Projeto
**Introdução**
- Este é um projeto de desenvolvimento de uma rede social básica utilizando o Angular Framework e Django REST Framework. O objetivo principal é criar uma plataforma onde os users podem se registrar, criar posts, fazer upload de imagens e interagir uns com os outros de diversas formas.

**Objetivos**

| Objectives | Done |
|:---: |:---:|
| Development of a web application (client and server side), to allow the information access in an easy and intuitive way.| X |
| For the client side, it must be developed with Angular technology, to provide all needed user interfaces.| X |
| For server side, it must use Django REST Framework (DRF), to provide a set of REST Web Services, to provide all needed functionalities in back-end, to allow all kind of operations: data searching, insertion, updating, deleting and all subsequent validations| X |
| Development of an authentication system, using e.g. Django Rest Framework Authentication. | X |
| In order to be accessed from anywhere and use a real n-tier software architecture, the deployment can be done for the different application’s layers. The server side (DRF) can be deployed at pythonanywhere.com, as before for the Django application, and the client side at Heroku |  |
| A small report describing the main fundamental parts implemented, and any other information needed to run the application, is necessary. | X |

## 3. Funcionalidades Atuais

Neste momento, as funcionalidades principais incluem:
- Registro e autenticação de users.
- Criação e visualização de posts (Upload de Texto, ?Foto?, ?Video?).
- Informação com/de posts (Data de criação, Autor).
- Página de Feed (Posts de todos os users).
- ?Perfil de User (Informações, Foto de Perfil)?
- ?Personalização de Perfil (Avatar)?

## Test Accounts        ?trocar para outra?
- User
    ```
    username: Amelia
    password: Olaolaola
    ```

## Comandos Uteis
- npm install -g @angular/cli

1. python3  -m venv venv
2. source venv/bin/activate
3. pip install -r requirements.txt
4. pip install pip --upgrade