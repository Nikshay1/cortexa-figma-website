import { useState } from "react";

const instrSans = "'Instrument Sans', sans-serif";
const arapeyItalic = "'Arapey', serif";
const plusJakarta = "'Plus Jakarta Sans', sans-serif";
const wdth100 = { fontVariationSettings: "'wdth' 100" };

function CortexaCircleMark({ size = 150 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 150 150" fill="none">
      <rect fill="white" width="150" height="150" />
      <circle cx="75" cy="75" fill="black" r="74.5929" />
      <circle cx="94.3655" cy="74.2828" fill="white" r="36.5792" />
      <circle cx="102.972" cy="74.2828" fill="black" r="19.3655" />
      <rect fill="white" width="25.4717" height="14.1509" x="124.528" y="67.9245" />
    </svg>
  );
}

function Divider() {
  return <div className="w-full shrink-0" style={{ height: "1px", backgroundColor: "black" }} />;
}

function NavSection() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-start pt-[15px] px-[15px]">
        <div className="flex items-start pb-[10px] pt-[50px] w-full">
          <div className="flex flex-1 gap-[8px] items-start min-w-0">
            <div className="relative shrink-0" style={{ width: "149.866px", height: "149.864px" }}>
              <CortexaCircleMark size={150} />
            </div>
            <div className="relative shrink-0" style={{ width: "150px", height: "150px" }}>
              <FlowerMark size={150} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavHeader() {
  return (
    <div className="fixed bg-white flex items-center justify-between left-0 right-0 top-0 z-50 px-[15px]">
      <div
        className="relative flex h-[46px] items-center pb-[10px] pr-[20px] pt-[12px] shrink-0"
        style={{ width: "635px", borderBottom: "1px solid black" }}
      >
        <p
          className="font-normal h-[25px] leading-none text-[30px] text-black tracking-[-1.5px]"
          style={{ fontFamily: instrSans, ...wdth100 }}
        >
          Cortexa
        </p>
      </div>
      <div className="flex h-[46px] items-start justify-end shrink-0" style={{ width: "615px" }}>
        <div className="relative bg-white flex-1 h-full" style={{ borderBottom: "1px solid black" }}>
          <div className="flex items-end justify-end h-full">
            <div className="flex gap-[50px] items-end pb-[10px] pl-[20px] pt-[12px]">
              {["Work", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="pb-[4px] font-normal leading-none text-[20px] text-black tracking-[-1px] whitespace-nowrap no-underline"
                  style={{ fontFamily: instrSans, ...wdth100 }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-start pt-[15px] px-[15px]">
        <div
          className="relative flex items-start pb-[150px] pt-[10px] shrink-0 w-full"
          style={{ borderBottom: "1px solid black" }}
        >
          <div
            className="font-normal leading-[0] max-w-[820px] relative shrink-0 text-[0px] text-black tracking-[-3.2px] whitespace-pre-wrap"
            style={{ fontFamily: instrSans, ...wdth100, width: "820px" }}
          >
            <p className="mb-0">
              <span className="leading-[1.1] text-[64px]">Built to be </span>
              <span
                className="italic leading-[1.1] text-[72px] text-black tracking-[-3.6px]"
                style={{ fontFamily: arapeyItalic }}
              >
                understood.
              </span>
            </p>
            <p className="mb-0">
              <span className="leading-[1.1] text-[64px]">Designed to be </span>
              <span
                className="italic leading-[1.1] text-[72px] text-black tracking-[-3.6px]"
                style={{ fontFamily: arapeyItalic }}
              >
                remembered.
              </span>
            </p>
            <p>
              <span className="leading-[1.1] text-[64px]">Powered by </span>
              <span
                className="italic leading-[1.1] text-[72px] text-black tracking-[-3.6px]"
                style={{ fontFamily: arapeyItalic }}
              >
                intelligence.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComingSoonSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div className="max-w-[1920px] relative shrink-0 w-full">
      <div className="flex flex-col items-start max-w-[inherit] px-[15px] py-[20px]">
        <div
          className="flex flex-col items-start relative shrink-0 w-full pb-[80px]"
          style={{ borderBottom: "1px solid black" }}
        >
          <p
            className="font-normal leading-[1.1] text-[64px] text-black tracking-[-3.2px] whitespace-nowrap mb-[60px]"
            style={{ fontFamily: instrSans, ...wdth100 }}
          >
            Coming soon
          </p>

          <div className="flex items-start w-full gap-[20px]">
            <div className="shrink-0" style={{ maxWidth: "633px", width: "633px" }}>
              <p
                className="font-normal leading-none text-[30px] text-black tracking-[-0.6px]"
                style={{ fontFamily: instrSans, ...wdth100, maxWidth: "325px" }}
              >
                Something extraordinary is on its way.
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-[20px]">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                  <div className="pb-[8px]" style={{ borderBottom: "1px solid black" }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-transparent outline-none text-[20px] text-black tracking-[-0.5px]"
                      style={{
                        fontFamily: instrSans,
                        ...wdth100,
                        border: "none",
                        color: "black",
                      }}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="font-medium text-[16px] tracking-[-0.48px] flex items-center gap-[3px] self-start bg-transparent border-none p-0 cursor-pointer"
                    style={{ fontFamily: instrSans, ...wdth100, color: "#767676" }}
                  >
                    <span>Join our waitlist</span>
                    <span>→</span>
                  </button>
                </form>
              ) : (
                <p
                  className="font-normal text-[20px] text-black tracking-[-0.5px]"
                  style={{ fontFamily: instrSans, ...wdth100 }}
                >
                  You're on the list. We'll be in touch.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full">
      <div className="flex flex-col gap-[30px] items-start max-w-[inherit] pb-[50px] px-[15px]">
        <div className="flex items-start w-full">
          <div className="flex items-start shrink-0" style={{ maxWidth: "633px", width: "633px" }}>
            <p
              className="font-normal leading-none text-[30px] text-black tracking-[-0.6px]"
              style={{
                fontFamily: instrSans,
                ...wdth100,
                height: "230px",
                maxWidth: "325px",
                width: "325px",
              }}
            >
              Cortexa builds intelligent human AI systems for assistive communication.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-[73px] items-start min-w-0">
            <div className="flex flex-col gap-[20px] items-start w-full">
              {[
                { value: "1K+", label: "Intent predictions processed in real time", width: "335px" },
                { value: "$200", label: "Assistive communication that doesn't cost a fortune.", width: "387px" },
                { value: "2", label: "Individuals empowered to communicate", width: "309px" },
              ].map((stat, i, arr) => (
                <div key={i} className="flex flex-col gap-[20px] w-full">
                  <div
                    className="font-normal flex flex-col gap-[17px] items-start leading-[1.1] text-black"
                    style={{ fontFamily: instrSans, width: stat.width }}
                  >
                    <p className="text-[105px] tracking-[-5.25px] w-full" style={wdth100}>
                      {stat.value}
                    </p>
                    <p className="text-[16px] tracking-[-0.48px] w-full" style={wdth100}>
                      {stat.label}
                    </p>
                  </div>
                  {i < arr.length - 1 && <Divider />}
                </div>
              ))}
            </div>

            <div
              className="font-medium flex gap-[3px] items-center leading-[1.1] text-[16px] tracking-[-0.48px] whitespace-nowrap shrink-0"
              style={{ fontFamily: instrSans, color: "#767676" }}
            >
              <span style={wdth100}>About</span>
              <span style={wdth100}>→</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[34px] items-start w-full">
          <Divider />
          <p
            className="font-normal leading-none text-[37px] text-black tracking-[-1.11px] w-full"
            style={{ fontFamily: instrSans, ...wdth100 }}
          >
            We build in the space between thought and speech.
          </p>
          <Divider />
        </div>
      </div>
    </div>
  );
}

function FlowerMark({ size = 150 }: { size?: number }) {
  // viewBox derived from actual bounding box of all 8 petals:
  // x: 62.05 → 121.01  (width ≈ 59)
  // y: 0     → 58.96   (height ≈ 59)
  return (
    <svg width={size} height={size} viewBox="62 0 59 59" fill="none">
      {/* bottom — circle */}
      <circle cx="91.569" cy="50.589" r="8.369" fill="black" />
      {/* top — ellipse (wider horizontally) */}
      <ellipse cx="91.533" cy="8.369" rx="8.443" ry="8.369" fill="black" />
      {/* right — circle */}
      <circle cx="112.639" cy="29.429" r="8.369" fill="black" />
      {/* left — ellipse rotated -90° (taller vertically) */}
      <ellipse cx="70.419" cy="29.483" rx="8.369" ry="8.443" fill="black" />
      {/* top-right — circle */}
      <circle cx="106.416" cy="14.516" r="8.369" fill="black" />
      {/* bottom-left — ellipse rotated -135° */}
      <ellipse cx="76.598" cy="44.398" rx="8.443" ry="8.369" fill="black" transform="rotate(-135 76.598 44.398)" />
      {/* bottom-right — circle */}
      <circle cx="106.456" cy="44.426" r="8.369" fill="black" />
      {/* top-left — ellipse rotated -45° */}
      <ellipse cx="76.568" cy="14.608" rx="8.443" ry="8.369" fill="black" transform="rotate(-45 76.568 14.608)" />
    </svg>
  );
}

function FooterSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full">
      <div className="flex flex-col gap-[127px] items-start max-w-[inherit] pb-[15px] pt-[30px] px-[15px]">
        <div className="flex items-start w-full">
          <div className="flex flex-1 flex-col items-start max-w-[625px] min-w-0">
            <div className="flex flex-row items-center gap-[3px]">
              <CortexaCircleMark size={59} />
              <FlowerMark size={59} />
            </div>
          </div>

          <div
            className="font-normal flex items-start justify-between text-black tracking-[-1px] shrink-0"
            style={{ fontFamily: instrSans, width: "616px" }}
          >
            <div className="flex flex-col gap-[62px] items-start shrink-0" style={{ width: "290px" }}>
              <div className="flex flex-col gap-[30px] items-start" style={{ width: "201px" }}>
                <p className="leading-none text-[20px] w-full" style={wdth100}>
                  OFFICE
                </p>
                <p className="leading-none text-[20px]" style={wdth100}>
                  3/11 Shivaji Nagar
                  <br />
                  Sector 11, New Delhi
                </p>
              </div>
              <div className="flex flex-col gap-[30px] items-start" style={{ width: "290px" }}>
                <p className="leading-none text-[20px] w-full" style={wdth100}>
                  CONTACT
                </p>
                <div className="flex flex-col gap-[10px]" style={{ width: "290px" }}>
                  <p className="leading-none text-[20px] w-full" style={wdth100}>
                    (+91) 95409 99818
                  </p>
                  <a
                    href="mailto:neurobridge.founders@gmail.com"
                    className="leading-none text-[20px] text-black no-underline"
                    style={{ fontFamily: instrSans, ...wdth100 }}
                  >
                    neurobridge.founders@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[30px] items-start shrink-0" style={{ width: "89px" }}>
              <p className="leading-none text-[20px] w-full" style={wdth100}>
                SOCIAL
              </p>
              <div className="flex flex-col gap-[10px] items-start w-full whitespace-nowrap">
                {/* Replace # with your Instagram URL */}
                <a
                  href="https://www.instagram.com/neurobridge.founders/"
                  className="leading-none text-[20px] text-black underline [text-underline-position:from-font] decoration-solid"
                  style={{ fontFamily: instrSans, ...wdth100 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                {/* Replace # with your X (Twitter) URL */}
                <a
                  href="https://x.com/neurobridge_"
                  className="leading-none text-[20px] text-black underline [text-underline-position:from-font] decoration-solid"
                  style={{ fontFamily: instrSans, ...wdth100 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
                {/* Replace # with your LinkedIn URL */}
                <a
                  href="https://www.linkedin.com/company/111547089/admin/dashboard/"
                  className="leading-none text-[20px] text-black underline [text-underline-position:from-font] decoration-solid"
                  style={{ fontFamily: instrSans, ...wdth100 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative shrink-0 w-full">
          <p
            className="font-bold h-[152px] leading-none text-[159px] text-black tracking-[-7.95px] w-full"
            style={{ fontFamily: plusJakarta }}
          >
            Cortexa Labs
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white flex flex-col items-center relative w-full min-h-screen">
      <NavSection />
      <div className="flex flex-col gap-[20px] items-start w-full shrink-0">
        <IntroSection />
        <ComingSoonSection />
        <StatsSection />
      </div>
      <FooterSection />
      <NavHeader />
    </div>
  );
}
