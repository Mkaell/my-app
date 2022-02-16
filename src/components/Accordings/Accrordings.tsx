import { According } from "./According"
import {IAccordings, IAccording} from '../../interfaces'
import style from './according.module.css'

export const Accordings = ({accordings, title, className='' }: IAccordings) => (
        <div className={`${style.according}`} >
                <h2 className={`${style[className]}`}>{title}</h2>
                <div >
                        {
                                accordings?.map(({id, code, info, name, example}:IAccording):JSX.Element => (
                                        <According info={info} id={id} code={code} name={name} example={example}/>
                                ))
                        }
                </div>
        </div>
       
)