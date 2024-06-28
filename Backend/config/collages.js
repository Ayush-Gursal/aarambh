const sampleCollegeData = {
  basicInfo: {
    institution: "Sample College",
    principal: "John Doe",
    CollageCode: "SC001",
    address: "123 College Street, City, Country",
    contact: {
      email: "contact@example.com",
      phoneno: "+1234567890",
    },
    accreditation: {
      NBA: true,
      NAAC: false,
    },
  },
  facility: {
    Hostel: {
      boys: true,
      girls: true,
    },
    others: ["Library", "Sports Complex", "Laboratories"],
  },
  courses: [
    {
      branchname: "Computer Science",
      seats: 100,
      duration: 4,
      cutOffMarks: [
        {
          year: "2023",
          CategoryCutoff: {
            General: 85,
            OBC: 80,
            SC: 75,
            ST: 70,
          },
        },
      ],
      placement: {
        placementFacilities: true,
        PlacementStats: {
          year: new Date("2023-01-01"),
          studentsPlaced: 80,
          maxSalary: 1000000,
          minSalary: 500000,
          avgSalary: 700000,
        },
      },
    },
    {
      branchname: "Electrical Engineering",
      seats: 80,
      duration: 4,
      cutOffMarks: [
        {
          year: "2023",
          CategoryCutoff: {
            General: 80,
            OBC: 75,
            SC: 70,
            ST: 65,
          },
        },
      ],
      placement: {
        placementFacilities: true,
        PlacementStats: {
          year: new Date("2023-01-01"),
          studentsPlaced: 70,
          maxSalary: 900000,
          minSalary: 450000,
          avgSalary: 600000,
        },
      },
    },
  ],
  fees: {
    TuitionFee: 50000,
    DevelopmentFee: 10000,
    TotalFee: 60000,
  },
};
