# <p align = "center"> SocialPostify </p>
<p align = "center">
<br/>

## ✏️ Descrição
<p align="justify" >Projeto que implementa uma pequena API capaz de realizar a criação e agendamento de publicações para redes sociais, utilizando programação orientada a objetos. Até o momento, foram implementadas as rotas que permitem o cadastro e login de usuário, 
além de permitir o cadastramento de uma postagem e a visualiação das postagem já agendadas. Ainda não foram implementadas rotas de edição ou integração com plataformas de redes sociais.</p>

</br>

## ➡️ Rotas
<h4>-POST/user</h4>
<p align="justify" >Cadastra um novo usuário. Deve receber pelo body os parâmetro "name", "email", "password" e "avatar"</p>
<h4>-POST/signin</h4>
<p align="justify" >Realiza o login de um usuário cadastrado. Deve receber pelo body os parâmetro "email" e "password"</p>
<h4>-POST/publication</h4>
<p align="justify" >Rota autenticada que cadastra uma nova publicação. Deve receber pelo body os parâmetro "image", "title", "text" e "dateToPublish", "published" e "socialMedia"</p>
<h4>-GET/Publication</h4>
<p align="justify" >Rota autenticada que retorna as publicações criadas por um usuário.</p>

##  <p align = "left"> :white_circle: Tecnologias</p>

- [TYPESCRIPT](https://www.typescriptlang.org/)
- [PRIMA](https://www.prisma.io/)
- [NESTJS](https://nestjs.com/)
- [POSTGRESQL](https://www.postgresql.org/)
</br>
