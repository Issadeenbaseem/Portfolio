import React, { useState } from 'react';
import ReviewCard from './ReviewCard';
import axios from 'axios';
import { useQuery } from 'react-query';
import ParagraphSkeleton from '../../Common/ParagraphSkeleton';

const ClientReviews = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const { isLoading, error, data } = useQuery('review', () =>
        axios.get('api/review')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error))
    );

    const handleCardClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Clients Reviews</div>
            <div className="overflow-x-auto w-full grid justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4">
                {
                    isLoading ? 
                        [1, 2, 3, 4, 5].map((_, index) => (
                            <ParagraphSkeleton key={index} className="w-80 md:w-96 h-full p-4 md:p-8" />
                        ))
                        :
                        data?.map((data, key) => (
                            <div key={key} onClick={() => handleCardClick(data?.clientImage)}>
                                <ReviewCard data={data} />
                            </div>
                        ))
                }
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
                    <div className="relative bg-white p-4 rounded-lg max-w-lg" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Client" className="w-full h-auto" />
                        <button className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded-full" onClick={closeModal}>X</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ClientReviews;
