import { ICampaign, ICreateCampaign } from "@/constant/DomainTypes";

export async function getCampaigns(clientId:string|number) {
    const fetchData = await fetch(`${process.env.API_URL}/campaigns/${clientId}`)
    return await fetchData.json() as ICampaign[];
}

export async function createCampaign(campaign:ICreateCampaign) {
    const fetchData = await fetch(`${process.env.API_URL}/campaigns/create`,{
        method: 'POST',
        body: JSON.stringify(campaign),
    })
    return await fetchData.json() as ICampaign;
}

export async function deleteCampaign(campaignId:string|number) {
    const response = await fetch(`${process.env.API_URL}/campaigns/delete/${campaignId}`,{
        method: 'DELETE'
    })
    if (response.status == 400 || response.status == 406) return { status: response.status, message: response.statusText }
    
    return { status: 204, message: `Campaign ${campaignId} was successfully deleted` }
}

export async function updateCampaign(campaign:ICampaign) {
    let campaignBody:any = {...campaign}
    delete campaignBody.id;
    const fetchData = await fetch(`${process.env.API_URL}/campaigns/update/${campaign.id}`,{
        method: 'PUT',
        body: JSON.stringify(campaignBody),
    })
    return await fetchData.json() as ICampaign;
}