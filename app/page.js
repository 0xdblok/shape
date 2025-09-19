import Image from "next/image";

export default function Home() {
  return (
    <div class="text-white text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-satoshi_variable">
      <div class="bg-[linear-gradient(rgb(16,16,22),rgb(8,8,11))] box-border caret-transparent flex justify-center min-h-[1000px] overflow-x-hidden overflow-y-auto w-screen py-0 md:py-[50px]">
        <div class="items-center box-border caret-transparent flex flex-col max-w-[1200px] w-full px-5 md:px-[50px]">
          <div class="items-center box-border caret-transparent hidden grid-flow-col grid-cols-[1fr_3fr_1fr] min-h-0 min-w-0 w-full md:grid md:min-h-[auto] md:min-w-[auto]">
            <a
              href="/"
              class="box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
            >
              <div class="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
                <img
                  src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/logo.DJnDsPC3.svg"
                  alt="Lighter Logo"
                  class="aspect-[auto_22_/_40] box-border caret-transparent max-w-full min-h-0 min-w-0 w-[22px] md:min-h-[auto] md:min-w-[auto]"
                />
                <p class="text-2xl box-border caret-transparent leading-8 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                  Shaper
                </p>
              </div>
            </a>
            <div class="items-center bg-white/10 box-border caret-transparent gap-x-[normal] flex justify-center justify-self-center min-h-0 min-w-0 gap-y-[normal] border p-2 rounded-full border-solid border-white/10 md:gap-x-[72px] md:min-h-[auto] md:min-w-[auto] md:gap-y-[72px]">
              <astro-island class="box-border caret-transparent contents">
                <button class="text-gray-400 bg-transparent caret-transparent block min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 text-center border px-4 py-2 rounded-full border-solid border-transparent md:min-h-[auto] md:min-w-[auto] hover:bg-white/10 hover:border-white/10">
                  <div class="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
                    Resources
                    <div
                      role="button"
                      class="items-center box-border caret-transparent flex h-5 min-h-0 min-w-0 w-2.5 md:min-h-[auto] md:min-w-[auto]"
                    >
                      <img
                        src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/small-arrow.BHW28frE.svg"
                        class="box-border caret-transparent max-w-full min-h-0 min-w-0 mt-0.5 md:min-h-[auto] md:min-w-[auto]"
                      />
                    </div>
                  </div>
                </button>
              </astro-island>
              <a
                href="/faq"
                class="text-gray-400 box-border caret-transparent block min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 px-4 md:min-h-[auto] md:min-w-[auto] hover:text-white"
              >
                FAQ
              </a>
              <astro-island class="box-border caret-transparent contents">
                <button class="text-gray-400 bg-transparent caret-transparent block min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 text-center border px-4 py-2 rounded-full border-solid border-transparent md:min-h-[auto] md:min-w-[auto] hover:bg-white/10 hover:border-white/10">
                  <div class="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
                    Community
                    <div
                      role="button"
                      class="items-center box-border caret-transparent flex h-5 min-h-0 min-w-0 w-2.5 md:min-h-[auto] md:min-w-[auto]"
                    >
                      <img
                        src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/small-arrow.BHW28frE.svg"
                        class="box-border caret-transparent max-w-full min-h-0 min-w-0 mt-0.5 md:min-h-[auto] md:min-w-[auto]"
                      />
                    </div>
                  </div>
                </button>
              </astro-island>
            </div>
            <a
              href=""
              class="font-medium content-center bg-[linear-gradient(rgb(255,255,255),rgb(250,250,250))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(255,255,255,0)_0px_23px_6px_0px,rgba(255,255,255,0.01)_0px_15px_6px_0px,rgba(255,255,255,0.05)_0px_8px_5px_0px,rgba(255,255,255,0.09)_0px_4px_4px_0px,rgba(255,255,255,0.1)_0px_1px_2px_0px] box-border caret-transparent inline h-10 justify-self-end min-h-0 min-w-0 text-center text-nowrap w-fit border px-4 rounded-full border-solid border-transparent md:block md:min-h-[auto] md:min-w-[auto] hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(194,208,255,0)_0px_35px_10px_0px,rgba(194,208,255,0.01)_0px_23px_9px_0px,rgba(194,208,255,0.04)_0px_13px_8px_0px,rgba(194,208,255,0.06)_0px_6px_6px_0px,rgba(194,208,255,0.07)_0px_1px_3px_0px] hover:border-white/40"
            >
              <p class="text-transparent bg-clip-text bg-[linear-gradient(90deg,rgb(5,5,5),rgb(21,21,21))] box-border text-nowrap">
                Coming soon
              </p>
            </a>
          </div>
          <astro-island class="box-border caret-transparent contents">
            <div class="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pt-5 md:hidden md:min-h-0 md:min-w-0">
              <a
                href="/"
                class="box-border caret-transparent block min-h-[auto] min-w-[auto] md:inline md:min-h-0 md:min-w-0"
              >
                <img
                  src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/logo.DJnDsPC3.svg"
                  alt="Logo"
                  class="aspect-[auto_14_/_26] box-border caret-transparent max-w-full w-3.5"
                />
              </a>
              <button
                type="button"
                class="bg-transparent caret-transparent gap-x-0.5 flex flex-col h-3 min-h-[auto] min-w-[auto] outline-transparent outline-offset-2 outline outline-2 gap-y-0.5 text-center w-5 p-0 md:min-h-0 md:min-w-0"
              >
                <div class="bg-white box-border caret-transparent h-0.5 min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0"></div>
                <div class="bg-white box-border caret-transparent h-0.5 min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0"></div>
                <div class="bg-white box-border caret-transparent h-0.5 min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0"></div>
              </button>
            </div>
          </astro-island>
          <img
            src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/heroLight.xUmJDoSN.svg"
            alt="Hero Light"
            class="absolute box-border caret-transparent blur max-w-full mix-blend-color-dodge top-[-50px] z-[9999] left-0 md:blur-2xl"
          />
          <div class="items-center box-border caret-transparent gap-x-[50px] flex flex-col gap-y-[50px] w-full mt-10 md:gap-x-[100px] md:gap-y-[100px] md:mt-[100px]">
            <div class="items-center box-border caret-transparent gap-x-[30px] flex flex-col gap-y-[30px] text-center w-full">
              <div class="box-border caret-transparent gap-x-8 flex flex-col gap-y-8">
                <p class="text-2xl box-border caret-transparent leading-[30px] max-w-none md:text-5xl md:leading-[52.8px] md:max-w-[720px]">
                  Trade perpetuals with unmatched efficiency and fairness.
                </p>
                <div class="items-center box-border caret-transparent gap-x-12 flex flex-col max-w-none gap-y-12 md:max-w-[720px]">
                  <p class="text-white/60 text-sm font-light box-border caret-transparent leading-5 md:text-white/80 md:text-xl md:leading-7">
                    Experience the next generation of trading with Shaper, where
                    every operation is cryptographically proven to be fair and
                    correct. Don’t trust—verify!
                  </p>
                  <a
                    href=""
                    class="font-medium bg-[linear-gradient(319deg,rgb(18,20,33)_23.33%,rgb(4,5,18)_76.67%)] bg-origin-border shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(255,255,255,0.05)_0px_-2px_20px_0px_inset,rgba(0,0,0,0)_0px_69px_19px_0px,rgba(0,0,0,0.03)_0px_44px_18px_0px,rgba(0,0,0,0.1)_0px_25px_15px_0px,rgba(0,0,0,0.17)_0px_11px_11px_0px,rgba(0,0,0,0.2)_0px_3px_6px_0px] box-border caret-transparent block text-nowrap w-full px-12 py-4 rounded-full border-2 border-solid border-white/10 md:w-fit hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(72,78,112,0)_0px_30px_8px_0px,rgba(72,78,112,0.02)_0px_19px_8px_0px,rgba(72,78,112,0.06)_0px_11px_6px_0px,rgba(72,78,112,0.1)_0px_5px_5px_0px,rgba(72,78,112,0.12)_0px_1px_3px_0px]"
                  >
                    Coming soon
                  </a>
                </div>
              </div>
            </div>
            <img
              src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/appScreenshot.Dfm9zJZZ.png"
              class="box-border caret-transparent max-w-full w-full rounded-2xl border-2 border-solid border-white/10"
            />
            <p class="text-white/80 text-base font-normal box-border caret-transparent leading-6 max-w-[600px] text-center md:text-2xl md:font-medium md:leading-8">
              Our mission is to revolutionize trading by building provably fair,
              secure, and scalable infrastructure for finance.
            </p>
            <div class="box-border caret-transparent gap-x-10 flex flex-col justify-normal gap-y-10 px-5 md:gap-x-[100px] md:justify-center md:gap-y-[100px]">
              <div class="items-center box-border caret-transparent gap-x-5 flex flex-col gap-y-5 md:gap-x-[50px] md:gap-y-[50px]">
                <p class="text-white/50 text-sm box-border caret-transparent leading-5">
                  INVESTORS
                </p>
                <div class="box-border caret-transparent gap-x-6 flex flex-wrap justify-center gap-y-6 md:gap-x-[50px] md:gap-y-[50px]">
                  <div class="items-center box-border caret-transparent flex h-5 justify-center w-[100px] md:h-[50px] md:w-[280px]">
                    <a
                      href="https://a16z.com/"
                      class="box-border caret-transparent block"
                    >
                      <img
                        src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/andreessenhorowitz.DLUStz2v.svg"
                        alt="Andreessen Horowitz"
                        class="box-border caret-transparent max-w-full"
                      />
                    </a>
                  </div>
                  <div class="items-center box-border caret-transparent flex h-5 justify-center w-[100px] md:h-[50px] md:w-[280px]">
                    <a
                      href="https://lsvp.com/"
                      class="box-border caret-transparent block"
                    >
                      <img
                        src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/lightspeed.DG0UaUiD.svg"
                        alt="Lightspeed"
                        class="box-border caret-transparent max-w-full"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="items-center box-border caret-transparent gap-x-5 flex flex-col gap-y-5 md:gap-x-[50px] md:gap-y-[50px]">
                <p class="text-white/50 text-sm box-border caret-transparent leading-5">
                  AUDITED BY
                </p>
                <div class="box-border caret-transparent gap-x-[50px] flex flex-col gap-y-[50px] md:flex-row">
                  <div class="box-border caret-transparent h-5 w-[100px] md:h-[50px] md:w-[280px]">
                    <img
                      src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/zksecurity.AiHiY7vV.svg"
                      alt="ZK Security"
                      class="box-border caret-transparent block max-w-full md:hidden"
                    />
                    <img
                      src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/zksecurity.AiHiY7vV.svg"
                      alt="ZK Security"
                      class="box-border caret-transparent hidden max-w-full md:block"
                    />
                  </div>
                  <div class="box-border caret-transparent h-5 w-[100px] md:h-[50px] md:w-[280px]">
                    <img
                      src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/nethermind.j3w-peko.svg"
                      alt="Nethermind"
                      class="box-border caret-transparent block max-w-full md:hidden"
                    />
                    <img
                      src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/nethermind.CfwrNNqO.svg"
                      alt="Nethermind"
                      class="box-border caret-transparent hidden max-w-full md:block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/expensiveLogo.BN1BDl-v.svg"
              alt="Logo"
              class="box-border caret-transparent h-[200px] max-w-full w-[110px] md:h-[250px] md:w-[138px]"
            />
            <div class="font-light items-center box-border caret-transparent gap-x-16 flex flex-col gap-y-16 w-full">
              <div class="box-border caret-transparent hidden grid-cols-[repeat(4,minmax(0px,1fr))] min-h-0 min-w-0 gap-y-4 w-full md:grid md:min-h-[auto] md:min-w-[auto]">
                <a
                  href=""
                  class="box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
                >
                  Documentation
                </a>
                <a
                  href=""
                  class="box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
                >
                  Whitepaper
                </a>
                <a
                  href=""
                  class="box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
                >
                  Shaper Testnet
                </a>
                <div class="items-center box-border caret-transparent gap-x-8 flex justify-end min-h-0 min-w-0 gap-y-8 md:min-h-[auto] md:min-w-[auto]">
                  <a
                    href=""
                    class="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                  >
                    <img
                      src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/icon-1.svg"
                      alt="Icon"
                      class="text-gray-400 box-border caret-transparent h-6 w-6"
                    />
                  </a>
                  <a
                    href=""
                    class="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                  >
                    <img
                      src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/icon-2.svg"
                      alt="Icon"
                      class="text-gray-400 box-border caret-transparent h-6 w-6"
                    />
                  </a>
                  <a
                    href=""
                    class="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                  >
                    <img
                      src="https://c.animaapp.com/mfqxjkc9z33UY5/assets/icon-3.svg"
                      alt="Icon"
                      class="text-gray-400 box-border caret-transparent h-6 w-6"
                    />
                  </a>
                </div>
                <a
                  href=""
                  class="box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
                >
                  Status Page
                </a>
                <a
                  href="/terms"
                  class="box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
                >
                  Terms of Service
                </a>
                <div class="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
