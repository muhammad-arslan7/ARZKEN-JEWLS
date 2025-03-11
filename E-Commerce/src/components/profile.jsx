import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProfilePage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profilePic: "/profile.webp",
  });
  const [orders, setOrders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  // Load user data from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userProfile"));
    if (storedUser) {
      setUser(storedUser);
    }

    const storedOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
    setOrders(storedOrders);
  }, []);

  // Save user data to localStorage
  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(user));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 relative">
        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-4 left-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
        >
          ← Go Back
        </Link>

        {/* Profile Section */}
        <div className="flex flex-col items-center border-b pb-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <label
              htmlFor="file-upload"
              className="absolute bottom-2 right-2 bg-gray-800 text-white px-2 py-1 text-xs rounded cursor-pointer hover:bg-gray-700 transition"
            >
              Upload
            </label>
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setUser({ ...user, profilePic: imageUrl });
                }
              }}
            />
          </div>

          {/* User Data */}
          <div className="mt-4 text-center">
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  placeholder="Full Name"
                  className="block w-full px-4 py-2 border rounded"
                />
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Email"
                  className="block w-full px-4 py-2 border rounded"
                />
                <input
                  type="text"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  placeholder="Phone"
                  className="block w-full px-4 py-2 border rounded"
                />
                <input
                  type="text"
                  value={user.address}
                  onChange={(e) =>
                    setUser({ ...user, address: e.target.value })
                  }
                  placeholder="Address"
                  className="block w-full px-4 py-2 border rounded"
                />
                <button
                  onClick={handleSave}
                  className="mt-3 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {user.name || "Your Name"}
                </h2>
                <p className="text-gray-600">{user.email || "Your Email"}</p>
                <p className="text-gray-600">{user.phone || "Your Phone"}</p>
                <p className="text-gray-600">
                  {user.address || "Your Address"}
                </p>

                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-3 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Order Tracking Section */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Order Tracking
          </h3>
          <Link to='/' className="text-blue-700" > Your order</Link>
        </div>

        {/* Account Settings */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Account Settings
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <Link to="/change-password" className="hover:underline">
                Change Password
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Support
              </Link>
            </li>
            <li>
              <Link
                to="/delete-account"
                className="hover:underline text-red-600"
              >
                Delete Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
