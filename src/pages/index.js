import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({ rank: '', percentile: '', score: '' });
  const [percentile, setPercentile] = useState(72); 

  const handleUpdateClick = () => setIsModalOpen(true);

  const handleSave = () => {
    console.log('Updated values:', formValues);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex space-x-6 p-8">
        <div className="w-64 bg-white shadow-md p-4">
          <h1 className="text-2xl font-bold mb-6">WhatBytes</h1>
          <ul>
            <li className="mb-4 font-medium text-gray-600">Dashboard</li>
            <li className="mb-4 font-medium text-gray-600">Skill Test</li>
            <li className="mb-4 font-medium text-gray-600">Internship</li>
          </ul>
        </div>
        <div className="flex-grow p-8">
          <h2 className="text-xl font-semibold mb-6">Skill Test</h2>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">Hyper Text Markup Language</h3>
                <p className="text-sm text-gray-500">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
              </div>
              <button
                onClick={handleUpdateClick}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-bold flex items-center">Quick Statistics</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-vector/trophy_78370-345.jpg"
                  alt="Trophy Icon"
                  className="w-6 h-6 ml-2"
                />
                <div>
                  <p className="text-2xl font-bold">{formValues.rank || ''}</p>
                  <p className="text-sm text-gray-500">Your Rank</p>
                </div>
              </div>
              <div className="text-center flex items-center justify-center">
                <img
                  src="https://e7.pngegg.com/pngimages/37/860/png-clipart-computer-icons-calendar-date-calendar-text-calendar-thumbnail.png"
                  alt="Calendar Icon"
                  className="w-6 h-6 mr-2"
                />
                <div>
                  <p className="text-2xl font-bold">{formValues.percentile || ''}</p>
                  <p className="text-sm text-gray-500">Percentile</p>
                </div>
              </div>
              <div className="text-center flex items-center justify-center">
                <img
                  src="https://i.pinimg.com/736x/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg"
                  alt="Correct Answers Emoji"
                  className="w-6 h-6 mr-2"
                />
                <div>
                  <p className="text-2xl font-bold">{formValues.score || ''}</p>
                  <p className="text-sm text-gray-500">Correct Answers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
              <h4 className="font-medium mb-4">Syllabus Wise Analysis</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm">HTML Tools, Forms, History</p>
                  <p className="text-sm text-blue-500">80%</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-md">
                  <div className="bg-blue-500 h-2 rounded-md" style={{ width: '80%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm">Tags & References in HTML</p>
                  <p className="text-sm text-orange-500">60%</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-md">
                  <div className="bg-orange-500 h-2 rounded-md" style={{ width: '60%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm">Tables & References in HTML</p>
                  <p className="text-sm text-red-500">24%</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-md">
                  <div className="bg-red-500 h-2 rounded-md" style={{ width: '24%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm">Tables & CSS Basics</p>
                  <p className="text-sm text-green-500">96%</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-md">
                  <div className="bg-green-500 h-2 rounded-md" style={{ width: '96%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Comparison Graph Section (always visible) */}
      <h2 className="mt-6 text-xl font-bold">Comparison Graph</h2>
          <p>You scored 90% percentile, which is lower than the
          average percentile 72% of all the engineers who took this assessment.</p>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Update Scores</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Update your Rank</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={formValues.rank}
                  onChange={(e) => setFormValues({ ...formValues, rank: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Update your Percentile</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={formValues.percentile}
                  onChange={(e) => setFormValues({ ...formValues, percentile: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Update your Current Score</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={formValues.score}
                  onChange={(e) => setFormValues({ ...formValues, score: e.target.value })}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
            </div>

    
            <h2 className="mt-6 text-xl font-bold">Comparison Graph</h2>
            <p>You scored 90% percentile which is lower than the
            average percentile 72% of all the engineers who took this assessment</p>
          </div>
        </div>
      )}
    </div>
  );
}
