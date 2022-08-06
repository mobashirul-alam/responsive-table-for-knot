import React from 'react';

const TableOne = () => {
    return (
        <div class="overflow-auto rounded-none">
            <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                    {/* <thead className=' border-b border-cyan-100'> */}
                    <tr>
                        <th className="py-3 text-left px-6 whitespace-nowrap">SL.</th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">NAME</th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">JOB</th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">ICON</th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">DETAILS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                        <td className="py-3 px-6 whitespace-nowrap">1</td>
                        <td className="py-3 px-6 whitespace-nowrap">Cy Ganderton</td>
                        <td className="py-3 px-6 whitespace-nowrap">Quality Control Specialist</td>
                        <td className="py-3 px-6 whitespace-nowrap">Blue</td>
                        <td className="py-3 px-6 whitespace-nowrap">This is fifth column</td>
                    </tr>
                    <tr className='hover:shadow-lg hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                        <td className="py-3 px-6 whitespace-nowrap">2</td>
                        <td className="py-3 px-6 whitespace-nowrap">Hart Hagerty</td>
                        <td className="py-3 px-6 whitespace-nowrap">Desktop Support Technician</td>
                        <td className="py-3 px-6 whitespace-nowrap">Purple</td>
                        <td className="py-3 px-6 whitespace-nowrap">This is fifth column</td>
                    </tr>
                    <tr className='hover:shadow-lg hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                        <td className="py-3 px-6 whitespace-nowrap">3</td>
                        <td className="py-3 px-6 whitespace-nowrap">Brice Swyre</td>
                        <td className="py-3 px-6 whitespace-nowrap">Tax Accountant</td>
                        <td className="py-3 px-6 whitespace-nowrap">Red</td>
                        <td className="py-3 px-6 whitespace-nowrap">This is fifth column</td>
                    </tr>
                    <tr className='hover:shadow-lg hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                        <td className="py-3 px-6 whitespace-nowrap">1</td>
                        <td className="py-3 px-6 whitespace-nowrap">Cy Ganderton</td>
                        <td className="py-3 px-6 whitespace-nowrap">Quality Control Specialist</td>
                        <td className="py-3 px-6 whitespace-nowrap">Blue</td>
                        <td className="py-3 px-6 whitespace-nowrap">This is fifth column</td>
                    </tr>
                    <tr className='hover:shadow-lg hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                        <td className="py-3 px-6 whitespace-nowrap">2</td>
                        <td className="py-3 px-6 whitespace-nowrap">Hart Hagerty</td>
                        <td className="py-3 px-6 whitespace-nowrap">Desktop Support Technician</td>
                        <td className="py-3 px-6 whitespace-nowrap">Purple</td>
                        <td className="py-3 px-6 whitespace-nowrap">This is fifth column</td>
                    </tr>
                    <tr className='hover:shadow-lg hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                        <td className="py-3 px-6 whitespace-nowrap">3</td>
                        <td className="py-3 px-6 whitespace-nowrap">Brice Swyre</td>
                        <td className="py-3 px-6 whitespace-nowrap">Tax Accountant</td>
                        <td className="py-3 px-6 whitespace-nowrap">Red</td>
                        <td className="py-3 px-6 whitespace-nowrap">This is fifth column</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableOne;