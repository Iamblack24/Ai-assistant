import React from 'react';
import CareerGuideCard from '../components/CareerGuideCard';
import './CareerGuidesPage.css'; // Import the CSS file for styling

const careerGuides = [
  {
    title: 'Career Paths in Civil Engineering',
    description: 'Explore various career paths available in the field of civil engineering.',
    link: '/career-guides/career-paths', // Ensure this matches the key in careerGuideDetails
  },
  {
    title: 'Interview Preparation for Civil Engineers',
    description: 'Get tips and strategies for acing your civil engineering job interviews.',
    link: '/career-guides/interview-preparation', // Ensure this matches the key in careerGuideDetails
  },
  {
    title: 'Essential Skills for Civil Engineers',
    description: 'Learn about the essential skills required to succeed as a civil engineer.',
    link: '/career-guides/essential-skills', // Ensure this matches the key in careerGuideDetails
  },
  {
    title: 'Networking Tips for Civil Engineers',
    description: 'Discover effective networking strategies to advance your civil engineering career.',
    link: '/career-guides/networking-tips', // Ensure this matches the key in careerGuideDetails
  },
  {
    title: 'Continuing Education for Civil Engineers',
    description: 'Find out about continuing education opportunities and certifications for civil engineers.',
    link: '/career-guides/continuing-education', // Ensure this matches the key in careerGuideDetails
  },
  {
    title: 'Building Information Modeling (BIM) Specialist',
    description: 'Explore the growing field of BIM and its impact on modern construction.',
    link: '/career-guides/bim-specialist',
  },
  {
    title: 'Sustainable Design Engineer',
    description: 'Learn about career opportunities in sustainable building design and green infrastructure.',
    link: '/career-guides/sustainable-design',
  },
  {
    title: 'Urban Planning and Development',
    description: 'Discover how civil engineers shape cities and urban infrastructure.',
    link: '/career-guides/urban-planning',
  },
  {
    title: 'Building Services Engineering',
    description: 'Explore careers in MEP (Mechanical, Electrical, Plumbing) systems design and integration.',
    link: '/career-guides/building-services',
  },
  {
    title: 'Construction Technology Specialist',
    description: 'Learn about emerging technologies in construction and how to build a career in this field.',
    link: '/career-guides/construction-technology',
  },
  
  // Add more career guides here
];

const CareerGuidesPage = () => {
  return (
    <div className="career-guides-page">
      <div className="guides-list">
        {careerGuides.map((guide, index) => (
          <CareerGuideCard
            key={index}
            title={guide.title}
            description={guide.description}
            link={guide.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CareerGuidesPage;