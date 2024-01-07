export interface IStatusServiceProps {
    id: string;
    id_professional: string;
    id_client: string;
    services: [any];
    date: string;
    initService: string;
    end: string;
    status_payment: string;
    status_service: string;
    agendado?: boolean
    cancelService?: any
}