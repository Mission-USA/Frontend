import React from 'react';
import InternshipCard from './InternshipCard';

const InternshipGrid = () => {
  // Sample internship data
  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Tech Solutions Inc.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV77o5icvI4-gFO0sLWiU-b1CGMYMHt-VblYtqxE6DokOlUkC_-2h1JiAVEq9bvFosNXiW8PA0MmzGl0_-WUcRskwasBkRfyz1hYnb_WyWDOQvjA265GYuZ35yyau3A6C1DTxJlgOEg3E_6-kBC9NUpm_JdY3bPIZgHUjjYij5R0WJOstz_VK5pK8IBxOyliaZOjo3SbbTvtE_k69wiCipJ8Ceb7nghmvvXwXt5wh-eduxUTudhG65XalimzRfezjphlYxaw16MHXc"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Data Insights Co.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC8p3zUyukhopNceo48ZyT6i2o_b_6C_GaP0vlG17GrTkkvcICysb_pmJ-aIu9AE1-d0_MKj55FyCXE_EOj4zLHzbvKq9ASy-DTPkNWRMMv2cHkB9gxNqSnw_zoobCfOdTIUd83KHG6JQ7vXUoA-Q17lsQVnvdz7bmyOXhyQd8a1N-EfNYP_7yOjAsphge70xPgaI9i-3Lcnt9L99lCLCUcLQJhD9R5fnabSNLOjI3cshnlX7vnr5TTH6MdaOndZVflSaVyGJzxir6"
    },
    {
      id: 3,
      title: "Marketing Intern",
      company: "Marketing Masters Ltd.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmy-PEUBM0xorcKbXi3M1wj5WI0V6bpyhQMI3cS4qjgrg5-3kJ7zILH3_gGLm-35vl0Ku_NPQskEj2dRtdFdQpCIVX6leYZVIs-1X7Fbz1d9GLUjReQlcQk00N8O-Bymh3No-lfF37abzB_KXAckMhODoKnxkzLijpb_Dpm-2OESw7QllwtrgKf-OFKgRjIrIl_4VIzjeXTCsPsYk9eLo5l2yOwQ1iUgJ1jvKV9bf4TFxWYEE-K6lRVp_IHbzRq4M0Yh18t-Ytot7t"
    },
    {
      id: 4,
      title: "Product Management Intern",
      company: "Product Innovators LLC",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzR314mUVTMyZsEuWffW1EoaOWnU83MbAlDwU5CDZi6m_NyyamkORkpMRBG-1-ZBOCEfGS7tyoQQxnRKRYDISap8UcKPqiiIL6DFnvfkNel0gMiome4tWGtqJpORwp_GceC3lrNBdsBs47AUVK6htTwdANlJjna-LoJVQRymf1VimMoL9JTg3t27m-sHtfXwSBT-FbwGymfQgrFslnmOfPNmcHAx7KLinNXM4LJvHiacN9TeHUSe487zI30i_sQm_aHjU4qUEe3ZfP"
    },
    {
      id: 5,
      title: "UX/UI Design Intern",
      company: "Design Dynamics Group",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPZ6r4z-ASN5L43qER_5uC3beXXCA8Mxeg-bFhMsgKWCAj03wUo7jAh_x1Vwi6xxm1yOBoRdkVX72H-VTpEishLD_IHFjCmSo0Ndf5LNmvoLIhIjvzqI5ZbTo0p5avA9Z9bbXxgL_YpyC2iBanPgojbu2kYa6Xl8UquXfZ8syCBoVy27tPqGKcgP5rnu_eWGw-JZLMW3tngdFVyX7Cm3jvf81BXvpjloogZa2lNwGEVd2flAMPTTpYFiysSMjlkj8llcw6kXy8T0M-"
    },
    {
      id: 6,
      title: "Business Development Intern",
      company: "Growth Strategies Inc.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-b22BpUR7OJxVY5agibUd_SS9tD0TH9iazq-LwkHQwa3Y3XqVlQp_v5w7y-6yFmhatZ_G7Y_qeZDJsvckjKu3xF5rStSqMlSj7MDUMDlOMEVvpK9A0fpsOzdfYwb3j1m9q4BLDYXkyCK9YKflIcav2K76dEstRpf6X3Lsl9cRhWdrBpJ6BkPLsZ5Baqr51TujmJiQp3Ea5n_4wp7ZGwkQFpRgG57SW_LvvbeCGHnHJMnH3YMPa49nKV49wr5ay3gLtRwcqXk3ARev"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4">
      {internships.map((internship) => (
        <InternshipCard key={internship.id} internship={internship} />
      ))}
    </div>
  );
};

export default InternshipGrid; 