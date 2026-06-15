const CompanySlide = ({ company }) => {
  return (
    <div
      className="flex shrink-0 flex-col items-center gap-1.5"
      style={{
        marginRight: "clamp(12px, 2vw, 26px)",
        width: "clamp(52px, 8vw, 80px)",
      }}
    >
      <div
        className="flex aspect-square items-center justify-center rounded-sm border-[0.5px] border-[rgba(216,216,216,0.62)] bg-white"
        style={{
          width: "clamp(52px, 8vw, 80px)",
          height: "clamp(52px, 8vw, 80px)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={company.src}
          alt={`${company.name} Logo`}
          loading="lazy"
          decoding="async"
          draggable={false}
          style={{
            maxWidth: "clamp(36px, 6vw, 60px)",
            maxHeight: "clamp(36px, 6vw, 60px)",
            objectFit: "contain",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <p
        className="text-center font-medium text-[#374151]"
        style={{ fontSize: "clamp(10px, 1.5vw, 14px)" }}
      >
        {company.name}
      </p>
    </div>
  );
};
export default CompanySlide;
