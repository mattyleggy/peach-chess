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
            "Saturday: 11:00am - 12:00pm",
            "Sunday: 9:30am - 10:30am",
            "Sunday: 11:00am - 12:00pm"
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
            "Available time slots:",
            "Saturday: 11:00am - 12:00pm",
            "Sunday: 9:30am - 10:30am",
            "Sunday: 11:00am - 12:00pm"
        ],
        popular: false,
        visibleOnPage: true
    },
];
