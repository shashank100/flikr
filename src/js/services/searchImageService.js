export const searchImages = (query) => {
    return new Promise((resolve, reject) => {
        fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&text=" + query + "&api_key=a46a979f39c49975dbdd23b378e6d3d5&format=json&nojsoncallback=1&per_page=10")
        .then(res => {
            return res.json();
        })
        .then(json => {
            resolve(json.photos.photo);
        })
        .catch(err => {
            console.log("Some Error Occured");
        });
    });
}
