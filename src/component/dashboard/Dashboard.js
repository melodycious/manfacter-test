import React from 'react'
import Progress from './progress/Progress'
import ImageContainer from '../dashboard/ImageContainer';
import Technologies from './technologies/Technologies';
import Colors from './Colors';

const Dashboard = () => {

    const colors = [
        { name: 'White', hex: 'bg-white' },
        { name: 'Black', hex: 'bg-black' },
        { name: 'Anthracite', hex: 'bg-gray-500' },
        { name: 'Blue', hex: 'bg-blue-500' },
        { name: 'Red', hex: 'bg-red-500' },
        { name: 'Green', hex: 'bg-green-500' },
        { name: 'Yellow', hex: 'bg-yellow-500' },
      ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-4 gap-4 col-span-1">
            <Progress />
            <ImageContainer />
                            {/* <div className="mb-2">Manifold_v01.stl</div>
                            <div>Order3859420.zip</div>
                            <ul className="list-disc ml-4">
                                <li>Threads_v01.stl</li>
                                <li>Manifold_v03.stl</li>
                                <li>Part_304.stl</li>
                            </ul> */}
                    
                {/* Middle Column */}
                <div className="col-span-1">
                    <div className="">
                        <div className="text-lg font-bold mb-4">Select Production Technology</div>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                                <Technologies />
                        </div>
                        <div className="text-lg font-bold mb-4">Select Material</div>
                        <select className="bg-white p-2 text-sm rounded mb-4 border-2 w-full">
                            <option>ABS</option>
                            <option>PLA</option>
                        </select>
                        
                        <div className="grid grid-cols-2">
                        <div className="text-lg font-bold mb-4">Layer Height</div>
                        <select className="bg-white p-2 text-sm rounded mb-4 border-2 w-full">
                            <option>0.2mm</option>
                            <option>0.4mm</option>
                        </select>
                        <div className="text-lg font-bold mb-4">Infill</div>
                        <select className="bg-white p-2 text-sm rounded mb-4 border-2 w-full">
                            <option>40%</option>
                            <option>50%</option>
                        </select>
                        </div>
                        
                        <div className="text-lg font-bold mb-4">Post Production</div>
                        <select className="bg-white p-2 text-sm rounded mb-4 border-2 w-full">
                            <option>None</option>
                        </select>
                        <div className="text-lg font-bold mb-4">Quantity</div>
                        <input type="number" className="bg-white p-2 rounded mb-4 w-full" value="1" />
                        
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-span-1">
                    <div className="">
                        <div className="text-lg font-bold mb-4 text-blue-600">Technical Specifications</div>

                        <Colors colors={colors} /> 
                        
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
