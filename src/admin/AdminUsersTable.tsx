import { useEffect, useState } from "react";
import axios from "axios";
import { backendBaseUrl, baseImageUrl } from "../config/config";

const AdminUsersTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("Worker"); // Default role

  const fetchAdminUsers = async (role: string) => {
    try {
      const roleId = role === "Worker" ? 3 : 2;
      const response = await axios.get(
        `${backendBaseUrl}/admin?roleId=${roleId}`
      );
      setUsers(response.data.data || []);
      // console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching admin users:", error);
    }
  };

  useEffect(() => {
    fetchAdminUsers(selectedRole);
  }, [selectedRole]);

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">User List</h2>

        {/* Dropdown with Label */}
        <div className="flex items-center gap-2">
          <label htmlFor="userType" className="text-sm text-gray-600">
            View:
          </label>
          <select
            id="userType"
            className="border border-gray-300 text-sm rounded-md px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="Worker">Worker</option>
            <option value="Hire">Hire</option>
          </select>
        </div>
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-x-auto max-h-[520px] overflow-y-auto rounded-xl border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-600">
                UserId
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-600">
                First Name
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-600">
                Last Name
              </th>
              {/* <th className="px-4 py-3 text-left font-semibold text-gray-600">
                Address
              </th> */}
              <th className="px-4 py-3 text-left font-semibold text-gray-600">
                Phone
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-600">
                Photo
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-600">
                Documents
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-600">
                Report
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-600">
                Block
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user: any) => (
              <tr key={user.userId} className="hover:bg-gray-50">
                <td className="px-4 py-3">{user.userId}</td>
                <td className="px-4 py-3">{user.firstName}</td>
                <td className="px-4 py-3">{user.lastName}</td>
                {/* <td className="px-4 py-3">{user.address}</td> */}
                <td className="px-4 py-3">{user.phoneNumber}</td>
                <td className="px-4 py-3">
                  <img
                    src={`${baseImageUrl}/${user.photoUrl}`}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-4 py-3 space-x-1">
                  {Array.isArray(user.idDocuments) &&
                    user.idDocuments.map((doc: any, idx: any) => (
                      <span
                        key={idx}
                        className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {doc.documentType}
                      </span>
                    ))}
                </td>

                <td className="px-4 py-3">
                  <button className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200">
                    Report
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">
                    Block
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsersTable;
