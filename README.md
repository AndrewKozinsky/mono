## Монорепозиторий NPM

Тут находятся два пакета: чистый Nest с именем @mono/api и пакет с данными с именем @mono/data.

При импорте @mono/data в Nest появляется ошибка `import article from './article'` ***SyntaxError: Cannot use import statement outside a module***. Этот импорт находится в packages/data/index.ts. Но в packages/data.package.json свойство type стоит в значении module, поэтому этот пакет уже отмечен как использующий модули ES6.  

Чтобы увидеть ошибку в Консоле запустите проект: ```npm run dev```

