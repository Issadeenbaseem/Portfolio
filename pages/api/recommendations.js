// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Nuzhi Meyen',
    image: "images/nusi.jpeg",
    designation: 'Data Science | Analytics',
    view: "consistently impressed by his technical expertise and problem-solving skills. Baseem is an exceptionally talented full-stack engineer with a strong command of React JS, Node JS, and modern web technologies. His ability to develop scalable and efficient solutions, whether it's building robust APIs or designing intuitive UIs, has greatly contributed to the success of our projects. Baseem is also a natural team player who consistently shares knowledge and supports others to achieve their best. His attention to detail, adaptability, and innovative approach make him a valuable asset to any team. He not only meets deadlines but often exceeds expectations, delivering high-quality work even under pressure.It’s been a privilege to work with Baseem, and I highly recommend him to any organization looking for a skilled, dedicated, and forward-thinking full-stack engineer.",
    linkednURL: "https://www.linkedin.com/in/nmeyen/"
  },
  {
    id: 1,
    name: 'Chamara Gomes',
    image: "images/chamara.jpeg",
    designation: 'Designerdent | Origins Ceylon | RouteSonar | Island Mind Tech | Jigsawfy | OneWorld Cargo',
    view: " had the pleasure of working with Baseem on a highly complex project in the Apparel Sector where his expertise as a Full-Stack Software Engineer played a crucial role in our success. As a Business Architect, I relied heavily on Baseem's technical acumen, agile problem solving skills and their remarkable proficiency in both front-end and back-end development.Baseem's deep understanding of various programming languages and frameworks was evident as he seamlessly navigated through the development process, ensuring that the project met all technical specifications while adhering to tight deadlines. One of the standout qualities of Baseem is his collaborative spirit. He excelled in communicating complex technical concepts in a manner that was easily understood by non-technical stakeholders, bridging the gap between business needs and technical implementation. This skill was particularly invaluable during our planning and review sessions, where his insights helped shape the project direction and ensure alignment with our strategic goals.Baseem also took measure to be consistent on code quality and best practices. His commitment to continuous learning and staying updated with the latest industry trends further solidified his role as a key asset to the team.",
    linkednURL: "https://www.linkedin.com/in/chamara-gomes/"
  },
  {
    id: 2,
    name: 'Salman Dawood',
    image: "images/salman.jpeg",
    designation: 'Chief Technology Officer at TSS | Senior Developer | Electrical Engineer | DevOps | Kubernetes | Artificial Intelligence | Enterprise Infrastructure Design | Avaya | Cisco',
    view: "During his tenure with us at Canadatel.net, Baseem consistently impressed with his exceptional work ethic and innovative approach. Not only did he complete tasks promptly, but he also demonstrated a remarkable ability to think outside the box, contributing fresh ideas to our projects. Over the course of more than a year, Baseem proved himself to be a valuable asset to our team, consistently delivering high-quality results. I wholeheartedly recommend him for any future endeavors.",
    linkednURL: "https://www.linkedin.com/in/salman-dawood-a66196161/"
  },
  {
    id: 3,

    name: 'Farshath Jamal',
    image: "images/farsath.jpg",
    designation: 'Regional Director at The Institute of Financial Accountants',
    view: "I had the pleasure of working closely with Baseem on our BIMT Campus’s website, and I wholeheartedly recommend them. Baseem's exceptional skills in designing and implementing a user-friendly website exceeded our expectations. Their attention to detail, creativity, and collaborative communication set them apart. Baseem's professionalism, reliability, and ability to understand our unique needs make them a top choice for any web development project. I confidently recommend Baseem for their talent and commitment to excellence.",
    linkednURL: "https://www.linkedin.com/in/farshath-jamal-0946a14a/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
