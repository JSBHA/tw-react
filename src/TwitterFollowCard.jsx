import { useState } from "react";

export function TwitterFollowCard({ UserName, children }) {
    
    const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

    const handleClick = () =>{
        setIsFollowing(!isFollowing )
    }
 
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Mi avatar"
          src={`https://unavatar.io/${UserName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{UserName}</span>
        </div>
      </header>
      <aside>
        <button 
        className={buttonClassName} onClick={handleClick}>
        {text}</button>
      </aside>
    </article>
  );
}
