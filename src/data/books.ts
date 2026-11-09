import coverGiraffe from "../assets/book-giraffe.jpg";
import coverCaleb from "../assets/book-caleb.jpg";

/**
 * ─────────────────────────────────────────────────────────────
 *  BOOK CONFIGURATION — EDIT ME
 * ─────────────────────────────────────────────────────────────
 *  Purchase links: leave `url` as "" to hide that retailer.
 *  If NO link has a url, the "Purchase link coming soon" state shows.
 * ─────────────────────────────────────────────────────────────
 */

export type PurchaseLink = {
  retailer: string;
  url: string; // "" = not configured yet
};

export type Book = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string[]; // paragraphs
  questions?: string[]; // highlighted lines from the story
  ages: string;
  genre: string;
  themes: string[];
  illustrator: string;
  highlights: string[];
  awards?: string[];
  cover: string;
  accent: string;
  purchaseLinks: PurchaseLink[];
};

export const books: Book[] = [
  {
    id: "can-we-get-a-giraffe",
    title: "Can We Get a Giraffe?",
    tagline: "A little girl, a big wish, and one very tall idea.",
    description:
      "A little girl longs to have a pet, and her choice is an unusual one, indeed: a GIRAFFE! But Dad has another idea…",
    longDescription: [
      "A little girl longs to have a pet and her choice is an unusual one, indeed: a GIRAFFE. Dad is surprised by this selection. He tells his daughter how impractical it is considering where they live and the room they have for her far-fetched idea. She then suggests other options:",
      "But as she continues to negotiate for a giraffe, Dad reminds her that giraffes are endangered animals, and he has another idea for his daughter. What could it be?",
    ],
    questions: ["What about a penguin?", "How do you feel about a sloth?", "Why not a sea turtle?"],
    ages: "Picture book · 40 pages",
    genre: "Picture Book",
    themes: ["Pets", "Animals", "Family", "Humor"],
    illustrator: "Nana Melkadze",
    highlights: ["Playful parent–child negotiation", "Endangered-animal awareness", "Bright, joyful illustrations", "A surprise ending"],
    cover: coverGiraffe,
    accent: "#9BD8F4",
    purchaseLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0HGC3SQ74" },
      { retailer: "Barnes & Noble", url: "" },
      { retailer: "Bookshop.org", url: "" },
    ],
  },
  {
    id: "calebs-adventures-with-granddad",
    title: "Caleb's Adventures with Granddad",
    tagline: "No one is ever too old to go on another adventure!",
    description:
      "Caleb and Granddad are best friends who love big backyard adventures, from deep-sea fishing to slaying dragons.",
    longDescription: [
      "Caleb and Granddad are best friends and love to go on big adventures together! From deep-sea fishing to slaying dragons, all they need is a backyard and their imaginations. But when Caleb starts to grow up and spend more time with his friends, Granddad wonders if they'll ever have another adventure.",
      "Filled with vivid illustrations and a heartwarming story for readers of all ages, Caleb's Adventures with Granddad reminds us that no one is ever too old to go on another adventure!",
    ],
    ages: "Picture book · readers of all ages",
    genre: "Award-Winning Picture Book",
    themes: ["Imagination", "Family", "Grandparents", "Growing Up"],
    illustrator: "Nana Melkadze",
    highlights: ["Christian's first picture book", "Heartwarming intergenerational story", "Vivid, imaginative illustrations", "Perfect for grandparents to share"],
    awards: [
      "Pinnacle Book Achievement Award: Children's Adventure",
      "The Wishing Shelf Book Awards: Silver Medal",
      "American Writing Awards: Picture Book Winner",
      "Clara J. Johns Literary Award: Best Picture Book",
    ],
    cover: coverCaleb,
    accent: "#8ED8E6",
    purchaseLinks: [
      { retailer: "Amazon", url: "https://www.amazon.com/dp/B0839QC3S1" },
      { retailer: "Barnes & Noble", url: "" },
      { retailer: "Bookshop.org", url: "" },
    ],
  },
];

/** General site settings — replace with Christian's real details. */
export const site = {
  authorName: "Christian Kueng",
  email: "hello@your-domain.com", // placeholder
  socials: [
    { label: "Instagram", url: "" },
    { label: "Facebook", url: "" },
    { label: "Amazon Author Page", url: "https://www.amazon.com/e/B00BI3VQP6" },
  ],
};
