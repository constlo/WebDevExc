import React from 'react'

export default function MainArticle(props) {
    return (
        <div className="MainArticleBody">
            <img className="MainArticleImage" src={props.Src} alt={props.Alt} />
            <p className="MainArticleHeader">
                {props.Head}
                {props.Topic}
            </p>
        </div>
    )
}
