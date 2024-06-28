import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CollegeDetails.css";  
import { useParams } from "react-router-dom";
import AdminHeader from "./AdminHeader";
const AdminCollegeDetailsPage = () => {
  const [collegeDetails, setCollegeDetails] = useState(null);
  const { collegeId } = useParams();
  useEffect(() => {
    const fetchCollegeDetails = async () => {
      try {
        const response = await axios.get(
          `/api/college/getCollageData/${collegeId}`
        );
        console.log(response.data.collage);
        setCollegeDetails(response.data.collage);
      } catch (error) {
        console.error("Error fetching college details:", error);
      }
    };

    fetchCollegeDetails();
  }, [collegeId]);

  if (!collegeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AdminHeader/>
      <div className="container">
        <h3 className="text-center">Basic Information</h3>
        <table>
          <tbody>
            <tr>
              <td>Institution:</td>
              <td>{collegeDetails.basicInfo.institution}</td>
            </tr>
            <tr>
              <td>Principal:</td>
              <td>{collegeDetails.basicInfo.principal}</td>
            </tr>
            <tr>
              <td>College Code:</td>
              <td>{collegeDetails.basicInfo.CollageCode}</td>
            </tr>
            <tr>
              <td>Autonomous:</td>
              <td>{collegeDetails.basicInfo.autonomous ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{collegeDetails.basicInfo.address}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{collegeDetails.basicInfo.contact.email}</td>
            </tr>
            <tr>
              <td>Phone No:</td>
              <td>{collegeDetails.basicInfo.contact.phoneno}</td>
            </tr>
            <tr>
              <td>NBA Accreditation:</td>
              <td>
                {collegeDetails.basicInfo.accreditation.NBA ? "Yes" : "No"}
              </td>
            </tr>
            <tr>
              <td>NAAC Accreditation:</td>
              <td>
                {collegeDetails.basicInfo.accreditation.NAAC ? "Yes" : "No"}
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-center">Facility</h2>
        <table>
          <tbody>
            <tr>
              <td>Hostel for Boys:</td>
              <td>{collegeDetails.facility.Hostel.boys ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>Hostel for Girls:</td>
              <td>{collegeDetails.facility.Hostel.girls ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>Other Facilities:</td>
              <td>{collegeDetails.facility.others.join(", ")}</td>
            </tr>
          </tbody>
        </table>
        <div className="container">
          <h3 className="text-center">Courses</h3>
          {collegeDetails.courses.map((course, index) => (
            <div key={index}>
              <h4>Course {index + 1}</h4>
              <table>
                <tbody>
                  <tr>
                    <td>Branch Name:</td>
                    <td>{course.branchname}</td>
                  </tr>
                  <tr>
                    <td>Seats:</td>
                    <td>{course.seats}</td>
                  </tr>
                  <tr>
                    <td>Duration:</td>
                    <td>{course.duration}</td>
                  </tr>
                  <tr>
                    <td>Placement Facilities:</td>
                    <td>
                      {course.placement.placementFacilities ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr>
                    <td>Placement Year:</td>
                    <td>{course.placement.PlacementStats.year}</td>
                  </tr>
                  <tr>
                    <td>Students Placed:</td>
                    <td>{course.placement.PlacementStats.studentsPlaced}</td>
                  </tr>
                  <tr>
                    <td>Max Salary:</td>
                    <td>{course.placement.PlacementStats.maxSalary}</td>
                  </tr>
                  <tr>
                    <td>Min Salary:</td>
                    <td>{course.placement.PlacementStats.minSalary}</td>
                  </tr>
                  <tr>
                    <td>Avg Salary:</td>
                    <td>{course.placement.PlacementStats.avgSalary}</td>
                  </tr>
                  <tr>
                    <td>Cut-off Marks:</td>
                    <td>
                      {course.cutOffMarks.map((cutOff, cutOffIndex) => (
                        <li key={cutOffIndex}>
                          <strong>Year: </strong> {cutOff.year}
                          <ul>
                            {cutOff.CategoryCutoff.map(
                              (categoryCutoff, index) => (
                                <li key={index}>
                                  {Object.entries(categoryCutoff).map(
                                    ([category, cutoffValue], index) => (
                                      <span key={index}>
                                        <strong>{category}: </strong>{" "}
                                        {cutoffValue}
                                        {index <
                                          Object.entries(categoryCutoff)
                                            .length -
                                            1 && ", "}
                                      </span>
                                    )
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-center">Fees</h2>
      <table>
        <tbody>
          <tr>
            <td>Tuition Fee:</td>
            <td>{collegeDetails.fees.TuitionFee}</td>
          </tr>
          <tr>
            <td>Development Fee:</td>
            <td>{collegeDetails.fees.DevelopmentFee}</td>
          </tr>
          <tr>
            <td>Total Fee:</td>
            <td>{collegeDetails.fees.TotalFee}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminCollegeDetailsPage;
