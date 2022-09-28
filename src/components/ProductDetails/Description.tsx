interface Props {
  description: string;
}

const Description: React.FC<Props> = ({ description }) => {
  return <span className="text-dark-grayish-blue text-justify">{description}</span>;
};

export default Description;
