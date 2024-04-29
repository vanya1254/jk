export const getMatrixFilters = (filters: any[], categories: string[]) => {
  const result = categories.map((category) =>
    Array.from(new Set(filters.map((filter) => filter[`${category}`])))
  );

  console.log(result);
};

getMatrixFilters(
  [
    {
      brandName: "Nike",
      color: "Purple",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 15,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Black",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "adidas",
      color: "Black",
      sizeRange: [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
      sizeUnit: "us",
      category: "Sandal",
    },
    {
      brandName: "Air Jordan",
      color: "Cream",
      sizeRange: [
        5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Green",
      sizeRange: [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15,
        16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Black",
      sizeRange: [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16,
        17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Grey",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "adidas",
      color: "Grey",
      sizeRange: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Grey",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Black",
      sizeRange: [
        4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
        12.5, 13, 13.5, 14, 14.5, 15, 16, 17, 18, 19, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Yellow",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Yellow",
      sizeRange: [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15,
        16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Basketball",
    },
    {
      brandName: "adidas",
      color: "Grey",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 16, 17, 18, 19, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15,
        16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Teal",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Tan",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Grey",
      sizeRange: [
        5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5,
        13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Cream",
      sizeRange: [
        6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14,
        15,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Grey",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15,
        16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Grey",
      sizeRange: [
        5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5,
        13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "White",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16,
        17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "adidas",
      color: "White",
      sizeRange: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      sizeUnit: "us",
      category: "Sandal",
    },
    {
      brandName: "Nike",
      color: "Cream",
      sizeRange: [
        4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
        12.5, 13, 14, 15,
      ],
      sizeUnit: "us",
      category: "Skateboarding",
    },
    {
      brandName: "Nike",
      color: "White",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Skateboarding",
    },
    {
      brandName: "Air Jordan",
      color: "Black",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "adidas",
      color: "Cream",
      sizeRange: [
        4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
        12.5, 13, 13.5, 14, 14.5, 15, 15.5,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Black",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "adidas",
      color: "Cream",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 16, 17, 18, 19, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "ASICS",
      color: "White",
      sizeRange: [
        5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5,
        13, 13.5, 14, 14.5,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Pink",
      sizeRange: [
        5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Green",
      sizeRange: [
        4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
        12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19,
        19.5, 20, 20.5, 21, 21.5, 22, 22.5,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Crocs",
      color: "Red",
      sizeRange: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Red",
      sizeRange: [
        4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
        12.5, 13, 14, 15,
      ],
      sizeUnit: "us",
      category: "Skateboarding",
    },
    {
      brandName: "Maison Mihara Yasuhiro",
      color: "Black",
      sizeRange: [
        34.5, 35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42,
        42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48, 48.5, 49, 49.5, 50,
        50.5, 51, 51.5, 52, 52.5,
      ],
      sizeUnit: "eu",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Grey",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "New Balance",
      color: "Cream",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "White",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "ASICS",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Cream",
      sizeRange: [
        4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
        12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19,
        19.5, 20, 20.5, 21, 21.5, 22, 22.5,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Tan",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Purple",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Brown",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "adidas",
      color: "Grey",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 16, 17, 18, 19, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Black",
      sizeRange: [
        5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5,
        13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Black",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Black",
      sizeRange: [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Red",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Black",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Running",
    },
    {
      brandName: "Nike",
      color: "White",
      sizeRange: [
        5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Purple",
      sizeRange: [
        5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5,
        13, 13.5, 14, 14.5,
      ],
      sizeUnit: "us",
      category: "Running",
    },
    {
      brandName: "Air Jordan",
      color: "Red",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Brown",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Blue",
      sizeRange: [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16,
        17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Purple",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15,
      ],
      sizeUnit: "us",
      category: "Basketball",
    },
    {
      brandName: "Air Jordan",
      color: "Brown",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "New Balance",
      color: "Pink",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Black",
      sizeRange: [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15,
        16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Cream",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "New Balance",
      color: "Black",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Running",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Blue",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "White",
      sizeRange: [
        6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14,
        15, 16,
      ],
      sizeUnit: "us",
      category: "Basketball",
    },
    {
      brandName: "Air Jordan",
      color: "Black",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Cleat",
    },
    {
      brandName: "New Balance",
      color: "Grey",
      sizeRange: [
        4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
        13,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "New Balance",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Blue",
      sizeRange: [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15,
        16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Orange",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "adidas",
      color: "Pink",
      sizeRange: [
        5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5,
        13, 13.5, 14, 14.5, 15,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Green",
      sizeRange: [
        4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
        12.5, 13, 13.5, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "White",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Green",
      sizeRange: [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16,
        17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Red",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "White",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "adidas",
      color: "Blue",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 16, 17, 18, 19, 20,
      ],
      sizeUnit: "us",
      category: "Basketball",
    },
    {
      brandName: "Nike",
      color: "White",
      sizeRange: [
        3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
        11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18,
        18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Blue",
      sizeRange: [
        5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5,
        13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Black",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 14, 15,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Nike",
      color: "Cream",
      sizeRange: [
        5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "adidas",
      color: "Pink",
      sizeRange: [
        4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
        12.5, 13, 13.5, 14, 14.5, 15,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
    {
      brandName: "Air Jordan",
      color: "Grey",
      sizeRange: [
        3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 15, 16, 17, 18,
      ],
      sizeUnit: "us",
      category: "Lifestyle",
    },
  ],
  ["brandName", "color", "category"]
);
