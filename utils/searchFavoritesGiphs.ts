 import { parsedGiphObject } from "../interfaces/interfaces";
 export function searchFavoritesGiphs(data: Array<parsedGiphObject>) {
  let parsedItem: any;
  const localStorageItem = localStorage.getItem("FAVORITES_GIPHS");
  if (!localStorageItem) {
    return data;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  data.forEach((item1: parsedGiphObject, index: number) => {
     parsedItem.forEach((item: parsedGiphObject) => {
      if (item1.id == item.id) data[index].selected = true
    });
  });
  return data
}
