import { FunctionComponent } from "react";

const NewCard: FunctionComponent = () => {
  return (
    <div className="absolute top-[1061px] left-[150px] w-[1140px] h-[187px] text-left text-13xl text-white font-leto-sans">
      <img
        className="absolute top-[0px] left-[0px] w-[1140px] h-[187px]"
        alt=""
        src="/group-7.svg"
      />
      <img
        className="absolute top-[0px] left-[352px] w-[785px] h-[187px] object-cover"
        alt=""
        src="/pngwing-1@2x.png"
      />
      <div className="absolute top-[2px] left-[0px] [background:linear-gradient(90deg,_#231f1e_47.19%,_rgba(0,_0,_0,_0))] w-[1140px] h-[184px]" />
      <div className="absolute top-[12px] left-[56px] inline-block w-[166px] h-8">
        <p className="m-0">{`All the new `}</p>
      </div>
      <div className="absolute top-[117px] left-[57px] text-5xl inline-block w-[314px] h-8">
        Excitement, like never before
      </div>
      <b className="absolute top-[42px] left-[54px] text-45xl [text-decoration:underline] tracking-[0.08em] inline-block text-steelblue w-[190px]">
        SWIFT
      </b>
      <div className="absolute top-[5px] left-[21px] w-[16.12px] h-[134.4px]">
        <div className="absolute top-[6.73px] left-[0px] bg-steelblue w-3.5 h-2 [transform:_rotate(-28.71deg)] [transform-origin:0_0]" />
        <div className="absolute top-[79.06px] left-[0px] bg-steelblue w-3.5 h-2 [transform:_rotate(-28.71deg)] [transform-origin:0_0]" />
        <div className="absolute top-[31.06px] left-[0px] bg-steelblue w-3.5 h-2 [transform:_rotate(-28.71deg)] [transform-origin:0_0]" />
        <div className="absolute top-[103.38px] left-[0px] bg-steelblue w-3.5 h-2 [transform:_rotate(-28.71deg)] [transform-origin:0_0]" />
        <div className="absolute top-[55.06px] left-[0px] bg-steelblue w-3.5 h-2 [transform:_rotate(-28.71deg)] [transform-origin:0_0]" />
        <div className="absolute top-[127.38px] left-[0px] bg-steelblue w-3.5 h-2 [transform:_rotate(-28.71deg)] [transform-origin:0_0]" />
      </div>
    </div>
  );
};

export default NewCard;
