import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className="absolute top-[4816px] left-[0px] w-[1440px] h-[139px] text-left text-base text-seashell-100 font-roboto">
      <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[1440px] h-[139px]" />
      <img
        className="absolute top-[29px] left-[160px] w-[120px] h-[76px] object-cover"
        alt=""
        src="/channels4-profile-1@2x.png"
      />
      <div className="absolute top-[24px] left-[315px] w-[465px] h-[19px]">
        <div className="absolute top-[0px] left-[0px]">{`ABOUT US `}</div>
        <div className="absolute top-[0px] left-[91px]">{`TERMS & CONDITIONS`}</div>
        <div className="absolute top-[0px] left-[383px]">ADVERTISE</div>
        <div className="absolute top-[0px] left-[271px]">CONTACT US</div>
      </div>
      <div className="absolute top-[24px] left-[1010px] font-leto-sans">
        LETS CONNECT ON SOCIAL MEDIA
      </div>
      <div className="absolute top-[71px] left-[315px] w-[361px] h-[43px] text-sm">
        <img
          className="absolute top-[1px] left-[116px] w-3.5 h-3.5 overflow-hidden"
          alt=""
          src="/iconparkoutlinehandlec.svg"
        />
        <div className="absolute top-[0px] left-[0px]">{`All rights reserved `}</div>
        <div className="absolute top-[0px] left-[134px]">
          2006 - 2023. www.motoroctane.com
        </div>
        <div className="absolute top-[27px] left-[0px]">{`Visitor Agreement & Privacy Policy`}</div>
      </div>
      <img
        className="absolute top-[56px] left-[906px] w-16 h-16"
        alt=""
        src="/group-20.svg"
      />
      <img
        className="absolute top-[56px] left-[986px] w-16 h-16"
        alt=""
        src="/group-44.svg"
      />
      <img
        className="absolute top-[56px] left-[1066px] w-16 h-16"
        alt=""
        src="/group-22.svg"
      />
      <img
        className="absolute top-[56px] left-[1146px] w-16 h-16"
        alt=""
        src="/group-23.svg"
      />
      <img
        className="absolute top-[56px] left-[1226px] w-16 h-16"
        alt=""
        src="/group-21.svg"
      />
      <div className="absolute top-[96px] left-[619px] w-[202px] h-[19px]">
        <div className="absolute top-[0px] left-[0px] font-semibold">
          Powered by
        </div>
        <div className="absolute top-[1px] left-[88px] [background:linear-gradient(90deg,_#383222_57.08%,_#1f1f25_73.73%)] w-[113px] h-[17px]" />
        <div className="absolute top-[0px] left-[88px] tracking-[0.2em] font-semibold">
          <span>BRAND</span>
          <span className="[background:linear-gradient(90deg,_#ba8433_58.84%,_#e2412e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            KILN
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
