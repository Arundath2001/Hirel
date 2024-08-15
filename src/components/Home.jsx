import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Home.css';

function Home() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({
        full_name: '',
        mobile_number: '',
        email: '',
        role: '',
        department: '',
        status: 'Active'
    });

    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://warm-victorious-skirt.glitch.me/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleNewUser = async () => {
        const newUser = {
            full_name: 'New User',
            mobile_number: '1234567890',
            email: 'newuser@example.com',
            role: 'Manager',
            department: 'IT'
        };

        try {
            await axios.post('https://warm-victorious-skirt.glitch.me/users', newUser);
            fetchUsers(); 
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user.id);
        setFormData({
            full_name: user.full_name,
            mobile_number: user.mobile_number,
            email: user.email,
            role: user.role,
            department: user.department,
            status: user.status
        });
    };

    const handleDelete = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axios.delete(`https://warm-victorious-skirt.glitch.me/users/${userId}`);
                fetchUsers();
                alert('User deleted successfully');
            } catch (error) {
                console.error('Error deleting user:', error);
                alert('Failed to delete user. Please try again.');
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log('Submitting data:', formData);
    
        try {
            const response = await axios.put(`https://warm-victorious-skirt.glitch.me/users/${editingUser}`, formData);
            console.log('Update response:', response.data);
            alert('User updated successfully');
            setEditingUser(null);
            fetchUsers();
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user. Please try again.');
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="Body">
            <header className="Home-header">
                <h1>Hirel</h1>
                <div className="nav-bar">
                    <a href="/Home">User Management</a>
                    <a href="/Home">Activity</a>
                    <a href="/Home">Dashboard</a>
                </div>
                <div className="user-info">
                    <span>Admin</span>
                </div>
            </header>
            <main>
                <div className="user-management">
                    <h2>User Management</h2>
                    <div className="user-stats">
                        <span>All Users: {users.length}</span>
                        <span>Departments: 10</span>
                        <div className="actions">
                            <button style={{ backgroundColor: "green" }} onClick={handleNewUser}>New User</button>
                        </div>
                        <input type="text" placeholder="Search" />
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>Full Name</th>
                                <th>Role</th>
                                <th>Department</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Created Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td>{user.full_name}</td>
                                    <td>{user.role}</td>
                                    <td>{user.department}</td>
                                    <td>{user.email}</td>
                                    <td className={user.status === 'Active' ? 'status-active' : 'status-inactive'}>
                                        {user.status}
                                    </td>
                                    <td>{new Date(user.created_at).toLocaleDateString()}</td>
                                    <td>
                                        <button style={{ backgroundColor: "#016EFD" }} onClick={() => handleEdit(user)}>Edit</button>
                                        <button style={{ backgroundColor: "red" }} onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {editingUser && (
                        <form onSubmit={handleSubmit}>
                            <h3>Edit User</h3>
                            <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name" required />
                            <input type="text" name="mobile_number" value={formData.mobile_number} onChange={handleChange} placeholder="Mobile Number" required />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                            <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role" />
                            <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
                            <select name="status" value={formData.status} onChange={handleChange}>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                            <button type="submit">Update</button>
                            <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Home;
