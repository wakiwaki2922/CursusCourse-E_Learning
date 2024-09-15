"use client";

import {
    FcAdvertising,
    FcBarChart,
    FcBusiness,
    FcEngineering,
    FcFilmReel,
    FcGlobe,
    FcIdea,
    FcLinux,
    FcMultipleDevices,
    FcMusic,
    FcOldTimeCamera,
    FcSalesPerformance,
    FcSportsMode
} from "react-icons/fc";
import { IconType } from "react-icons/lib";
import CategoryItem from "./category-item";
import { Category } from "@/types/Category";

interface CategoriesProps {
    items: Category[];
}

// const iconMap: Record<Category["categoryName"], IconType> = {
//     "Music": FcMusic,
//     "Photography": FcOldTimeCamera,
//     "Fitness": FcSportsMode,
//     "Accounting": FcSalesPerformance,
//     "Development": FcMultipleDevices,
//     "Filming": FcFilmReel,
//     "Engineering": FcEngineering,
//     "Design": FcIdea,
//     "IT and Software": FcLinux,
//     "Marketing": FcAdvertising,
//     "Business": FcBarChart,
//     "Personal Development": FcSportsMode,
//     "Language": FcGlobe,
// }

const Categories = ({
    items
}: CategoriesProps) => {

    return (
        <div className="flex items-center gap-x-2 overflow-auto pb-2">
            {items.map((item) => (
                <CategoryItem
                    key={item.categoryId}
                    label={item.categoryName}
                    // icon={iconMap[item.categoryName]}
                    icon={item.categoryIcon}
                    value={item.categoryId}
                />
            ))}
        </div>
    );
}

export default Categories;