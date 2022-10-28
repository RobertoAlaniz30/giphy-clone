export function parseDataGiphs(data: any) {
 let parsedGiphs = data.map((item: any) => {
    return {
      url: item.images.original.url,
      id: item.id,
      selected: false,
    };
  });
  return parsedGiphs
}
