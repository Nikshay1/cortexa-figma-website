import svgPaths from "./svg-tjyt60wq3b";

function CortexaLogo() {
  return (
    <div className="absolute left-[0.37px] size-[150px] top-0" data-name="cortexa logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
        <g id="cortexa logo">
          <rect fill="var(--fill-0, white)" height="150" id="background rectangle" width="150" />
          <circle cx="75" cy="75" fill="var(--fill-0, black)" id="outer black circle" r="74.5929" />
          <circle cx="94.3655" cy="74.2828" fill="var(--fill-0, white)" id="middle skin circle" r="36.5792" />
          <circle cx="102.972" cy="74.2828" fill="var(--fill-0, black)" id="inner black circle" r="19.3655" />
          <rect fill="var(--fill-0, white)" height="14.1509" id="cutting rectangle" width="25.4717" x="124.528" y="67.9245" />
        </g>
      </svg>
    </div>
  );
}

function LeftLogo() {
  return (
    <div aria-label="Arrow" className="h-[149.864px] relative shrink-0 w-[149.866px]" data-name="Left Logo">
      <CortexaLogo />
    </div>
  );
}

function RightLogo() {
  return (
    <div className="relative shrink-0 size-[150.123px]" data-name="Right logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150.123 150.123">
        <g id="Right logo">
          <path d={svgPaths.p3d95e600} fill="var(--fill-0, black)" id="Right logo_2" />
        </g>
      </svg>
    </div>
  );
}

function LogoContain() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Logo contain">
      <LeftLogo />
      <RightLogo />
    </div>
  );
}

function NavContain() {
  return (
    <div className="content-stretch flex items-start pb-[10px] pt-[50px] relative shrink-0 w-full" data-name="Nav contain">
      <LogoContain />
    </div>
  );
}

function NavSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Nav section">
      <div className="content-stretch flex flex-col items-start pt-[15px] px-[15px] relative size-full">
        <NavContain />
      </div>
    </div>
  );
}

function IntroContent() {
  return (
    <div className="content-stretch flex items-start pb-[150px] pt-[10px] relative shrink-0 w-full" data-name="Intro content">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[0] max-w-[820px] relative shrink-0 text-[0px] text-black tracking-[-3.2px] w-[820px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">
          <span className="leading-[1.1] text-[64px]">{`Built to be `}</span>
          <span className="[word-break:break-word] font-['Arapey:Italic',sans-serif] italic leading-[1.1] text-[72px] text-black tracking-[-3.6px]">understood.</span>
          <span className="[word-break:break-word] font-['Arapey:Italic',sans-serif] italic leading-[1.1] text-[72px] tracking-[-3.6px]">{` `}</span>
        </p>
        <p className="mb-0">
          <span className="leading-[1.1] text-[64px]">{`Designed to be `}</span>
          <span className="[word-break:break-word] font-['Arapey:Italic',sans-serif] italic leading-[1.1] text-[72px] text-black tracking-[-3.6px]">remembered.</span>
        </p>
        <p>
          <span className="leading-[1.1] text-[64px]">{`Powered by `}</span>
          <span className="[word-break:break-word] font-['Arapey:Italic',sans-serif] italic leading-[1.1] text-[72px] text-black tracking-[-3.6px]">intelligence.</span>
        </p>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Intro section">
      <div className="content-stretch flex flex-col items-start pt-[15px] px-[15px] relative size-full">
        <IntroContent />
      </div>
    </div>
  );
}

function OurWorkContent() {
  return (
    <div className="content-stretch flex items-start pb-[133px] relative shrink-0 w-full" data-name="Our work content">
      <p className="[word-break:break-word] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[24px] text-black tracking-[-1.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our projects
      </p>
    </div>
  );
}

function OurWorkSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Our work section">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[15px] py-[20px] relative size-full">
        <OurWorkContent />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex items-start max-w-[633px] relative shrink-0 w-[633px]" data-name="Intro">
      <p className="[word-break:break-word] font-['Instrument_Sans:Regular',sans-serif] font-normal h-[230px] leading-none max-w-[325px] relative shrink-0 text-[30px] text-black tracking-[-0.6px] w-[325px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cortexa builds intelligent human AI systems for assistive communication.
      </p>
    </div>
  );
}

function Stat() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[17px] items-start leading-[1.1] relative shrink-0 text-black w-[335px]" data-name="Stat 1">
      <p className="relative shrink-0 text-[105px] tracking-[-5.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        1K+
      </p>
      <p className="relative shrink-0 text-[16px] tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{` Intent predictions processed in real time`}</p>
    </div>
  );
}

function Stat1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[17px] items-start leading-[1.1] relative shrink-0 text-black w-[387px]" data-name="Stat 2">
      <p className="relative shrink-0 text-[105px] tracking-[-5.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        $200
      </p>
      <p className="relative shrink-0 text-[16px] tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Assistive communication that doesn't cost a fortune.`}</p>
    </div>
  );
}

function Stat2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[17px] items-start leading-[1.1] relative shrink-0 text-black w-[309px]" data-name="Stat 3">
      <p className="relative shrink-0 text-[105px] tracking-[-5.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        2
      </p>
      <p className="relative shrink-0 text-[16px] tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Individuals empowered to communicate
      </p>
    </div>
  );
}

function Stats() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Stats">
      <Stat />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 617 1">
            <path d="M0 0.5H617" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Stat1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 617 1">
            <path d="M0 0.5H617" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Stat2 />
    </div>
  );
}

function StatsContain() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[73px] items-start min-w-px relative" data-name="Stats contain">
      <Stats />
      <div className="[word-break:break-word] content-stretch flex font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[3px] items-center leading-[1.1] relative shrink-0 text-[#767676] text-[16px] tracking-[-0.48px] whitespace-nowrap" data-name="Text link">
        <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          About
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          →
        </p>
      </div>
    </div>
  );
}

function StatsContent() {
  return (
    <div className="content-stretch flex items-start max-w-[1920px] relative shrink-0 w-full" data-name="Stats content">
      <Intro />
      <StatsContain />
    </div>
  );
}

function ConnectWithUsContent() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0 w-full" data-name="Connect with us content">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.53px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1220 1.06678">
            <path d={svgPaths.p25c6d880} id="Divider" stroke="var(--stroke-0, black)" strokeWidth="1.06667" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[37px] text-black tracking-[-1.11px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        We build in the space between thought and speech.
      </p>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.53px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1220 1.06678">
            <path d={svgPaths.p25c6d880} id="Divider" stroke="var(--stroke-0, black)" strokeWidth="1.06667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ConnectWithUsSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Connect with us section">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[15px] relative size-full">
        <ConnectWithUsContent />
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Stats section">
      <div className="content-stretch flex flex-col gap-[30px] items-start max-w-[inherit] pb-[50px] px-[15px] relative size-full">
        <StatsContent />
        <ConnectWithUsSection />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Main">
      <IntroSection />
      <OurWorkSection />
      <StatsSection />
    </div>
  );
}

function CortexaLogo1() {
  return (
    <div className="absolute left-[0.37px] size-[59px] top-[-0.29px]" data-name="cortexa logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 59">
        <g id="cortexa logo">
          <rect fill="var(--fill-0, white)" height="59" id="background rectangle" width="59" />
          <circle cx="29.5" cy="29.5001" fill="var(--fill-0, black)" id="outer black circle" r="29.3399" />
          <circle cx="37.1171" cy="29.2179" fill="var(--fill-0, white)" id="middle skin circle" r="14.3878" />
          <circle cx="40.5025" cy="29.218" fill="var(--fill-0, black)" id="inner black circle" r="7.61708" />
          <rect fill="var(--fill-0, white)" height="5.56604" id="cutting rectangle" width="10.0189" x="48.9811" y="26.7169" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div aria-label="company logo" className="col-1 ml-0 mt-[0.17px] overflow-clip relative row-1 size-[58.853px]" data-name="Layer_1">
      <CortexaLogo1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
      <Layer />
      <div className="col-1 ml-[83.2px] mt-[42.22px] relative row-1 size-[16.738px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.738 16.738">
          <circle cx="8.369" cy="8.369" fill="var(--fill-0, black)" id="Ellipse 38147" r="8.369" />
        </svg>
      </div>
      <div className="col-1 h-[16.738px] ml-[83.09px] mt-0 relative row-1 w-[16.886px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8861 16.738">
          <ellipse cx="8.44306" cy="8.369" fill="var(--fill-0, black)" id="Ellipse 38146" rx="8.44306" ry="8.369" />
        </svg>
      </div>
      <div className="col-1 flex items-center justify-center ml-[104.27px] mt-[21.06px] relative row-1 size-[16.738px]">
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16.738px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.738 16.738">
              <circle cx="8.369" cy="8.369" fill="var(--fill-0, black)" id="Ellipse 38148" r="8.369" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[16.886px] items-center justify-center ml-[62.05px] mt-[21.04px] relative row-1 w-[16.738px]">
        <div className="-rotate-90 flex-none">
          <div className="h-[16.738px] relative w-[16.886px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8861 16.738">
              <ellipse cx="8.44306" cy="8.369" fill="var(--fill-0, black)" id="Ellipse 38149" rx="8.44306" ry="8.369" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-[94.58px] mt-[2.68px] relative row-1 size-[23.671px]">
        <div className="-rotate-135 flex-none">
          <div className="relative size-[16.738px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.738 16.738">
              <circle cx="8.369" cy="8.369" fill="var(--fill-0, black)" id="Ellipse 38150" r="8.369" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-[64.71px] mt-[32.51px] relative row-1 size-[23.776px]">
        <div className="-rotate-135 flex-none">
          <div className="h-[16.738px] relative w-[16.886px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8861 16.738">
              <ellipse cx="8.44306" cy="8.369" fill="var(--fill-0, black)" id="Ellipse 38151" rx="8.44306" ry="8.369" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-[94.62px] mt-[32.59px] relative row-1 size-[23.671px]">
        <div className="-rotate-45 flex-none">
          <div className="relative size-[16.738px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.738 16.738">
              <circle cx="8.369" cy="8.369" fill="var(--fill-0, black)" id="Ellipse 38152" r="8.369" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-[64.68px] mt-[2.72px] relative row-1 size-[23.776px]">
        <div className="-rotate-45 flex-none">
          <div className="h-[16.738px] relative w-[16.886px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8861 16.738">
              <ellipse cx="8.44306" cy="8.369" fill="var(--fill-0, black)" id="Ellipse 38153" rx="8.44306" ry="8.369" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoContain1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[625px] min-w-px relative" data-name="Logo contain">
      <Logo />
    </div>
  );
}

function OfficeContain1() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[201px]" data-name="Office contain">
      <p className="leading-none relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        OFFICE
      </p>
      <a className="block leading-[0] relative shrink-0 text-[0px] w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="cursor-pointer leading-none text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          3/11 Shivaji Nagar
          <br aria-hidden="true" />
          Sector 11, New Delhi
        </p>
      </a>
    </div>
  );
}

function ContactLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[77px] items-start relative shrink-0 w-[290px]" data-name="Contact links">
      <p className="leading-none relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        (+91) 95409 99818
      </p>
      <a className="block leading-[0] relative shrink-0 text-[0px] w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="cursor-pointer leading-none text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          neurobridge.founders@gmail.com
        </p>
      </a>
    </div>
  );
}

function ContactContain() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] h-[134px] items-start relative shrink-0 w-[290px]" data-name="Contact contain">
      <p className="leading-none min-w-full relative shrink-0 text-[20px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CONTACT
      </p>
      <ContactLinks />
    </div>
  );
}

function OfficeContain() {
  return (
    <div className="content-stretch flex flex-col gap-[62px] items-start relative shrink-0 w-[290px]" data-name="Office contain">
      <OfficeContain1 />
      <ContactContain />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="Social links">
      <a className="block leading-[0] relative shrink-0 text-[0px]" href="https://www.instagram.com/figma" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-none text-[20px] underline" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
          Instagram
        </p>
      </a>
      <a className="[text-underline-position:from-font] block cursor-pointer decoration-from-font decoration-solid leading-none relative shrink-0 text-[20px] underline" href="https://x.com/neurobridge_" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        X
      </a>
      <a className="block leading-[0] relative shrink-0 text-[0px]" href="http://linkedin.com/company/figma" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-none text-[20px] underline" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
          LinkedIn
        </p>
      </a>
    </div>
  );
}

function SocialContain() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[89px]" data-name="Social contain">
      <p className="leading-none relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        SOCIAL
      </p>
      <SocialLinks />
    </div>
  );
}

function FooterText() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-start justify-between relative shrink-0 text-black tracking-[-1px] w-[616px]" data-name="Footer text">
      <OfficeContain />
      <SocialContain />
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Footer content">
      <LogoContain1 />
      <FooterText />
    </div>
  );
}

function FooterLogo() {
  return (
    <div aria-label="Arrow" className="aspect-[1248.00048828125/152.0697784423828] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer logo">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[152px] leading-none relative shrink-0 text-[159px] text-black tracking-[-7.95px] w-full">Cortexa Labs</p>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Footer section">
      <div className="content-stretch flex flex-col gap-[127px] items-start max-w-[inherit] pb-[15px] pt-[30px] px-[15px] relative size-full">
        <FooterContent />
        <FooterLogo />
      </div>
    </div>
  );
}

function LogotypeContain() {
  return (
    <div className="content-stretch flex h-[46px] items-center pb-[10px] pr-[20px] pt-[12px] relative shrink-0 w-[635px]" data-name="Logotype contain">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Instrument_Sans:Regular',sans-serif] font-normal h-[25px] leading-none relative shrink-0 text-[30px] text-black tracking-[-1.5px] w-[103px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cortexa
      </p>
    </div>
  );
}

function TextLinks() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="Text links">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end justify-end size-full">
        <div className="content-stretch flex gap-[50px] items-end justify-end pb-[10px] pl-[20px] pt-[12px] relative size-full">
          <div className="content-stretch flex items-center justify-center pb-[4px] relative shrink-0" data-name="Nav Link">
            <p className="[word-break:break-word] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-black tracking-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Work
            </p>
          </div>
          <div className="content-stretch flex items-center justify-center pb-[4px] relative shrink-0" data-name="Nav Link">
            <p className="[word-break:break-word] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-black tracking-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              About
            </p>
          </div>
          <a className="content-stretch cursor-pointer flex items-center justify-center pb-[4px] relative shrink-0" href="https://figma.com/sites" target="_blank" data-name="Nav Link">
            <p className="[word-break:break-word] font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-black text-left tracking-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Contact
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

function LinksContain() {
  return (
    <div className="content-stretch flex h-[46px] items-start justify-end max-w-[615px] relative shrink-0 w-[615px]" data-name="Links contain">
      <TextLinks />
    </div>
  );
}

function NavHeader() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[15px] right-0 top-0" data-name="Nav header">
      <LogotypeContain />
      <LinksContain />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Desktop">
      <NavSection />
      <Main />
      <FooterSection />
      <NavHeader />
    </div>
  );
}