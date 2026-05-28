import { useState } from "react";
import { supabase } from "../supabaseClient";

const instrSans = "'Instrument Sans', sans-serif";
const arapeyItalic = "'Arapey', serif";
const plusJakarta = "'Plus Jakarta Sans', sans-serif";
const wdth100 = { fontVariationSettings: "'wdth' 100" };

function CortexaCircleMark({ size }: { size?: number }) {
  return (
    <svg width={size ?? "100%"} height={size ?? "100%"} viewBox="0 0 150 150" fill="none">
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

function FlowerMark({ size }: { size?: number }) {
  return (
    <svg width={size ?? "100%"} height={size ?? "100%"} viewBox="62 0 59 59" fill="none">
      <circle cx="91.569" cy="50.589" r="8.369" fill="black" />
      <ellipse cx="91.533" cy="8.369" rx="8.443" ry="8.369" fill="black" />
      <circle cx="112.639" cy="29.429" r="8.369" fill="black" />
      <ellipse cx="70.419" cy="29.483" rx="8.369" ry="8.443" fill="black" />
      <circle cx="106.416" cy="14.516" r="8.369" fill="black" />
      <ellipse cx="76.598" cy="44.398" rx="8.443" ry="8.369" fill="black" transform="rotate(-135 76.598 44.398)" />
      <circle cx="106.456" cy="44.426" r="8.369" fill="black" />
      <ellipse cx="76.568" cy="14.608" rx="8.443" ry="8.369" fill="black" transform="rotate(-45 76.568 14.608)" />
    </svg>
  );
}

// ─── Logo marks shown below the nav on desktop ───────────────────────────────
function NavSection() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-start pt-[15px] px-[15px]">
        <div className="flex items-start pb-[10px] pt-[50px] w-full">
          <div className="flex flex-1 gap-[8px] items-start min-w-0">
            {/* Container controls size; SVGs fill 100% */}
            <div className="relative shrink-0 w-[80px] h-[80px] md:w-[150px] md:h-[150px]">
              <CortexaCircleMark />
            </div>
            <div className="relative shrink-0 w-[80px] h-[80px] md:w-[150px] md:h-[150px]">
              <FlowerMark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Fixed top navigation bar ─────────────────────────────────────────────────
function NavHeader() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 46;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const navLinks: { label: string; action: () => void }[] = [
    { label: "Waitlist", action: () => scrollTo("intro-end") },
    { label: "About",   action: () => {} },
    { label: "Contact", action: () => scrollTo("contact") },
  ];

  return (
    <div className="fixed bg-white flex items-center justify-between left-0 right-0 top-0 z-50 px-[15px]"
         style={{ borderBottom: "1px solid black" }}>
      {/* Brand name */}
      <div className="flex h-[46px] items-center shrink-0">
        <p
          className="font-normal leading-none text-[22px] md:text-[30px] text-black tracking-[-1px] md:tracking-[-1.5px]"
          style={{ fontFamily: instrSans, ...wdth100 }}
        >
          Cortexa
        </p>
      </div>

      {/* Nav links */}
      <div className="flex h-[46px] items-center gap-[20px] md:gap-[50px] shrink-0">
        {navLinks.map(({ label, action }) => (
          <button
            key={label}
            onClick={action}
            className="font-normal leading-none text-[14px] md:text-[20px] text-black tracking-[-0.5px] md:tracking-[-1px] whitespace-nowrap bg-transparent border-none p-0 cursor-pointer"
            style={{ fontFamily: instrSans, ...wdth100 }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Hero / intro section ─────────────────────────────────────────────────────
function IntroSection() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-start pt-[15px] px-[15px]">
        <div
          className="relative flex items-start pb-[60px] md:pb-[150px] pt-[10px] shrink-0 w-full"
          style={{ borderBottom: "1px solid black" }}
        >
          <div
            className="font-normal leading-[0] relative shrink-0 text-[0px] text-black whitespace-pre-wrap w-full max-w-full md:max-w-[820px] md:tracking-[-3.2px]"
            style={{ fontFamily: instrSans, ...wdth100 }}
          >
            <p className="mb-0">
              <span className="leading-[1.1] text-[36px] md:text-[64px] tracking-[-1.8px] md:tracking-[-3.2px]">Built to be </span>
              <span
                className="italic leading-[1.1] text-[40px] md:text-[72px] text-black tracking-[-2px] md:tracking-[-3.6px]"
                style={{ fontFamily: arapeyItalic }}
              >
                understood.
              </span>
            </p>
            <p className="mb-0">
              <span className="leading-[1.1] text-[36px] md:text-[64px] tracking-[-1.8px] md:tracking-[-3.2px]">Designed to be </span>
              <span
                className="italic leading-[1.1] text-[40px] md:text-[72px] text-black tracking-[-2px] md:tracking-[-3.6px]"
                style={{ fontFamily: arapeyItalic }}
              >
                remembered.
              </span>
            </p>
            <p>
              <span className="leading-[1.1] text-[36px] md:text-[64px] tracking-[-1.8px] md:tracking-[-3.2px]">Powered by </span>
              <span
                className="italic leading-[1.1] text-[40px] md:text-[72px] text-black tracking-[-2px] md:tracking-[-3.6px]"
                style={{ fontFamily: arapeyItalic }}
              >
                intelligence.
              </span>
            </p>
            <p>
              <span
                className="italic leading-[1.1] text-[16px] md:text-[27px] text-black tracking-[-0.5px] md:tracking-[-1.35px]"
                style={{ fontFamily: arapeyItalic }}
              >
                For people having Motor Neuron Diseases.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div id="intro-end" />
    </div>
  );
}

// ─── Coming soon / waitlist section ──────────────────────────────────────────
function ComingSoonSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setLoading(true);
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email: email.trim() }]);

      setLoading(false);

      if (!error || error.code === "23505") {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div id="waitlist" className="max-w-[1920px] relative shrink-0 w-full">
      <div className="flex flex-col items-start max-w-[inherit] px-[15px] py-[20px]">
        <div
          className="flex flex-col items-start relative shrink-0 w-full pb-[40px] md:pb-[80px]"
          style={{ borderBottom: "1px solid black" }}
        >
          <p
            className="font-normal leading-[1.1] text-[40px] md:text-[64px] text-black tracking-[-2px] md:tracking-[-3.2px] mb-[30px] md:mb-[60px]"
            style={{ fontFamily: instrSans, ...wdth100 }}
          >
            Coming soon
          </p>

          {/* Stack vertically on mobile, side-by-side on desktop */}
          <div className="flex flex-col md:flex-row items-start w-full gap-[24px] md:gap-[20px]">
            <div className="w-full md:shrink-0 md:w-[633px]">
              <p
                className="font-normal leading-none text-[20px] md:text-[30px] text-black tracking-[-0.4px] md:tracking-[-0.6px]"
                style={{ fontFamily: instrSans, ...wdth100, maxWidth: "325px" }}
              >
                Something extraordinary is on its way.
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-[20px] w-full">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                  <div className="pb-[8px]" style={{ borderBottom: "1px solid black" }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-transparent outline-none text-[16px] md:text-[20px] text-black tracking-[-0.5px]"
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
                    disabled={loading}
                    className="font-medium text-[14px] md:text-[16px] tracking-[-0.48px] flex items-center gap-[3px] self-start bg-transparent border-none p-0 cursor-pointer disabled:opacity-50"
                    style={{ fontFamily: instrSans, ...wdth100, color: "#767676" }}
                  >
                    <span>{loading ? "Joining..." : "Join our waitlist"}</span>
                    <span>→</span>
                  </button>
                </form>
              ) : (
                <p
                  className="font-normal text-[16px] md:text-[20px] text-black tracking-[-0.5px]"
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

// ─── Stats section ────────────────────────────────────────────────────────────
function StatsSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full">
      <div className="flex flex-col gap-[30px] items-start max-w-[inherit] pb-[50px] px-[15px]">

        {/* Stack vertically on mobile */}
        <div className="flex flex-col md:flex-row items-start w-full gap-[30px] md:gap-0">
          <div className="flex items-start w-full md:shrink-0 md:w-[633px]">
            <p
              className="font-normal leading-none text-[20px] md:text-[30px] text-black tracking-[-0.4px] md:tracking-[-0.6px]"
              style={{
                fontFamily: instrSans,
                ...wdth100,
                maxWidth: "325px",
              }}
            >
              Cortexa builds intelligent human AI systems for assistive communication.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-[40px] md:gap-[73px] items-start min-w-0 w-full">
            <div className="flex flex-col gap-[20px] items-start w-full">
              {[
                { value: "1K+", label: "Intent predictions processed in real time" },
                { value: "$200", label: "Assistive communication that doesn't cost a fortune." },
                { value: "2", label: "Individuals empowered to communicate" },
              ].map((stat, i, arr) => (
                <div key={i} className="flex flex-col gap-[20px] w-full">
                  <div
                    className="font-normal flex flex-col gap-[10px] md:gap-[17px] items-start leading-[1.1] text-black w-full"
                    style={{ fontFamily: instrSans }}
                  >
                    <p className="text-[64px] md:text-[105px] tracking-[-3px] md:tracking-[-5.25px] w-full" style={wdth100}>
                      {stat.value}
                    </p>
                    <p className="text-[14px] md:text-[16px] tracking-[-0.48px] w-full" style={wdth100}>
                      {stat.label}
                    </p>
                  </div>
                  {i < arr.length - 1 && <Divider />}
                </div>
              ))}
            </div>

            <div
              className="font-medium flex gap-[3px] items-center leading-[1.1] text-[14px] md:text-[16px] tracking-[-0.48px] whitespace-nowrap shrink-0"
              style={{ fontFamily: instrSans, color: "#767676" }}
            >
              <span style={wdth100}>About</span>
              <span style={wdth100}>→</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] md:gap-[34px] items-start w-full">
          <Divider />
          <p
            className="font-normal leading-none text-[22px] md:text-[37px] text-black tracking-[-0.7px] md:tracking-[-1.11px] w-full"
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

// ─── Footer section ───────────────────────────────────────────────────────────
function FooterSection() {
  return (
    <div id="contact" className="max-w-[1920px] relative shrink-0 w-full">
      <div className="flex flex-col gap-[60px] md:gap-[127px] items-start max-w-[inherit] pb-[15px] pt-[30px] px-[15px]">

        {/* Stack logos + contact info vertically on mobile */}
        <div className="flex flex-col md:flex-row items-start w-full gap-[40px] md:gap-0">
          <div className="flex flex-1 flex-col items-start max-w-full md:max-w-[625px] min-w-0">
            <div className="flex flex-row items-center gap-[3px]">
              <CortexaCircleMark size={59} />
              <FlowerMark size={59} />
            </div>
          </div>

          {/* Contact + Social columns — stack on mobile, row on desktop */}
          <div
            className="font-normal flex flex-col md:flex-row items-start justify-between text-black tracking-[-1px] w-full md:w-[616px] gap-[40px] md:gap-0"
            style={{ fontFamily: instrSans }}
          >
            <div className="flex flex-col gap-[40px] md:gap-[62px] items-start w-full md:w-[290px]">
              <div className="flex flex-col gap-[16px] md:gap-[30px] items-start">
                <p className="leading-none text-[16px] md:text-[20px] w-full" style={wdth100}>
                  OFFICE
                </p>
                <p className="leading-none text-[16px] md:text-[20px]" style={wdth100}>
                  3/11 Shivaji Nagar
                  <br />
                  Sector 11, New Delhi
                </p>
              </div>
              <div className="flex flex-col gap-[16px] md:gap-[30px] items-start">
                <p className="leading-none text-[16px] md:text-[20px] w-full" style={wdth100}>
                  CONTACT
                </p>
                <div className="flex flex-col gap-[10px]">
                  <p className="leading-none text-[16px] md:text-[20px] w-full" style={wdth100}>
                    (+91) 95409 99818
                  </p>
                  <a
                    href="mailto:neurobridge.founders@gmail.com"
                    className="leading-none text-[14px] md:text-[20px] text-black no-underline break-all"
                    style={{ fontFamily: instrSans, ...wdth100 }}
                  >
                    neurobridge.founders@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[16px] md:gap-[30px] items-start md:w-[89px]">
              <p className="leading-none text-[16px] md:text-[20px] w-full" style={wdth100}>
                SOCIAL
              </p>
              <div className="flex flex-col gap-[10px] items-start w-full whitespace-nowrap">
                <a
                  href="https://www.instagram.com/neurobridge.founders/"
                  className="leading-none text-[16px] md:text-[20px] text-black underline [text-underline-position:from-font] decoration-solid"
                  style={{ fontFamily: instrSans, ...wdth100 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://x.com/neurobridge_"
                  className="leading-none text-[16px] md:text-[20px] text-black underline [text-underline-position:from-font] decoration-solid"
                  style={{ fontFamily: instrSans, ...wdth100 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
                <a
                  href="https://www.linkedin.com/company/111547089/admin/dashboard/"
                  className="leading-none text-[16px] md:text-[20px] text-black underline [text-underline-position:from-font] decoration-solid"
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

        {/* Large wordmark — scale down on mobile */}
        <div className="relative shrink-0 w-full overflow-hidden">
          <p
            className="font-bold leading-none text-black w-full"
            style={{
              fontFamily: plusJakarta,
              fontSize: "clamp(2.5rem, 12vw, 9.9375rem)",
              letterSpacing: "clamp(-0.1rem, -0.5vw, -0.49688rem)",
            }}
          >
            Cortexa Labs
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── App root ─────────────────────────────────────────────────────────────────
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
