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
          { value: "Naskh (Arabic Calligraphy)", label: "Naskh", checked: false },
          { value: "Thuluth (Arabic Calligraphy)", label: "Thuluth", checked: false },
          { value: "Diwani (Arabic Calligraphy)", label: "Diwani", checked: false },
          { value: "Kufi (Arabic Calligraphy)", label: "Kufi", checked: false },
          { value: "Ruq'ah (Arabic Calligraphy)", label: "Ruq'ah", checked: false },
          { value: "Farisi (Persian) (Arabic Calligraphy)", label: "Farisi (Persian)", checked: false },
          { value: "Maghrebi (Arabic Calligraphy)", label: "Maghrebi", checked: false },
        ],
      },
      {
        name: "WESTERN CALLIGRAPHY STYLES",
        options: [
          { value: "Italic (Western Calligraphy)", label: "Italic", checked: false },
          { value: "Gothic (Western Calligraphy)", label: "Gothic", checked: false },
          { value: "Copperplate (Western Calligraphy)", label: "Copperplate", checked: false },
          { value: "Uncial (Western Calligraphy)", label: "Uncial", checked: false },
          { value: "Roman Capitals (Western Calligraphy)", label: "Roman Capitals", checked: false },
        ],
      },
      {
        categoryName: "DRAWING & ILLUSTRATION",
        name: "DRAWING",
        options: [
          {
            value:"Realistic Drawing",
            label: "Realistic Drawing",
            checked: false,
          },
          {
            value: "Portrait Drawing",
            label: "Portrait Drawing",
            checked: false,
          },
          {
            value: "Character Design",
            label: "Character Design",
            checked: false,
          },
          {
            value: "Environmental Drawing",
            label: "Environmental Drawing",
            checked: false,
          },
          {
            value: "Still Life Drawing",
            label: "Still Life Drawing",
            checked: false,
          },
          {
            value: "Gesture Drawing",
            label: "Gesture Drawing",
            checked: false,
          },
          {
            value: "Perspective Drawing",
            label: "Perspective Drawing",
            checked: false,
          },
          { value: "Line Drawing", label: "Line Drawing", checked: false },
        ],
      },
      {
        name: "ILLUSTRATION",
        options: [
          {
            value: "Digital Illustration",
            label: "Digital Illustration",
            checked: false,
          },
          {
            value: "Vector Illustration",
            label: "Vector Illustration",
            checked: false,
          },
          {
            value: "Editorial Illustration",
            label: "Editorial Illustration",
            checked: false,
          },
          {
            value: "Fashion Illustration",
            label: "Fashion Illustration",
            checked: false,
          },
          {
            value: "Scientific Illustration",
            label: "Scientific Illustration",
            checked: false,
          },
          {
            value: "Manga/Anime Illustration",
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
      { value: "Beginner (0-2 years)", label: "Beginner (0-2 years)", checked: false },
      {
        value: "Intermediate (3-5 years)",
        label: "Intermediate (3-5 years)",
        checked: false,
      },
      { value: "Advanced (6-10 years)", label: "Advanced (6-10 years)", checked: false },
      {
        value: "Professional (11+ years)",
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
      { value: "Riyadh", label: "Riyadh", checked: false },
      { value: "Jeddah", label: "Jeddah", checked: false },
      { value: "Makkah", label: "Makkah", checked: false },
      { value: "Madina", label: "Madina", checked: false },
      { value: "Khobar", label: "Khobar", checked: false },
      { value: "Dammam", label: "Dammam", checked: false },
      { value: "Tabuk", label: "Tabuk", checked: false },
      { value: "Ta'if", label: "Ta'if", checked: false },
      { value: "Abha", label: "Abha", checked: false },
      { value: "Khamis Mushait", label: "Khamis Mushait", checked: false },
      { value: "Buraidah", label: "Buraidah", checked: false },
      { value: "Hail", label: "Hail", checked: false },
    ],
  },
  {
    id: "budget",
    name: "BUDGET",
    img: budget_icon,
    options: [
      { value: "free", label: "Free", checked: false },
      { value: "under-1000", label: "Under SAR 1,000 ", checked: false },
      {
        value: "1000-5000",
        label: "SAR 1,000 - SAR 5,000",
        checked: false,
      },
      {
        value: "5000-10000",
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
        value: "Immediately Available",
        label: "Immediately Available",
        checked: false,
      },
      {
        value: "Available within 1-2 weeks",
        label: "Available within 1-2 weeks",
        checked: false,
      },
      {
        value: "Available within 1 month",
        label: "Available within 1 month",
        checked: false,
      },
      { value: "Part-Time", label: "Part-Time", checked: false },
      { value: "Full-Time", label: "Full-Time", checked: false },
    ],
  },
];

// export const BidSideFilters = [
//   {
//     id: "status",
//     name: "STATUS",
//     img: status_icon,
//     options: [
//       { value: "ongoing", label: "On-going", checked: false },
//       {
//         value: "completed",
//         label: "Completed",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "projectType",
//     name: "PROJECT TYPE",
//     img: projecttype_icon,
//     options: [
//       { value: "art-installation", label: "Art Installation", checked: false },
//       { value: "competition", label: "Competition", checked: false },
//       { value: "exhibition", label: "Exhibition", checked: false },
//       { value: "exploration", label: "Exploration", checked: false },
//       { value: "initiative", label: "Initiative", checked: false },
//       { value: "program", label: "Program", checked: false },
//       { value: "residency", label: "Residency", checked: false },
//     ],
//   },
//   {
//     id: "eligibility",
//     name: "ELIGIBILITY",
//     img: eligibility_icon,
//     options: [
//       { value: "open-to-all", label: "Open to All", checked: false },
//       {
//         value: "saudi-nationals-only",
//         label: "Saudi Nationals only",
//         checked: false,
//       },
//       {
//         value: "international-artists",
//         label: "International Artists",
//         checked: false,
//       },
//       {
//         value: "emerging-artists",
//         label: "Emerging Artists",
//         checked: false,
//       },
//       {
//         value: "established-artists",
//         label: "Established Artists",
//         checked: false,
//       },

//       {
//         value: "students",
//         label: "Students",
//         checked: false,
//       },

//       {
//         value: "age-specific",
//         label: "Age-Specific (over 18)",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "location",
//     name: "LOCATION",
//     img: location_icon,
//     options: [
//       { value: "riyadh", label: "Riyadh", checked: false },
//       { value: "jeddah", label: "Jeddah", checked: false },
//       { value: "makkah", label: "Makkah", checked: false },
//       { value: "madina", label: "Madina", checked: false },
//       { value: "khobar", label: "Khobar", checked: false },
//       { value: "dammam", label: "Dammam", checked: false },
//       { value: "tabuk", label: "Tabuk", checked: false },
//       { value: "taif", label: "Ta'if", checked: false },
//       { value: "abha", label: "Abha", checked: false },
//       { value: "khamis-mushait", label: "Khamis Mushait", checked: false },
//       { value: "buraidah", label: "Buraidah", checked: false },
//       { value: "hail", label: "Hail", checked: false },
//     ],
//   },
//   {
//     id: "prize",
//     name: "PRIZE",
//     img: prize_icon,
//     options: [
//       { value: "under-sar-10000", label: "Under SAR 10,000 ", checked: false },
//       {
//         value: "sar-10000-50000",
//         label: "SAR 10,000 - SAR 50,000",
//         checked: false,
//       },
//       {
//         value: "sar-50000-100000",
//         label: "SAR 50,000 - SAR 100,000",
//         checked: false,
//       },
//       {
//         value: "above-sar-100,000",
//         label: "Above SAR 100,000",
//         checked: false,
//       },
//       {
//         value: "non-monetary-exposure",
//         label: "Non-Monetary (Exposure)",
//         checked: false,
//       },
//       {
//         value: "non-monetary-collaboration",
//         label: "Non-Monetary (Collaboration)",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "deadline",
//     name: "DEADLINE",
//     img: deadline_icon,
//     options: [
//       { value: "within-1-week", label: "Within 1 Week", checked: false },
//       { value: "this-month", label: "This Month", checked: false },
//       {
//         value: "next-3-months",
//         label: "Next 3 Months",
//         checked: false,
//       },
//       {
//         value: "later-this-year",
//         label: "Later This Year",
//         checked: false,
//       },
//       {
//         value: "no-deadline",
//         label: "No Deadline",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "hostOrganization",
//     name: "HOST ORGANIZATION",
//     img: hostorganization_icon,
//     options: [
//       { value: "government", label: "Government", checked: false },
//       { value: "private-sector", label: "Private Sector", checked: false },
//       {
//         value: "non-profit-organisation",
//         label: "Non-Profit Organisation",
//         checked: false,
//       },
//       {
//         value: "art-intermediaries",
//         label: "Art Intermediaries",
//         checked: false,
//       },
//       {
//         value: "educational-institutions",
//         label: "Educational Institutions",
//         checked: false,
//       },

//       {
//         value: "cultural-centers",
//         label: "Cultural Centers",
//         checked: false,
//       },
//     ],
//   },
// ];

export const BidSideFilters = [
  {
    id: "status",
    name: "Status",
    img: status_icon,
    options: [
      { label: "On-going", value: "on-going" }, // Matches "On-going".toLowerCase()
      { label: "Completed", value: "completed" },
    ],
  },
  {
    id: "projectType",
    name: "Project Type",
    img: projecttype_icon,
    options: [
      { label: "Art Installation", value: "art-installation" }, // Assuming your DB has "Art Installation" or "Art-Installation"
      { label: "Competition", value: "competition" }, // Matches "Competition".toLowerCase()
      { label: "Exhibition", value: "exhibition" },
      { label: "Exploration", value: "exploration" },
      { label: "Initiative", value: "initiative" },
      { label: "Program", value: "program" },
      { label: "Residency", value: "residency" },
    ],
  },
  {
    id: "eligibility",
    name: "Eligibility",
    img: eligibility_icon, // Use appropriate icon
    options: [
      { label: "Open to All", value: "open to all" }, // Matches "Open to All".toLowerCase()
      { label: "Saudi Nationals Only", value: "saudi nationals only" },
      { label: "International Artists", value: "international artists" }, // Matches "International Artists".toLowerCase()
      { label: "Emerging Artists", value: "emerging artists" },
      { label: "Established Artists", value: "established artists" },
      { label: "Students", value: "students" },
      { label: "Age Specific", value: "age-specific" },
    ],
  },
  {
    id: "location",
    name: "Location",
    img: location_icon, // Use appropriate icon
    options: [
      // Make sure these values EXACTLY match the lowercase version of your DB locations
      { label: "Hail", value: "hail" },
      { label: "Buraidah", value: "buraidah" },
      { label: "Khamis Mushait", value: "khamis mushait" },
      { label: "Abha", value: "abha" },
      { label: "Taif", value: "taif" },
      { label: "Tabuk", value: "tabuk" },
      { label: "Dammam", value: "dammam" }, // Matches "Dammam".toLowerCase()
      { label: "Khobar", value: "khobar" },
      { label: "Madina", value: "madina" },
      { label: "Makkah", value: "makkah" },
      { label: "Jeddah", value: "jeddah" },
      { label: "Riyadh", value: "riyadh" },
    ],
  },
  {
    id: "prize",
    name: "Prize",
    img: prize_icon, // Use appropriate icon
    options: [
      // These values need to be the EXACT string substrings expected from bid.prize in MongoDB
      { label: "Under SAR 10,000", value: "under sar 10,000" },
      { label: "SAR 10,000 - SAR 50,000", value: "10,000 - sar 50,000" }, // The `includes` part, not the full label
      { label: "SAR 50,000 - SAR 100,000", value: "50,000 - sar 100,000" },
      { label: "Above SAR 100,000", value: "above sar 100,000" },
      { label: "Non-Monetary (Exposure)", value: "non-monetary (exposure)" },
      { label: "Non-Monetary (Collaboration)", value: "non-monetary (collaboration)" },
    ],
  },
  {
    id: "deadline",
    name: "Deadline",
    img: deadline_icon, // Use appropriate icon
    options: [
      // These are date ranges, their 'value' can be descriptive
      { label: "Within 1 Week", value: "within-1-week" },
      { label: "This Month", value: "this-month" },
      { label: "Next 3 Months", value: "next-3-months" },
      { label: "Later This Year", value: "later-this-year" },
      { label: "No Deadline", value: "no-deadline" },
    ],
  },
  {
    id: "hostOrganization", // Matches the filterId used in ArtBid.jsx
    name: "Host Organization",
    img: hostorganization_icon, // Use appropriate icon
    options: [
      // These values need to match hostOrganizationType in DB
      { label: "Cultural Centers", value: "cultural centers" },
      { label: "Educational Institutions", value: "educational institutions" },
      { label: "Art Intermediaries", value: "art intermediaries" },
      { label: "Non-Profit Organisation", value: "non-profit organisation" },
      { label: "Private Sector", value: "private sector" }, // Matches "Private Sector".toLowerCase()
      { label: "Government", value: "government" },
    ],
  },
];

// export const MarketSideFilters = [
//   {
//     id: "categories",
//     name: "CATEGORIES",
//     img: category_icon,
//     options: [
//       { value: "calligraphy", label: "Calligraphy", checked: false },
//       {
//         value: "drawing-illustration",
//         label: "Drawing & Illustration",
//         checked: false,
//       },
//       { value: "graphics", label: "Graphics", checked: false },
//       { value: "mixed-media", label: "Mixed Media", checked: false },
//       { value: "painting", label: "Painting", checked: false },
//       { value: "photography", label: "Photography", checked: false },
//       { value: "printmaking", label: "Printmaking", checked: false },
//       { value: "sculpture", label: "Sculpture", checked: false },
//     ],
//   },
//   {
//     id: "format",
//     name: "FORMAT",
//     img: format_icon,
//     options: [
//       {
//         value: "digital-print",
//         label: "Digital Print on Archival Paper",
//         checked: false,
//       },
//       { value: "ink-paper", label: "Ink on Paper", checked: false },
//       {
//         value: "mixed-media-canvas",
//         label: "Mixed Media on Canvas",
//         checked: false,
//       },
//       {
//         value: "engraving-wood-metal",
//         label: "Engraving on Wood or Metal",
//         checked: false,
//       },
//       { value: "oil-canvas", label: "Oil on Canvas", checked: false },
//       { value: "acrylic-canvas", label: "Acrylic on Canvas", checked: false },
//       {
//         value: "watercolour-paper",
//         label: "Watercolour on Paper",
//         checked: false,
//       },
//       {
//         value: "freestanding-sculpture",
//         label: "Freestanding Sculptures",
//         checked: false,
//       },
//       {
//         value: "metal-sculpture",
//         label: "Metal Work Sculptures",
//         checked: false,
//       },
//       { value: "3d-printed", label: "3D Printed", checked: false },
//       { value: "assemblage", label: "Mixed Media Assemblage", checked: false },
//       { value: "c-prints", label: "C-Prints", checked: false },
//       {
//         value: "aluminium-mounted",
//         label: "Aluminium Mounted Prints",
//         checked: false,
//       },
//       {
//         value: "framed-photographs",
//         label: "Framed Photographs",
//         checked: false,
//       },
//       { value: "collage", label: "Collage on Canvas or Board", checked: false },
//       {
//         value: "assemblage-panel",
//         label: "Assemblage on Panel",
//         checked: false,
//       },
//       {
//         value: "textile-art",
//         label: "Textile Art (Fabric & Embroidery)",
//         checked: false,
//       },
//       {
//         value: "screen-print-paper",
//         label: "Screen Print on Paper",
//         checked: false,
//       },
//       {
//         value: "lithograph-paper",
//         label: "Lithograph on Paper",
//         checked: false,
//       },
//       { value: "etching-metal", label: "Etching on Metal", checked: false },
//       { value: "monotype-prints", label: "Monotype Prints", checked: false },
//       {
//         value: "giclee-canvas-paper",
//         label: "Giclée Prints on Canvas or Paper",
//         checked: false,
//       },
//       { value: "charcoal-paper", label: "Charcoal on Paper", checked: false },
//       { value: "pen-ink-paper", label: "Pen and Ink on Paper", checked: false },
//       { value: "graphite-board", label: "Graphite on Board", checked: false },
//       {
//         value: "coloured-pencil",
//         label: "Coloured Pencil on Bristol Paper",
//         checked: false,
//       },
//       { value: "pdf", label: "PDF", checked: false },
//       { value: "ai", label: "AI", checked: false },
//       { value: "psd", label: "PSD", checked: false },
//       { value: "svg", label: "SVG", checked: false },
//       { value: "eps", label: "EPS", checked: false },
//       { value: "jpg", label: "JPG", checked: false },
//       { value: "png", label: "PNG", checked: false },
//     ],
//   },
//   {
//     id: "size",
//     name: "SIZE",
//     img: size_icon,
//     options: [
//       { value: "small", label: "Small (under 50 cm)", checked: false },
//       { value: "medium", label: "Medium (50 - 100 cm)", checked: false },
//       { value: "large", label: "Large (100-150 cm)", checked: false },
//       {
//         value: "extra-large",
//         label: "Extra Large (Above 150 cm)",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "certifications",
//     name: "CERTIFICATIONS",
//     img: certification_icon,
//     options: [
//       {
//         value: "authenticity",
//         label: "Certificate of Authenticity",
//         checked: false,
//       },
//       {
//         value: "gallery-provenance",
//         label: "Gallery Provenance",
//         checked: false,
//       },
//       { value: "signed-by-artist", label: "Signed By Artist", checked: false },
//       { value: "copyrighted", label: "Copyrighted", checked: false },
//     ],
//   },
//   {
//     id: "location",
//     name: "LOCATION",
//     img: location_icon,
//     options: [
//       { value: "riyadh", label: "Riyadh", checked: false },
//       { value: "jeddah", label: "Jeddah", checked: false },
//       { value: "makkah", label: "Makkah", checked: false },
//       { value: "madina", label: "Madina", checked: false },
//       { value: "khobar", label: "Khobar", checked: false },
//       { value: "dammam", label: "Dammam", checked: false },
//       { value: "tabuk", label: "Tabuk", checked: false },
//       { value: "taif", label: "Ta'if", checked: false },
//       { value: "abha", label: "Abha", checked: false },
//       { value: "khamis-mushait", label: "Khamis Mushait", checked: false },
//       { value: "buraidah", label: "Buraidah", checked: false },
//       { value: "hail", label: "Hail", checked: false },
//     ],
//   },
//   {
//     id: "price-range",
//     name: "PRICE RANGE",
//     img: pricerange_icon,
//     options: [
//       { value: "under-5000", label: "Under SAR 5,000", checked: false },
//       { value: "5000-20000", label: "SAR 5,000 - SAR 20,000", checked: false },
//       {
//         value: "20000-50000",
//         label: "SAR 20,000 - SAR 50,000",
//         checked: false,
//       },
//       {
//         value: "50000-100000",
//         label: "SAR 50,000 - SAR 100,000",
//         checked: false,
//       },
//       { value: "above-100000", label: "Above SAR 100,000", checked: false },
//     ],
//   },
//   {
//     id: "style",
//     name: "STYLE",
//     img: style_icon,
//     options: [
//       { value: "abstract", label: "Abstract", checked: false },
//       { value: "realism", label: "Realism", checked: false },
//       { value: "impressionism", label: "Impressionism", checked: false },
//       { value: "minimalism", label: "Minimalism", checked: false },
//       { value: "surrealism", label: "Surrealism", checked: false },
//       { value: "contemporary", label: "Contemporary", checked: false },
//       { value: "traditional", label: "Traditional", checked: false },
//     ],
//   },
//   {
//     id: "themes",
//     name: "THEMES",
//     img: theme_icon,
//     options: [
//       {
//         value: "cultural-heritage",
//         label: "Cultural Heritage",
//         checked: false,
//       },
//       { value: "nature", label: "Nature", checked: false },
//       { value: "urban-life", label: "Urban Life", checked: false },
//       { value: "portraits", label: "Portraits", checked: false },
//       { value: "conceptual", label: "Conceptual", checked: false },
//     ],
//   },
//   {
//     id: "year-of-creation",
//     name: "YEAR OF CREATION",
//     img: yearofcreation_icon,
//     options: [
//       {
//         value: "recent",
//         label: "Recent Works (Last 1-2 Years)",
//         checked: false,
//       },
//       {
//         value: "within-5-years",
//         label: "Within the Last 5 Years",
//         checked: false,
//       },
//       { value: "older-works", label: "Older Works (5+ Years)", checked: false },
//     ],
//   },
//   {
//     id: "intermediaries",
//     name: "INTERMEDIARIES",
//     img: intermediaries_icon,
//     options: [
//       { value: "athr-gallery", label: "Athr Gallery", checked: false },
//       { value: "hafez-gallery", label: "Hafez Gallery", checked: false },
//       { value: "hayy-jameel", label: "Hayy Jameel", checked: false },
//       {
//         value: "landscape-gallery",
//         label: "Landscape Gallery",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "availability",
//     name: "AVAILABILITY",
//     img: availability_icon,
//     options: [
//       { value: "instant-download", label: "Instant Download", checked: false },
//       { value: "available-now", label: "Available Now", checked: false },
//       {
//         value: "commission-available",
//         label: "Commission Available",
//         checked: false,
//       },
//       {
//         value: "similar-works",
//         label: "Sold but Similar Works Available",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "framing-options",
//     name: "FRAMING OPTIONS",
//     img: framingoption_icon,
//     options: [
//       { value: "framed", label: "Framed", checked: false },
//       { value: "unframed", label: "Unframed", checked: false },
//       {
//         value: "custom-framing",
//         label: "Custom Framing Available",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "shipping",
//     name: "SHIPPING",
//     img: shipping_icon,
//     options: [
//       { value: "local-pickup", label: "Local Pickup", checked: false },
//       {
//         value: "domestic-shipping",
//         label: "Domestic Shipping",
//         checked: false,
//       },
//       {
//         value: "international-shipping",
//         label: "International Shipping",
//         checked: false,
//       },
//     ],
//   },
// ];

// export const MarketSideFilters = [
//   {
//     id: "categories",
//     name: "CATEGORIES",
//     img: category_icon,
//     options: [
//       { value: "calligraphy", label: "Calligraphy", checked: false },
//       {
//         value: "drawing & illustration",
//         label: "Drawing & Illustration",
//         checked: false,
//       },
//       { value: "graphics", label: "Graphics", checked: false },
//       { value: "mixed media", label: "Mixed Media", checked: false },
//       { value: "painting", label: "Painting", checked: false },
//       { value: "photography", label: "Photography", checked: false },
//       { value: "printmaking", label: "Printmaking", checked: false },
//       { value: "sculpture", label: "Sculpture", checked: false },
//     ],
//   },
//   {
//     id: "format",
//     name: "FORMAT",
//     img: format_icon,
//     options: [
//       {
//         value: "Digital Print on Archival Paper",
//         label: "Digital Print on Archival Paper",
//         checked: false,
//       },
//       { value: "Ink on Paper", label: "Ink on Paper", checked: false },
//       {
//         value: "Mixed Media on Canvas",
//         label: "Mixed Media on Canvas",
//         checked: false,
//       },
//       {
//         value: "Engraving on Wood or Metal",
//         label: "Engraving on Wood or Metal",
//         checked: false,
//       },
//       { value: "Oil on Canvas", label: "Oil on Canvas", checked: false },
//       { value: "Acrylic on Canvas", label: "Acrylic on Canvas", checked: false },
//       {
//         value: "Watercolour on Paper",
//         label: "Watercolour on Paper",
//         checked: false,
//       },
//       {
//         value: "Freestanding Sculptures",
//         label: "Freestanding Sculptures",
//         checked: false,
//       },
//       {
//         value: "Metal Work Sculptures",
//         label: "Metal Work Sculptures",
//         checked: false,
//       },
//       { value: "3D Printed", label: "3D Printed", checked: false },
//       { value: "Mixed Media Assemblage", label: "Mixed Media Assemblage", checked: false },
//       { value: "C-Prints", label: "C-Prints", checked: false },
//       {
//         value: "Aluminium Mounted Prints",
//         label: "Aluminium Mounted Prints",
//         checked: false,
//       },
//       {
//         value: "Framed Photographs",
//         label: "Framed Photographs",
//         checked: false,
//       },
//       { value: "Collage on Canvas or Board", label: "Collage on Canvas or Board", checked: false },
//       {
//         value: "Assemblage on Panel",
//         label: "Assemblage on Panel",
//         checked: false,
//       },
//       {
//         value: "Textile Art (Fabric & Embroidery)",
//         label: "Textile Art (Fabric & Embroidery)",
//         checked: false,
//       },
//       {
//         value: "Screen Print on Paper",
//         label: "Screen Print on Paper",
//         checked: false,
//       },
//       {
//         value: "Lithograph on Paper",
//         label: "Lithograph on Paper",
//         checked: false,
//       },
//       { value: "Etching on Metal", label: "Etching on Metal", checked: false },
//       { value: "Monotype Prints", label: "Monotype Prints", checked: false },
//       {
//         value: "Giclée Prints on Canvas or Paper",
//         label: "Giclée Prints on Canvas or Paper",
//         checked: false,
//       },
//       { value: "Charcoal on Paper", label: "Charcoal on Paper", checked: false },
//       { value: "Pen and Ink on Paper", label: "Pen and Ink on Paper", checked: false },
//       { value: "Graphite on Board", label: "Graphite on Board", checked: false },
//       {
//         value: "Coloured Pencil on Bristol Paper",
//         label: "Coloured Pencil on Bristol Paper",
//         checked: false,
//       },
//       { value: "PDF", label: "PDF", checked: false },
//       { value: "AI", label: "AI", checked: false },
//       { value: "PSD", label: "PSD", checked: false },
//       { value: "SVG", label: "SVG", checked: false },
//       { value: "EPS", label: "EPS", checked: false },
//       { value: "JPG", label: "JPG", checked: false },
//       { value: "PNG", label: "PNG", checked: false },
//     ],
//   },
//   {
//     id: "size",
//     name: "SIZE",
//     img: size_icon,
//     options: [
//       { value: "small", label: "Small (under 50 cm)", checked: false },
//       { value: "medium", label: "Medium (50 - 100 cm)", checked: false },
//       { value: "large", label: "Large (100-150 cm)", checked: false },
//       {
//         value: "extra-large",
//         label: "Extra Large (Above 150 cm)",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "certifications",
//     name: "CERTIFICATIONS",
//     img: certification_icon,
//     options: [
//       {
//         value: "authenticity",
//         label: "Certificate of Authenticity",
//         checked: false,
//       },
//       {
//         value: "gallery-provenance",
//         label: "Gallery Provenance",
//         checked: false,
//       },
//       { value: "signed-by-artist", label: "Signed By Artist", checked: false },
//       { value: "copyrighted", label: "Copyrighted", checked: false },
//     ],
//   },
//   {
//     id: "location",
//     name: "LOCATION",
//     img: location_icon,
//     options: [
//       { value: "riyadh", label: "Riyadh", checked: false },
//       { value: "jeddah", label: "Jeddah", checked: false },
//       { value: "makkah", label: "Makkah", checked: false },
//       { value: "madina", label: "Madina", checked: false },
//       { value: "khobar", label: "Khobar", checked: false },
//       { value: "dammam", label: "Dammam", checked: false },
//       { value: "tabuk", label: "Tabuk", checked: false },
//       { value: "ta'if", label: "Ta'if", checked: false },
//       { value: "abha", label: "Abha", checked: false },
//       { value: "khamis mushait", label: "Khamis Mushait", checked: false },
//       { value: "buraidah", label: "Buraidah", checked: false },
//       { value: "hail", label: "Hail", checked: false },
//     ],
//   },
//   {
//     id: "price-range",
//     name: "PRICE RANGE",
//     img: pricerange_icon,
//     options: [
//       { value: "under-5000", label: "Under SAR 5,000", checked: false },
//       { value: "5000-20000", label: "SAR 5,000 - SAR 20,000", checked: false },
//       {
//         value: "20000-50000",
//         label: "SAR 20,000 - SAR 50,000",
//         checked: false,
//       },
//       {
//         value: "50000-100000",
//         label: "SAR 50,000 - SAR 100,000",
//         checked: false,
//       },
//       { value: "above-100000", label: "Above SAR 100,000", checked: false },
//     ],
//   },
//   {
//     id: "style",
//     name: "STYLE",
//     img: style_icon,
//     options: [
//       { value: "abstract", label: "Abstract", checked: false },
//       { value: "realism", label: "Realism", checked: false },
//       { value: "impressionism", label: "Impressionism", checked: false },
//       { value: "minimalism", label: "Minimalism", checked: false },
//       { value: "surrealism", label: "Surrealism", checked: false },
//       { value: "contemporary", label: "Contemporary", checked: false },
//       { value: "traditional", label: "Traditional", checked: false },
//     ],
//   },
//   {
//     id: "themes",
//     name: "THEMES",
//     img: theme_icon,
//     options: [
//       {
//         value: "cultural heritage",
//         label: "Cultural Heritage",
//         checked: false,
//       },
//       { value: "nature", label: "Nature", checked: false },
//       { value: "urban life", label: "Urban Life", checked: false },
//       { value: "portraits", label: "Portraits", checked: false },
//       { value: "conceptual", label: "Conceptual", checked: false },
//     ],
//   },
//   {
//     id: "year-of-creation",
//     name: "YEAR OF CREATION",
//     img: yearofcreation_icon,
//     options: [
//       {
//         value: "recent",
//         label: "Recent Works (Last 1-2 Years)",
//         checked: false,
//       },
//       {
//         value: "within-5-years",
//         label: "Within the Last 5 Years",
//         checked: false,
//       },
//       { value: "older-works", label: "Older Works (5+ Years)", checked: false },
//     ],
//   },
//   {
//     id: "intermediaries",
//     name: "INTERMEDIARIES",
//     img: intermediaries_icon,
//     options: [
//       { value: "athr gallery", label: "Athr Gallery", checked: false },
//       { value: "hafez gallery", label: "Hafez Gallery", checked: false },
//       { value: "hayy jameel", label: "Hayy Jameel", checked: false },
//       {
//         value: "landscape gallery",
//         label: "Landscape Gallery",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "availability",
//     name: "AVAILABILITY",
//     img: availability_icon,
//     options: [
//       { value: "instant-download", label: "Instant Download", checked: false },
//       { value: "available-now", label: "Available Now", checked: false },
//       {
//         value: "commission-available",
//         label: "Commission Available",
//         checked: false,
//       },
//       {
//         value: "similar-works",
//         label: "Sold but Similar Works Available",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "framing-options",
//     name: "FRAMING OPTIONS",
//     img: framingoption_icon,
//     options: [
//       { value: "framed", label: "Framed", checked: false },
//       { value: "unframed", label: "Unframed", checked: false },
//       {
//         value: "custom-framing",
//         label: "Custom Framing Available",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "shipping",
//     name: "SHIPPING",
//     img: shipping_icon,
//     options: [
//       { value: "local pickup", label: "Local Pickup", checked: false },
//       {
//         value: "domestic shipping",
//         label: "Domestic Shipping",
//         checked: false,
//       },
//       {
//         value: "international shipping",
//         label: "International Shipping",
//         checked: false,
//       },
//     ],
//   },
// ];

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
      { value: "Beginner (0-2 years)", label: "Beginner (0-2 years)", checked: false },
      {
        value: "Intermediate (3-5 years)",
        label: "Intermediate (3-5 years)",
        checked: false,
      },
      { value: "Advanced (6-10 years)", label: "Advanced (6-10 years)", checked: false },
      {
        value: "Professional (11+ years)",
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
      { value: "In-Person Workshop", label: "In-Person Workshop", checked: false },
      { value: "Lecture/Seminar", label: "Lecture/Seminar", checked: false },
      { value: "Online / Remote", label: "Online / Remote", checked: false },
      { value: "Hybrid (Online & In-Person)", label: "Hybrid (Online & In-Person)", checked: false },
    ],
  },
  {
    id: "duration",
    name: "DURATION",
    img: duration_icon,
    options: [
      { value: "One Day Workshop", label: "One Day Workshop", checked: false },
      { value: "Two Day Workshop", label: "Two Day Workshop", checked: false },
      { value: "Three Day Workshop", label: "Three Day Workshop", checked: false },
      { value: "Five Day Workshop", label: "Five Day Workshop", checked: false },
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
        value: "Certificate of Completion",
        label: "Certificate of Completion",
        checked: false,
      },
      {
        value: "professional accreditation",
        label: "Professional Accreditation",
        checked: false,
      },
      { value: "nano certificate", label: "Nano Certificate", checked: false },
      { value: "no certification", label: "No Certification", checked: false },
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
      { value: "ta'if", label: "Ta'if", checked: false },
      { value: "abha", label: "Abha", checked: false },
      { value: "khamis mushait", label: "Khamis Mushait", checked: false },
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
      { value: "Under SAR 1,000", label: "Under SAR 1,000", checked: false },
      {
        value: "SAR 1,000 - SAR 5,000",
        label: "SAR 1,000 - SAR 5,000",
        checked: false,
      },
      {
        value: "SAR 5,000 - SAR 10,000",
        label: "SAR 5,000 - SAR 10,000",
        checked: false,
      },
      { value: "custom budget", label: "Custom Budget", checked: false },
    ],
  },
  {
    id: "priceRange",
    name: "PRICE RANGE",
    img: pricerange_icon,
    options: [
      { value: "free", label: "Free", checked: false },
      { value: "Under SAR 500", label: "Under SAR 500", checked: false },
      { value: "SAR 500 - SAR 1,000", label: "SAR 500 - SAR 1,000", checked: false },
      { value:  "SAR 1,000 - SAR 5,000", label: "SAR 1,000 - SAR 5,000", checked: false },
      { value: "Above SAR 5,000", label: "Above SAR 5,000", checked: false },
    ],
  },
];

// export const NFTSideFilters = [
//   {
//     id: "categories",
//     name: "CATEGORIES",
//     img: category_icon,
//     options: [
//       { value: "calligraphy", label: "Calligraphy", checked: false },
//       {
//         value: "drawing & illustration",
//         label: "Drawing & Illustration",
//         checked: false,
//       },
//       { value: "graphics", label: "Graphics", checked: false },
//       { value: "mixed media", label: "Mixed Media", checked: false },
//       { value: "painting", label: "Painting", checked: false },
//       { value: "photography", label: "Photography", checked: false },
//       { value: "printmaking", label: "Printmaking", checked: false },
//       { value: "sculpture", label: "Sculpture", checked: false },
//     ],
//   },
//   {
//     id: "format",
//     name: "FORMAT",
//     img: format_icon,
//     options: [
//       {
//         value: "Digital Print on Archival Paper",
//         label: "Digital Print on Archival Paper",
//         checked: false,
//       },
//       { value: "3D Models", label: "3D Models", checked: false },
//       { value: "GIFs", label: "GIFs", checked: false },
//       { value: "Animation", label: "Animation", checked: false },
//       { value: "Video", label: "Video", checked: false },
//       { value: "Augmented Reality (AR)", label: "Augmented Reality (AR)", checked: false },
//       { value: "Virtual Reality (VR)", label: "Virtual Reality (VR)", checked: false },
//       { value: "jpeg", label: "JPEG", checked: false },
//       { value: "png", label: "PNG", checked: false },
//       { value: "3D Printed", label: "3D Printed", checked: false },
//       { value: "mp4", label: "MP4", checked: false },
//       { value: "svg", label: "SVG", checked: false },
//     ],
//   },
//   {
//     id: "edition",
//     name: "Edition",
//     img: edition_icon,
//     options: [
//       { value: "1 of 1 (Unique)", label: "1 of 1 (Unique)", checked: false },
//       { value: "Limited Edition", label: "Limited Edition", checked: false },
//       { value: "Open Edition", label: "Open Edition", checked: false },
//     ],
//   },
//   {
//     id: "rarity",
//     name: "Rarity",
//     img: rarity_icon,
//     options: [
//       { value: "common", label: "Common", checked: false },
//       { value: "rare", label: "Rare", checked: false },
//       { value: "epic", label: "Epic", checked: false },
//       { value: "legendary", label: "Legendary", checked: false },
//     ],
//   },
//   {
//     id: "licensing",
//     name: "LICENSING",
//     img: licensing_icon,
//     options: [
//       { value: "Commmercial Use Allowed", label: "Commmercial Use Allowed", checked: false },
//       { value: "Personal Use Only", label: "Personal Use Only", checked: false },
//       { value: "Resale Rights Included", label: "Resale Rights Included", checked: false },
//     ],
//   },
//   {
//     id: "size",
//     name: "SIZE",
//     img: size_icon,
//     options: [
//       {
//         value: "Small (Under 1000 x 1000 pixels)",
//         label: "Small (Under 1000 x 1000 pixels)",
//         checked: false,
//       },
//       {
//         value: "Medium (Up To 3000 x 3000 pixels)",
//         label: "Medium (Up To 3000 x 3000 pixels)",
//         checked: false,
//       },
//       {
//         value: "Large (Above 3000 x 3000 pixels)",
//         label: "Large (Above 3000 x 3000 pixels)",
//         checked: false,
//       },
//       { value: "custom", label: "Custom", checked: false },
//     ],
//   },
//   {
//     id: "price-range",
//     name: "PRICE RANGE",
//     img: pricerange_icon,
//     options: [
//       { value: "Under SAR 500", label: "Under SAR 500", checked: false },
//       { value: "SAR 500 - SAR 2,000", label: "SAR 500 - SAR 2,000", checked: false },
//       { value: "SAR 2,000 - SAR 10,000", label: "SAR 2,000 - SAR 10,000", checked: false },
//       { value: "aAbove SAR 10,000", label: "Above SAR 10,000", checked: false },
//       { value: "Auction / Bid-Based", label: "Auction / Bid-Based", checked: false },
//     ],
//   },
//   {
//     id: "style",
//     name: "STYLE",
//     img: style_icon,
//     options: [
//       { value: "abstract", label: "Abstract", checked: false },
//       { value: "realism", label: "Realism", checked: false },
//       { value: "impressionism", label: "Impressionism", checked: false },
//       { value: "minimalism", label: "Minimalism", checked: false },
//       { value: "surrealism", label: "Surrealism", checked: false },
//       { value: "contemporary", label: "Contemporary", checked: false },
//       { value: "traditional", label: "Traditional", checked: false },
//     ],
//   },
//   {
//     id: "themes",
//     name: "THEMES",
//     img: theme_icon,
//     options: [
//       {
//         value: "cultural-heritage",
//         label: "Cultural Heritage",
//         checked: false,
//       },
//       { value: "nature", label: "Nature", checked: false },
//       { value: "urban life", label: "Urban Life", checked: false },
//       { value: "portraits", label: "Portraits", checked: false },
//       { value: "conceptual", label: "Conceptual", checked: false },
//     ],
//   },
//   {
//     id: "year-of-creation",
//     name: "YEAR OF CREATION",
//     img: yearofcreation_icon,
//     options: [
//       {
//         value: "New Releases (Laast 7 Days)",
//         label: "New Releases (Laast 7 Days)",
//         checked: false,
//       },
//       { value: "Last 30 Days", label: "Last 30 Days", checked: false },
//       { value: "Older", label: "Older", checked: false },
//     ],
//   },
//   {
//     id: "availability",
//     name: "AVAILABILITY",
//     img: availability_icon,
//     options: [
//       { value: "Instant Download", label: "Instant Download", checked: false },
//       {
//         value: "Commission Available",
//         label: "Commission Available",
//         checked: false,
//       },
//     ],
//   },
// ];

// export const PrintSideFilters = [
//    {
//     id: "categories",
//     name: "CATEGORIES",
//     img: category_icon,
//     options: [
//       { value: "calligraphy", label: "Calligraphy", checked: false },
//       {
//         value: "drawing & illustration",
//         label: "Drawing & Illustration",
//         checked: false,
//       },
//       { value: "graphics", label: "Graphics", checked: false },
//       { value: "mixed media", label: "Mixed Media", checked: false },
//       { value: "painting", label: "Painting", checked: false },
//       { value: "photography", label: "Photography", checked: false },
//       { value: "printmaking", label: "Printmaking", checked: false },
//       { value: "sculpture", label: "Sculpture", checked: false },
//     ],
//   },
//   {
//     id: "format",
//     name: "FORMAT",
//     img: format_icon,
//     options: [
//       { value: "Giclée Prints", label: "Giclée Prints", checked: false },
//       { value: "Screen Prints", label: "Screen Prints", checked: false },
//       { value: "Lithographs", label: "Lithographs", checked: false },
//       { value: "Digital Prints", label: "Digital Prints", checked: false },
//       {
//         value: "Photographic Prints",
//         label: "Photographic Prints",
//         checked: false,
//       },
//       { value: "Posters", label: "Posters", checked: false },
//       { value: "Mugs", label: "Mugs", checked: false },
//       { value: "Canvas Bags", label: "Canvas Bags", checked: false },
//       { value: "Notebooks", label: "Notebooks", checked: false },
//       { value: "Phone Cases", label: "Phone Cases", checked: false },
//       { value: "T-shirts", label: "T-shirts", checked: false },
//       { value: "Calendars", label: "Calendars", checked: false },
//       { value: "Magnets", label: "Magnets", checked: false },
//       { value: "Keychains", label: "Keychains", checked: false },
//     ],
//   },
//   {
//     id: "size",
//     name: "SIZE",
//     img: size_icon,
//     options: [
//       { value: "Small (under 8 x 10 inches)", label: "Small (under 8 x 10 inches)", checked: false },
//       {
//         value: "Medium  (under 11 x 14 inches)",
//         label: "Medium  (under 11 x 14 inches)",
//         checked: false,
//       },
//       {
//         value: "Large  (under 16 x 20 inches)",
//         label: "Large  (under 16 x 20 inches)",
//         checked: false,
//       },
//       { value: "Custom Sizes Available", label: "Custom Sizes Available", checked: false },
//     ],
//   },
//   {
//     id: "location",
//     name: "LOCATION",
//     img: location_icon,
//     options: [
//       { value: "riyadh", label: "Riyadh", checked: false },
//       { value: "jeddah", label: "Jeddah", checked: false },
//       { value: "makkah", label: "Makkah", checked: false },
//       { value: "madina", label: "Madina", checked: false },
//       { value: "khobar", label: "Khobar", checked: false },
//       { value: "dammam", label: "Dammam", checked: false },
//       { value: "tabuk", label: "Tabuk", checked: false },
//       { value: "ta'if", label: "Ta'if", checked: false },
//       { value: "abha", label: "Abha", checked: false },
//       { value: "khamis mushait", label: "Khamis Mushait", checked: false },
//       { value: "buraidah", label: "Buraidah", checked: false },
//       { value: "hail", label: "Hail", checked: false },
//     ],
//   },
//   {
//     id: "price-range",
//     name: "PRICE RANGE",
//     img: pricerange_icon,
//     options: [
//       { value: "Under SAR 50", label: "Under SAR 50", checked: false },
//       { value: "SAR 50 - SAR 100", label: "SAR 50 - SAR 100", checked: false },
//       { value: "SAR 100 - SAR 200", label: "SAR 100 - SAR 200", checked: false },
//       { value: "SAR 200 - SAR 500", label: "SAR 200 - SAR 500", checked: false },
//       { value: "Above SAR 500", label: "Above SAR 500", checked: false },
//     ],
//   },
//   {
//     id: "style",
//     name: "STYLE",
//     img: style_icon,
//     options: [
//       { value: "abstract", label: "Abstract", checked: false },
//       { value: "realism", label: "Realism", checked: false },
//       { value: "impressionism", label: "Impressionism", checked: false },
//       { value: "minimalism", label: "Minimalism", checked: false },
//       { value: "surrealism", label: "Surrealism", checked: false },
//       { value: "contemporary", label: "Contemporary", checked: false },
//       { value: "traditional", label: "Traditional", checked: false },
//     ],
//   },
//   {
//     id: "themes",
//     name: "THEMES",
//     img: theme_icon,
//     options: [
//       {
//         value: "cultural heritage",
//         label: "Cultural Heritage",
//         checked: false,
//       },
//       { value: "nature", label: "Nature", checked: false },
//       { value: "urban life", label: "Urban Life", checked: false },
//       { value: "portraits", label: "Portraits", checked: false },
//       { value: "conceptual", label: "Conceptual", checked: false },
//     ],
//   },
//   {
//     id: "year-of-creation",
//     name: "YEAR OF CREATION",
//     img: yearofcreation_icon,
//     options: [
//       {
//         value: "Recent Works (Last 1-2 Years)",
//         label: "Recent Works (Last 1-2 Years)",
//         checked: false,
//       },
//       {
//         value: "Within the Last 5 Years",
//         label: "Within the Last 5 Years",
//         checked: false,
//       },
//       { value: "Older Works (5+ Years)", label: "Older Works (5+ Years)", checked: false },
//     ],
//   },
//   {
//     id: "availability",
//     name: "AVAILABILITY",
//     img: availability_icon,
//     options: [
//       { value: "Instant Download", label: "Instant Download", checked: false },
//       { value: "In Stock", label: "In Stock", checked: false },
//       { value: "Limited Edition", label: "Limited Edition", checked: false },
//       { value: "Exclusive Collections", label: "Exclusive Collections", checked: false },
//     ],
//   },
//   {
//     id: "framing-options",
//     name: "FRAMING OPTIONS",
//     img: framingoption_icon,
//     options: [
//       { value: "framed", label: "Framed", checked: false },
//       { value: "unframed", label: "Unframed", checked: false },
//       {
//         value: "Custom Framing Available",
//         label: "Custom Framing Available",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "shipping",
//     name: "SHIPPING",
//     img: shipping_icon,
//     options: [
//       { value: "local pickup", label: "Local Pickup", checked: false },
//       {
//         value: "domestic shipping",
//         label: "Domestic Shipping",
//         checked: false,
//       },
//       {
//         value: "international shipping",
//         label: "International Shipping",
//         checked: false,
//       },
//     ],
//   },
// ];

// --- NFT Side Filters ---
// export const NFTSideFilters = [
//   {
//     id: "categories",
//     name: "CATEGORIES",
//     img: category_icon,
//     options: [
//       // Values converted to lowercase
//       { value: "calligraphy", label: "Calligraphy", checked: false },
//       {
//         value: "drawing & illustration",
//         label: "Drawing & Illustration",
//         checked: false,
//       },
//       { value: "graphics", label: "Graphics", checked: false },
//       { value: "mixed media", label: "Mixed Media", checked: false },
//       { value: "painting", label: "Painting", checked: false },
//       { value: "photography", label: "Photography", checked: false },
//       { value: "printmaking", label: "Printmaking", checked: false },
//       { value: "sculpture", label: "Sculpture", checked: false },
//     ],
//   },
//   {
//     id: "format",
//     name: "FORMAT",
//     img: format_icon,
//     options: [
//       // Values converted to lowercase to match `toLowerHyphen` output
//       { value: "digital print on archival paper", label: "Digital Print on Archival Paper", checked: false },
//       { value: "3d models", label: "3D Models", checked: false },
//       { value: "gifs", label: "GIFs", checked: false },
//       { value: "animation", label: "Animation", checked: false },
//       { value: "video", label: "Video", checked: false },
//       { value: "augmented reality (ar)", label: "Augmented Reality (AR)", checked: false },
//       { value: "virtual reality (vr)", label: "Virtual Reality (VR)", checked: false },
//       { value: "jpeg", label: "JPEG", checked: false },
//       { value: "png", label: "PNG", checked: false },
//       { value: "3d printed", label: "3D Printed", checked: false },
//       { value: "mp4", label: "MP4", checked: false },
//       { value: "svg", label: "SVG", checked: false },
//     ],
//   },
//   {
//     id: "edition", // This id matches 'rarity' in the item for filtering in ArtMarket.jsx
//     name: "Edition",
//     img: edition_icon,
//     options: [
//       // Values must match the transformed `item.rarity` from ArtMarket.jsx:
//       // `rarity: item.artwork?.rarity === 'unique' ? '1of1' : toLowerHyphen(item.artwork?.rarity)`
//       { value: "1of1", label: "1 of 1 (Unique)", checked: false }, // "unique" in DB -> "1of1"
//       { value: "limited edition", label: "Limited Edition", checked: false }, // "Limited Edition" in DB -> "limited edition"
//       { value: "open edition", label: "Open Edition", checked: false }, // "Open Edition" in DB -> "open edition"
//     ],
//   },
//   {
//     id: "rarity", // This id also matches 'rarity' in the item. Be careful not to double filter.
//     name: "Rarity",
//     img: rarity_icon,
//     options: [
//       // Values converted to lowercase
//       { value: "common", label: "Common", checked: false },
//       { value: "rare", label: "Rare", checked: false },
//       { value: "epic", label: "Epic", checked: false },
//       { value: "legendary", label: "Legendary", checked: false },
//     ],
//   },
//   {
//     id: "licensing",
//     name: "LICENSING",
//     img: licensing_icon,
//     options: [
//       // Values converted to lowercase
//       { value: "commercial use allowed", label: "Commercial Use Allowed", checked: false },
//       { value: "personal use only", label: "Personal Use Only", checked: false },
//       { value: "resale rights included", label: "Resale Rights Included", checked: false },
//     ],
//   },
//   {
//     id: "size",
//     name: "SIZE",
//     img: size_icon,
//     options: [
//       // The `mapDigitalSizeToCategory` function in ArtMarket.jsx needs to be re-checked for these values
//       // Currently: `mapDigitalSizeToCategory` returns "small", "medium", "large", "custom".
//       // So, these `value` fields should match those.
//       { value: "small", label: "Small (Under 1000 x 1000 pixels)", checked: false },
//       { value: "medium", label: "Medium (Up To 3000 x 3000 pixels)", checked: false },
//       { value: "large", label: "Large (Above 3000 x 3000 pixels)", checked: false },
//       { value: "custom", label: "Custom", checked: false },
//     ],
//   },
//   {
//     id: "price-range",
//     name: "PRICE RANGE",
//     img: pricerange_icon,
//     options: [
//       // These are hardcoded and seem okay, assuming your price range logic matches
//       { value: "under-500", label: "Under SAR 500", checked: false }, // Changed from "Under SAR 500" for consistency
//       { value: "500-2000", label: "SAR 500 - SAR 2,000", checked: false }, // Changed from "SAR 500 - SAR 2,000"
//       { value: "2000-10000", label: "SAR 2,000 - SAR 10,000", checked: false }, // Changed from "SAR 2,000 - SAR 10,000"
//       { value: "above-10000", label: "Above SAR 10,000", checked: false }, // Changed from "aAbove SAR 10,000"
//       { value: "auction / bid-based", label: "Auction / Bid-Based", checked: false }, // Lowercased
//     ],
//   },
//   {
//     id: "style",
//     name: "STYLE",
//     img: style_icon,
//     options: [
//       // Values converted to lowercase
//       { value: "abstract", label: "Abstract", checked: false },
//       { value: "realism", label: "Realism", checked: false },
//       { value: "impressionism", label: "Impressionism", checked: false },
//       { value: "minimalism", label: "Minimalism", checked: false },
//       { value: "surrealism", label: "Surrealism", checked: false },
//       { value: "contemporary", label: "Contemporary", checked: false },
//       { value: "traditional", label: "Traditional", checked: false },
//     ],
//   },
//   {
//     id: "themes",
//     name: "THEMES",
//     img: theme_icon,
//     options: [
//       // Values converted to lowercase
//       {
//         value: "cultural heritage",
//         label: "Cultural Heritage",
//         checked: false,
//       },
//       { value: "nature", label: "Nature", checked: false },
//       { value: "urban life", label: "Urban Life", checked: false },
//       { value: "portraits", label: "Portraits", checked: false },
//       { value: "conceptual", label: "Conceptual", checked: false },
//     ],
//   },
//   {
//     id: "year-of-creation",
//     name: "YEAR OF CREATION",
//     img: yearofcreation_icon,
//     options: [
//       // These are handled by specific logic in ArtMarket.jsx. Values should match what that logic expects.
//       // Adjusted based on current `ArtMarket.jsx` logic for NFTs: 'new-release', 'last 30 days', 'older'.
//       {
//         value: "new-release", // Changed from "New Releases (Laast 7 Days)"
//         label: "New Releases (Last 7 Days)",
//         checked: false,
//       },
//       { value: "last 30 days", label: "Last 30 Days", checked: false }, // Changed from "Last 30 Days"
//       { value: "older", label: "Older", checked: false }, // Changed from "Older"
//     ],
//   },
//   {
//     id: "availability",
//     name: "AVAILABILITY",
//     img: availability_icon,
//     options: [
//       // Ensure these match the `item.availability` after the conditional formatting in ArtMarket.jsx
//       // `"Instant Download"` becomes `"instant download"`
//       { value: "instant download", label: "Instant Download", checked: false },
//       {
//         value: "commission available", // "Commission Available" -> "commission available"
//         label: "Commission Available",
//         checked: false,
//       },
//     ],
//   },
// ];

// --- Print Side Filters ---
// export const PrintSideFilters = [
//   {
//     id: "categories",
//     name: "CATEGORIES",
//     img: category_icon,
//     options: [
//       // Values converted to lowercase
//       { value: "calligraphy", label: "Calligraphy", checked: false },
//       {
//         value: "drawing & illustration",
//         label: "Drawing & Illustration",
//         checked: false,
//       },
//       { value: "graphics", label: "Graphics", checked: false },
//       { value: "mixed media", label: "Mixed Media", checked: false },
//       { value: "painting", label: "Painting", checked: false },
//       { value: "photography", label: "Photography", checked: false },
//       { value: "printmaking", label: "Printmaking", checked: false },
//       { value: "sculpture", label: "Sculpture", checked: false },
//     ],
//   },
//   {
//     id: "format",
//     name: "FORMAT",
//     img: format_icon,
//     options: [
//       // Values converted to lowercase
//       { value: "giclée prints", label: "Giclée Prints", checked: false },
//       { value: "screen prints", label: "Screen Prints", checked: false },
//       { value: "lithographs", label: "Lithographs", checked: false },
//       { value: "digital prints", label: "Digital Prints", checked: false },
//       {
//         value: "photographic prints",
//         label: "Photographic Prints",
//         checked: false,
//       },
//       { value: "posters", label: "Posters", checked: false },
//       { value: "mugs", label: "Mugs", checked: false },
//       { value: "canvas bags", label: "Canvas Bags", checked: false },
//       { value: "notebooks", label: "Notebooks", checked: false },
//       { value: "phone cases", label: "Phone Cases", checked: false },
//       { value: "t-shirts", label: "T-shirts", checked: false },
//       { value: "calendars", label: "Calendars", checked: false },
//       { value: "magnets", label: "Magnets", checked: false },
//       { value: "keychains", label: "Keychains", checked: false },
//     ],
//   },
//   {
//     id: "size",
//     name: "SIZE",
//     img: size_icon,
//     options: [
//       // These must match `mapDigitalSizeToCategory` outputs for Prints.
//       // `mapDigitalSizeToCategory` returns "small", "medium", "large", "custom".
//       { value: "small", label: "Small (under 8 x 10 inches)", checked: false },
//       { value: "medium", label: "Medium (under 11 x 14 inches)", checked: false },
//       { value: "large", label: "Large (under 16 x 20 inches)", checked: false },
//       { value: "custom", label: "Custom Sizes Available", checked: false }, // Label changed to reflect new value
//     ],
//   },
//   {
//     id: "location",
//     name: "LOCATION",
//     img: location_icon,
//     options: [
//       { value: "riyadh", label: "Riyadh", checked: false },
//       { value: "jeddah", label: "Jeddah", checked: false },
//       { value: "makkah", label: "Makkah", checked: false },
//       { value: "madina", label: "Madina", checked: false },
//       { value: "khobar", label: "Khobar", checked: false },
//       { value: "dammam", label: "Dammam", checked: false },
//       { value: "tabuk", label: "Tabuk", checked: false },
//       { value: "ta'if", label: "Ta'if", checked: false },
//       { value: "abha", label: "Abha", checked: false },
//       { value: "khamis mushait", label: "Khamis Mushait", checked: false },
//       { value: "buraidah", label: "Buraidah", checked: false },
//       { value: "hail", label: "Hail", checked: false },
//     ],
//   },
//   {
//     id: "price-range",
//     name: "PRICE RANGE",
//     img: pricerange_icon,
//     options: [
//       // Values converted to lowercase and hyphenated for consistency with other ranges
//       { value: "under-50", label: "Under SAR 50", checked: false },
//       { value: "50-100", label: "SAR 50 - SAR 100", checked: false },
//       { value: "100-200", label: "SAR 100 - SAR 200", checked: false },
//       { value: "200-500", label: "SAR 200 - SAR 500", checked: false },
//       { value: "above-500", label: "Above SAR 500", checked: false },
//     ],
//   },
//   {
//     id: "style",
//     name: "STYLE",
//     img: style_icon,
//     options: [
//       // Values converted to lowercase
//       { value: "abstract", label: "Abstract", checked: false },
//       { value: "realism", label: "Realism", checked: false },
//       { value: "impressionism", label: "Impressionism", checked: false },
//       { value: "minimalism", label: "Minimalism", checked: false },
//       { value: "surrealism", label: "Surrealism", checked: false },
//       { value: "contemporary", label: "Contemporary", checked: false },
//       { value: "traditional", label: "Traditional", checked: false },
//     ],
//   },
//   {
//     id: "themes",
//     name: "THEMES",
//     img: theme_icon,
//     options: [
//       // Values converted to lowercase
//       {
//         value: "cultural heritage",
//         label: "Cultural Heritage",
//         checked: false,
//       },
//       { value: "nature", label: "Nature", checked: false },
//       { value: "urban life", label: "Urban Life", checked: false },
//       { value: "portraits", label: "Portraits", checked: false },
//       { value: "conceptual", label: "Conceptual", checked: false },
//     ],
//   },
//   {
//     id: "year-of-creation",
//     name: "YEAR OF CREATION",
//     img: yearofcreation_icon,
//     options: [
//       // These are handled by specific logic in ArtMarket.jsx. Values should match what that logic expects.
//       {
//         value: "recent", // No change needed here, as the logic for Market/Prints uses "recent", "within-5-years", "older-works"
//         label: "Recent Works (Last 1-2 Years)",
//         checked: false,
//       },
//       {
//         value: "within-5-years",
//         label: "Within the Last 5 Years",
//         checked: false,
//       },
//       { value: "older-works", label: "Older Works (5+ Years)", checked: false },
//     ],
//   },
//   {
//     id: "availability",
//     name: "AVAILABILITY",
//     img: availability_icon,
//     options: [
//       // Values converted to lowercase
//       { value: "instant download", label: "Instant Download", checked: false },
//       { value: "in stock", label: "In Stock", checked: false },
//       { value: "limited edition", label: "Limited Edition", checked: false },
//       { value: "exclusive collections", label: "Exclusive Collections", checked: false },
//     ],
//   },
//   {
//     id: "framing-options",
//     name: "FRAMING OPTIONS",
//     img: framingoption_icon,
//     options: [
//       // Values converted to lowercase
//       { value: "framed", label: "Framed", checked: false },
//       { value: "unframed", label: "Unframed", checked: false },
//       {
//         value: "custom framing available",
//         label: "Custom Framing Available",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "shipping",
//     name: "SHIPPING",
//     img: shipping_icon,
//     options: [
//       // Values converted to lowercase
//       { value: "local pickup", label: "Local Pickup", checked: false },
//       {
//         value: "domestic shipping",
//         label: "Domestic Shipping",
//         checked: false,
//       },
//       {
//         value: "international shipping",
//         label: "International Shipping",
//         checked: false,
//       },
//     ],
//   },
// ];

export const MarketSideFilters = [
  {
    id: "categories",
    name: "CATEGORIES",
    img: category_icon,
    options: [
      { value: "Calligraphy", label: "Calligraphy", checked: false },
      {
        value: "Drawing & Illustration",
        label: "Drawing & Illustration",
        checked: false,
      },
      { value: "Graphics", label: "Graphics", checked: false },
      { value: "Mixed Media", label: "Mixed Media", checked: false },
      { value: "Painting", label: "Painting", checked: false },
      { value: "Photography", label: "Photography", checked: false },
      { value: "Printmaking", label: "Printmaking", checked: false },
      { value: "Sculpture", label: "Sculpture", checked: false },
    ],
  },
  {
    id: "format",
    name: "FORMAT",
    img: format_icon,
    options: [
      {
        value: "Digital Print on Archival Paper",
        label: "Digital Print on Archival Paper",
        checked: false,
      },
      { value: "Ink on Paper", label: "Ink on Paper", checked: false },
      {
        value: "Mixed Media on Canvas",
        label: "Mixed Media on Canvas",
        checked: false,
      },
      {
        value: "Engraving on Wood or Metal",
        label: "Engraving on Wood or Metal",
        checked: false,
      },
      { value: "Oil on Canvas", label: "Oil on Canvas", checked: false },
      { value: "Acrylic on Canvas", label: "Acrylic on Canvas", checked: false },
      {
        value: "Watercolour on Paper",
        label: "Watercolour on Paper",
        checked: false,
      },
      {
        value: "Freestanding Sculptures",
        label: "Freestanding Sculptures",
        checked: false,
      },
      {
        value: "Metal Work Sculptures",
        label: "Metal Work Sculptures",
        checked: false,
      },
      { value: "3D Printed", label: "3D Printed", checked: false },
      { value: "Mixed Media Assemblage", label: "Mixed Media Assemblage", checked: false },
      { value: "C-Prints", label: "C-Prints", checked: false },
      {
        value: "Aluminium Mounted Prints",
        label: "Aluminium Mounted Prints",
        checked: false,
      },
      {
        value: "Framed Photographs",
        label: "Framed Photographs",
        checked: false,
      },
      { value: "Collage on Canvas or Board", label: "Collage on Canvas or Board", checked: false },
      {
        value: "Assemblage on Panel",
        label: "Assemblage on Panel",
        checked: false,
      },
      {
        value: "Textile Art (Fabric & Embroidery)",
        label: "Textile Art (Fabric & Embroidery)",
        checked: false,
      },
      {
        value: "Screen Print on Paper",
        label: "Screen Print on Paper",
        checked: false,
      },
      {
        value: "Lithograph on Paper",
        label: "Lithograph on Paper",
        checked: false,
      },
      { value: "Etching on Metal", label: "Etching on Metal", checked: false },
      { value: "Monotype Prints", label: "Monotype Prints", checked: false },
      {
        value: "Giclée Prints on Canvas or Paper",
        label: "Giclée Prints on Canvas or Paper",
        checked: false,
      },
      { value: "Charcoal on Paper", label: "Charcoal on Paper", checked: false },
      { value: "Pen and Ink on Paper", label: "Pen and Ink on Paper", checked: false },
      { value: "Graphite on Board", label: "Graphite on Board", checked: false },
      {
        value: "Coloured Pencil on Bristol Paper",
        label: "Coloured Pencil on Bristol Paper",
        checked: false,
      },
      { value: "PDF", label: "PDF", checked: false },
      { value: "AI", label: "AI", checked: false },
      { value: "PSD", label: "PSD", checked: false },
      { value: "SVG", label: "SVG", checked: false },
      { value: "EPS", label: "EPS", checked: false },
      { value: "JPG", label: "JPG", checked: false },
      { value: "PNG", label: "PNG", checked: false },
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
        value: "extra large",
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
        value: "Certificate of Authenticity",
        label: "Certificate of Authenticity",
        checked: false,
      },
      {
        value: "Gallery Provenance",
        label: "Gallery Provenance",
        checked: false,
      },
      { value: "Signed By Artist", label: "Signed By Artist", checked: false },
      { value: "Copyrighted", label: "Copyrighted", checked: false },
    ],
  },
  {
    id: "location",
    name: "LOCATION",
    img: location_icon,
    options: [
      { value: "Riyadh", label: "Riyadh", checked: false },
      { value: "Jeddah", label: "Jeddah", checked: false },
      { value: "Makkah", label: "Makkah", checked: false },
      { value: "Madina", label: "Madina", checked: false },
      { value: "Khobar", label: "Khobar", checked: false },
      { value: "Dammam", label: "Dammam", checked: false },
      { value: "Tabuk", label: "Tabuk", checked: false },
      { value: "Ta'if", label: "Ta'if", checked: false },
      { value: "Abha", label: "Abha", checked: false },
      { value: "Khamis Mushait", label: "Khamis Mushait", checked: false },
      { value: "Buraidah", label: "Buraidah", checked: false },
      { value: "Hail", label: "Hail", checked: false },
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
      { value: "Abstract", label: "Abstract", checked: false },
      { value: "Realism", label: "Realism", checked: false },
      { value: "Impressionism", label: "Impressionism", checked: false },
      { value: "Minimalism", label: "Minimalism", checked: false },
      { value: "Surrealism", label: "Surrealism", checked: false },
      { value: "Contemporary", label: "Contemporary", checked: false },
      { value: "Traditional", label: "Traditional", checked: false },
    ],
  },
  {
    id: "themes",
    name: "THEMES",
    img: theme_icon,
    options: [
      {
        value: "Cultural Heritage",
        label: "Cultural Heritage",
        checked: false,
      },
      { value: "Nature", label: "Nature", checked: false },
      { value: "Urban Life", label: "Urban Life", checked: false },
      { value: "Portraits", label: "Portraits", checked: false },
      { value: "Conceptual", label: "Conceptual", checked: false },
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
      { value: "Athr Gallery", label: "Athr Gallery", checked: false },
      { value: "Hafez Gallery", label: "Hafez Gallery", checked: false },
      { value: "Hayy Jameel", label: "Hayy Jameel", checked: false },
      {
        value: "Landscape Gallery",
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
      { value: "Instant Download", label: "Instant Download", checked: false },
      { value: "Available Now", label: "Available Now", checked: false },
      {
        value: "Commission Available",
        label: "Commission Available",
        checked: false,
      },
      {
        value: "Sold but Similar Works Available",
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
      { value: "Framed", label: "Framed", checked: false },
      { value: "Unframed", label: "Unframed", checked: false },
      {
        value: "Custom Framing Available",
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
      { value: "Local Pickup", label: "Local Pickup", checked: false },
      {
        value: "Domestic Shipping",
        label: "Domestic Shipping",
        checked: false,
      },
      {
        value: "International Shipping",
        label: "International Shipping",
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
      { value: "Calligraphy", label: "Calligraphy", checked: false },
      {
        value: "Drawing & Illustration",
        label: "Drawing & Illustration",
        checked: false,
      },
      { value: "Graphics", label: "Graphics", checked: false },
      { value: "Mixed Media", label: "Mixed Media", checked: false },
      { value: "Painting", label: "Painting", checked: false },
      { value: "Photography", label: "Photography", checked: false },
      { value: "Printmaking", label: "Printmaking", checked: false },
      { value: "Sculpture", label: "Sculpture", checked: false },
    ],
  },
  {
    id: "format",
    name: "FORMAT",
    img: format_icon,
    options: [
      { value: "Giclée Prints", label: "Giclée Prints", checked: false },
      { value: "Screen Prints", label: "Screen Prints", checked: false },
      { value: "Lithographs", label: "Lithographs", checked: false },
      { value: "Digital Prints", label: "Digital Prints", checked: false },
      {
        value: "Photographic Prints",
        label: "Photographic Prints",
        checked: false,
      },
      { value: "Posters", label: "Posters", checked: false },
      { value: "Mugs", label: "Mugs", checked: false },
      { value: "Canvas Bags", label: "Canvas Bags", checked: false },
      { value: "Notebooks", label: "Notebooks", checked: false },
      { value: "Phone Cases", label: "Phone Cases", checked: false },
      { value: "T-shirts", label: "T-shirts", checked: false },
      { value: "Calendars", label: "Calendars", checked: false },
      { value: "Magnets", label: "Magnets", checked: false },
      { value: "Keychains", label: "Keychains", checked: false },
    ],
  },
  {
    id: "size",
    name: "SIZE",
    img: size_icon,
    options: [      
{ value: "small", label: "Small (under 8 x 10 inches)", checked: false },
      { value: "medium", label: "Medium (under 11 x 14 inches)", checked: false },
      { value: "large", label: "Large (under 16 x 20 inches)", checked: false },
      { value: "custom", label: "Custom Sizes Available", checked: false }, 
    ],
  },
  {
    id: "location",
    name: "LOCATION",
    img: location_icon,
    options: [
      { value: "Riyadh", label: "Riyadh", checked: false },
      { value: "Jeddah", label: "Jeddah", checked: false },
      { value: "Makkah", label: "Makkah", checked: false },
      { value: "Madina", label: "Madina", checked: false },
      { value: "Khobar", label: "Khobar", checked: false },
      { value: "Dammam", label: "Dammam", checked: false },
      { value: "Tabuk", label: "Tabuk", checked: false },
      { value: "Ta'if", label: "Ta'if", checked: false },
      { value: "Abha", label: "Abha", checked: false },
      { value: "Khamis Mushait", label: "Khamis Mushait", checked: false },
      { value: "Buraidah", label: "Buraidah", checked: false },
      { value: "Hail", label: "Hail", checked: false },
    ],
  },

  {
    id: "price-range",
    name: "PRICE RANGE",
    img: pricerange_icon,
    options: [
      { value: "under-50", label: "Under SAR 50", checked: false },
      { value: "50-100", label: "SAR 50 - SAR 100", checked: false },
      { value: "100-200", label: "SAR 100 - SAR 200", checked: false },
      { value: "200-500", label: "SAR 200 - SAR 500", checked: false },
      { value: "above-500", label: "Above SAR 500", checked: false },
    ],
  },
 {
    id: "style",
    name: "STYLE",
    img: style_icon,
    options: [
      { value: "Abstract", label: "Abstract", checked: false },
      { value: "Realism", label: "Realism", checked: false },
      { value: "Impressionism", label: "Impressionism", checked: false },
      { value: "Minimalism", label: "Minimalism", checked: false },
      { value: "Surrealism", label: "Surrealism", checked: false },
      { value: "Contemporary", label: "Contemporary", checked: false },
      { value: "Traditional", label: "Traditional", checked: false },
    ],
  },

 {
    id: "themes",
    name: "THEMES",
    img: theme_icon,
    options: [
      {
        value: "Cultural Heritage",
        label: "Cultural Heritage",
        checked: false,
      },
      { value: "Nature", label: "Nature", checked: false },
      { value: "Urban Life", label: "Urban Life", checked: false },
      { value: "Portraits", label: "Portraits", checked: false },
      { value: "Conceptual", label: "Conceptual", checked: false },
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
      
      { value: "Instant Download", label: "Instant Download", checked: false },
      { value: "In Stock", label: "In Stock", checked: false },
      { value: "Limited Edition", label: "Limited Edition", checked: false },
      { value: "Exclusive Collections", label: "Exclusive Collections", checked: false },
    ],
  },
  {
    id: "framing-options",
    name: "FRAMING OPTIONS",
    img: framingoption_icon,
    options: [
      { value: "Framed", label: "Framed", checked: false },
      { value: "Unframed", label: "Unframed", checked: false },
      {
        value: "Custom Framing Available",
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
      { value: "Local Pickup", label: "Local Pickup", checked: false },
      {
        value: "Domestic Shipping",
        label: "Domestic Shipping",
        checked: false,
      },
      {
        value: "International Shipping",
        label: "International Shipping",
        checked: false,
      },
    ],
  },

];

export const NFTSideFilters = [
  {
    id: "categories",
    name: "CATEGORIES",
    img: category_icon,
    options: [
      { value: "Calligraphy", label: "Calligraphy", checked: false },
      {
        value: "Drawing & Illustration",
        label: "Drawing & Illustration",
        checked: false,
      },
      { value: "Graphics", label: "Graphics", checked: false },
      { value: "Mixed Media", label: "Mixed Media", checked: false },
      { value: "Painting", label: "Painting", checked: false },
      { value: "Photography", label: "Photography", checked: false },
      { value: "Printmaking", label: "Printmaking", checked: false },
      { value: "Sculpture", label: "Sculpture", checked: false },
    ],
  },
  {
    id: "format",
    name: "FORMAT",
    img: format_icon,
    options: [
      { value: "Digital Print on Archival Paper", label: "Digital Print on Archival Paper", checked: false },
      { value: "3D Models", label: "3D Models", checked: false },
      { value: "GIFs", label: "GIFs", checked: false },
      { value: "Animation", label: "Animation", checked: false },
      { value: "Video", label: "Video", checked: false },
      { value: "Augmented Reality (AR)", label: "Augmented Reality (AR)", checked: false },
      { value: "Virtual Reality (VR)", label: "Virtual Reality (VR)", checked: false },
      { value: "JPEG", label: "JPEG", checked: false },
      { value: "PNG", label: "PNG", checked: false },
      { value: "3D Printed", label: "3D Printed", checked: false },
      { value: "MP4", label: "MP4", checked: false },
      { value: "SVG", label: "SVG", checked: false },
    ],
  },
  {
    id: "edition", 
    name: "Edition",
    img: edition_icon,
    options: [
      { value: "1 of 1 (Unique)", label: "1 of 1 (Unique)", checked: false }, 
      { value: "Limited Edition", label: "Limited Edition", checked: false }, 
      { value: "Open Edition", label: "Open Edition", checked: false },    ],
  },
  {
    id: "rarity", 
    name: "Rarity",
    img: rarity_icon,
    options: [
      { value: "Common", label: "Common", checked: false },
      { value: "Rare", label: "Rare", checked: false },
      { value: "Epic", label: "Epic", checked: false },
      { value: "Legendary", label: "Legendary", checked: false },
    ],
  },
  {
    id: "licensing",
    name: "LICENSING",
    img: licensing_icon,
    options: [
      { value: "Commercial Use Allowed", label: "Commercial Use Allowed", checked: false },
      { value: "Personal Use Only", label: "Personal Use Only", checked: false },
      { value: "Resale Rights Included", label: "Resale Rights Included", checked: false },
    ],
  },
  {
    id: "size",
    name: "SIZE",
    img: size_icon,
    options: [
      { value: "small", label: "Small (Under 1000 x 1000 pixels)", checked: false },
      { value: "medium", label: "Medium (Up To 3000 x 3000 pixels)", checked: false },
      { value: "large", label: "Large (Above 3000 x 3000 pixels)", checked: false },
      { value: "custom", label: "Custom", checked: false },
    ],
  },
  {
    id: "price-range",
    name: "PRICE RANGE",
    img: pricerange_icon,
    options: [
      { value: "under-500", label: "Under SAR 500", checked: false }, 
      { value: "500-2000", label: "SAR 500 - SAR 2,000", checked: false }, 
      { value: "2000-10000", label: "SAR 2,000 - SAR 10,000", checked: false }, 
      { value: "above-10000", label: "Above SAR 10,000", checked: false },
      { value: "auction / bid-based", label: "Auction / Bid-Based", checked: false },     ],
  },
  {
    id: "style",
    name: "STYLE",
    img: style_icon,
    options: [
      { value: "Abstract", label: "Abstract", checked: false },
      { value: "Realism", label: "Realism", checked: false },
      { value: "Impressionism", label: "Impressionism", checked: false },
      { value: "Minimalism", label: "Minimalism", checked: false },
      { value: "Surrealism", label: "Surrealism", checked: false },
      { value: "Contemporary", label: "Contemporary", checked: false },
      { value: "Traditional", label: "Traditional", checked: false },
    ],
  },

 {
    id: "themes",
    name: "THEMES",
    img: theme_icon,
    options: [
      {
        value: "Cultural Heritage",
        label: "Cultural Heritage",
        checked: false,
      },
      { value: "Nature", label: "Nature", checked: false },
      { value: "Urban Life", label: "Urban Life", checked: false },
      { value: "Portraits", label: "Portraits", checked: false },
      { value: "Conceptual", label: "Conceptual", checked: false },
    ],
  },

  {
    id: "year-of-creation",
    name: "YEAR OF CREATION",
    img: yearofcreation_icon,
    options: [
      {
        value: "new-release", 
        label: "New Releases (Last 7 Days)",
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
           { value: "Instant Download", label: "Instant Download", checked: false },
      {
        value: "Commission Available", 
        label: "Commission Available",
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



