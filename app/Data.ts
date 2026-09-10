// app/data.ts

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    label: "Riders",
    href: "#riders",
  },
  {
    label: "Vendors",
    href: "#vendors",
  },
  {
    label: "Where We Deliver",
    href: "#about",
  },
];

// =========================
// FEATURES SECTION
// =========================

export const networkCards = [
    {
        title: "Earn More",
        subtitle: "Classes",
        description:
            "Deliver on foot or bike around campus on your own schedule. Get paid weekly, straight to your account.",
        background: "#1A3C6E",
        image: "bike",
    },
    {
        title: "Behind the",
        subtitle: "scenes",
        description:
            "If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.",
        background: "#01264D",
        image: "box",
    },
];

export const networkRestaurants = [
    "African Kitchen",
    "Chef Kingsley",
    "THE BESTMAN",
    "Exceeding Grace",
    "Ekorupa-Sons Enterprise",
    "Rukamat",
];