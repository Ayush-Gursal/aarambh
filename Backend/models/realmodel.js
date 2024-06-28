const sampleCollegeDocument = {
  basicInfo: {
    institution: {
      type: String,
      required: true,
    },
    principal: {
      type: String,
      required: true,
    },
    CollageCode: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      email: {
        type: String,
        required: true,
      },
      phoneno: {
        type: String,
        required: true,
      },
    },

    accreditation: {
      NBA: {
        type: Boolean,
      },
      NAAC: {
        type: Boolean,
      },
    },
  },
  facility: {
    Hostel: {
      boys: {
        type: Boolean,
        required: true,
      },
      girls: {
        type: Boolean,
        required: true,
      },
    },
    others: {
      // denotes other facilities
      type: [String], // Array of strings
    },
  },

  courses: [
    {
      branchname: {
        type: String,
        required: true,
      },
      seats: {
        type: Number,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      cutOffMarks: [
        {
          year: {
            type: String,
            required: true,
          },
          CategoryCutoff: [
            {
              type: Map,
              of: Number,
            },
          ],
        },
      ],
      placement: {
        placementFacilities: {
          type: Boolean,
          required: true,
        },
        PlacementStats: {
          year: {
            type: Date,
            required: true,
          },
          studentsPlaced: {
            type: Number,
            
          },
          maxSalary: {
            type: Number,
          },
          minSalary: {
            type: Number,
          },
          avgSalary: {
            type: Number,
          },
        },
      },
    },
  ],

  fees: {
    TuitionFee: {
      type: Number,
      required: true,
    },
    DevelopmentFee: {
      type: Number,
      required: true,
    },
    TotalFee: {
      type: Number,
      required: true,
    },
  },
};
