import React from "react";
import {connect} from "react-redux";

let SearchView = ({images, query, onImageClick, selectedImage}) => {
    return (
        <div>
            <h3>{query}</h3>
            <div>
                {
                    images.map(({farm, id, server, secret}) => {
                        if (id === selectedImage) {
                            return (
                                <p>
                                    <img key={id} height="500" width="500" src={"https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + ".jpg"}></img>
                                </p>
                            )
                        }
                    })
                }
                {
                    images.map(({farm, id, server, secret}) => {
                        return (
                            <img key={id} height="100" width="100" src={"https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + ".jpg"} onClick={() => {onImageClick(id)}}></img>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SearchView;
