export const pathPage = `{
  "/": ["Home"],
  "/sneakers": ["Home", "Sneakers"],
  "/cart": ["Home", "Cart"]
}`;

export const sortTypes = [
  "price ↓",
  "price ↑",
  "release date ↓",
  "release date ↑",
];

export const filterTypes = [
  { name: "Categories", value: ["Lifestyle", "Home"] },
  { name: "Colors", value: ["safas", "dsfsd"] },
  { name: "Sizes", value: ["3.5", "4.5"] },
  { name: "Gender", value: ["man", "woman"] },
];

export const selectionsFetch = {
  home: {
    cards:
      "_select=slug,mainPictureUrl,name,productTemplateExternalPictures,priceCents,id",
  },
  sneakers: {
    cards:
      "_select=slug,mainPictureUrl,name,productTemplateExternalPictures,priceCents,id",
    filters: "_select=sizeRange,sizeUnit,color,brandName,category",
  },
  sneakersSlug: { cards: "_select=id" },
};
