import React from 'react'
import Progress from './progress/Progress'
import ImageContainer from '../dashboard/ImageContainer';
import Technologies from './technologies/Technologies';
import Colors from './Colors';
/* import FileUploader from './FileUploader';  */

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Progress />
            <ImageContainer />
            

                            {/* <div className="mb-2">Manifold_v01.stl</div>
                            <div>Order3859420.zip</div>
                            <ul className="list-disc ml-4">
                                <li>Threads_v01.stl</li>
                                <li>Manifold_v03.stl</li>
                                <li>Part_304.stl</li>
                            </ul> */}
                    
                <div className="col-span-1">
                    <div className="">
                        <div className="text-sm font-bold mb-4 text-blue-600">Select Production Technology</div>
                                <Technologies />
    
                        <div className="text-sm font-bold mb-4 text-blue-600">Select Material</div>
                        <select className="bg-white p-2 text-sm rounded mb-4 border-2 w-full">
                            <option>ABS</option>
                            <option>PLA</option>
                        </select>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-sm font-bold mb-4 text-blue-600">Layer Height</div>
                                <select className="bg-white p-2 text-sm rounded mb-4 border-2 w-full">
                                <option>0.2mm</option>
                                <option>0.4mm</option>
                                </select>
                            </div>
                            <div>
                                <div className="text-sm font-bold mb-4 text-blue-600">Infill</div>
                                <select className="bg-white p-2 text-sm rounded mb-4 border-2 w-full">
                                <option>40%</option>
                                <option>50%</option>
                                </select>
                            </div>
                            </div>
                        <hr class="my-4 border-b border-gray-200" />

                        <div className="text-sm font-bold mb-4 text-blue-600">Post Production</div>
                        <select className="bg-white p-2 text-sm rounded mb-4 border-2 w-full">
                            <option>None</option>
                        </select>

                        <hr class="my-4 border-b border-gray-200" />

                        <div className="text-sm font-bold mb-4 text-blue-600">Quantity</div>
                        <input type="number" className="bg-white p-2 rounded mb-4 w-full" value="1" />
                        
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="">
                        <div className="text-sm font-bold mb-4 text-blue-600">Technical Specifications</div>
                                
                        <hr class="my-4 border-b border-gray-200" />

                        <Colors colors={colors} /> 
                        
                        <hr class="my-4 border-b border-gray-200" />

                        <div className="text-sm font-bold mt-4 text-blue-600">Resume</div>
                        <div className="justify-items-center">
                            <div className="text-sm">Per part: 25.30€</div>
                            <div className="text-sm">Quantity: 1</div>
                            <div className="text-sm">Total: 25.30€</div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
