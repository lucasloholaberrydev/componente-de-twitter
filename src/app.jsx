import { TwitterFollowCard} from "./TwitterFollowCard";

export function App() {

    const formatUserName = (userName) => `@${userName}`


    return(
        <section className="App">
        <TwitterFollowCard 
        formatUserName={formatUserName}
        userName='AgustinaG2023' 
        name='Agustina Gomez'
        id='7'
        gender='women'
        />

        <TwitterFollowCard
        formatUserName={formatUserName} 
        userName='Albertengo' 
        name='Albert Einstein'
        id='10'
        gender='men'
        />
       
        <TwitterFollowCard 
        formatUserName={formatUserName}
        userName='JoaquínV1918' 
        name='Joaquín Varela'
        id='17'
        gender='men'
        />
        <TwitterFollowCard 
        formatUserName={formatUserName}
        userName='karenGonz34' 
        name='Karen Gonzales'
        id='25'
        gender='women'
        />
        </section>
    )
   
}