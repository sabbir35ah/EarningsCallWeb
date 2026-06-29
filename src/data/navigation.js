export const navLinks = [
  { label: "Calendar", href: "/calendar" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "#resources" },
  {
    label: "Our Clients",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Top Employers", href: "/top-employers", description: "Largest public companies by headcount" },
      { label: "S&P 500 Companies", href: "/sp-500", description: "Fortune 500 & S&P 500 listings" },
    ],
  },
];
