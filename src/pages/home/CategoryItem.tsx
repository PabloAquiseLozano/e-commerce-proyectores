interface Props {
  category: Category;
}

export const CategoryItem = ({ category }: Props) => {
  return (
    <a
      href={category.url}
      target="_blank"
      className={`${category.gridType} relative rounded-[.7em] overflow-hidden cursor-pointer before:absolute before:content-[''] before:inset-0 before:w-full before:h-full before:bg-gradient-to-t before:from-[rgba(0,0,0,0.5)] before:to-transparent hover:scale-105 transition-all hover:transition-all duration-200`}
    >
      <div className="ty-forum name absolute bottom-[3%] left-[3%] font-medium text-[2em] text-white">
        {category.name}
      </div>
      <a href={category.url} target="_blank">
        <img
          src={category.image}
          alt="star product vida"
          className="w-full h-full "
        />
      </a>
    </a>
  );
};
