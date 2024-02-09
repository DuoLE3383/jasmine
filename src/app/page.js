// import SplashFooter from "@/components/splash/SpalshFooter";
// import SplashBanner from "@/components/splash/SplashBanner";
// import SplashCta from "@/components/splash/SplashCta";
// import SplashFeatures from "@/components/splash/SplashFeatures";
// import SplashHeader from "@/components/splash/SplashHeader";
// import SplashHomeDemo from "@/components/splash/SplashHomeDemo";
// import SplashInnerDemo from "@/components/splash/SplashInnerDemo";
// import SplashSupport from "@/components/splash/SplashSupport";
import HomeJewellery from "@/app/home/jewellery";
export const metadata = {
	title: 'Jasmine And Co.',
  description: 'Jasmine & Co. carries a wide selection of jewelry from diamond rings to fashion jewelry such as braceletts and necklaces. Explore our jewelry online and make purchase with high qualities jewelry at affordable prices. You will be amazed and want to come back for more!',
}

const HomeOne = () => {
  return ( 
    <>
	{/* <SplashHeader /> */}
	{/* <main className="main-wrapper pv-main-wrapper"> */}
	<HomeJewellery/>
		{/* <SplashBanner />
		<SplashHomeDemo />
		<SplashInnerDemo />
		<SplashFeatures />
		<SplashSupport />
		<SplashCta /> */}
	{/* </main> */}
	{/* <SplashFooter /> */}
    </>
   );
}
 
export default HomeOne;
