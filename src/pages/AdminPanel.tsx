import AdminUsersTable from "../admin/AdminUsersTable";

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Message for small screens */}
      <div className="block md:hidden w-full h-screen flex items-center justify-center p-4 text-center bg-white">
        <p className="text-lg font-semibold text-gray-700">
          📱 Please open this admin panel on a <span className="text-blue-600">desktop</span> device for better visibility and experience.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-8">Admin Panel</h2>
          <nav className="space-y-4">
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              📊 Dashboard
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              👤 Users
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              ⚙️ Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Top Navbar */}
          <header className="bg-white rounded-xl shadow p-4 mb-6 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              Welcome, Admin
            </h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Logout
            </button>
          </header>

          {/* Dashboard Cards */}
          <AdminUsersTable />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
