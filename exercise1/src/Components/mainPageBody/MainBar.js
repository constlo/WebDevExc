import React from 'react'
import MainArticle from './MainArticle'
import Img1 from '../../pg_example.png'

export default function MainBar() {
    return (
        <div className="MainBar">
            <MainArticle Src={Img1} Alt="pg_example" Head="Lorem | " Topic="Duis rutrum sit amet elit sit amet molestie. Integer blandit posuere lobortis. Ut accumsan lectus elit, in pharetra nulla pulvinar." />
            <MainArticle Src={Img1} Alt="pg_example" Head="Lorem | " Topic="Donec auctor quis lacus a mollis. Interdum et malesuada fames." />
            <MainArticle Src={Img1} Alt="pg_example" Head="Lorem | " Topic="Proin at ultrices tellus. Vestibulum fermentum viverra ipsum quis molestie. Quisque vel massa convallis, laoreet." />
        </div>
    )
}
