export const getGift = async(category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=LqvxHnfkyk8BmPPzEAdAqhOT7G62By4w&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifsImgs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));
    
    console.log(gifsImgs);  
    return gifsImgs;
}