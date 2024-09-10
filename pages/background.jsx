import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

function Background() {
    const { isLoading, error, data } = useQuery('background', () =>
        axios.get('/api/background')
            .then(({ data }) => data)
            .catch(error => {
                console.error('Error fetching background data:', error);
                return { eduCards: [], expCards: [] }; // Ensure data structure is maintained
            })
    );

    if (error) return <div>Error loading data</div>;

    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
                    {isLoading ? (
                        [1, 2, 3].map((_, index) => (
                            <ParagraphSkeleton key={index} className={"p-8 h-full w-full relative"} />
                        ))
                    ) : (
                        data?.eduCards?.map((eduCard, index) => (
                            <Edu_Card key={eduCard.id || index} data={eduCard} />
                        ))
                    )}
                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>
                        {isLoading ? (
                            [1, 2, 3].map((_, index) => (
                                <ParagraphSkeleton key={index} className={"p-8 h-full w-full relative"} />
                            ))
                        ) : (
                            data?.expCards?.map((expCard, index) => (
                                <Exp_Card key={expCard.id || index} data={expCard} />
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;
