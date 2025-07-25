import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import ProfileImage1 from "@/assets/profile1.jpg";
import ProfileImage2 from "@/assets/profile2.jpg";
import ProfileImage3 from "@/assets/profile3.jpg";
import ProfileImage4 from "@/assets/profile4.jpg";
import ProfileImage5 from "@/assets/profile5.jpg";
import ProfileImage6 from "@/assets/profile6.jpg";
import ProfileImage7 from "@/assets/profile7.jpg";
import ProductImage1 from "@/assets/product1.jpg";
import ProductImage2 from "@/assets/product2.jpg";
import ProductImage3 from "@/assets/product3.jpg";
import ProductImage4 from "@/assets/product4.jpg";
import ProductImage5 from "@/assets/product5.jpg";
import ProductImage6 from "@/assets/product6.jpg";
import ProductImage7 from "@/assets/product7.jpg";
import ProductImage8 from "@/assets/product8.jpg";
import ProductImage9 from "@/assets/product9.jpg";
import ProductImage10 from "@/assets/product10.jpg";

export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
            },
            {
                label: "Reports",
                icon: NotepadText,
                path: "/reports",
            },
        ],
    },
    {
        title: "Customers",
        links: [
            {
                label: "Customers",
                icon: Users,
                path: "/customers",
            },
            {
                label: "New customer",
                icon: UserPlus,
                path: "/new-customer",
            },
            {
                label: "Verified customers",
                icon: UserCheck,
                path: "/verified-customers",
            },
        ],
    },
    {
        title: "Products",
        links: [
            {
                label: "Products",
                icon: Package,
                path: "/products",
            },
            {
                label: "New product",
                icon: PackagePlus,
                path: "/new-product",
            },
            {
                label: "Inventory",
                icon: ShoppingBag,
                path: "/inventory",
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Rakesh Jhunjhunwala ",
        email: "Rakesh.Jhunjhunwala@email.com",
        image: ProfileImage1,
        total: 1500,
    },
    {
        id: 2,
        name: "Ashish Kacholia",
        email: "Ashish.Kacholia@email.com",
        image: ProfileImage2,
        total: 2000,
    },
    {
        id: 3,
        name: "Anish Singh Thakur",
        email: "Anish.SinghThakur@email.com",
        image: ProfileImage3,
        total: 4000,
    },
    {
        id: 4,
        name: "Sankaran Naren",
        email: "Sankaran.Naren@email.com",
        image: ProfileImage4,
        total: 3000,
    },
    {
        id: 5,
        name: "Saurabh Mukherjea",
        email: "Saurabh.Mukherjea@email.com",
        image: ProfileImage5,
        total: 2500,
    },
    {
        id: 6,
        name: "Neeraj Arora",
        email: "Neeraj.Arora@email.com",
        image: ProfileImage6,
        total: 4500,
    },
    {
        id: 7,
        name: "Akshat Shrivastava",
        email: "Akshat.Shrivastava@email.com",
        image: ProfileImage7,
        total: 5300,
    },
];

export const topProducts = [
    {
        number: 1,
        name: "Stocks / Equity Shares",
        image: ProductImage1,
        description: "Ownership units representing shares in a company.",
        price: 99.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 2,
        name: "Mutual Funds",
        image: ProductImage2,
        description: "Professionally managed investment pools in diversified assets.",
        price: 799.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 3,
        name: "Public Provident Fund",
        image: ProductImage3,
        description: "Long-term government savings scheme with tax-free interest.",
        price: 1299.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 4,
        name: "Sovereign Gold Bonds",
        image: ProductImage4,
        description: "Government bonds backed by gold, offering interest returns.",
        price: 199.99,
        status: "Out of Stock",
        rating: 4.4,
    },
    {
        number: 5,
        name: "Tax-Saving Mutual Fund",
        image: ProductImage5,
        description: "Mutual funds offering tax benefits under specific regulations.",
        price: 59.99,
        status: "In Stock",
        rating: 4.3,
    },
    {
        number: 6,
        name: "National Pension System",
        image: ProductImage6,
        description: "Government-sponsored retirement savings scheme with flexible contributions.",
        price: 399.99,
        status: "In Stock",
        rating: 4.6,
    },
    {
        number: 7,
        name: "Debt Mutual Funds",
        image: ProductImage7,
        description: "Funds investing in fixed-income securities for steady returns.",
        price: 89.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 8,
        name: "Unit Linked Insurance Plans",
        image: ProductImage8,
        description: "Insurance plan combining investment and life cover benefits.",
        price: 49.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 9,
        name: "	Senior Citizens Saving Scheme",
        image: ProductImage9,
        description: "Government-backed savings scheme for senior citizens, secure returns.",
        price: 249.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 10,
        name: "	Crypto Assets",
        image: ProductImage10,
        description: "Digital assets using cryptography for secure, decentralized transactions.",
        price: 79.99,
        status: "Out of Stock",
        rating: 4.5,
    },
];
