try {
    // É executado quando não há erros

    console.log('Abri o arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('fechei o arquivo');
    
} catch (e) {
    console.log('Tratando o erro');
    // É executado quando há erros
} finally {
    console.log('Eu sempre sou executado ')
    //Sempre executado
}






