import { IAction, ICreateAction } from "@/constant/DomainTypes";

export async function getActions(campaignId:string|number) {
    const fetchData = await fetch(`${process.env.API_URL}/actions/${campaignId}`)
    return await fetchData.json() as IAction[];
}

export async function createAction(action:ICreateAction) {
    const fetchData = await fetch(`${process.env.API_URL}/actions/create`,{
        method: 'POST',
        body: JSON.stringify(action),
    })
    return await fetchData.json() as IAction;
}

export async function deleteAction(actionId:string|number) {
    const response = await fetch(`${process.env.API_URL}/actions/delete/${actionId}`,{
        method: 'DELETE'
    })
    if (response.status == 400 || response.status == 406) return { status: response.status, message: response.statusText }
    
    return { status: 204, message: `Action ${actionId} was successfully deleted` }
}

export async function updateAction(action:IAction) {
    let actionBody:any = {...action}
    delete actionBody.id;
    const fetchData = await fetch(`${process.env.API_URL}/actions/update/${action.id}`,{
        method: 'PUT',
        body: JSON.stringify(actionBody),
    })
    return await fetchData.json() as IAction;
}