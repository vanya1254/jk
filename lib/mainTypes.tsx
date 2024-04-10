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
  gender: string[];
  name: string;
  nickname: string;
  color: string;
  productCategory: string;
  productType: string;
  releaseDate: string;
  sizeRange: SizeOptionT[];
  sizeUnit: string;
  specialDisplayPriceCents: number;
  upperMaterial: string;
  sizeOptions: [];
  category: string[];
  story: string;
  mainPictureUrl: string;
  productTemplateExternalPictures: string[];
};
