const review = [
    {
        id: 0,
        clientName: 'Affinity Global Uk',
        clientLocation: 'UK',
        clientSource: 'Freelancer',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.',
        clientImage:'images/farsath.jpg'
    },
    {
        id: 2,
        clientName: 'BIMT',
        clientLocation: 'SriLanka',
        clientSource: 'Freelancer',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him. '
    },
    {
        id: 3,
        clientName: 'IHL',
        clientLocation: 'SriLanka',
        clientSource: 'Freelancer',
        clientReview: "Osama is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again"
    },
    {
        id: 4,
        clientName: 'Maz Zion',
        clientLocation: 'SriLanka',
        clientSource: 'Fiverr',
        clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
