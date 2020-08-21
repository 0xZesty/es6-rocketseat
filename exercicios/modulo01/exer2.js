const usuarios = [  
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const arrMap = usuarios.map(birt => birt.idade)
console.log(arrMap)

const arrFilter = usuarios.filter(filtro => filtro.idade === 23)
console.log(arrFilter)

const arrFind = usuarios.find(user => user.empresa === 'google')
console.log(arrFind)


const mult = usuarios.map(users => ({...users, idade : users.idade * 2})).filter(users => users.idade <= 50)
console.log(mult)

