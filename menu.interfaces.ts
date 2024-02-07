// interfaces/menu.interfaces.ts

interface MenuItem{
    label: string;
    icon?: string;
    disabled?: boolean;
}

export interface Menu {
    id: number;
    title: string;
    description?: string;
    items: MenuItem[];
    price: number;
}

