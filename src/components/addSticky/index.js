'use client'
import { Sketch } from '@uiw/react-color';
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
const AddSticky = ({ handleClosePopUp }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [color, setColor] = useState("#ffffff");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClosePopUp();
    console.log({ taskTitle, taskDescription, color });

  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={handleClosePopUp}
    >
      <div
        className="bg-white w-4/5 md:w-2/3 lg:w-1/2 p-8 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Sticky</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="taskTitle"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full p-2 outline-none rounded mt-1 placeholder-gray-400"
              placeholder="Enter title"
            />
          </div>
          <div>
            <textarea
              name="taskDescription"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full p-2 outline-none rounded mt-1 placeholder-gray-400 placeholder:font-light"
              rows="2"
              placeholder="Enter details"
            ></textarea>
          </div>
          <div>
            <label className='mx-2 py-2 font-medium text-gray-400 '>Pick a color</label>
            <div className=''>
              <Sketch
                style={{ boxShadow: 'none', border: 'none', width: 'full' }}
                color={color}
                onChange={(color) => {
                  setColor(color.hex);
                }} />
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={handleClosePopUp}
              className="px-4 py-2 mt-4 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-[#FFD739] mt-4"
            >
              Add Sticky
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Page = () => {
  const [openPopUp, setOpenPopUp] = useState(false);

  const handleOpenPopUp = () => {
    setOpenPopUp(true);
  };

  const handleClosePopUp = () => {
    setOpenPopUp(false);
  };

  return (
    <div>
      <div
        className="bg-gray-200 m-4 p-4 rounded-md h-48 overflow-scroll flex items-center justify-center opacity-90 hover:bg-gray-300 text-8xl text-gray-400 hover:text-gray-500 hover:cursor-pointer"
        onClick={handleOpenPopUp}
      >
        <FaPlus />
      </div>

      {openPopUp && <AddSticky handleClosePopUp={handleClosePopUp} />}
    </div>
  );
};

export default Page;
