import { UUID } from "crypto"

export type ICreateClient = {
    name: string
    email: string
    phone: string
    country: string
    area: string
    notes: string
}

export type ICreateCampaign = {
    title: string
    description: string
    country: string
    clientId: UUID
    state: string
    notes: string
}

export type ICreateAction = {
    title: string
    description: string
    campaignId: UUID
    state: string
    notes: string
}

export type IClient = {
    id: UUID
    name: string
    email: string
    phone: string
    country: string
    area: string
    notes: string
}

export type ICampaign = {
    id: UUID
    title: string
    description: string
    country: string
    clientId: UUID
    state: string
    notes: string
}

export type IAction = {
    id: UUID
    title: string
    description: string
    campaignId: UUID
    state: string
    notes: string
}