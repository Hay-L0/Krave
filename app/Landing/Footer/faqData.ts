export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: 1,
    question: "How fast is delivery?",
    answer:
      "Most campus deliveries arrive in 15–25 minutes directly to your hostel, faculty building, or designated pickup point.",
  },
  {
    id: 2,
    question: "How do I pay for my order?",
    answer:
      "We support instant debit/credit card payments, bank transfers, and student campus wallet accounts via our secure in-app checkout.",
  },
  {
    id: 3,
    question: "Can I order if I'm not on campus right now?",
    answer:
      "Krave primarily serves on-campus hostels and departments, but we also deliver to select verified student lodges right outside the campus gates.",
  },
  {
    id: 4,
    question: "How do I become a courier on Krave?",
    answer:
      "Download the Krave Rider app or tap 'Apply For a Ride' below. You only need a student ID, a bicycle or scooter, and a few minutes to complete onboarding.",
  },
  {
    id: 5,
    question: "What if my order arrives wrong or late?",
    answer:
      "You can report any issue directly in the app under 'Help' within 2 hours of delivery for an instant replacement, voucher, or refund.",
  },
  {
    id: 6,
    question: "How do riders get paid?",
    answer:
      "Riders are paid per completed delivery with 100% of customer tips. Earnings are credited directly to your bank account on a weekly basis.",
  },
];
