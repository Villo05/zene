import './Zene.css'
import { type ZeneTipus } from '../adat'
interface ZeneProps{
    zenem: ZeneTipus
}


export default function Zene({zenem}: ZeneProps){
    return(
        <>
        <div className='zene'>
            <h2>{zenem.cim}</h2>
            <p><span></span>{zenem.enekes}</p>
            <p><span></span>{zenem.mufaj}</p>
            <button>Kiválaszt</button>
        </div>
        </>
    )
}