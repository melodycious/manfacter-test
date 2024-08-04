import React from 'react'

const Dashboard = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-3 gap-4">
                {/* Left Column */}
                <div className="col-span-1">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <div className="text-lg font-bold mb-4">Upload 3D model</div>
                        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                            {/* Upload button and file list */}
                            <div className="mb-2">Manifold_v01.stl</div>
                            <div>Order3859420.zip</div>
                            <ul className="list-disc ml-4">
                                <li>Threads_v01.stl</li>
                                <li>Manifold_v03.stl</li>
                                <li>Part_304.stl</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Middle Column */}
                <div className="col-span-1">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <div className="text-lg font-bold mb-4">Customize your order</div>
                        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                            <img src="/path/to/your/image.png" alt="3D Model" className="w-full h-auto mb-4" />
                            <div className="text-sm">Size: 124.9 x 199.5 x 385 mm</div>
                            <div className="text-sm">Volume: 962 cm³</div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-span-1">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <div className="text-lg font-bold mb-4">Select Production Technology</div>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            {/* Technology options */}
                            <button className="bg-blue-500 text-white p-2 rounded">FDM</button>
                            <button className="bg-blue-500 text-white p-2 rounded">SLA</button>
                            <button className="bg-blue-500 text-white p-2 rounded">SLS</button>
                            <button className="bg-blue-500 text-white p-2 rounded">DMLS</button>
                            <button className="bg-blue-500 text-white p-2 rounded">CNC</button>
                            <button className="bg-blue-500 text-white p-2 rounded">MJF</button>
                        </div>
                        <div className="text-lg font-bold mb-4">Select Material</div>
                        <select className="bg-white p-2 rounded mb-4">
                            <option>ABS</option>
                            <option>PLA</option>
                        </select>
                        <div className="text-lg font-bold mb-4">Layer Height</div>
                        <input type="text" className="bg-white p-2 rounded mb-4 w-full" value="0.2mm" />
                        <div className="text-lg font-bold mb-4">Infill</div>
                        <input type="text" className="bg-white p-2 rounded mb-4 w-full" value="40%" />
                        <div className="text-lg font-bold mb-4">Post Production</div>
                        <select className="bg-white p-2 rounded mb-4 w-full">
                            <option>None</option>
                        </select>
                        <div className="text-lg font-bold mb-4">Quantity</div>
                        <input type="number" className="bg-white p-2 rounded mb-4 w-full" value="1" />
                        <div className="text-lg font-bold mb-4">Colors</div>
                        <div className="grid grid-cols-3 gap-2">
                            <button className="bg-white w-full h-8 rounded"></button>
                            <button className="bg-black w-full h-8 rounded"></button>
                            <button className="bg-gray-500 w-full h-8 rounded"></button>
                            <button className="bg-blue-500 w-full h-8 rounded"></button>
                            <button className="bg-red-500 w-full h-8 rounded"></button>
                            <button className="bg-green-500 w-full h-8 rounded"></button>
                            <button className="bg-yellow-500 w-full h-8 rounded"></button>
                        </div>
                        <div className="text-lg font-bold mt-4">Resume</div>
                        <div className="text-sm">Per part: 25.30€</div>
                        <div className="text-sm">Quantity: 1</div>
                        <div className="text-sm">Total: 25.30€</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
