import { Select } from "antd";

interface SortOptionId {
  sortId: string;
}

interface Props {
  sortOptions: SortOptionId;
  setQuery: (
    updates: Partial<SortOptionId>,
    updateType?: "pushIn" | "replaceIn",
  ) => void;
}

export const SortOptions = ({ setQuery, sortOptions }: Props) => {
  const _sortOptions = [
    {
      value: "low-price",
      label: "Precio más Bajo",
    },
    {
      value: "high-price",
      label: "Precio más Alto",
    },
    {
      value: "brand",
      label: "Marca",
    },
    {
      value: "recommended",
      label: "Recomendados",
    },
  ];

  const selectOption = (value: string) => {
    setQuery({ sortId: value }, "pushIn");
  };

  return (
    <div className="flex gap-4">
      <span>Ordenar por:</span>
      <Select
        style={{ width: 150 }}
        defaultValue={sortOptions.sortId}
        options={_sortOptions}
        onSelect={(value) => selectOption(value)}
      />
    </div>
  );
};
