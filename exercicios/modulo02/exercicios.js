// // 3.1
import ClasseUsuario from './functions'


ClasseUsuario.info()

import { idade } from './functions'

console.log(idade)

import Usuario, { idade as idadeUsuario } from './functions'
Usuario.info()
console.log(idadeUsuario)