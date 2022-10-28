export interface INITIAL_STATE_INTERFACE{
    giphs: Array<parsedGiphObject>
    favoritesGiphs: Array<string>
    textSearchedGiph: string
    searchedGiphs: [],
    isLoading: Boolean
}

export interface parsedGiphObject {
    id: string,
    url: string,
    selected: boolean
}