import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1440px] h-[100px] text-left text-3xs text-gray-100 font-armstrong">
      <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[1440px] h-[100px]" />
      <img
        className="absolute top-[12px] left-[192px] w-[120px] h-[76px] object-cover"
        alt=""
        src="/channels4-profile-1@2x.png"
      />
      <div className="absolute top-[34px] left-[382px] w-[768px] h-8">
        <div className="absolute top-[0px] left-[0px] bg-seashell-100 box-border w-32 h-8 border-[0.6px] border-solid border-gray-200" />
        <div className="absolute top-[10px] left-[49px] text-gray-200">
          CARS
        </div>
        <div className="absolute top-[0px] left-[128px] bg-seashell-100 box-border w-32 h-8 border-[0.6px] border-solid border-gray-200" />
        <div className="absolute top-[10px] left-[158px]">CONSULT US</div>
        <div className="absolute top-[0px] left-[256px] bg-seashell-100 box-border w-32 h-8 border-[0.6px] border-solid border-gray-200" />
        <div className="absolute top-[10px] left-[272px]">YOUTUBE VIDEOS</div>
        <div className="absolute top-[0px] left-[384px] bg-seashell-100 box-border w-32 h-8 border-[0.6px] border-solid border-gray-200" />
        <div className="absolute top-[10px] left-[402px]">SHARE REVIEWS</div>
        <div className="absolute top-[0px] left-[512px] bg-seashell-100 box-border w-32 h-8 border-[0.6px] border-solid border-gray-200" />
        <div className="absolute top-[10px] left-[543px]">MY HISTORY</div>
        <div className="absolute top-[0px] left-[640px] bg-seashell-100 box-border w-32 h-8 border-[0.6px] border-solid border-gray-200" />
        <div className="absolute top-[10px] left-[665px]">CALCULATORS</div>
      </div>
      <div className="absolute top-[15px] left-[1198px] w-[202px] h-[70px] text-base text-white font-flamante-sans">
        <div className="absolute top-[0px] left-[132px] rounded-[50%] bg-gainsboro-200 w-[70px] h-[70px]" />
        <div className="absolute top-[33.88px] left-[35.88px] box-border w-[96.25px] h-[0.25px] border-t-[0.3px] border-solid border-seashell-200" />
        <div className="absolute top-[11px] left-[36px]">John Smith</div>
        <div className="absolute top-[38px] left-[36px]">Logout</div>
        <img
          className="absolute top-[23px] left-[0px] w-6 h-6 overflow-hidden"
          alt=""
          src="/carbonlocation.svg"
        />
      </div>
    </div>
  );
};

export default Header;
