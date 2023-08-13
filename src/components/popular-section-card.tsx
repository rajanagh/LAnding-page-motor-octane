import { FunctionComponent } from "react";

const PopularSectionCard: FunctionComponent = () => {
  return (
    <div className="absolute top-[1383px] left-[-1px] w-[1437px] h-[454px] text-left text-13xl text-gray-100 font-armstrong">
      <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-[1437px] h-[454px]" />
      <div className="absolute top-[12px] left-[calc(50%_-_143.5px)] font-extrabold">
        <span>
          <span>FEATURED</span>
          <span className="text-black">{` `}</span>
        </span>
        <span className="text-15xl text-firebrick-100">CARS</span>
      </div>
      <div className="absolute top-[65.6px] left-[326.4px] w-[774.6px] h-[29.2px] text-lgi-2 text-gray-200">
        <div className="absolute top-[0px] left-[0px] bg-gray-200 box-border w-44 h-[28.8px] border-[0.8px] border-solid border-gray-100" />
        <div className="absolute top-[7.2px] left-[36px] text-whitesmoke inline-block w-[104px] h-[14.4px]">
          POPULAR
        </div>
        <div className="absolute top-[0px] left-[198.4px] bg-whitesmoke box-border w-44 h-[28.8px] border-[0.8px] border-solid border-gray-100" />
        <div className="absolute top-[7.2px] left-[260.8px] inline-block w-[51.2px] h-[14.4px]">
          NEW
        </div>
        <div className="absolute top-[0px] left-[396.8px] bg-whitesmoke box-border w-44 h-[28.8px] border-[0.8px] border-solid border-gray-100" />
        <div className="absolute top-[0.4px] left-[396.6px] bg-whitesmoke box-border w-44 h-[28.8px] border-[0.8px] border-solid border-gray-100" />
        <div className="absolute top-[7.2px] left-[428.8px] inline-block w-[112.8px] h-[14.4px]">
          UPCOMING
        </div>
        <div className="absolute top-[0.4px] left-[598.6px] bg-whitesmoke box-border w-44 h-7 border-[0.8px] border-solid border-gray-100" />
        <div className="absolute top-[7.4px] left-[608.6px] inline-block w-[155px] h-3.5">
          MY SHORTLIST
        </div>
      </div>
    </div>
  );
};

export default PopularSectionCard;
