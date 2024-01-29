import { IClient, ICreateClient } from "@/constant/DomainTypes";

export async function getClients() {
    const fetchData = await fetch(`${process.env.API_URL}/clients`)
    return await fetchData.json() as IClient[];
}

export async function createClient(client:ICreateClient) {
    const fetchData = await fetch(`${process.env.API_URL}/clients/create`,{
        method: 'POST',
        body: JSON.stringify(client),
    })
    return await fetchData.json() as IClient;
}

export async function deleteClient(clientId:string|number) {
    const response = await fetch(`${process.env.API_URL}/clients/delete/${clientId}`,{
        method: 'DELETE'
    })
    if (response.status == 400 || response.status == 406) return { status: response.status, message: response.statusText }
    
    return { status: 204, message: `Client ${clientId} was successfully deleted` }
}

export async function updateClient(client:IClient) {
    let clientBody:any = {...client}
    delete clientBody.id;
    const fetchData = await fetch(`${process.env.API_URL}/clients/update/${client.id}`,{
        method: 'PUT',
        body: JSON.stringify(clientBody),
    })
    return await fetchData.json() as IClient;
}