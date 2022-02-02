import fetch from 'node-fetch';

function trataErro (erro){
    throw new Error(erro.message);
}

async function checaStatus(vetorURLs) {
    // trabalhando com promessas Async Await
    try{
        const vetorStatus = await Promise
            .all(vetorURLs
                .map(async url => {
                    const res = await fetch(url);
                    return res.status;
                }))
        return vetorStatus;
    } catch (erro){
        trataErro(erro);
    }
}

function geraVetorURLs (vetorLinks) {
    // precisamos só das URLs (chave : valor... precisamos só do valor)
    return vetorLinks.map( link => Object.values(link).join() )
}

async function validaURLs(vetorLinks) {
    const links = geraVetorURLs(vetorLinks);
    const linksChecados = await checaStatus(links);
    // juntando os vetores
    const resultado = vetorLinks.map ((objeto, indice) => ({ ...objeto, status: linksChecados[indice] }));
    return resultado;
}

export default validaURLs;