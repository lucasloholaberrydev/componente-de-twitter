
import { useState } from "react"

export function TwitterFollowCard ({formatUserName,userName, name, gender, id}) {
    const [isFollowing, setIsFollowing] = useState(false)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-Following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                className="tw-followCard-avatar" 
                alt='el avatar de lucas' 
                src={`https://randomuser.me/api/portraits/${gender}/${id}.jpg`}/>
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>        
    )
}