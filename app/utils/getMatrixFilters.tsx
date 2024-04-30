import { fetchNames } from "../constants";

const getMatrixFilters = (
  filters: Record<string, string>[],
  categories: string[] = fetchNames
) => {
  const result = categories.map((category) =>
    Array.from(new Set(filters.map((filter) => filter[`${category}`])))
  );

  return result;
};

export default getMatrixFilters;
