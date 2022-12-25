type CardsProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  num: number;
};

const GridMap: { [key: string]: string } = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

const Cards: React.FC<CardsProps> = ({
  className,
  num,
  children,
  ...other
}) => {
  const cols = GridMap[num];

  return (
    <div {...other} className={`grid gap-8 ${cols} ${className}`}>
      {children}
    </div>
  );
};

export default Cards;
