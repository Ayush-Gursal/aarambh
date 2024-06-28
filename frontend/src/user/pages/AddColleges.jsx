import React, { useState } from "react";
import axios from "axios";
import "./AddColleges.css";
import AdminHeader from "./AdminHeader";
const AddCollegeForm = () => {
  const [basicInfo, setBasicInfo] = useState({
    institution: "",
    principal: "",
    CollageCode: "",
    autonomous: false,
    address: "",
    contact: {
      email: "",
      phoneno: "",
    },
    accreditation: {
      NBA: false,
      NAAC: false,
    },
  });
  
  const [facility, setFacility] = useState({
    Hostel: {
      boys: false,
      girls: false,
    },
    others: [],
  });

  const [courses, setCourses] = useState([
    {
      branchname: "",
      seats: 0,
      duration: 0,
      cutOffMarks: [
        {
          year: "",
          CategoryCutoff: [
            {
              category: "",
              cutoff: 0,
            },
          ],
        },
      ],
      placement: {
        placementFacilities: false,
        PlacementStats: {
          year: "",
          studentsPlaced: 0,
          maxSalary: 0,
          minSalary: 0,
          avgSalary: 0,
        },
      },
    },
  ]);

  const [fees, setFees] = useState({
    TuitionFee: 0,
    DevelopmentFee: 0,
    TotalFee: 0,
  });

  const [newCategoryInput, setNewCategoryInput] = useState("");
  const [newCutoffInput, setNewCutoffInput] = useState(0);

  const handleBasicInfoChange = (e) => {
    if (e.target.name.includes(".")) {
      const [field, subField] = e.target.name.split(".");
      setBasicInfo({
        ...basicInfo,
        [field]: {
          ...basicInfo[field],
          [subField]: e.target.value,
        },
      });
    } else {
      setBasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
    }
  };

  const handleFacilityChange = (e) => {
    if (e.target.name === "others") {
      setFacility({
        ...facility,
        others: e.target.value.split(",").map((item) => item.trim()),
      });
    } else {
      setFacility({
        ...facility,
        Hostel: { ...facility.Hostel, [e.target.name]: e.target.checked },
      });
    }
  };

  const handleCourseChange = (e, index) => {
    const updatedCourses = [...courses];
    updatedCourses[index][e.target.name] = e.target.value;
    setCourses(updatedCourses);
  };

  const handleCutOffChange = (e, courseIndex, cutOffIndex, categoryIndex) => {
    const updatedCourses = [...courses];
    updatedCourses[courseIndex].cutOffMarks[cutOffIndex].CategoryCutoff[
      categoryIndex
    ].cutoff = parseFloat(e.target.value);
    setCourses(updatedCourses);
  };

  const handlePlacementChange = (e, courseIndex) => {
    const updatedCourses = [...courses];
    const [field, subField] = e.target.name.split(".");
    updatedCourses[courseIndex].placement[field][subField] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setCourses(updatedCourses);
  };

  const handleFeesChange = (e) => {
    setFees({ ...fees, [e.target.name]: parseFloat(e.target.value) });
  };

  const addCutOff = (courseIndex) => {
    const updatedCourses = [...courses];
    updatedCourses[courseIndex].cutOffMarks.push({
      year: "",
      CategoryCutoff: [
        {
          category: "",
          cutoff: 0,
        },
      ],
    });
    setCourses(updatedCourses);
  };

  const addCutOffCategory = (courseIndex, cutOffIndex) => {
    const updatedCourses = [...courses];
    updatedCourses[courseIndex].cutOffMarks[cutOffIndex].CategoryCutoff.push({
      category: newCategoryInput,
      cutoff: newCutoffInput,
    });
    setCourses(updatedCourses);
    setNewCategoryInput("");
    setNewCutoffInput(0);
  };

  const addCourse = () => {
    setCourses([
      ...courses,
      {
        branchname: "",
        seats: 0,
        duration: 0,
        cutOffMarks: [
          {
            year: "",
            CategoryCutoff: [
              {
                category: "",
                cutoff: 0,
              },
            ],
          },
        ],
        placement: {
          placementFacilities: false,
          PlacementStats: {
            year: "",
            studentsPlaced: 0,
            maxSalary: 0,
            minSalary: 0,
            avgSalary: 0,
          },
        },
      },
    ]);
  };

  const removeCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const collage = { basicInfo, facility, courses, fees };

    axios
      .post("/api/college/addCollege", collage)
      .then((response) => {
        console.log("College added successfully:", response.data);
        alert("Data added successfully");
      })
      .catch((error) => {
        console.error("Error adding college:", error);
        // Handle error
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          alert(error.response.data.message);
        } else {
          alert(
            "Error adding college. Please check the details and try again."
          );
        }
      });
  };

  return (
    <>
      <AdminHeader/>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Basic Info */}
          <div>
            <label>
              Institution:
              <input
                type="text"
                name="institution"
                value={basicInfo.institution}
                onChange={handleBasicInfoChange}
                required
                placeholder="Institution name"
              />
            </label>
          </div>
          <div>
            <label>
              Principal:
              <input
                type="text"
                name="principal"
                value={basicInfo.principal}
                onChange={handleBasicInfoChange}
                required
                placeholder="Principal name"
              />
            </label>
          </div>
          <div>
            <label>
              College Code:
              <input
                type="text"
                name="CollageCode"
                value={basicInfo.CollageCode}
                onChange={handleBasicInfoChange}
                required
                placeholder="_ _ _ _"
              />
            </label>
          </div>
          <div>
            <label>
              Autonomous:
              <input
                type="checkbox"
                name="autonomous"
                checked={basicInfo.autonomous}
                onChange={handleBasicInfoChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={basicInfo.address}
                onChange={handleBasicInfoChange}
                required
                placeholder="address"
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="contact.email"
                value={basicInfo.contact.email}
                onChange={handleBasicInfoChange}
                placeholder="email address"
              />
            </label>
          </div>
          <div>
            <label>
              Phone Number:
              <input
                type="text"
                name="contact.phoneno"
                value={basicInfo.contact.phoneno}
                onChange={handleBasicInfoChange}
                placeholder="_ _ _ _ _ _ _ _ _ _"
              />
            </label>
          </div>
          <div>
            <label>
              NBA Accreditation:
              <input
                type="checkbox"
                name="NBA"
                checked={basicInfo.accreditation.NBA}
                onChange={(e) => {
                  setBasicInfo({
                    ...basicInfo,
                    accreditation: {
                      ...basicInfo.accreditation,
                      NBA: e.target.checked,
                    },
                  });
                }}
              />
            </label>
          </div>
          <div>
            <label>
              NAAC Accreditation:
              <input
                type="checkbox"
                name="NAAC"
                checked={basicInfo.accreditation.NAAC}
                onChange={(e) => {
                  setBasicInfo({
                    ...basicInfo,
                    accreditation: {
                      ...basicInfo.accreditation,
                      NAAC: e.target.checked,
                    },
                  });
                }}
              />
            </label>
          </div>

          {/* Facilities */}
          <div>
            <label>
              Boys Hostel:
              <input
                type="checkbox"
                name="boys"
                checked={facility.Hostel.boys}
                onChange={handleFacilityChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Girls Hostel:
              <input
                type="checkbox"
                name="girls"
                checked={facility.Hostel.girls}
                onChange={handleFacilityChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Other Facilities:
              <input
                type="text"
                name="others"
                value={facility.others.join(", ")}
                onChange={handleFacilityChange}
              />
            </label>
          </div>

          {courses.map((course, index) => (
            <div key={index}>
              <div>
                <label>
                  Branch Name:
                  <input
                    type="text"
                    name="branchname"
                    value={course.branchname}
                    onChange={(e) => handleCourseChange(e, index)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Duration:
                  <input
                    type="number"
                    name="duration"
                    value={course.duration}
                    onChange={(e) => handleCourseChange(e, index)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Seats:
                  <input
                    type="number"
                    name="seats"
                    value={course.seats}
                    onChange={(e) => handleCourseChange(e, index)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Placement Year:
                  <input
                    type="text"
                    name="PlacementStats.year"
                    value={course.placement.PlacementStats.year}
                    onChange={(e) => handlePlacementChange(e, index)}
                    placeholder="_ _ _ _"
                  />
                </label>
              </div>
              <div>
                <label>
                  Students Placed:
                  <input
                    type="number"
                    name="PlacementStats.studentsPlaced"
                    value={course.placement.PlacementStats.studentsPlaced}
                    onChange={(e) => handlePlacementChange(e, index)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Max Salary:
                  <input
                    type="number"
                    name="PlacementStats.maxSalary"
                    value={course.placement.PlacementStats.maxSalary}
                    onChange={(e) => handlePlacementChange(e, index)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Min Salary:
                  <input
                    type="number"
                    name="PlacementStats.minSalary"
                    value={course.placement.PlacementStats.minSalary}
                    onChange={(e) => handlePlacementChange(e, index)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Avg Salary:
                  <input
                    type="number"
                    name="PlacementStats.avgSalary"
                    value={course.placement.PlacementStats.avgSalary}
                    onChange={(e) => handlePlacementChange(e, index)}
                  />
                </label>
              </div>
              <button type="button" onClick={() => removeCourse(index)}>
                Remove Course
              </button>
              {course.cutOffMarks.map((cutOff, cutOffIndex) => (
                <div key={cutOffIndex}>
                  <label>
                    Year:
                    <input
                      type="text"
                      name="year"
                      value={cutOff.year}
                      placeholder="_ _ _ _"
                      onChange={(e) => {
                        const updatedCourses = [...courses];
                        updatedCourses[index].cutOffMarks[cutOffIndex].year =
                          e.target.value;
                        setCourses(updatedCourses);
                      }}
                      required
                    />
                  </label>
                  {cutOff.CategoryCutoff.map((categoryInfo, categoryIndex) => (
                    <div key={categoryIndex}>
                      <label>
                        Category:
                        <input
                          type="text"
                          value={categoryInfo.category}
                          onChange={(e) => {
                            const updatedCourses = [...courses];
                            updatedCourses[index].cutOffMarks[
                              cutOffIndex
                            ].CategoryCutoff[categoryIndex].category =
                              e.target.value;
                            setCourses(updatedCourses);
                          }}
                          required
                        />
                      </label>
                      <label>
                        Cutoff:
                        <input
                          type="number"
                          value={categoryInfo.cutoff}
                          onChange={(e) =>
                            handleCutOffChange(
                              e,
                              index,
                              cutOffIndex,
                              categoryIndex
                            )
                          }
                          required
                        />
                      </label>
                    </div>
                  ))}
                  <div>
                    {/* <label>
                  New Category:
                  <input
                    type="text"
                    value={newCategoryInput}
                    onChange={(e) => setNewCategoryInput(e.target.value)}
                  />
                </label>
                <label>
                  New Cutoff:
                  <input
                    type="number"
                    value={newCutoffInput}
                    onChange={(e) =>
                      setNewCutoffInput(parseFloat(e.target.value))
                    }
                  />
                </label> */}
                    <button
                      type="button"
                      onClick={() => addCutOffCategory(index, cutOffIndex)}
                    >
                      Add Category Cutoff
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      addCutOff(index);
                    }}
                  >
                    Add Cut-Off
                  </button>
                </div>
              ))}
            </div>
          ))}

          <button type="button" onClick={addCourse}>
            Add Course
          </button>

          {/* Fees */}
          <div>
            <label>
              Tuition Fee:
              <input
                type="number"
                name="TuitionFee"
                value={fees.TuitionFee}
                onChange={handleFeesChange}
              />
            </label>
          </div>
          <div>
            <label>
              Development Fee:
              <input
                type="number"
                name="DevelopmentFee"
                value={fees.DevelopmentFee}
                onChange={handleFeesChange}
              />
            </label>
          </div>
          <div>
            <label>
              Total Fee:
              <input
                type="number"
                name="TotalFee"
                value={fees.TotalFee}
                onChange={handleFeesChange}
                required
              />
            </label>
          </div>

          <button id="btn-add" type="submit">
            Add College
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCollegeForm;
