// data.ts
export interface DataItem {
    id: number;
    title: string;
    description: string;
    price: string;
}

const data: DataItem[] = [
    {
        id: 1,
        title: "Financial Data Set",
        description: "A comprehensive financial data set including stock prices, market indices, and economic indicators.",
        price: "500 USD",
    },
    {
        id: 2,
        title: "Healthcare Data Set",
        description: "An extensive collection of healthcare data including patient records, treatment outcomes, and medical imaging.",
        price: "750 USD",
    },
    {
        id: 3,
        title: "Retail Sales Data",
        description: "A detailed retail sales data set including transaction records, customer demographics, and sales trends.",
        price: "300 USD",
    },
    {
        id: 4,
        title: "Weather Data Set",
        description: "A weather data set comprising historical weather patterns, forecasts, and climate change indicators.",
        price: "200 USD",
    },
    {
        id: 5,
        title: "Social Media Data",
        description: "A large social media data set including user profiles, posts, and interaction metrics.",
        price: "600 USD",
    },
    {
        id: 6,
        title: "Machine Learning Data Sets",
        description: "A large data set for machine learning training info.",
        price: "700 USD",
    },
    {
        id: 7,
        title: "E-commerce Data Set",
        description: "A comprehensive e-commerce data set including product listings, customer reviews, and sales performance.",
        price: "550 USD",
    }
];

export default data;

  