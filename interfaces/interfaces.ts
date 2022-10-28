export interface INITIAL_STATE_INTERFACE{
    giphs: []
    favoritesGiphs: []
    textSearchedGiph: string
    searchedGiphs: [],
    isLoading: Boolean
}

export interface parsedGiphObject {
    id: string,
    url: string,
    selected: boolean
}