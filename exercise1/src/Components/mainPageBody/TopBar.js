import React from 'react'
import TopArticle from './TopArticle'

export default function TopBar() {
    return (
        <div className="TopBar">
            <TopArticle head="PÄIVÄN TIMANTTI: " topic="Nuorena kavereita oli paljon, nyt en keksi edes kummia lapselleni - Miksi ystävyyssuhteeni eivät syvene?" />
            <TopArticle head="URHEILU: " topic="Huiman tuloksen Cooperin testissä juosseelle lukiolaiselle etsitään valmentajaa" />
            <TopArticle head="MAINOS: " topic="Lunasta kaksi viikkoa maksutonta lukuaikaa!"/>
        </div>
    )
}
