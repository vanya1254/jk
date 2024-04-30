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
  { name: "Brands", value: ["Nike", "Off-white"] },
  { name: "Colors", value: ["Green", "Red"] },
  { name: "Categories", value: ["Lifestyle", "Home"] },
  {
    name: "Sizes",
    value: [
      "3",
      "3.5",
      "4",
      "4.5",
      "5",
      "5.5",
      "6",
      "6.5",
      "7",
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
      "12.5",
      "13",
      "13.5",
      "14",
      "14.5",
      "15",
      "15.5",
      "16",
      "16.5",
      "17",
      "17.5",
      "18",
      "18.5",
      "19",
      "19.5",
      "20",
      "20.5",
      "21",
      "21.5",
      "22",
    ],
  },
  { name: "Gender", value: ["man", "woman"] },
];

export const filterNames = ["Brands", "Colors", "Categories"];
export const fetchNames = ["brandName", "color", "category"];

export const selectionsFetch = {
  home: {
    cards:
      "_select=slug,mainPictureUrl,name,productTemplateExternalPictures,priceCents,id",
  },
  sneakers: {
    cards:
      "_select=slug,mainPictureUrl,name,productTemplateExternalPictures,priceCents,id",
    filters: "_select=color,brandName,category",
  },
  sneakersSlug: { cards: "_select=id" },
};
