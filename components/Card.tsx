type CardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  href?: string;
  title?: string;
  icon?: React.FunctionComponent<any>;
};

const Card: React.FC<CardProps> = ({
  className,
  href = "",
  icon: Icon,
  title,
  ...other
}) => {
  return (
    <a href={href}>
      <div
        {...other}
        className="p-3 bg-slate-50 rounded-lg border border-slate-200 dark:bg-neutral-800 dark:border-neutral-700 h-full"
      >
        <div className="flex gap-6 flex-nowrap items-center h-full">
          <div className="bg-blue-600/10 rounded-md p-1.5 h-fit w-fit border-2 border-blue-600">
            {Icon && <Icon className="text-blue-600 w-6" />}
          </div>
          <p>{title}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
