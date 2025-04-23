export const plans = [
    {
        name: "I'm not sure (I want to find out more)",
        key: "not-sure",
        icon: "🤷‍♂️",
        price: "$TBD",
        originalPrice: "$TBD",
        description: "",
        features: ["I'm not sure"],
        popular: false,
        visibleOnPage: false
    },
    {
        name: "Group Lessons",
        key: "group",
        icon: "🎁",
        price: "$30",
        description: "per lesson",
        features: [
            "Groups sizes of up to 10 people",
            "Available time slots:",
            "Beginner - Saturday 11-12pm",
            "Intermediate - Sunday 9:30-10:30am",
            "Advanced - Sunday 11-12pm"
        ],        
        popular: true,
        visibleOnPage: true
    },
    {
        name: "Private Lessons",
        key: "private",
        icon: "💎",
        price: "$90",        
        description: "per lesson",
        features: [
            "1-on-1 individual lesson",
            "Flexible time slots",
            "Beginner to advanced",
            "Personalised training approach",
            "Training games included"
        ],
        popular: false,
        visibleOnPage: true
    },
];
