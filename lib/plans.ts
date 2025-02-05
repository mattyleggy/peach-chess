export const plans = [
    {
        name: "I'm not sure (I want to find out more)",
        icon: "🤷‍♂️",
        price: "$TBD",
        originalPrice: "$TBD",
        description: "",
        features: ["I'm not sure"],
        popular: false,
        visibleOnPage: false
    },
    {
        name: "Outright",
        icon: "🎁",
        price: "$3,500",
        originalPrice: "$5,000",
        description: "/outright",
        features: [
            "Design & Development",
            "Lump sum payment",
            "Standard 5 page website (contact us for pricing for larger websites)",
            ".com.au domain name",
            "Included Australian web hosting",
            "Made by Australian developers",
            "6 months included ongoing changes & maintenance ",
            "Generate and capture leads",
        ],
        optionalFeatures: [
            { text: "$25/month hosting", included: false },
            { text: "$50/month included maintenance", included: false },
        ],
        popular: false,
        visibleOnPage: true
    },
    {
        name: "Monthly",
        icon: "💎",
        price: "$150",
        originalPrice: "$250",
        description: "/month with included ongoing changes",
        features: [
            "Design & Development",
            "$0 up-front, risk free",
            "Standard 5 page website (contact us for pricing for larger websites)",
            ".com.au domain name",
            "Included Australian web hosting",
            "Made by Australian developers",
            "Included ongoing changes and maintenance",
            "Generate and capture leads",
            "Included free maintenance & changes",
            "Minimum 12 month commitment",
        ],
        popular: true,
        visibleOnPage: true
    },
];
