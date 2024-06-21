export enum Status {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

export type SizeOptionT = { presentation: string; value: number };

export type ProductT = {
  id: number;
  sku: string;
  slug: string;
  brandName: string;
  designer: string;
  gender: string;
  name: string;
  nickname: string;
  color: string;
  productCategory: string;
  productType: string;
  releaseDate: string;
  sizeRange: number[];
  sizeUnit: string;
  priceCents: number;
  upperMaterial: string;
  sizeOptions: SizeOptionT[];
  category: string;
  story: string;
  mainPictureUrl: string;
  productTemplateExternalPictures: string[];
};

export type FiltersT = {
  name: string;
  path: "brandName" | "color" | "category" | "sizeRange[]" | "gender";
  value: string[];
};
