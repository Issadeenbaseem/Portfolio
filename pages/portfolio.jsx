import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Portfolio = () => {
    const { isLoading, isError, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => {
                console.error('Error fetching portfolio:', error);
                throw error;
            })
    );

    if (isError) {
        return (
            <BannerLayout>
                <div className="text-center my-6">
                    <h1 className="text-lg font-bold">Something went wrong...</h1>
                    <p className="text-gray-500">Please try refreshing the page.</p>
                </div>
                <Footer />
            </BannerLayout>
        );
    }

    return (
        <BannerLayout>
            <div className="grid justify-items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
                {isLoading ?
                    [1, 2, 3, 4].map((_, index) => (
                        <ImageAndParagraphSkeleton key={index} className={"w-full object-cover"} />
                    ))
                    :
                    data?.map((item, key) => (
                        <PortfolioCard key={key} data={item} />
                    ))
                }
            </div>
            <Footer />
        </BannerLayout>
    );
};

export default Portfolio;
