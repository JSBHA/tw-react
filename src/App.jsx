import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    return (
        <section className='App'>
       <TwitterFollowCard UserName ='Jsebas' name = 'Sebastian Bermudez' />
       <TwitterFollowCard UserName ='axel' name = 'Axel Rose' />
       <TwitterFollowCard UserName ='petra' name = 'Porce Crit' />
       <TwitterFollowCard UserName ='porqui' name = 'Purquisimo Chancho' />
       </section>

    )
}