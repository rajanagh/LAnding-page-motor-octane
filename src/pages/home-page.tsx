import { FunctionComponent } from "react";
import Header from "../components/header";
import NewCard from "../components/new-card";
import PopularSectionCard from "../components/popular-section-card";
import ContainerCardFormFilter from "../components/container-card-form-filter";
import ContainerForm from "../components/container-form";
import CardContainer from "../components/card-container";
import Footer from "../components/footer";
import ContainerWrapper from "../components/container-wrapper";
import HyundaiCard from "../components/hyundai-card";
import VolkswagenCard from "../components/volkswagen-card";
import CarCardContainer from "../components/car-card-container";

const HomePage: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[4954px] overflow-hidden text-left text-13xl text-gray-100 font-armstrong">
      <div className="absolute top-[2402px] left-[1px] bg-gainsboro-300 w-[1437px] h-[574px]" />
      <div className="relative w-[662px] h-[767px] bg-[url(/public/subtract@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <img
          className="absolute top-[623px] left-[-62px] w-[662px] h-[767px] object-cover"
          alt=""
          src="/8084-1@2x.png"
        />
        <div className="absolute top-[838.07px] left-[369.82px] bg-gainsboro-200 w-[264.33px] h-[208.87px]" />
      </div>
      <div className="relative w-[662px] h-[767px] bg-[url(/public/subtract1@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <img
          className="absolute top-[2333px] left-[-3px] w-[662px] h-[767px] object-cover"
          alt=""
          src="/8084-1@2x.png"
        />
        <div className="absolute top-[2548.07px] left-[428.82px] bg-gainsboro-200 w-[264.33px] h-[208.87px]" />
      </div>
      <Header />
      <div className="absolute top-[515px] left-[calc(50%_-_180px)] text-5xl font-extrabold">
        <span>FIND YOUR</span>
        <span className="text-black">{` `}</span>
        <span className="text-firebrick-100">PERFECT CAR</span>
      </div>
      <img
        className="absolute top-[100px] left-[0px] w-[1440px] h-[387px] object-cover"
        alt=""
        src="/bentleycontinentalgt2019cars4kwallpaperpreview-1@2x.png"
      />
      <div className="absolute top-[560px] left-[508px] w-[424px] h-8 text-base text-gray-200">
        <div className="absolute top-[0px] left-[0px] bg-gray-200 box-border w-32 h-8 border-[1px] border-solid border-gray-100" />
        <div className="absolute top-[0px] left-[148px] bg-whitesmoke box-border w-32 h-8 border-[1px] border-solid border-gray-100" />
        <div className="absolute top-[0px] left-[296px] bg-whitesmoke box-border w-32 h-8 border-[1px] border-solid border-gray-100" />
        <div className="absolute top-[7px] left-[28px] text-white">SEARCH</div>
        <div className="absolute top-[7px] left-[166px]">ASSIST ME</div>
        <div className="absolute top-[7px] left-[305px]">CONSULT US</div>
      </div>
      <div className="absolute top-[609px] left-[calc(50%_-_447px)] w-[892px] h-[65px] text-base font-leto-sans">
        <div className="absolute top-[0px] left-[calc(50%_-_446px)] box-border w-[892px] h-9 border-[1px] border-solid border-gray-200" />
        <div className="absolute top-[8px] left-[20.23px] inline-block w-[73.83px]">
          Select Car
        </div>
        <img
          className="absolute top-[1px] left-[856.6px] w-[34.39px] h-[34px] overflow-hidden"
          alt=""
          src="/mdisearch.svg"
        />
        <div className="absolute top-[44px] left-[20.23px] inline-block w-[143.61px]">
          <span>
            <span>E.g.:</span>
            <span className="text-black">{` `}</span>
          </span>
          <b className="text-gray-200">Jeep Cherokee</b>
        </div>
      </div>
      <NewCard />
      <div className="absolute top-[1276px] left-[150px] font-extrabold">
        <span>FUEL</span>
        <span className="text-black">{` `}</span>
        <span className="text-firebrick-100">PRICES</span>
      </div>
      <div className="absolute top-[1319px] left-[150px] bg-whitesmoke box-border w-[200px] h-10 border-[1px] border-solid border-gray-100" />
      <div className="absolute top-[1319px] left-[370px] bg-whitesmoke box-border w-[200px] h-10 border-[1px] border-solid border-gray-100" />
      <div className="absolute top-[1319px] left-[590px] bg-gray-100 w-[200px] h-10" />
      <div className="absolute top-[1330px] left-[166px] text-base">
        Choose City
      </div>
      <div className="absolute top-[1330px] left-[386px] text-base">
        Fuel Type
      </div>
      <img
        className="absolute top-[1327px] left-[314px] w-6 h-6 overflow-hidden"
        alt=""
        src="/eparrowdown.svg"
      />
      <img
        className="absolute top-[1327px] left-[534px] w-6 h-6 overflow-hidden"
        alt=""
        src="/eparrowdown1.svg"
      />
      <div className="absolute top-[1272px] left-[826px] w-[464px] h-[87px] text-base text-gray-300">
        <div className="absolute top-[0px] left-[0px] bg-firebrick-200 w-[464px] h-[87px]" />
        <div className="absolute top-[35px] left-[151px] inline-block w-[162px]">
          Advertising Banner
        </div>
      </div>
      <div className="absolute top-[891px] left-[122px] w-10 h-10">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-400 w-10 h-10" />
        <img
          className="absolute top-[8px] left-[8px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconamoonarrowleft2bold.svg"
        />
      </div>
      <div className="absolute top-[927px] left-[1317px] w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-400 w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[-32px] left-[-32px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconamoonarrowleft2bold1.svg"
        />
      </div>
      <PopularSectionCard />
      <div className="absolute top-[1837px] left-[-1px] w-[1437px] h-[250px] text-white font-leto-sans">
        <img
          className="absolute top-[0px] left-[1px] w-[1437px] h-[250px] object-cover"
          alt=""
          src="/2018-vw-atlas-aa3-o1038x350-1@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#231f1e_24.31%,_rgba(35,_31,_30,_0))] w-[1437px] h-[250px]" />
        <div className="absolute top-[87px] left-[187px]">
          <p className="m-0">{`Banner `}</p>
          <p className="m-0">Advertisement</p>
        </div>
      </div>
      <div className="absolute top-[2128px] left-[calc(50%_-_192px)] font-extrabold">
        <span>
          <span>BROWSE BY</span>
          <span className="text-black">{` `}</span>
        </span>
        <span className="text-15xl text-firebrick-100">BRANDS</span>
      </div>
      <img
        className="absolute top-[2207px] left-[120px] w-[1195px] h-[155px]"
        alt=""
        src="/group-58.svg"
      />
      <div className="absolute top-[3962px] left-[-123px] w-10 h-10">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-400 w-10 h-10" />
        <img
          className="absolute top-[8px] left-[8px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconamoonarrowleft2bold.svg"
        />
      </div>
      <div className="absolute top-[2438px] left-[calc(50%_-_155px)] font-extrabold">
        <span>
          <span>YOUTUBE</span>
          <span className="text-black">{` `}</span>
        </span>
        <span className="text-15xl text-firebrick-100">VIDEOS</span>
      </div>
      <div className="absolute top-[2559px] left-[1097px] w-[1098px] h-[949px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
      <ContainerCardFormFilter
        maxresdefault1="/maxresdefault-1@2x.png"
        fayoutubePlay="/fayoutubeplay.svg"
        maxresdefault11="/maxresdefault-11@2x.png"
        fayoutubePlay1="/fayoutubeplay1.svg"
        maxresdefault12="/maxresdefault-12@2x.png"
        fayoutubePlay2="/fayoutubeplay2.svg"
        maxresdefault13="/maxresdefault-13@2x.png"
        fayoutubePlay3="/fayoutubeplay3.svg"
      />
      <ContainerCardFormFilter
        maxresdefault1="/maxresdefault-14@2x.png"
        fayoutubePlay="/fayoutubeplay4.svg"
        maxresdefault11="/maxresdefault-15@2x.png"
        fayoutubePlay1="/fayoutubeplay5.svg"
        maxresdefault12="/maxresdefault-16@2x.png"
        fayoutubePlay2="/fayoutubeplay6.svg"
        maxresdefault13="/maxresdefault-17@2x.png"
        fayoutubePlay3="/fayoutubeplay7.svg"
        propTop="2497px"
      />
      <div className="absolute top-[3008px] left-[calc(50%_-_110px)] font-extrabold">
        <span>
          <span>MO</span>
          <span className="text-black">{` `}</span>
        </span>
        <span className="text-15xl text-firebrick-100">STORIES</span>
      </div>
      <div className="absolute top-[3978px] left-[calc(50%_-_170px)] font-extrabold">
        <span>
          <span>CAR</span>
          <span className="text-black">{` `}</span>
        </span>
        <span className="text-15xl text-firebrick-100">COMPARISION</span>
      </div>
      <div className="absolute top-[4304px] left-[calc(50%_-_134px)] font-extrabold">
        <span>
          <span>NEWS</span>
          <span className="text-black">{` `}</span>
        </span>
        <span className="text-15xl text-firebrick-100">UPDATE</span>
      </div>
      <img
        className="absolute top-[3519px] left-[calc(50%_-_719px)] w-[1437px] h-[419px] object-cover"
        alt=""
        src="/2022marutisuzukibaleno11-1@2x.png"
      />
      <ContainerForm dimensionCode="/mdirupee.svg" />
      <ContainerForm dimensionCode="/mdirupee2.svg" propLeft="536px" />
      <ContainerForm dimensionCode="/mdirupee2.svg" propLeft="922px" />
      <CardContainer descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      <CardContainer
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        propLeft="539px"
      />
      <CardContainer
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        propLeft="927px"
      />
      <Footer />
      <ContainerWrapper />
      <div className="absolute top-[1633px] left-[123px] w-10 h-10">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-400 w-10 h-10" />
        <img
          className="absolute top-[8px] left-[8px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconamoonarrowleft2bold.svg"
        />
      </div>
      <div className="absolute top-[1673px] left-[1318px] w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-400 w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[-32px] left-[-32px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconamoonarrowleft2bold1.svg"
        />
      </div>
      <HyundaiCard
        carDescription="Hyundai has "
        carFeatures="given the External.."
        carImageAltText="/hyundaiexter900x506-1@2x.png"
        carImageId="/frontleftside47-1-1@2x.png"
      />
      <div className="absolute top-[3076px] left-[635px] w-[212px] h-[403px] text-lg text-white font-leto-sans">
        <div className="absolute top-[1px] left-[0px] rounded-3xl [background:linear-gradient(180deg,_#fff6f2,_#231f1e_84.67%)] w-[212px] h-[402px]" />
        <div className="absolute top-[332px] left-[13px] inline-block w-[187px]">
          <p className="m-0">
            <b>{`Here’s a Quick `}</b>
          </p>
          <p className="m-0">Overview of All 4..</p>
        </div>
        <img
          className="absolute top-[0px] left-[0px] rounded-t-3xl rounded-b-none w-[212px] h-[104px] object-cover"
          alt=""
          src="/fortuneindia-202306-a72c725c423a4015b75fe28fbd3dfde3-elevate-2@2x.png"
        />
        <img
          className="absolute top-[104px] left-[0px] w-[212px] h-[100px] object-cover"
          alt=""
          src="/11978221-1@2x.png"
        />
        <img
          className="absolute top-[204px] left-[0px] w-[212px] h-[104px] object-cover"
          alt=""
          src="/64819a437c735-720x540-1@2x.png"
        />
      </div>
      <div className="absolute top-[3076px] left-[1119px] w-[166px] h-[402px] text-lg text-white font-leto-sans">
        <div className="absolute top-[0px] left-[0px] rounded-3xl [background:linear-gradient(180deg,_#fff6f2,_#231f1e_84.67%)] w-[166px] h-[402px]" />
        <div className="absolute top-[339px] left-[6.26px] inline-block w-[146.42px]">
          <p className="m-0">
            <b>{`Top Features `}</b>
          </p>
          <p className="m-0">Honda</p>
        </div>
        <img
          className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xl rounded-b-none w-[166px] h-[307px] object-cover"
          alt=""
          src="/20230606011216-honda-elevate-1@2x.png"
        />
      </div>
      <HyundaiCard
        carDescription="Top 7 features "
        carFeatures="Hyundai Creta.."
        carImageAltText="/fortuneindia-202306-a72c725c423a4015b75fe28fbd3dfde3-elevate-1@2x.png"
        carImageId="/images-4-1@2x.png"
        propLeft="393px"
        propHeight="139px"
        propTop="139px"
        propHeight1="169px"
      />
      <VolkswagenCard />
      <div className="absolute top-[3257px] left-[122px] w-10 h-10">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-400 w-10 h-10" />
        <img
          className="absolute top-[8px] left-[8px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconamoonarrowleft2bold.svg"
        />
      </div>
      <div className="absolute top-[4133px] left-[122px] w-10 h-10">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-400 w-10 h-10" />
        <img
          className="absolute top-[8px] left-[8px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconamoonarrowleft2bold.svg"
        />
      </div>
      <div className="absolute top-[4560px] left-[122px] w-10 h-10">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-400 w-10 h-10" />
        <img
          className="absolute top-[8px] left-[8px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconamoonarrowleft2bold.svg"
        />
      </div>
      <img
        className="absolute top-[1167px] left-[1283px] w-[157px] h-[128.54px] object-cover"
        alt=""
        src="/images-7-1@2x.png"
      />
      <img
        className="absolute top-[680px] left-[0px] w-[172.29px] h-[128.54px] object-cover"
        alt=""
        src="/images-7-1@2x.png"
      />
      <img
        className="absolute top-[2288px] left-[0px] w-[148.25px] h-[115.11px] object-cover"
        alt=""
        src="/images-7-2@2x.png"
      />
      <img
        className="absolute top-[4261px] left-[0px] w-[160.25px] h-[115.11px] object-cover"
        alt=""
        src="/images-7-2@2x.png"
      />
      <img
        className="absolute top-[4627px] left-[1290px] w-[150px] h-[115.11px] object-cover"
        alt=""
        src="/images-7-2@2x.png"
      />
      <div className="absolute top-[3256px] left-[1269px] rounded-[50%] bg-seashell-100 w-11 h-11" />
      <div className="absolute top-[3297px] left-[1311px] w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-400 w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[-32px] left-[-32px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconamoonarrowleft2bold1.svg"
        />
      </div>
      <div className="absolute top-[4173px] left-[1311px] w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-400 w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[-32px] left-[-32px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconamoonarrowleft2bold1.svg"
        />
      </div>
      <div className="absolute top-[4600px] left-[1311px] w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-400 w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[-32px] left-[-32px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconamoonarrowleft2bold1.svg"
        />
      </div>
      <div className="absolute top-[1329px] left-[660px] w-[60px] h-[19px] text-base text-white">
        <div className="absolute top-[2px] left-[15px]">100.5</div>
        <img
          className="absolute top-[0px] left-[0px] w-4 h-4 overflow-hidden"
          alt=""
          src="/healthiconsrupee.svg"
        />
      </div>
      <CarCardContainer
        dimensionCode="/stars.svg"
        imageDimensionCode="/bigearwide.svg"
        dimensionCodeImageUrl="/icsharpbookmark.svg"
      />
      <CarCardContainer
        dimensionCode="/stars.svg"
        imageDimensionCode="/bigearwide.svg"
        dimensionCodeImageUrl="/icsharpbookmark.svg"
        propTop="777px"
        propLeft="934px"
      />
      <CarCardContainer
        dimensionCode="/stars1.svg"
        imageDimensionCode="/bigearwide.svg"
        dimensionCodeImageUrl="/icsharpbookmark.svg"
        propTop="1528px"
        propLeft="936px"
      />
      <CarCardContainer
        dimensionCode="/stars2.svg"
        imageDimensionCode="/bigearwide1.svg"
        dimensionCodeImageUrl="/icsharpbookmark.svg"
        propTop="777px"
        propLeft="547px"
      />
      <CarCardContainer
        dimensionCode="/stars3.svg"
        imageDimensionCode="/bigearwide1.svg"
        dimensionCodeImageUrl="/icsharpbookmark.svg"
        propTop="1528px"
        propLeft="549px"
      />
      <CarCardContainer
        dimensionCode="/stars4.svg"
        imageDimensionCode="/bigearwide.svg"
        dimensionCodeImageUrl="/icsharpbookmark1.svg"
        propTop="777px"
        propLeft="160px"
      />
      <CarCardContainer
        dimensionCode="/stars5.svg"
        imageDimensionCode="/bigearwide.svg"
        dimensionCodeImageUrl="/icsharpbookmark.svg"
        propTop="1528px"
        propLeft="162px"
      />
    </div>
  );
};

export default HomePage;
