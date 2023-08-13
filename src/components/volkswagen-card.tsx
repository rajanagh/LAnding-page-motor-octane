import { FunctionComponent } from "react";

const VolkswagenCard: FunctionComponent = () => {
  return (
    <div className="absolute top-[3076px] left-[877px] w-[212px] h-[402px] text-left text-lg text-white font-leto-sans">
      <div className="absolute top-[0px] left-[0px] rounded-3xl [background:linear-gradient(180deg,_#fff6f2,_#231f1e_84.67%)] w-[212px] h-[402px]" />
      <div className="absolute top-[339px] left-[13px] inline-block w-[187px]">
        <p className="m-0">
          <b>New Volkswagen</b>
        </p>
        <p className="m-0">{`Virtus & Taigun`}</p>
      </div>
      <img
        className="absolute top-[109px] left-[0px] w-[212px] h-[98px] object-cover"
        alt=""
        src="/volkswagenvirtusrightfrontthreequarter0-1@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] w-[212px] h-[109px]">
        <div className="absolute top-[0px] left-[0px] rounded-t-3xl rounded-b-none bg-seashell-100 w-[212px] h-[109px]" />
        <img
          className="absolute top-[0px] left-[0px] rounded-t-3xl rounded-b-none w-[212px] h-[109px] object-cover"
          alt=""
          src="/front-34th-codriver-mattgrey-graphics-1-1@2x.png"
        />
      </div>
      <div className="absolute top-[207px] left-[0px] w-[212px] h-[101px]">
        <div className="absolute top-[0px] left-[0px] bg-seashell-100 w-[212px] h-[101px]" />
        <img
          className="absolute top-[0px] left-[0px] w-[212px] h-[101px] object-cover"
          alt=""
          src="/front-34th-codriver-mattgrey-graphics-1-11@2x.png"
        />
      </div>
    </div>
  );
};

export default VolkswagenCard;
