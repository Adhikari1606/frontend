import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [enquiries, setEnquiries] = useState([]);

    useEffect(() => {
        const fetchEnquiries = async () => {
            try {
                const response = await axios.get('http://localhost:5000/enquiries');
                setEnquiries(response.data);
            } catch (error) {
                console.error('Error fetching enquiries:', error);
            }
        };

        fetchEnquiries();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enquiries.map((enquiry) => (
                            <tr key={enquiry._id} className="bg-gray-100">
                                <td className="px-4 py-2">{enquiry.fname}</td>
                                <td className="px-4 py-2">{enquiry.email}</td>
                                <td className="px-4 py-2">{enquiry.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
