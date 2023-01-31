import React from "react";
import { Link } from "react-router-dom";

const ProfileOwnCourse = () => {
  return (
    <div className="profileOwnCourse">
      <table>
        <tbody>
          <tr>
            <td>
              <Link to="/profile">
                <h2>自選股(4)</h2>
              </Link>
            </td>
            <td></td>
            <td>
              <Link to="/profile/ownCourse">
                <h2 style={{ boxShadow: "0px 4px #e23965" }}>
                  已購買的課程(8)
                </h2>
              </Link>
            </td>
            <td></td>
            <td>
              <Link to="/profile/courseCollection">
                <h2>已收藏的課程(14)</h2>
              </Link>
            </td>
            <td></td>
            <td>
              <Link to="/profile/articleCollection">
                <h2>已收藏的文章(22)</h2>
              </Link>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ProfileOwnCourse;
