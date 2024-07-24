
export interface DataItem {      //array of objets
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
        price: "$5",
    },
    {
        id: 2,
        title: "Retail Data Set",
        description: "An extensive collection of healthcare data including patient records, treatment outcomes, and medical imaging.",
        price: "$9",
    },
    
];

export default data;
