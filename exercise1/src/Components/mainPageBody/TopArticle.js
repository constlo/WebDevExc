import React from 'react'

export default function TopArticle(props) {
    return (
        <div className="TopArticle">
            <p className="Head">{props.head}</p>
            <p className="Topic">{props.topic}</p>
        </div>
    )
}
