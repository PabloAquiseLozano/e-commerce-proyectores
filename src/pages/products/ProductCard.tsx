interface ProductCard {
  title: string;
  brand: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
}

export const ProductCard = ({
  title,
  brand,
  price,
  oldPrice,
  imageUrl,
}: ProductCard) => {
  return (
    <div className="w-full overflow-hidden bg-white rounded-2xl">
      <div className="w-full h-[177px] p-2">
        <img
          className="w-full h-full object-contain"
          src={imageUrl}
          alt="imageProduct"
        />
      </div>
      <div className="details grid px-[1.2em] py-[0.3em]">
        <span className="text-xs text-gray-500 uppercase">{brand}</span>
        <span className="text-[1.25em] font-bold">{title}</span>
        <span className="text-xl text-gray-500">{`$ ${price}`}</span>
        <span className="text-base text-gray-500 line-through">{`$ ${oldPrice}`}</span>
      </div>
    </div>
  );
};
