import Button from "@/components/Button";

export default function ButtonsPage() {
  return (
    <div className="min-h-screen font-archivo">

      {/* Light background */}
      <section className="bg-gs-paper px-12 py-20">
        <p className="font-archivo text-[10px] font-bold uppercase tracking-[.3em] text-gs-grey-3 mb-10">
          Theme: light
        </p>
        <div className="flex flex-col gap-16">

          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gs-grey-3">Primary</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" theme="light" href="#">Book the Studio</Button>
              <Button variant="primary" theme="light" href="#">Open the Logbook</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gs-grey-3">Secondary</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="secondary" theme="light" href="#">Read the Manifesto</Button>
              <Button variant="secondary" theme="light" href="#">View Services</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gs-grey-3">Tertiary</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="tertiary" theme="light" href="#">Learn more</Button>
              <Button variant="tertiary" theme="light" href="#">See all work</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gs-grey-3">Submit (form)</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" theme="light" type="submit">Subscribe →</Button>
              <Button variant="secondary" theme="light" type="submit">Send enquiry</Button>
            </div>
          </div>

        </div>
      </section>

      {/* Dark background */}
      <section className="bg-gs-ink px-12 py-20">
        <p className="font-archivo text-[10px] font-bold uppercase tracking-[.3em] text-white/40 mb-10">
          Theme: dark
        </p>
        <div className="flex flex-col gap-16">

          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Primary</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" theme="dark" href="#">Book the Studio</Button>
              <Button variant="primary" theme="dark" href="#">Open the Logbook</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Secondary</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="secondary" theme="dark" href="#">Read the Manifesto</Button>
              <Button variant="secondary" theme="dark" href="#">View Services</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Tertiary</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="tertiary" theme="dark" href="#">Learn more</Button>
              <Button variant="tertiary" theme="dark" href="#">See all work</Button>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing context: popular card is opposite */}
      <section className="bg-gs-ink px-12 py-20 border-t border-white/10">
        <p className="font-archivo text-[10px] font-bold uppercase tracking-[.3em] text-white/40 mb-10">
          Pricing context — popular card is opposite
        </p>
        <div className="grid grid-cols-3 gap-px border border-white/20 max-w-2xl">
          <div className="bg-transparent p-8 flex flex-col gap-4">
            <p className="text-white font-bold text-[13px] uppercase tracking-wider">Essentials</p>
            <Button variant="secondary" theme="dark" href="#" className="w-full justify-center">Get started</Button>
          </div>
          <div className="bg-gs-paper p-8 flex flex-col gap-4">
            <p className="text-gs-ink font-bold text-[13px] uppercase tracking-wider">Design + Consult</p>
            <Button variant="primary" theme="light" href="#" className="w-full justify-center">Book now</Button>
          </div>
          <div className="bg-transparent p-8 flex flex-col gap-4">
            <p className="text-white font-bold text-[13px] uppercase tracking-wider">Full Fit-Out</p>
            <Button variant="secondary" theme="dark" href="#" className="w-full justify-center">Get started</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
