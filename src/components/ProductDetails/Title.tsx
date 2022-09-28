interface Props {
  title: string;
  company: string;
}

const Title: React.FC<Props> = ({ title, company }) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-orange text-sm lett font-bold uppercase tracking-wider">{company}</span>
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
};

export default Title;
