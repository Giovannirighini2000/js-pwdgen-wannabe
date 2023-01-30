//********collegamento html a js********
console.log ('Document passwoed-find-local-word')
const trovaPassword= document.getElementById('password-find-local-word')



//******Chiedi il nome********
let name = prompt('Come ti chiami?')
console.log ('Nome= ', name)

//******Chiedi il cognome*******
let surname = prompt('Il tuo cognome? ')
console.log ('Cognome= ', surname)

//********Chiedi il suo colore preferito*******
let color = prompt('il tuo colore?')
console.log ('Colore= ', color)

//******Chiedi un numero casuale  */
let number = prompt('Scegli un numero?')
console.log ('Numero= ', number)

//********concatenazione generazione password*******/
trovaPassword.innerHTML = name + surname + color + number;
console.log ('modifico innerHTML sezione trovapassword', trovaPassword)


