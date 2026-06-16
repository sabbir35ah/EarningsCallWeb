import { Container } from "../layout/container";

const clients = [
  { id: "1", name: "MindCrop" },
  { id: "2", name: "MindCrop" },
  { id: "3", name: "MindCrop" },
  { id: "4", name: "MindCrop" },
  { id: "5", name: "MindCrop" },
  { id: "6", name: "MindCrop" },
  { id: "7", name: "MindCrop" },
  { id: "8", name: "MindCrop" },
];

function ClientItem({ client }) {
  return (
    <div
      className="flex shrink-0 items-center gap-1.5 opacity-70 max-[575px]:gap-1"
      style={{ marginRight: "clamp(20px, 5vw, 48px)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/favicon-icon.svg"
        alt=""
        aria-hidden="true"
        className="h-[clamp(20px,4vw,30px)] w-[clamp(20px,4vw,30px)]"
      />
      <span
        className="whitespace-nowrap font-headline font-normal leading-6.25 text-black"
        style={{ fontSize: "clamp(12px, 2.5vw, 18px)" }}
      >
        {client.name}
      </span>
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section className="overflow-hidden bg-[#f2f2f2] py-12">
      <Container>
        <p
          className="mb-8 text-center font-headline font-normal text-brand"
          style={{
            fontSize: "clamp(16px, 2.5vw, 24px)",
            lineHeight: "clamp(24px, 3.5vw, 32px)",
            letterSpacing: "-0.3px",
          }}
        >
          Trusted by developers, founders &amp; investors around the world
        </p>
      </Container>

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
          style={{ background: "linear-gradient(to right, #f2f2f2, transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
          style={{ background: "linear-gradient(to left, #f2f2f2, transparent)" }}
        />

        <div className="flex w-max animate-marquee items-center">
          <div className="flex shrink-0 items-center">
            {clients.map((client) => (
              <ClientItem key={`a-${client.id}`} client={client} />
            ))}
          </div>
          <div className="flex shrink-0 items-center" aria-hidden="true">
            {clients.map((client) => (
              <ClientItem key={`b-${client.id}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
