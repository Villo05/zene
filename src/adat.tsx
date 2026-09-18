export interface ZeneTipus{
    readonly id: number
    enekes: string
    cim: string
    mufaj: string
}

export const ZENELISTA:ZeneTipus[] = [
    {   
        id: 1, 
        enekes: "Presser Gábor",
        cim: "La Balada",
        mufaj: "Pop" 
    },

    {   
        id: 2,
        enekes: "Tankcsapda",
        cim: "Mennyország tourist",
        mufaj: "Rock" 
    },

    {   
        id: 3,
        enekes: "Halott Pénz", 
        cim: "Valami van a levegőben", 
        mufaj: "Hip-hop" 
    },

    {   
        id: 4, 
        enekes: "Korda György", 
        cim: "Reptér", 
        mufaj: "Dance / Pop" 
    },

    {   
        id: 5, 
        enekes: "Caramel", 
        cim: "Lélekdonor", 
        mufaj: "R&B / Pop" 
    }
]