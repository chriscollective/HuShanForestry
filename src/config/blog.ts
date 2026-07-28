export const blogCategories = [
  { id: "all", label: "全部" },
  { id: "forest-knowledge", label: "森林知識" },
  { id: "tree-introduction", label: "樹木介紹" },
  { id: "forestry-regulations", label: "林業法規" },
  { id: "sustainability", label: "永續經營" },
  { id: "case-study", label: "案例分享" },
  { id: "other", label: "其他" },
] as const;

export const blogCategoryLabelMap = blogCategories.reduce<Record<string, string>>(
  (acc, category) => {
    acc[category.id] = category.label;
    return acc;
  },
  {}
);
