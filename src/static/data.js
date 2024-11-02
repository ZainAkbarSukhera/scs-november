import skill_icon from "../assets/skill_icon.png";
import experience_icon from "../assets/experience_icon.png";
import location_icon from "../assets/location_icon.png";
import budget_icon from "../assets/budget_icon.png";
import availability_icon from "../assets/availability_icon.png";
import status_icon from "../assets/status_icon.png";
import projecttype_icon from "../assets/project_icon.png";
import eligibility_icon from "../assets/eligibility_icon.png";
import prize_icon from "../assets/prize_icon.png";
import deadline_icon from "../assets/deadline_icon.png";
import hostorganization_icon from "../assets/hostorganization_icon.png";
import skill_icon1 from "../assets/skill_icon.png";
import skilllevel_icon from "../assets/skilllevel_icon.png";
import workshoptype_icon from "../assets/workshoptype_icon.png";
import duration_icon from "../assets/duration_icon.png";
import language_icon from "../assets/language_icon.png";
import pricerange_icon from "../assets/pricerange_icon.png";
import category_icon from "../assets/category_icon.png";
import format_icon from "../assets/format_icon.png";
import size_icon from "../assets/size_icon.png";
import certification_icon from "../assets/certification_icon.png";
import style_icon from "../assets/style_icon.png";
import theme_icon from "../assets/theme_icon.png";
import yearofcreation_icon from "../assets/yearofcreation_icon.png";
import intermediaries_icon from "../assets/intermediaries_icon.png";
import framingoption_icon from "../assets/framingoption_icon.png";
import shipping_icon from "../assets/shipping_icon.png";
import edition_icon from "../assets/edition_icon.png";
import rarity_icon from "../assets/rarity_icon.png";
import licensing_icon from "../assets/licensing_icon.png";
import badge_icon from "../assets/badges_icon.png";
import achievement_icon from "../assets/achievement_icon.png";
import digitaltools_icon from "../assets/digitaltools_icon.png";
import education_icon from "../assets/education_icon.png";
import exhibition_icon from "../assets/exhibition_icon.png";
import signature_icon from "../assets/signature_icon.png";
import artworksBought_icon from '../assets/artworkBought.png';
import artworksResold_icon from '../assets/artworkResold.png';
import artworksSupported_icon from '../assets/artistSupportedIcon.png';
import totalFinancialContribution_icon from '../assets/financial contribution.png';

export const ConnectSideFilters = [
  {
    id: "skills",
    name: "SKILLS",
    img: skill_icon,
    subCategories: [
      {
        categoryName: "CALLIGRAPHY",
        name: "ARABIC CALLIGRAPHY STYLES",
        options: [
          { value: "naskh", label: "Naskh", checked: false },
          { value: "thuluth", label: "Thuluth", checked: false },
          { value: "diwani", label: "Diwani", checked: false },
          { value: "kufi", label: "Kufi", checked: false },
          { value: "ruqah", label: "Ruq'ah", checked: false },
          { value: "farisi", label: "Farisi (Persian)", checked: false },
          { value: "maghrebi", label: "Maghrebi", checked: false },
        ],
      },
      {
        name: "WESTERN CALLIGRAPHY STYLES",
        options: [
          { value: "italic", label: "Italic", checked: false },
          { value: "gothic", label: "Gothic", checked: false },
          { value: "copperplate", label: "Copperplate", checked: false },
          { value: "uncial", label: "Uncial", checked: false },
          { value: "roman-capitals", label: "Roman Capitals", checked: false },
        ],
      },
      {
        categoryName: "DRAWING & ILLUSTRATION",
        name: "DRAWING",
        options: [
          {
            value: "realistic-drawing",
            label: "Realistic Drawing",
            checked: false,
          },
          {
            value: "portrait-drawing",
            label: "Portrait Drawing",
            checked: false,
          },
          {
            value: "character-design",
            label: "Character Design",
            checked: false,
          },
          {
            value: "environmental-drawing",
            label: "Environmental Drawing",
            checked: false,
          },
          {
            value: "still-life-drawing",
            label: "Still Life Drawing",
            checked: false,
          },
          {
            value: "gesture-drawing",
            label: "Gesture Drawing",
            checked: false,
          },
          {
            value: "perspective-drawing",
            label: "Perspective Drawing",
            checked: false,
          },
          { value: "line-drawing", label: "Line Drawing", checked: false },
        ],
      },
      {
        name: "ILLUSTRATION",
        options: [
          {
            value: "digital-illustration",
            label: "Digital Illustration",
            checked: false,
          },
          {
            value: "vector-illustration",
            label: "Vector Illustration",
            checked: false,
          },
          {
            value: "editorial-illustration",
            label: "Editorial Illustration",
            checked: false,
          },
          {
            value: "fashion-illustration",
            label: "Fashion Illustration",
            checked: false,
          },
          {
            value: "scientific-illustration",
            label: "Scientific Illustration",
            checked: false,
          },
          {
            value: "manga-anime-illustration",
            label: "Manga/Anime Illustration",
            checked: false,
          },
        ],
      },
    ],
  },
  {
     id: "experience",
    name: "EXPERIENCE",
    img: experience_icon,
    options: [
      { value: "beginner", label: "Beginner (0-2 years)", checked: false },
      {
        value: "intermediate",
        label: "Intermediate (3-5 years)",
        checked: false,
      },
      { value: "advanced", label: "Advanced (6-10 years)", checked: false },
      {
        value: "professional",
        label: "Professional (11+ years)",
        checked: false,
      },
    ],
  },
  {
    id: "location",
    name: "LOCATION",
    img: location_icon,
    options: [
      { value: "riyadh", label: "Riyadh", checked: false },
      { value: "jeddah", label: "Jeddah", checked: false },
      { value: "makkah", label: "Makkah", checked: false },
      { value: "madina", label: "Madina", checked: false },
      { value: "khobar", label: "Khobar", checked: false },
      { value: "dammam", label: "Dammam", checked: false },
      { value: "tabuk", label: "Tabuk", checked: false },
      { value: "taif", label: "Ta'if", checked: false },
      { value: "abha", label: "Abha", checked: false },
      { value: "khamis-mushait", label: "Khamis Mushait", checked: false },
      { value: "buraidah", label: "Buraidah", checked: false },
      { value: "hail", label: "Hail", checked: false },
    ],
  },
  {
    id: "budget",
    name: "BUDGET",
    img: budget_icon,
    options: [
      { value: "free", label: "Free", checked: false },
      { value: "under-sar-1000", label: "Under SAR 1,000 ", checked: false },
      {
        value: "sar-1000-5000",
        label: "SAR 1,000 - SAR 5,000",
        checked: false,
      },
      {
        value: "sar-5000-10000",
        label: "SAR 5,000  - SAR 10,000 ",
        checked: false,
      },
      { value: "custom-budget", label: "Custom Budget", checked: false },
    ],
  },
  {
    id: "availability",
    name: "AVAILABILITY",
    img: availability_icon,
    options: [
      {
        value: "immediately-available",
        label: "Immediately Available",
        checked: false,
      },
      {
        value: "available-within-1-2-weeks",
        label: "Available within 1-2 weeks",
        checked: false,
      },
      {
        value: "available-within-1-month",
        label: "Available within 1 month",
        checked: false,
      },
      { value: "part-time", label: "Part-Time", checked: false },
      { value: "full-time", label: "Full-Time", checked: false },
    ],
  },
];

export const BidSideFilters = [
  {
    id: "status",
    name: "STATUS",
    img: status_icon,
    options: [
      { value: "ongoing", label: "On-going", checked: false },
      {
        value: "completed",
        label: "Completed",
        checked: false,
      },
    ],
  },
  {
    id: "projectType",
    name: "PROJECT TYPE",
    img: projecttype_icon,
    options: [
      { value: "art-installation", label: "Art Installation", checked: false },
      { value: "competition", label: "Competition", checked: false },
      { value: "exhibition", label: "Exhibition", checked: false },
      { value: "exploration", label: "Exploration", checked: false },
      { value: "initiative", label: "Initiative", checked: false },
      { value: "program", label: "Program", checked: false },
      { value: "residency", label: "Residency", checked: false },
    ],
  },
  {
    id: "eligibility",
    name: "ELIGIBILITY",
    img: eligibility_icon,
    options: [
      { value: "open-to-all", label: "Open to All", checked: false },
      {
        value: "saudi-nationals-only",
        label: "Saudi Nationals only",
        checked: false,
      },
      {
        value: "international-artists",
        label: "International Artists",
        checked: false,
      },
      {
        value: "emerging-artists",
        label: "Emerging Artists",
        checked: false,
      },
      {
        value: "established-artists",
        label: "Established Artists",
        checked: false,
      },

      {
        value: "students",
        label: "Students",
        checked: false,
      },

      {
        value: "age-specific",
        label: "Age-Specific (over 18)",
        checked: false,
      },
    ],
  },
  {
    id: "location",
    name: "LOCATION",
    img: location_icon,
    options: [
      { value: "riyadh", label: "Riyadh", checked: false },
      { value: "jeddah", label: "Jeddah", checked: false },
      { value: "makkah", label: "Makkah", checked: false },
      { value: "madina", label: "Madina", checked: false },
      { value: "khobar", label: "Khobar", checked: false },
      { value: "dammam", label: "Dammam", checked: false },
      { value: "tabuk", label: "Tabuk", checked: false },
      { value: "taif", label: "Ta'if", checked: false },
      { value: "abha", label: "Abha", checked: false },
      { value: "khamis-mushait", label: "Khamis Mushait", checked: false },
      { value: "buraidah", label: "Buraidah", checked: false },
      { value: "hail", label: "Hail", checked: false },
    ],
  },
  {
    id: "prize",
    name: "PRIZE",
    img: prize_icon,
    options: [
      { value: "under-sar-10000", label: "Under SAR 10,000 ", checked: false },
      {
        value: "sar-10000-50000",
        label: "SAR 10,000 - SAR 50,000",
        checked: false,
      },
      {
        value: "sar-50000-100000",
        label: "SAR 50,000 - SAR 100,000",
        checked: false,
      },
      {
        value: "above-sar-100,000",
        label: "Above SAR 100,000",
        checked: false,
      },
      {
        value: "non-monetary-exposure",
        label: "Non-Monetary (Exposure)",
        checked: false,
      },
      {
        value: "non-monetary-collaboration",
        label: "Non-Monetary (Collaboration)",
        checked: false,
      },
    ],
  },
  {
    id: "deadline",
    name: "DEADLINE",
    img: deadline_icon,
    options: [
      { value: "within-1-week", label: "Within 1 Week", checked: false },
      { value: "this-month", label: "This Month", checked: false },
      {
        value: "next-3-months",
        label: "Next 3 Months",
        checked: false,
      },
      {
        value: "later-this-year",
        label: "Later This Year",
        checked: false,
      },
      {
        value: "no-deadline",
        label: "No Deadline",
        checked: false,
      },
    ],
  },
  {
    id: "hostOrganization",
    name: "HOST ORGANIZATION",
    img: hostorganization_icon,
    options: [
      { value: "government", label: "Government", checked: false },
      { value: "private-sector", label: "Private Sector", checked: false },
      {
        value: "non-profit-organisation",
        label: "Non-Profit Organisation",
        checked: false,
      },
      {
        value: "art-intermediaries",
        label: "Art Intermediaries",
        checked: false,
      },
      {
        value: "educational-institutions",
        label: "Educational Institutions",
        checked: false,
      },

      {
        value: "cultural-centers",
        label: "Cultural Centers",
        checked: false,
      },
    ],
  },
];

export const MarketSideFilters = [
  {
    id: "categories",
    name: "CATEGORIES",
    img: category_icon,
    options: [
      { value: "calligraphy", label: "Calligraphy", checked: false },
      {
        value: "drawing-illustration",
        label: "Drawing & Illustration",
        checked: false,
      },
      { value: "graphics", label: "Graphics", checked: false },
      { value: "mixed-media", label: "Mixed Media", checked: false },
      { value: "painting", label: "Painting", checked: false },
      { value: "photography", label: "Photography", checked: false },
      { value: "printmaking", label: "Printmaking", checked: false },
      { value: "sculpture", label: "Sculpture", checked: false },
    ],
  },
  {
    id: "format",
    name: "FORMAT",
    img: format_icon,
    options: [
      {
        value: "digital-print",
        label: "Digital Print on Archival Paper",
        checked: false,
      },
      { value: "ink-paper", label: "Ink on Paper", checked: false },
      {
        value: "mixed-media-canvas",
        label: "Mixed Media on Canvas",
        checked: false,
      },
      {
        value: "engraving-wood-metal",
        label: "Engraving on Wood or Metal",
        checked: false,
      },
      { value: "oil-canvas", label: "Oil on Canvas", checked: false },
      { value: "acrylic-canvas", label: "Acrylic on Canvas", checked: false },
      {
        value: "watercolour-paper",
        label: "Watercolour on Paper",
        checked: false,
      },
      {
        value: "freestanding-sculpture",
        label: "Freestanding Sculptures",
        checked: false,
      },
      {
        value: "metal-sculpture",
        label: "Metal Work Sculptures",
        checked: false,
      },
      { value: "3d-printed", label: "3D Printed", checked: false },
      { value: "assemblage", label: "Mixed Media Assemblage", checked: false },
      { value: "c-prints", label: "C-Prints", checked: false },
      {
        value: "aluminium-mounted",
        label: "Aluminium Mounted Prints",
        checked: false,
      },
      {
        value: "framed-photographs",
        label: "Framed Photographs",
        checked: false,
      },
      { value: "collage", label: "Collage on Canvas or Board", checked: false },
      {
        value: "assemblage-panel",
        label: "Assemblage on Panel",
        checked: false,
      },
      {
        value: "textile-art",
        label: "Textile Art (Fabric & Embroidery)",
        checked: false,
      },
      {
        value: "screen-print-paper",
        label: "Screen Print on Paper",
        checked: false,
      },
      {
        value: "lithograph-paper",
        label: "Lithograph on Paper",
        checked: false,
      },
      { value: "etching-metal", label: "Etching on Metal", checked: false },
      { value: "monotype-prints", label: "Monotype Prints", checked: false },
      {
        value: "giclee-canvas-paper",
        label: "Giclée Prints on Canvas or Paper",
        checked: false,
      },
      { value: "charcoal-paper", label: "Charcoal on Paper", checked: false },
      { value: "pen-ink-paper", label: "Pen and Ink on Paper", checked: false },
      { value: "graphite-board", label: "Graphite on Board", checked: false },
      {
        value: "coloured-pencil",
        label: "Coloured Pencil on Bristol Paper",
        checked: false,
      },
      { value: "pdf", label: "PDF", checked: false },
      { value: "ai", label: "AI", checked: false },
      { value: "psd", label: "PSD", checked: false },
      { value: "svg", label: "SVG", checked: false },
      { value: "eps", label: "EPS", checked: false },
      { value: "jpg", label: "JPG", checked: false },
      { value: "png", label: "PNG", checked: false },
    ],
  },
  {
    id: "size",
    name: "SIZE",
    img: size_icon,
    options: [
      { value: "small", label: "Small (under 50 cm)", checked: false },
      { value: "medium", label: "Medium (50 - 100 cm)", checked: false },
      { value: "large", label: "Large (100-150 cm)", checked: false },
      {
        value: "extra-large",
        label: "Extra Large (Above 150 cm)",
        checked: false,
      },
    ],
  },
  {
    id: "certifications",
    name: "CERTIFICATIONS",
    img: certification_icon,
    options: [
      {
        value: "authenticity",
        label: "Certificate of Authenticity",
        checked: false,
      },
      {
        value: "gallery-provenance",
        label: "Gallery Provenance",
        checked: false,
      },
      { value: "signed-by-artist", label: "Signed By Artist", checked: false },
      { value: "copyrighted", label: "Copyrighted", checked: false },
    ],
  },
  {
    id: "location",
    name: "LOCATION",
    img: location_icon,
    options: [
      { value: "riyadh", label: "Riyadh", checked: false },
      { value: "jeddah", label: "Jeddah", checked: false },
      { value: "makkah", label: "Makkah", checked: false },
      { value: "madina", label: "Madina", checked: false },
      { value: "khobar", label: "Khobar", checked: false },
      { value: "dammam", label: "Dammam", checked: false },
      { value: "tabuk", label: "Tabuk", checked: false },
      { value: "taif", label: "Ta'if", checked: false },
      { value: "abha", label: "Abha", checked: false },
      { value: "khamis-mushait", label: "Khamis Mushait", checked: false },
      { value: "buraidah", label: "Buraidah", checked: false },
      { value: "hail", label: "Hail", checked: false },
    ],
  },
  {
    id: "price-range",
    name: "PRICE RANGE",
    img: pricerange_icon,
    options: [
      { value: "under-5000", label: "Under SAR 5,000", checked: false },
      { value: "5000-20000", label: "SAR 5,000 - SAR 20,000", checked: false },
      {
        value: "20000-50000",
        label: "SAR 20,000 - SAR 50,000",
        checked: false,
      },
      {
        value: "50000-100000",
        label: "SAR 50,000 - SAR 100,000",
        checked: false,
      },
      { value: "above-100000", label: "Above SAR 100,000", checked: false },
    ],
  },
  {
    id: "style",
    name: "STYLE",
    img: style_icon,
    options: [
      { value: "abstract", label: "Abstract", checked: false },
      { value: "realism", label: "Realism", checked: false },
      { value: "impressionism", label: "Impressionism", checked: false },
      { value: "minimalism", label: "Minimalism", checked: false },
      { value: "surrealism", label: "Surrealism", checked: false },
      { value: "contemporary", label: "Contemporary", checked: false },
      { value: "traditional", label: "Traditional", checked: false },
    ],
  },
  {
    id: "themes",
    name: "THEMES",
    img: theme_icon,
    options: [
      {
        value: "cultural-heritage",
        label: "Cultural Heritage",
        checked: false,
      },
      { value: "nature", label: "Nature", checked: false },
      { value: "urban-life", label: "Urban Life", checked: false },
      { value: "portraits", label: "Portraits", checked: false },
      { value: "conceptual", label: "Conceptual", checked: false },
    ],
  },
  {
    id: "year-of-creation",
    name: "YEAR OF CREATION",
    img: yearofcreation_icon,
    options: [
      {
        value: "recent",
        label: "Recent Works (Last 1-2 Years)",
        checked: false,
      },
      {
        value: "within-5-years",
        label: "Within the Last 5 Years",
        checked: false,
      },
      { value: "older-works", label: "Older Works (5+ Years)", checked: false },
    ],
  },
  {
    id: "intermediaries",
    name: "INTERMEDIARIES",
    img: intermediaries_icon,
    options: [
      { value: "athr-gallery", label: "Athr Gallery", checked: false },
      { value: "hafez-gallery", label: "Hafez Gallery", checked: false },
      { value: "hayy-jameel", label: "Hayy Jameel", checked: false },
      {
        value: "landscape-gallery",
        label: "Landscape Gallery",
        checked: false,
      },
    ],
  },
  {
    id: "availability",
    name: "AVAILABILITY",
    img: availability_icon,
    options: [
      { value: "instant-download", label: "Instant Download", checked: false },
      { value: "available-now", label: "Available Now", checked: false },
      {
        value: "commission-available",
        label: "Commission Available",
        checked: false,
      },
      {
        value: "similar-works",
        label: "Sold but Similar Works Available",
        checked: false,
      },
    ],
  },
  {
    id: "framing-options",
    name: "FRAMING OPTIONS",
    img: framingoption_icon,
    options: [
      { value: "framed", label: "Framed", checked: false },
      { value: "unframed", label: "Unframed", checked: false },
      {
        value: "custom-framing",
        label: "Custom Framing Available",
        checked: false,
      },
    ],
  },
  {
    id: "shipping",
    name: "SHIPPING",
    img: shipping_icon,
    options: [
      { value: "local-pickup", label: "Local Pickup", checked: false },
      {
        value: "domestic-shipping",
        label: "Domestic Shipping",
        checked: false,
      },
      {
        value: "international-shipping",
        label: "International Shipping",
        checked: false,
      },
    ],
  },
];

export const LearnSideFilters = [
  {
    id: "skills",
    name: "SKILLS",
    img: skill_icon1,
    subCategories: [
      {
        categoryName: "CALLIGRAPHY",
        name: "ARABIC CALLIGRAPHY STYLES",
        options: [
          { value: "naskh", label: "Naskh", checked: false },
          { value: "thuluth", label: "Thuluth", checked: false },
          { value: "diwani", label: "Diwani", checked: false },
          { value: "kufi", label: "Kufi", checked: false },
          { value: "ruqah", label: "Ruq'ah", checked: false },
          { value: "farisi", label: "Farisi (Persian)", checked: false },
          { value: "maghrebi", label: "Maghrebi", checked: false },
        ],
      },
      {
        name: "WESTERN CALLIGRAPHY STYLES",
        options: [
          { value: "italic", label: "Italic", checked: false },
          { value: "gothic", label: "Gothic", checked: false },
          { value: "copperplate", label: "Copperplate", checked: false },
          { value: "uncial", label: "Uncial", checked: false },
          { value: "roman-capitals", label: "Roman Capitals", checked: false },
        ],
      },
      {
        categoryName: "DRAWING & ILLUSTRATION",
        name: "DRAWING",
        options: [
          {
            value: "realistic-drawing",
            label: "Realistic Drawing",
            checked: false,
          },
          {
            value: "portrait-drawing",
            label: "Portrait Drawing",
            checked: false,
          },
          {
            value: "character-design",
            label: "Character Design",
            checked: false,
          },
          {
            value: "environmental-drawing",
            label: "Environmental Drawing",
            checked: false,
          },
          {
            value: "still-life-drawing",
            label: "Still Life Drawing",
            checked: false,
          },
          {
            value: "gesture-drawing",
            label: "Gesture Drawing",
            checked: false,
          },
          {
            value: "perspective-drawing",
            label: "Perspective Drawing",
            checked: false,
          },
          { value: "line-drawing", label: "Line Drawing", checked: false },
        ],
      },
      {
        name: "ILLUSTRATION",
        options: [
          {
            value: "digital-illustration",
            label: "Digital Illustration",
            checked: false,
          },
          {
            value: "vector-illustration",
            label: "Vector Illustration",
            checked: false,
          },
          {
            value: "editorial-illustration",
            label: "Editorial Illustration",
            checked: false,
          },
          {
            value: "fashion-illustration",
            label: "Fashion Illustration",
            checked: false,
          },
          {
            value: "scientific-illustration",
            label: "Scientific Illustration",
            checked: false,
          },
          {
            value: "manga-anime-illustration",
            label: "Manga/Anime Illustration",
            checked: false,
          },
        ],
      },
    ],
  },
  {
    id: "skillLevel",
    name: "SKILL LEVEL",
    img: skilllevel_icon,
    options: [
      { value: "beginner", label: "Beginner (0-2 years)", checked: false },
      {
        value: "intermediate",
        label: "Intermediate (3-5 years)",
        checked: false,
      },
      { value: "advanced", label: "Advanced (6-10 years)", checked: false },
      {
        value: "professional",
        label: "Professional (11+ years)",
        checked: false,
      },
    ],
  },
  {
    id: "workshopType",
    name: "WORKSHOP TYPE",
    img: workshoptype_icon,
    options: [
      { value: "in-person", label: "In-Person Workshop", checked: false },
      { value: "lecture-seminar", label: "Lecture/Seminar", checked: false },
      { value: "online", label: "Online / Remote", checked: false },
      { value: "hybrid", label: "Hybrid (Online & In-Person)", checked: false },
    ],
  },
  {
    id: "duration",
    name: "DURATION",
    img: duration_icon,
    options: [
      { value: "one-day", label: "One-Day Workshop", checked: false },
      { value: "two-day", label: "Two Day Workshop", checked: false },
      { value: "three-day", label: "Three Day Workshop", checked: false },
      { value: "five-day", label: "Five Day Workshop", checked: false },
    ],
  },
  {
    id: "language",
    name: "LANGUAGE",
    img: language_icon,
    options: [
      { value: "arabic", label: "Arabic", checked: false },
      { value: "english", label: "English", checked: false },
      { value: "other", label: "Other", checked: false },
    ],
  },
  {
    id: "certifications",
    name: "CERTIFICATIONS",
    img: certification_icon,
    options: [
      {
        value: "completion",
        label: "Certificate of Completion",
        checked: false,
      },
      {
        value: "professional-accreditation",
        label: "Professional Accreditation",
        checked: false,
      },
      { value: "nano-certificate", label: "Nano Certificate", checked: false },
      { value: "no-certification", label: "No Certification", checked: false },
    ],
  },
  {
    id: "location",
    name: "LOCATION",
    img: location_icon,
    options: [
      { value: "riyadh", label: "Riyadh", checked: false },
      { value: "jeddah", label: "Jeddah", checked: false },
      { value: "makkah", label: "Makkah", checked: false },
      { value: "madina", label: "Madina", checked: false },
      { value: "khobar", label: "Khobar", checked: false },
      { value: "dammam", label: "Dammam", checked: false },
      { value: "tabuk", label: "Tabuk", checked: false },
      { value: "taif", label: "Ta'if", checked: false },
      { value: "abha", label: "Abha", checked: false },
      { value: "khamis-mushait", label: "Khamis Mushait", checked: false },
      { value: "buraidah", label: "Buraidah", checked: false },
      { value: "hail", label: "Hail", checked: false },
    ],
  },
  {
    id: "budget",
    name: "BUDGET",
    img: budget_icon,
    options: [
      { value: "free", label: "Free", checked: false },
      { value: "under-sar-1000", label: "Under SAR 1,000", checked: false },
      {
        value: "sar-1000-5000",
        label: "SAR 1,000 - SAR 5,000",
        checked: false,
      },
      {
        value: "sar-5000-10000",
        label: "SAR 5,000 - SAR 10,000",
        checked: false,
      },
      { value: "custom-budget", label: "Custom Budget", checked: false },
    ],
  },
  {
    id: "priceRange",
    name: "PRICE RANGE",
    img: pricerange_icon,
    options: [
      { value: "free", label: "Free", checked: false },
      { value: "under-500", label: "Under SAR 500", checked: false },
      { value: "500-1000", label: "SAR 500 - SAR 1,000", checked: false },
      { value: "1000-5000", label: "SAR 1,000 - SAR 5,000", checked: false },
      { value: "above-5000", label: "Above SAR 5,000", checked: false },
    ],
  },
];

export const NFTSideFilters = [
  {
    id: "categories",
    name: "CATEGORIES",
    img: category_icon,
    options: [
      { value: "calligraphy", label: "Calligraphy", checked: false },
      {
        value: "drawing-illustration",
        label: "Drawing & Illustration",
        checked: false,
      },
      { value: "graphics", label: "Graphics", checked: false },
      { value: "mixed-media", label: "Mixed Media", checked: false },
      { value: "painting", label: "Painting", checked: false },
      { value: "photography", label: "Photography", checked: false },
      { value: "printmaking", label: "Printmaking", checked: false },
      { value: "sculpture", label: "Sculpture", checked: false },
    ],
  },
  {
    id: "format",
    name: "FORMAT",
    img: format_icon,
    options: [
      {
        value: "digital-print",
        label: "Digital Print on Archival Paper",
        checked: false,
      },
      { value: "3d-models", label: "3D Models", checked: false },
      { value: "gifs", label: "GIFs", checked: false },
      { value: "animation", label: "Animation", checked: false },
      { value: "video", label: "Video", checked: false },
      { value: "ar", label: "Augmented Reality (AR)", checked: false },
      { value: "vr", label: "Virtual Reality (VR)", checked: false },
      { value: "jpeg", label: "JPEG", checked: false },
      { value: "png", label: "PNG", checked: false },
      { value: "3d-printed", label: "3D Printed", checked: false },
      { value: "mp4", label: "MP4", checked: false },
      { value: "svg", label: "SVG", checked: false },
    ],
  },
  {
    id: "edition",
    name: "Edition",
    img: edition_icon,
    options: [
      { value: "1of1", label: "1 of 1 (Unique)", checked: false },
      { value: "limited", label: "Limited Edition", checked: false },
      { value: "open", label: "Open Edition", checked: false },
    ],
  },
  {
    id: "rarity",
    name: "Rarity",
    img: rarity_icon,
    options: [
      { value: "common", label: "Common", checked: false },
      { value: "rare", label: "Rare", checked: false },
      { value: "epic", label: "Epic", checked: false },
      { value: "legendary", label: "Legendary", checked: false },
    ],
  },
  {
    id: "licensing",
    name: "LICENSING",
    img: licensing_icon,
    options: [
      { value: "commercial", label: "Commmercial Use Allowed", checked: false },
      { value: "personal", label: "Personal USe Only", checked: false },
      { value: "resale", label: "Resale Rights Included", checked: false },
    ],
  },
  {
    id: "size",
    name: "SIZE",
    img: size_icon,
    options: [
      {
        value: "small",
        label: "Small (Under 1000 x 1000 pixels)",
        checked: false,
      },
      {
        value: "medium",
        label: " Medium (Up To 3000 x 3000 pixels",
        checked: false,
      },
      {
        value: "large",
        label: " Large (Above 3000 x 3000 pixels)",
        checked: false,
      },
      { value: "custom", label: "Custom", checked: false },
    ],
  },
  {
    id: "price-range",
    name: "PRICE RANGE",
    img: pricerange_icon,
    options: [
      { value: "under-500", label: "Under SAR 5,00", checked: false },
      { value: "500-2000", label: "SAR 500 - SAR 2,000", checked: false },
      { value: "2000-10000", label: "SAR 2,000 - SAR 10,000", checked: false },
      { value: "above-10000", label: "Above SAR 10,000", checked: false },
      { value: "auction", label: "Auction / Bid-Based", checked: false },
    ],
  },
  {
    id: "style",
    name: "STYLE",
    img: style_icon,
    options: [
      { value: "abstract", label: "Abstract", checked: false },
      { value: "realism", label: "Realism", checked: false },
      { value: "impressionism", label: "Impressionism", checked: false },
      { value: "minimalism", label: "Minimalism", checked: false },
      { value: "surrealism", label: "Surrealism", checked: false },
      { value: "contemporary", label: "Contemporary", checked: false },
      { value: "traditional", label: "Traditional", checked: false },
    ],
  },
  {
    id: "themes",
    name: "THEMES",
    img: theme_icon,
    options: [
      {
        value: "cultural-heritage",
        label: "Cultural Heritage",
        checked: false,
      },
      { value: "nature", label: "Nature", checked: false },
      { value: "urban-life", label: "Urban Life", checked: false },
      { value: "portraits", label: "Portraits", checked: false },
      { value: "conceptual", label: "Conceptual", checked: false },
    ],
  },
  {
    id: "year-of-creation",
    name: "YEAR OF CREATION",
    img: yearofcreation_icon,
    options: [
      {
        value: "new-release",
        label: "New Releases (Laast 7 Days)",
        checked: false,
      },
      { value: "last 30 days", label: "Last 30 Days", checked: false },
      { value: "older", label: "Older", checked: false },
    ],
  },
  {
    id: "availability",
    name: "AVAILABILITY",
    img: availability_icon,
    options: [
      { value: "instant-download", label: "Instant Download", checked: false },
      {
        value: "commission-available",
        label: "Commission Available",
        checked: false,
      },
    ],
  },
];

export const PrintSideFilters = [
  {
    id: "categories",
    name: "CATEGORIES",
    img: category_icon,
    options: [
      { value: "calligraphy", label: "Calligraphy", checked: false },
      {
        value: "drawing-illustration",
        label: "Drawing & Illustration",
        checked: false,
      },
      { value: "graphics", label: "Graphics", checked: false },
      { value: "mixed-media", label: "Mixed Media", checked: false },
      { value: "painting", label: "Painting", checked: false },
      { value: "photography", label: "Photography", checked: false },
      { value: "printmaking", label: "Printmaking", checked: false },
      { value: "sculpture", label: "Sculpture", checked: false },
    ],
  },
  {
    id: "format",
    name: "FORMAT",
    img: format_icon,
    options: [
      { value: "giclee-print", label: "Giclée Prints", checked: false },
      { value: "screen-print", label: "Screen Prints", checked: false },
      { value: "lithograph-print", label: "Lithographs", checked: false },
      { value: "digital-print", label: "Digital Prints", checked: false },
      {
        value: "photographic-prints",
        label: "Photographic Prints",
        checked: false,
      },
      { value: "posters", label: "Posters", checked: false },
      { value: "mugs", label: "Mugs", checked: false },
      { value: "canvas-bags", label: "Canvas Bags", checked: false },
      { value: "notebooks", label: "Notebooks", checked: false },
      { value: "phone-cases", label: "Phone Cases", checked: false },
      { value: "t-shirts", label: "T-shirts", checked: false },
      { value: "calendars", label: "Calendars", checked: false },
      { value: "magnets", label: "Magnets", checked: false },
      { value: "keychains", label: "Keychains", checked: false },
    ],
  },
  {
    id: "size",
    name: "SIZE",
    img: size_icon,
    options: [
      { value: "small", label: "Small (under 8 x 10 inches)", checked: false },
      {
        value: "medium",
        label: "Medium  (under 11 x 14 inches)",
        checked: false,
      },
      {
        value: "large",
        label: "Large  (under 16 x 20 inches)",
        checked: false,
      },
      { value: "custom", label: "Custom Sizes Available", checked: false },
    ],
  },
  {
    id: "location",
    name: "LOCATION",
    img: location_icon,
    options: [
      { value: "riyadh", label: "Riyadh", checked: false },
      { value: "jeddah", label: "Jeddah", checked: false },
      { value: "makkah", label: "Makkah", checked: false },
      { value: "madina", label: "Madina", checked: false },
      { value: "khobar", label: "Khobar", checked: false },
      { value: "dammam", label: "Dammam", checked: false },
      { value: "tabuk", label: "Tabuk", checked: false },
      { value: "taif", label: "Ta'if", checked: false },
      { value: "abha", label: "Abha", checked: false },
      { value: "khamis-mushait", label: "Khamis Mushait", checked: false },
      { value: "buraidah", label: "Buraidah", checked: false },
      { value: "hail", label: "Hail", checked: false },
    ],
  },
  {
    id: "price-range",
    name: "PRICE RANGE",
    img: pricerange_icon,
    options: [
      { value: "under-sar-50", label: "Under SAR 50", checked: false },
      { value: "sar-50-100", label: "SAR 50 - SAR 100", checked: false },
      { value: "sar-100-200", label: "SAR 100 - SAR 200", checked: false },
      { value: "sar-200-500", label: "SAR 20 - SAR 500", checked: false },
      { value: "above-500", label: "Above SAR 500", checked: false },
    ],
  },
  {
    id: "style",
    name: "STYLE",
    img: style_icon,
    options: [
      { value: "abstract", label: "Abstract", checked: false },
      { value: "realism", label: "Realism", checked: false },
      { value: "impressionism", label: "Impressionism", checked: false },
      { value: "minimalism", label: "Minimalism", checked: false },
      { value: "surrealism", label: "Surrealism", checked: false },
      { value: "contemporary", label: "Contemporary", checked: false },
      { value: "traditional", label: "Traditional", checked: false },
    ],
  },
  {
    id: "themes",
    name: "THEMES",
    img: theme_icon,
    options: [
      {
        value: "cultural-heritage",
        label: "Cultural Heritage",
        checked: false,
      },
      { value: "nature", label: "Nature", checked: false },
      { value: "urban-life", label: "Urban Life", checked: false },
      { value: "portraits", label: "Portraits", checked: false },
      { value: "conceptual", label: "Conceptual", checked: false },
    ],
  },
  {
    id: "year-of-creation",
    name: "YEAR OF CREATION",
    img: yearofcreation_icon,
    options: [
      {
        value: "recent",
        label: "Recent Works (Last 1-2 Years)",
        checked: false,
      },
      {
        value: "within-5-years",
        label: "Within the Last 5 Years",
        checked: false,
      },
      { value: "older-works", label: "Older Works (5+ Years)", checked: false },
    ],
  },
  {
    id: "availability",
    name: "AVAILABILITY",
    img: availability_icon,
    options: [
      { value: "instant-download", label: "Instant Download", checked: false },
      { value: "in-stock", label: "In Stock", checked: false },
      { value: "limited", label: "Limited Edition", checked: false },
      { value: "exclusive", label: "Exclusive Collections", checked: false },
    ],
  },
  {
    id: "framing-options",
    name: "FRAMING OPTIONS",
    img: framingoption_icon,
    options: [
      { value: "framed", label: "Framed", checked: false },
      { value: "unframed", label: "Unframed", checked: false },
      {
        value: "custom-framing",
        label: "Custom Framing Available",
        checked: false,
      },
    ],
  },
  {
    id: "shipping",
    name: "SHIPPING",
    img: shipping_icon,
    options: [
      { value: "local-pickup", label: "Local Pickup", checked: false },
      {
        value: "domestic-shipping",
        label: "Domestic Shipping",
        checked: false,
      },
      {
        value: "international-shipping",
        label: "International Shipping",
        checked: false,
      },
    ],
  },
];

export const sortOptions = [
  { name: "Recommended", href: "#", current: true },
  { name: "Newest", href: "#", current: false },
  { name: "Oldest", href: "#", current: false },
];

export const MarketCategories = [
  "PRIMARY MARKET",
  "SECONDARY MARKET",
  "NFTs",
  "PRINTS & SOUVENIRS",
];

export const creatorSideTitles = [
  { id: "badges", name: "BADGES",img:badge_icon },
  { id: "skills", name: "SKILLS",img:skill_icon },
  { id: "experience", name: "EXPERIENCE",img:experience_icon },
  { id: "exhibitions", name: "EXHIBITIONS",img:exhibition_icon},
  { id: "achievements", name: "ACHIEVEMENTS",img:achievement_icon },
  { id: "education", name: "EDUCATION",img:education_icon },
  { id: "digital_tools", name: "DIGITAL TOOLS",img:digitaltools_icon },
];

export const artworkSideTitles = [
  { id: "size", name: "Size",img:size_icon },
  { id: "format", name: "Format",img:format_icon },
  { id: "certifications", name: "Certifications",img:certification_icon },
  { id: "price", name: "Price",img:pricerange_icon},
  { id: "yearOfCreation", name: "Year of Creation",img:yearofcreation_icon },
  { id: "frame", name: "Frame",img:framingoption_icon },
  { id: "rarity", name: "Rarity",img:rarity_icon },
  { id: "signature", name: "Signature",img:signature_icon },
];

export const PatronsAndIntermediariesSideTitles = [
  {id: "artworksBought", name: "No. of Artworks Bought", img:artworksBought_icon},
  {id: "artworksResold", name:"No. of Artworks Resold", img:artworksResold_icon},
  {id:"artworksSupported", name:"No. of Artworks Supported",img: artworksSupported_icon},
  {id:"totalFinancialContribution", name:"Total Financial Contribution", img: totalFinancialContribution_icon},
];

export const countryNameToCode = {
  "Afghanistan": "AF",
  "Albania": "AL",
  "Algeria": "DZ",
  "Andorra": "AD",
  "Angola": "AO",
  "Antigua and Barbuda": "AG",
  "Argentina": "AR",
  "Armenia": "AM",
  "Australia": "AU",
  "Austria": "AT",
  "Azerbaijan": "AZ",
  "Bahamas": "BS",
  "Bahrain": "BH",
  "Bangladesh": "BD",
  "Barbados": "BB",
  "Belarus": "BY",
  "Belgium": "BE",
  "Belize": "BZ",
  "Benin": "BJ",
  "Bhutan": "BT",
  "Bolivia": "BO",
  "Bosnia and Herzegovina": "BA",
  "Botswana": "BW",
  "Brazil": "BR",
  "Brunei Darussalam": "BN",
  "Bulgaria": "BG",
  "Burkina Faso": "BF",
  "Burundi": "BI",
  "Cabo Verde": "CV",
  "Cambodia": "KH",
  "Cameroon": "CM",
  "Canada": "CA",
  "Central African Republic": "CF",
  "Chad": "TD",
  "Chile": "CL",
  "China": "CN",
  "Colombia": "CO",
  "Comoros": "KM",
  "Congo": "CG",
  "Congo, Democratic Republic of the": "CD",
  "Costa Rica": "CR",
  "Côte d'Ivoire": "CI",
  "Croatia": "HR",
  "Cuba": "CU",
  "Cyprus": "CY",
  "Czech Republic": "CZ",
  "Denmark": "DK",
  "Djibouti": "DJ",
  "Dominica": "DM",
  "Dominican Republic": "DO",
  "Ecuador": "EC",
  "Egypt": "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  "Eritrea": "ER",
  "Estonia": "EE",
  "Eswatini": "SZ",
  "Ethiopia": "ET",
  "Fiji": "FJ",
  "Finland": "FI",
  "France": "FR",
  "Gabon": "GA",
  "Gambia": "GM",
  "Georgia": "GE",
  "Germany": "DE",
  "Ghana": "GH",
  "Greece": "GR",
  "Grenada": "GD",
  "Guatemala": "GT",
  "Guinea": "GN",
  "Guinea-Bissau": "GW",
  "Guyana": "GY",
  "Haiti": "HT",
  "Honduras": "HN",
  "Hungary": "HU",
  "Iceland": "IS",
  "India": "IN",
  "Indonesia": "ID",
  "Iran": "IR",
  "Iraq": "IQ",
  "Ireland": "IE",
  "Israel": "IL",
  "Italy": "IT",
  "Jamaica": "JM",
  "Japan": "JP",
  "Jordan": "JO",
  "Kazakhstan": "KZ",
  "Kenya": "KE",
  "Kiribati": "KI",
  "Korea, Democratic People's Republic of": "KP",
  "Korea, Republic of": "KR",
  "Kuwait": "KW",
  "Kyrgyzstan": "KG",
  "Lao People's Democratic Republic": "LA",
  "Latvia": "LV",
  "Lebanon": "LB",
  "Lesotho": "LS",
  "Liberia": "LR",
  "Libya": "LY",
  "Liechtenstein": "LI",
  "Lithuania": "LT",
  "Luxembourg": "LU",
  "Madagascar": "MG",
  "Malawi": "MW",
  "Malaysia": "MY",
  "Maldives": "MV",
  "Mali": "ML",
  "Malta": "MT",
  "Marshall Islands": "MH",
  "Mauritania": "MR",
  "Mauritius": "MU",
  "Mexico": "MX",
  "Micronesia": "FM",
  "Moldova": "MD",
  "Monaco": "MC",
  "Mongolia": "MN",
  "Montenegro": "ME",
  "Morocco": "MA",
  "Mozambique": "MZ",
  "Myanmar": "MM",
  "Namibia": "NA",
  "Nauru": "NR",
  "Nepal": "NP",
  "Netherlands": "NL",
  "New Zealand": "NZ",
  "Nicaragua": "NI",
  "Niger": "NE",
  "Nigeria": "NG",
  "North Macedonia": "MK",
  "Norway": "NO",
  "Oman": "OM",
  "Pakistan": "PK",
  "Palau": "PW",
  "Panama": "PA",
  "Papua New Guinea": "PG",
  "Paraguay": "PY",
  "Peru": "PE",
  "Philippines": "PH",
  "Poland": "PL",
  "Portugal": "PT",
  "Qatar": "QA",
  "Romania": "RO",
  "Russian Federation": "RU",
  "Rwanda": "RW",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Vincent and the Grenadines": "VC",
  "Samoa": "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  "Senegal": "SN",
  "Serbia": "RS",
  "Seychelles": "SC",
  "Sierra Leone": "SL",
  "Singapore": "SG",
  "Slovakia": "SK",
  "Slovenia": "SI",
  "Solomon Islands": "SB",
  "Somalia": "SO",
  "South Africa": "ZA",
  "South Sudan": "SS",
  "Spain": "ES",
  "Sri Lanka": "LK",
  "Sudan": "SD",
  "Suriname": "SR",
  "Sweden": "SE",
  "Switzerland": "CH",
  "Syrian Arab Republic": "SY",
  "Tajikistan": "TJ",
  "Tanzania": "TZ",
  "Thailand": "TH",
  "Timor-Leste": "TL",
  "Togo": "TG",
  "Tonga": "TO",
  "Trinidad and Tobago": "TT",
  "Tunisia": "TN",
  "Turkey": "TR",
  "Turkmenistan": "TM",
  "Tuvalu": "TV",
  "Uganda": "UG",
  "Ukraine": "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States": "US",
  "Uruguay": "UY",
  "Uzbekistan": "UZ",
  "Vanuatu": "VU",
  "Vatican City": "VA",
  "Venezuela": "VE",
  "Vietnam": "VN",
  "Yemen": "YE",
  "Zambia": "ZM",
  "Zimbabwe": "ZW"
};



