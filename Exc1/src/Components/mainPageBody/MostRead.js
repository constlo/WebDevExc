import React from 'react'

export default function MostRead() {
    return (
        <div className="MostRead">
            <p className="MostReadLogo">Luetuimmat</p>
            <hr className="MostReadHR"/>
            <div className="MostReadContainer">
                <ol type='1' className="MostReadList">
                    <li>
                        <div className="ListContainer">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </li>
                    <li>
                        <div className="ListContainer">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </div>

                    </li>
                    <li>
                        <div className="ListContainer">
                            Praesent eget ex gravida, efficitur tortor non, aliquam ex. Morbi in tortor eu mi scelerisque fringilla non.
                        </div>
                    </li>
                    <li>
                        <div className="ListContainer">
                            In ut elementum massa, et volutpat leo. Nunc quis iaculis massa. Vestibulum
                        </div>
                    </li>
                    <li>
                        <div className="ListContainer">
                            Duis vitae mauris quis erat tincidunt finibus. Donec vitae.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}
