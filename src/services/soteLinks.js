// Buscar os links salvos
export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSave = JSON.parse(myLinks) || [];

    return linksSave;
}

// salvar o link no Localstorage
export async function saveLink(key, newLink){
    let linkStorage = await getLinkSave(key);

    // se já estiver algum link salvo com o mesmo id, não deixar duplicar
    const haslink = linkStorage.some( link => link.id === newLink.id )

    if(haslink){
        alert("Esse link já existe!")
        return;
    }

    // adicionar o link na lista
    linkStorage.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linkStorage))
    console.log("link salvo com sucesso!")
}

// deletar um link já salvo
export function deleteLink(links, id){
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    alert("Link deletado com sucesso!");
    return myLinks;
}