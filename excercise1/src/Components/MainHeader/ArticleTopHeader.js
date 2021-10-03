import React from 'react'
import img1 from '../../button-subscribe.svg'

export default function ArticleTopHeader() {
    return (
        <div className="ArticleTopHeader">
            <div className="ItemList1">
                <p>HELSINGIN SANOMAT    </p>
                <p>Uutiset  </p>
                <p>Lehdet   </p>

            </div>
            <div className="ItemList2">
                <img src={img1} alt="Subscribe" className="subscribe" />
                <p>Kirjaudu</p>
                <p>Hae</p>
                <p>Valikko</p>
            </div>
        </div>
    )
}
