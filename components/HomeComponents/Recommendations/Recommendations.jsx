import RecommendationCard from "./RecommendationCard";
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const Recommendations = () => {
    const { isLoading, isError, data, error } = useQuery('recommendations', () =>
        axios.get('api/recommendations')
            .then(({ data }) => data)
            .catch(error => {
                console.error('Error fetching recommendations:', error);
                throw error; // Throw error to handle it in the component
            })
    );

    if (isError) {
        return (
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-red-500">
                There was an error loading recommendations.
            </div>
        );
    }

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Recommendations</div>
            <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
                {isLoading
                    ? [1, 2, 3, 4].map((_, index) => (
                        <ParagraphSkeleton key={index} className={"p-8 h-full w-full relative"} />
                    ))
                    : data?.length
                        ? data.map((item, index) => (
                            <RecommendationCard key={index} data={item} />
                        ))
                        : <div className="text-Snow">No recommendations available.</div>
                }
            </div>
        </>
    );
};

export default Recommendations;
