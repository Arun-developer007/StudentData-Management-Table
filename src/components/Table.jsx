import { useState, useEffect } from 'react';
import '../css/table.css';
import { FaMedal } from "react-icons/fa6";
import { RiMedalFill } from "react-icons/ri";
import Studentdata from '../studentdata/studentdata.json';
import { IoWaterSharp } from "react-icons/io5";
import { IoMdFemale } from "react-icons/io";
import { IoMdMale } from "react-icons/io";

const Table = () => {
    const [student, setStudent] = useState([]);
    const [sortOrder, setSortOrder] = useState("Asc");

    useEffect(() => {
        setStudent(Studentdata["students"]);
    }, []);

    // Sorting Function
    const handleSort = () => {
        let sortedData = [...student];
        if (sortOrder === "Asc") {
            sortedData.sort((a, b) => a.name.localeCompare(b.name));
            setSortOrder("Desc");
        } else {
            sortedData.sort((a, b) => b.name.localeCompare(a.name));
            setSortOrder("Asc");
        }
        setStudent(sortedData);
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "110px" }}>Student ID</th>
                        <th style={{ width: "220px", cursor: "pointer" }} onClick={handleSort}>
                            Student Name {sortOrder === "Asc" ? "▲" : "▼"}
                        </th>
                        <th style={{ width: "80px" }}>Age</th>
                        <th style={{ width: "150px" }}>Gender</th>
                        <th style={{ width: "120px" }}>BloodGroup</th>
                        <th style={{ width: "100px" }}>Class</th>
                        <th style={{ width: "270px" }}>School</th>
                        <th style={{ width: "120px" }}>Total Marks</th>
                        <th style={{ width: "80px" }}>Rank</th>
                        <th style={{ width: "100px" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((ele, ind) => {
                        let medalIcon = null;
                        if (ele.rank === 1) medalIcon = <RiMedalFill id="first" style={{ color: "gold", marginRight: "5px",position:'absolute',top:"10px",left:"50px"}} />;
                        else if (ele.rank === 2) medalIcon = <FaMedal id="second" style={{ color: "silver", marginRight: "5px",position:'absolute',top:"14px",left:"50px"}} />;
                        else if (ele.rank === 3) medalIcon = <FaMedal id="third" style={{ color: "#cd7f32", marginRight: "5px",position:'absolute',top:"14px",left:"50px"}} />;

                        return (
                            <tr key={ind}>
                                <td style={{ textIndent: "15px" }}>{ele.rollNo}</td>
                                <td style={{ textIndent: "75px", position: "relative" }}>
                                    <img src={ele.profileImage} alt={ele.name} height="35px" width="35px" id="profile" />
                                    {ele.name}
                                </td>
                                <td style={{ textAlign: 'center' }}>{ele.age}</td>
                                <td style={{ textAlign: "center" }}>
                                    {ele.gender} {ele.gender === "Male" ? <IoMdMale id="male" /> : <IoMdFemale id="female" />}
                                </td>
                                <td style={{ textIndent: "40px" }}>
                                    {ele.bloodGroup} <IoWaterSharp id="blood" />
                                </td>
                                <td style={{ textAlign: "center" }}>{ele.class}</td>
                                <td style={{ textIndent: "25px" }}>{ele.school}</td>
                                <td style={{ textIndent: "50px" }}>{ele.totalMarks}</td>
                                <td style={{ textAlign: "center" }}>
                                    {medalIcon} {ele.rank}
                                </td>
                                <td style={{ textAlign: "center", padding: "10px" }}>
                                    <h4 style={{
                                        height: "23px",
                                        width: "80px",
                                        borderRadius: "5px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        background: `${ele.status === "Pass" ? "lime" : "red"}`,
                                        color: `${ele.status === "Pass" ? "black" : "white"}`
                                    }}>
                                        {ele.status}
                                    </h4>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table;
