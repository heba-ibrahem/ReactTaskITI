let list =[
    {
        id: 1,
        title: "EndGame",
        year: 2019
    },
    {
        id: 2,
        title: "Dolittel",
        year: 2020
    },
    {
        id: 3,
        title: "Trip to Italy",
        year: 2020
    }
]

export function getMovie() {
    return {
            type: 'Movie_list',
            payload: list
        }
    
}
export function getMovieById(id) {
    console.log(id)
    return {
            type: 'one_Movie',
            payload: list.find(item=> item.id===id)
        }
    
}
