const template = document.createElement('template');
template.innerHTML=
`<header>
    <a href="index.html">Главная</a>
    <a href="application.html">Приложение</a>
</header>`

document.body.appendChild(template.content);