import React from 'react';
import { useParams, Link } from 'react-router-dom';
import InternshipBreadcrumb from '../../../components/internship-detail/InternshipBreadcrumb';
import InternshipHeader from '../../../components/internship-detail/InternshipHeader';
import InternshipActions from '../../../components/internship-detail/InternshipActions';
import InternshipContent from '../../../components/internship-detail/InternshipContent';
import InternshipSidebar from '../../../components/internship-detail/InternshipSidebar';

const InternshipDetailPage = () => {
  const { id } = useParams();

  // Dummy data for all internships
  const internshipData = {
    id: id || 1,
    title: "Software Engineering Intern",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    type: "Internship",
    stipend: "$20/hr",
    deadline: "Oct 31, 2024",
    posted: "Aug 15, 2024",
    duration: "3 months",
    overview: "Join Tech Innovators Inc. as a Software Engineering Intern and contribute to cutting-edge projects in a dynamic environment. Gain hands-on experience in software development, collaborate with experienced engineers, and build innovative solutions.",
    responsibilities: [
      "Develop and maintain software applications",
      "Collaborate with team members on project tasks",
      "Participate in code reviews and testing"
    ],
    requirements: [
      "Currently enrolled in a Bachelor's or Master's degree program in Computer Science or related field",
      "Strong programming skills in Java, Python, or C++",
      "Excellent problem-solving and communication skills"
    ],
    expectations: "At Tech Innovators Inc., we expect our interns to be proactive, eager to learn, and contribute meaningfully to our projects. We value teamwork, innovation, and a commitment to excellence.",
    perks: [
      "Competitive Stipend",
      "Mentorship Program",
      "Flexible Hours",
      "Networking Opportunities"
    ],
    aboutCompany: "Tech Innovators Inc. is a leading technology company focused on developing innovative software solutions. We are committed to fostering a collaborative and inclusive work environment where employees can thrive and make a difference."
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <InternshipBreadcrumb 
          company={internshipData.company} 
          title={internshipData.title} 
        />
        <InternshipHeader 
          title={internshipData.title}
          company={internshipData.company}
          location={internshipData.location}
          type={internshipData.type}
          stipend={internshipData.stipend}
          deadline={internshipData.deadline}
        />
        <InternshipActions />
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <InternshipContent 
              overview={internshipData.overview}
              responsibilities={internshipData.responsibilities}
              requirements={internshipData.requirements}
              expectations={internshipData.expectations}
              perks={internshipData.perks}
            />
          </div>
          <div className="lg:w-[360px]">
            <InternshipSidebar 
              type={internshipData.type}
              stipend={internshipData.stipend}
              duration={internshipData.duration}
              deadline={internshipData.deadline}
              posted={internshipData.posted}
              company={internshipData.company}
              aboutCompany={internshipData.aboutCompany}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetailPage; 