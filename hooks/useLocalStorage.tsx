import { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { parsedGiphObject } from "../interfaces/interfaces"

function useLocalStorage(itemName: string, initialValue: any) {
    const { dispatch } = useContext(StoreContext)
    const getItem = () => {
        if (typeof window != "undefined") {
            let parsedItem;
            const localStorageItem = localStorage.getItem(itemName);
            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }
            return parsedItem
        }
    }
    const searchItemSavedInLocalStorage = (savedItems: Array<parsedGiphObject>, newItem: parsedGiphObject) => {
        const newItems = savedItems.filter((item: parsedGiphObject) => item.id == newItem.id)
        return newItems
    }
    const deleteItemOfLocalStorage = (savedItems: Array<parsedGiphObject>, newItem: parsedGiphObject) => {
        const newItems = savedItems.filter((item: parsedGiphObject) => item.id != newItem.id)
        return newItems
    }
    const toogleItemOfLocalStorage = (newItem: parsedGiphObject) => {
        let savedItems = getItem();
        let itemsWithoutDuplication = searchItemSavedInLocalStorage(savedItems, newItem)
        if (itemsWithoutDuplication.length == 0 || savedItems.length == 0) { savedItems.push({ ...newItem }) }
        else savedItems = deleteItemOfLocalStorage(savedItems, newItem)
        localStorage.setItem(itemName, JSON.stringify(savedItems))
        dispatch({
            type: "SAVE_FAVORITES_GIPHS",
            payload: newItem
        })
    };
    return {
        toogleItemOfLocalStorage,
        getItem
    };
}

export { useLocalStorage };