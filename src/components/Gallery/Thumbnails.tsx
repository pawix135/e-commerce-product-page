import classNames from 'classnames';

interface Props {
  assets: Asset[];
  index: number;
  setIndex: any;
}

const Thumbnails: React.FC<Props> = ({ assets, index, setIndex }) => {
  return (
    <div className="hidden md:grid grid-cols-4 grid-rows-1 gap-5">
      {assets.map((image, i) => {
        return (
          <div className="relative" key={`thumb-${i}`}>
            <div
              className={classNames({
                "before:rounded-lg before:border-orange before:border-2 before:content-[''] before:pointer-events-none before:w-full before:h-full before:bg-white/60 before:top-0 before:left-0 before:absolute ":
                  index === i,
              })}
            ></div>
            <img className="rounded-lg" src={image.thumb} alt="" onClick={() => setIndex(i)} />
          </div>
        );
      })}
    </div>
  );
};

export default Thumbnails;
