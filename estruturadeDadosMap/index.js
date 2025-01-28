const pessoas = [
    {id: 3, nome:'Ana'},
    {id: 2, nome:'Paulo'},
    {id: 1, nome:'Frango'},
];

/*const novasPessoas = {

};
for (const  pessoa of pessoas){
const {id} = pessoa;

novasPessoas[id]= {...pessoa};
}
console.log(novasPessoas);
*/
const novasPessoas = new Map();


for (const  pessoa of pessoas){
const {id} = pessoa;

novasPessoas.set(id,{...pessoa});
}






for (const pessoa of novasPessoas){
console.log(pessoa);
}
