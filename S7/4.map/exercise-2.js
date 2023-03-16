const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const ChangeA = users.map(usuario => {
    if(usuario.name[0]=="A"){
     usuario.name == "Ancaleto"
     console.log(ChangeA);
    }
    else{
        return usuario.name
    }
})