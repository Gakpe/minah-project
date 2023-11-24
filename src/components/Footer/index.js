const Footer = () => {
    return(
        <div className="Footer w-96 h-36 pl-4 pr-6 pt-3 pb-5 bg-white bg-opacity-90 rounded-tl-lg rounded-tr-lg shadow flex-col justify-start items-center gap-5 inline-flex">
            <div className="SmallColumns  w-44 h-24 pt-4 justify-center items-center gap-8 inline-flex">
                <div className="Column w-40 flex-col justify-start items-start gap-6 inline-flex">
                    <div className="Content self-stretch h-28 flex-col justify-start items-start gap-1 flex">
                        <div className="Company self-stretch text-black text-sm font-bold font-['Inter'] leading-tight">COMPANY</div>
                        <div className="FooterLinks self-stretch h-20 flex-col justify-start items-start gap-2 flex">
                            <div className="Link self-stretch text-black text-sm font-normal font-['Inter'] leading-tight">Minah.io</div>
                            <div className="Link w-40 h-5 text-black text-sm font-normal font-['Inter'] leading-tight">Terms and Conditions</div>
                            <div className="Link self-stretch text-black text-sm font-normal font-['Inter'] leading-tight">About us</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Column h-20 flex-col justify-start items-start gap-6 flex">
                <div className="Content w-40 h-20 flex-col justify-start items-start gap-1 flex">
                    <div className="Ressources self-stretch text-black text-sm font-bold font-['Inter'] leading-tight">Ressources</div>
                    <div className="FooterLinks self-stretch h-12 flex-col justify-start items-start gap-2 flex">
                        <div className="Link self-stretch text-black text-sm font-normal font-['Inter'] leading-tight">Litepaper</div>
                        <div className="Link self-stretch text-black text-sm font-normal font-['Inter'] leading-tight">Community</div>
                    </div>
                </div>
            </div>
            <div className="Column h-28 flex-col justify-start items-start gap-6 flex">
                <div className="Content self-stretch h-28 flex-col justify-start items-start gap-1 flex">
                    <div className="Platform self-stretch text-black text-sm font-bold font-['Inter'] leading-tight">Platform</div>
                    <div className="FooterLinks self-stretch h-20 flex-col justify-start items-start gap-2 flex">
                        <div className="Link self-stretch text-black text-sm font-normal font-['Inter'] leading-tight">How does it work ?</div>
                        <div className="Link self-stretch text-black text-sm font-normal font-['Inter'] leading-tight">You have a project</div>
                        <div className="Link w-40 h-5 text-black text-sm font-normal font-['Inter'] leading-tight">You want to invest</div>
                    </div>
                </div>
            </div>
            <div className="LogoWrapper w-36 h-16 py-1 justify-start items-start inline-flex">
                <div className="Logo grow shrink basis-0 self-stretch justify-center items-center flex">
                    <div className="Copyright w-40 h-8 py-1 shadow justify-center items-center gap-8 flex">
                        <div className="Text text-center text-black text-xs font-normal font-['Inter'] leading-none">© 2023 minah.io</div>
                    </div>
                </div>
            </div>
        </div>    )
}
export default Footer;