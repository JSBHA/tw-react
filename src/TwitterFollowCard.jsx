export function TwitterFollowCard({UserName, children, isFollowing }){
    console.log(isFollowing)

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="Mi avatar"
                src={`https://unavatar.io/${UserName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{UserName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    seguir
                </button>
            </aside>
        </article>
    )
}