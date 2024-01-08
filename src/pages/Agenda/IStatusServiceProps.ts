export interface IStatusServiceProps {
    id: string;
    id_professional: string;
    id_client: string;
    services: [any];
    date: string;
    initService: string;
    end: string;
    indexInit: number,
    qtd_blocos_timer: number
    status_payment: string;
    status_service: string;
    agendado?: boolean
    cancelService?: any,
}