export const site = {
  brand: "Blue Engineering & Trade",
  brandShort: "BLUE",
  tagline:
    "Power lines, energy systems, and electromechanical works across Ethiopia.",
  heroHeadline: "Infrastructure that carries power further.",
  heroSupport:
    "MV/LV lines, renewable systems, and productive-use technology, designed, supplied, and installed from Addis Ababa.",

  nav: [
    { label: "Home", to: "/", type: "link" as const },
    {
      label: "About",
      to: "/about",
      type: "dropdown" as const,
      children: [
        { label: "About Us", to: "/about" },
        { label: "Organization", to: "/about/organization" },
        { label: "Our Team", to: "/about/team" },
      ],
    },
    { label: "Projects", to: "/#projects", type: "hash" as const },
    {
      label: "Services",
      to: "/services",
      type: "dropdown" as const,
      children: [
        { label: "Overview", to: "/services" },
        { label: "Categories", to: "/services/categories" },
      ],
    },
    { label: "Contact", to: "/#contact", type: "hash" as const },
  ],

  contact: {
    email: "info@blueethio.com",
    emailAlt: "blueengitrading@gmail.com",
    emailEngineering: "engineering@blueethio.com",
    phone: "+251-911-41-6595",
    phoneAlt: "+251-921-09-2258",
    phoneExtra: "+251-984-56-2730",
    location: "Addis Ababa, Ethiopia",
    address: "Arada, Somale Tera Beto Bldg - F320, Addis Ababa, Ethiopia",
    bdOffice: "Adama, Soretti Bldg - 3rd floor",
    hours: "Mon - Sat, 8:30am - 6:00pm",
    website: "www.blueethio.com",
  },

  social: [
    { name: "Facebook", href: "#", icon: "facebook" as const },
    { name: "X", href: "#", icon: "x" as const },
    { name: "LinkedIn", href: "#", icon: "linkedin" as const },
    { name: "Instagram", href: "#", icon: "instagram" as const },
    { name: "YouTube", href: "#", icon: "youtube" as const },
  ],

  about: {
    established: "2013 EC",
    summary:
      "We design, supply, install, and construct electromechanical works centered on MV and LV electric lines, energy from solar and wind, and distribution automation for clients across Ethiopia.",
    story:
      "BLUE Engineering & Trading PLC was established in 2013 EC with a vision of becoming a leading electromechanical firm in Ethiopia. It was founded by young graduates to serve individual and organizational customers with cost-effective, quality electromechanical works and consultancy.",
    whoWeAre:
      "The company is engaged in design, supply, installation, and construction in the electromechanical sector. Core work centers on erection of MV and LV electric lines, energy development from solar and wind, and distribution system automation as main and subcontractor.",
    ruralDivision: {
      title: "Rural Technologies Division",
      year: "2024",
      summary:
        "A dedicated division within Blue Engineering focused on rural power solutions and productive technologies for underserved communities. It uses our power-infrastructure experience to close gaps in reliable electricity access.",
      points: [
        "Affordable, efficient energy solutions for rural communities",
        "Energy-efficient appliances and productive-use equipment",
        "Community engagement, training, and local entrepreneurship",
        "Financing models that improve access for households and small businesses",
      ],
    },
    mission:
      "Execute every project to the highest quality by building international standards and continuous learning, so we compete at the highest level nationally and internationally.",
    vision:
      "To be the leading electromechanical service provider in Ethiopia and East Africa.",
    values: [
      {
        title: "Professionalism",
        description:
          "Deliver to the requirement and past the level of satisfaction.",
      },
      {
        title: "Excellence",
        description:
          "High standards, advanced methods, and a drive to finish.",
      },
      {
        title: "Ethics",
        description:
          "Honesty, integrity, and mutual respect in every activity.",
      },
      {
        title: "Quality",
        description:
          "Commitment to the highest national quality standards.",
      },
      {
        title: "Safety",
        description: "Planned and executed with no harm, no accident.",
      },
    ],
    ruralPrinciples: [
      {
        title: "Affordability",
        description: "Technologies priced within reach of rural users.",
      },
      {
        title: "Efficiency",
        description: "Maximize output while minimizing energy use.",
      },
      {
        title: "Local adaptation",
        description: "Fit climate, agriculture, and local conditions.",
      },
      {
        title: "Diversity of sources",
        description: "Options that suit different needs and settings.",
      },
      {
        title: "Scalability",
        description: "Systems that scale with community needs.",
      },
      {
        title: "Integration",
        description: "Designed to work with existing local infrastructure.",
      },
    ],
    majorServices: [
      "Power line construction & maintenance",
      "Substation equipment installation, test & commissioning",
      "Switch gear installation, testing & commissioning",
      "Electromechanical equipment install, test, commission & maintain",
      "Medium voltage line equipment install, test, commission & maintain",
      "Building & industrial electric install, test, commission & maintain",
      "System automation and control",
      "Energy development works",
      "Telecom infrastructure supply & installation",
      "System feasibility assessments",
    ],
  },

  organization: {
    summary:
      "BLUE Engineering & Trading PLC is run by dedicated full-time and contract staff with strong engineering expertise and professional ethics. We also maintain a panel of specialists available when projects require them.",
    structure:
      "Staff are organized into five departments led by experienced professionals. A General Manager and Operational Manager (Project Team Leader) oversee overall company activities.",
  },

  team: [
    {
      name: "Mr. Girma Shumi",
      role: "General Manager",
      phone: "+251 92 109 2258",
      email: "engineering@blueethio.com",
      bio: "Experienced design engineer leading technical and managerial delivery across projects.",
      image: "",
    },
    {
      name: "Mr. Abubeker Said",
      role: "Construction Foreman",
      phone: "+251-911-41-6595",
      email: "info@blueethio.com",
      bio: "Field leadership for construction execution and site coordination.",
      image: "",
    },
    {
      name: "Mr. Tamrat Edossa Toli",
      role: "Site Manager",
      phone: "+251-911-41-6595",
      email: "info@blueethio.com",
      bio: "Electrical power engineering focus with hands-on site management.",
      image: "",
    },
    {
      name: "Haymanot Adamu",
      role: "Surveyor",
      phone: "+251-911-41-6595",
      email: "info@blueethio.com",
      bio: "Surveying technology support for accurate field layout and planning.",
      image: "",
    },
    {
      name: "Abinet Endale Mamo",
      role: "Team member",
      phone: "",
      email: "",
      bio: "Part of the Blue Engineering project and operations team.",
      image: "",
    },
    {
      name: "Gebeyehu Tadesse",
      role: "Team member",
      phone: "",
      email: "",
      bio: "Part of the Blue Engineering project and operations team.",
      image: "",
    },
  ],

  stats: [
    { value: "22+", label: "Projects completed" },
    { value: "20+", label: "Clients served" },
    { value: "22+", label: "Engineers" },
    { value: "5+", label: "Years in field" },
  ],

  servicePillars: [
    {
      id: "01",
      title: "Power & lines",
      description:
        "Erection, installation, testing, commissioning, and maintenance of MV/LV electric lines and electromechanical systems.",
    },
    {
      id: "02",
      title: "Renewable & off-grid",
      description:
        "Standalone solar and hybrid power systems for communities and facilities beyond reliable grid reach.",
    },
    {
      id: "03",
      title: "Productive-use tech",
      description:
        "Equipment that turns electricity into livelihoods: agriculture, processing, water, and ICT.",
    },
  ],

  services: [
    {
      title: "Productive-use supply & install",
      description:
        "Machinery, pumps, processing equipment, and turnkey plant options that raise rural productivity.",
    },
    {
      title: "Standalone renewable power",
      description:
        "Solar and hybrid systems sized for homes, clinics, schools, and productive loads.",
    },
    {
      title: "Business development",
      description:
        "Identify viable uses of electricity that create income and local employment.",
    },
    {
      title: "Finance mobilization",
      description:
        "Connect projects with financing pathways so solutions move from plan to operation.",
    },
    {
      title: "Feasibility studies",
      description:
        "Technical and business-case studies that clarify scope, cost, and outcomes.",
    },
    {
      title: "After-sales & spare parts",
      description:
        "Maintenance so installed systems stay productive long after commissioning.",
    },
    {
      title: "Training & operations",
      description:
        "Hands-on training so operators use equipment safely and run basic operations.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Planning",
      description: "Concept, viability, and inception.",
    },
    {
      step: "02",
      title: "Design development",
      description: "Engineering design developed for delivery.",
    },
    {
      step: "03",
      title: "Documentation",
      description:
        "Documentation, procurement, contract administration, and inspection.",
    },
    {
      step: "04",
      title: "Deliver",
      description: "Testing, handover, and closeout.",
    },
  ],

  serviceCategories: [
    {
      id: "coffee",
      title: "Coffee processing machineries",
      filter: "Coffee Processing Machineries",
      description:
        "Small-scale fresh coffee bean pulping, shelling, peeling, and related processing equipment for producers and cooperatives.",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "grain",
      title: "Grain mills",
      filter: "Grain Mills",
      description:
        "Compact milling machines for wheat, corn, barley, and rice, built for farmers, small businesses, and home-based operations.",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "ict",
      title: "ICT appliances",
      filter: "ICT Appliances",
      description:
        "Solar-powered ICT solutions that keep communication, education, and data services running in remote schools, clinics, and communities.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "solar-pumps",
      title: "Solar water pumps",
      filter: "Solar Water Pumps",
      description:
        "Solar pumping systems for irrigation and water access where grid power is limited or unreliable.",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "offgrid",
      title: "Off-grid solar power",
      filter: "Off-grid Solar Power Solutions",
      description:
        "Standalone and hybrid solar power systems sized for homes, facilities, and productive loads beyond the grid.",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "oil",
      title: "Oil pressing machines",
      filter: "Oil Pressing Machines",
      description:
        "Processing equipment that supports local oil production and rural value addition.",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  productCategories: [
    "Agricultural machineries",
    "Off-grid power systems",
    "Solar water pumps",
    "ICT appliances",
    "Processing equipment",
  ],

  footerServices: [
    "Power Line",
    "Building & Industrial Electric",
    "Electromechanical Equipment",
    "Medium voltage line equipment",
    "Substation equipment",
    "Switch Gear",
    "Telecom Infrastructure",
    "Energy Development works",
    "System automation and control",
    "System Feasibility Assessments",
  ],

  heroImage:
    "https://images.unsplash.com/photo-1548613053-22087dd8edb8?auto=format&fit=crop&w=2000&q=80",

  projects: [
    {
      title: "MV/LV distribution upgrade",
      location: "Addis Ababa region",
      category: "Power & lines",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
      featured: true,
    },
    {
      title: "Rural solar facility",
      location: "Oromia",
      category: "Renewable",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
      featured: false,
    },
    {
      title: "Coffee processing install",
      location: "Southern Ethiopia",
      category: "Productive-use",
      image:
        "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=1200&q=80",
      featured: false,
    },
    {
      title: "Solar water pumping",
      location: "Amhara",
      category: "Productive-use",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
      featured: false,
    },
  ],
} as const;

export type Site = typeof site;
