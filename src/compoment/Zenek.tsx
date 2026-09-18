import type { ZeneTipus } from "../adat"
import Zene from "./zene"
interface ZeneListaProps{
    lista: ZeneTipus[]
}

export default function Zenek({lista}:ZeneListaProps){
    return(
        <>
        {
            lista.map((e, i)=>{
                return <Zene zenem={e} key={i} />
            })
        }
        </>
    )
}