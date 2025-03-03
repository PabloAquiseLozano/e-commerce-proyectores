import { Checkbox, Slider } from "antd";
import { filterOptionsMenu } from "@/data-list";

interface Filters {
  category: (string | null)[];
  brand: (string | null)[];
  minPrice: number;
}

interface FilterOptionsProps {
  filters: Filters;
  setQuery: (
    updates: Partial<Filters>,
    updateType?: "pushIn" | "replaceIn",
  ) => void;
}

export const FilterOptions = ({ filters, setQuery }: FilterOptionsProps) => {
  const handleCheckOption = (
    isChecked: boolean,
    value: string,
    filterOption: string,
  ) => {
    if (filterOption === "categories") {
      const currentCategories = filters.category ? filters.category : [];
      const updateCategories = isChecked
        ? [...currentCategories, value]
        : currentCategories.filter((cat) => cat !== value);

      setQuery({ category: updateCategories }, "pushIn");
    }

    if (filterOption === "brands") {
      const currentBrands = filters.brand ? filters.brand : [];
      const updateBrands = isChecked
        ? [...currentBrands, value]
        : currentBrands.filter((brand) => brand !== value);

      setQuery({ brand: updateBrands }, "pushIn");
    }
  };

  const handleChangePrice = (value: number) => {
    setQuery({ minPrice: value }, "pushIn");
  };

  return (
    <div className="text-xl flex flex-col gap-[1.5em]">
      <div className="text-2xl font-bold">
        <h2>FILTRAR PRODUCTOS</h2>
      </div>
      <div className="grid gap-[0.8em]">
        <span className="font-bold">
          Precio: &nbsp;<span>$ {filters.minPrice}</span>
        </span>
        <Slider
          min={0}
          max={999}
          tooltip={{ open: false }}
          onChange={handleChangePrice}
        />
      </div>
      {filterOptionsMenu.map((filterOption) => (
        <div key={filterOption.name} className="grid gap-[0.8em]">
          <span className="font-bold">{filterOption.label}</span>
          <Checkbox.Group className="flex flex-col gap-[.5em]">
            {filterOption.items.map((item) => (
              <Checkbox
                key={item.value}
                value={item.value}
                className="text-base"
                checked={filters.category.includes(item.value)}
                onChange={(e) =>
                  handleCheckOption(
                    e.target.checked,
                    item.value,
                    filterOption.name,
                  )
                }
              >
                {item.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </div>
      ))}
    </div>
  );
};
