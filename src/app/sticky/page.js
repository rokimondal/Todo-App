import AddSticky from '@/components/addSticky';
import React from 'react'

const page = () => {
    const tasks = [
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8801",
      "title": "Submit Project Report",
      "description": "Complete and submit the final project report to the manager.",
      "date": "12/12/2024",
      "time": "14:00",
      "status": false,
      "tags": ["Project", "Deadline", "Report"],
      "list": ["Professional"],
      "groups": ["Managers", "Developers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8802",
      "title": "Design New App UI",
      "description": "Create the initial design for the mobile app user interface.",
      "date": "15/12/2024",
      "time": "10:30",
      "status": false,
      "tags": ["Design", "UI/UX"],
      "list": ["Professional", "Artist"],
      "groups": ["Designers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8803",
      "title": "Weekly Team Meeting",
      "description": "Discuss weekly progress and plan next steps.",
      "date": "13/12/2024",
      "time": "09:00",
      "status": true,
      "tags": ["Meeting", "Planning"],
      "list": ["Professional"],
      "groups": ["Managers", "Marketers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8804",
      "title": "Complete JavaScript Tutorial",
      "description": "Finish the advanced JavaScript course on the online platform.",
      "date": "11/12/2024",
      "time": "20:00",
      "status": false,
      "tags": ["JavaScript", "Learning"],
      "list": ["Personal", "Professional"],
      "groups": ["Developers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8805",
      "title": "Plan Marketing Strategy",
      "description": "Brainstorm and draft the marketing strategy for the next campaign.",
      "date": "14/12/2024",
      "time": "15:00",
      "status": false,
      "tags": ["Marketing", "Strategy"],
      "list": ["Business"],
      "groups": ["Marketers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8806",
      "title": "Client Presentation",
      "description": "Prepare slides and present the proposal to the client.",
      "date": "16/12/2024",
      "time": "11:00",
      "status": true,
      "tags": ["Client", "Presentation"],
      "list": ["Professional", "Business"],
      "groups": ["Managers", "Marketers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8807",
      "title": "Organize Art Portfolio",
      "description": "Arrange all art pieces in the digital portfolio.",
      "date": "10/12/2024",
      "time": "18:00",
      "status": false,
      "tags": ["Art", "Portfolio"],
      "list": ["Artist"],
      "groups": ["Designers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8808",
      "title": "Fix Backend API Issues",
      "description": "Debug and fix the errors in the backend API endpoints.",
      "date": "10/12/2024",
      "time": "16:00",
      "status": true,
      "tags": ["Backend", "BugFix"],
      "list": ["Professional"],
      "groups": ["Developers", "Testers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8809",
      "title": "Create Wireframe for New Website",
      "description": "Design the wireframe layout for the client's new website.",
      "date": "18/12/2024",
      "time": "10:00",
      "status": false,
      "tags": ["Wireframe", "Website"],
      "list": ["Artist", "Business"],
      "groups": ["Designers", "Managers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8810",
      "title": "Host Team Building Activity",
      "description": "Organize a team-building activity for better collaboration.",
      "date": "20/12/2024",
      "time": "13:00",
      "status": false,
      "tags": ["Team", "Activity"],
      "list": ["Personal", "Professional"],
      "groups": ["Managers", "Marketers", "Developers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8811",
      "title": "Submit Project Report",
      "description": "Complete and submit the final project report to the manager.",
      "date": "12/12/2024",
      "time": "14:00",
      "status": false,
      "tags": ["Project", "Deadline", "Report"],
      "list": ["Professional"],
      "groups": ["Managers", "Developers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8812",
      "title": "Design New App UI",
      "description": "Create the initial design for the mobile app user interface.",
      "date": "12/12/2024",
      "time": "10:30",
      "status": false,
      "tags": ["Design", "UI/UX"],
      "list": ["Professional", "Artist"],
      "groups": ["Designers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8813",
      "title": "Fix Backend API Issues",
      "description": "Debug and fix the errors in the backend API endpoints.",
      "date": "12/12/2024",
      "time": "16:00",
      "status": true,
      "tags": ["Backend", "BugFix"],
      "list": ["Professional"],
      "groups": ["Developers", "Testers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8814",
      "title": "Client Presentation Preparation",
      "description": "Prepare slides and present the proposal to the client.",
      "date": "12/12/2024",
      "time": "18:00",
      "status": false,
      "tags": ["Client", "Presentation"],
      "list": ["Professional", "Business"],
      "groups": ["Managers", "Marketers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8815",
      "title": "Team Meeting",
      "description": "Discuss the weekly progress and next steps with the team.",
      "date": "12/12/2024",
      "time": "09:00",
      "status": true,
      "tags": ["Meeting", "Progress"],
      "list": ["Professional"],
      "groups": ["Managers", "Marketers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8816",
      "title": "Complete JavaScript Tutorial",
      "description": "Finish the advanced JavaScript course on the online platform.",
      "date": "11/12/2024",
      "time": "20:00",
      "status": false,
      "tags": ["JavaScript", "Learning"],
      "list": ["Personal", "Professional"],
      "groups": ["Developers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8817",
      "title": "Plan Marketing Strategy",
      "description": "Brainstorm and draft the marketing strategy for the next campaign.",
      "date": "11/12/2024",
      "time": "15:00",
      "status": true,
      "tags": ["Marketing", "Strategy"],
      "list": ["Business"],
      "groups": ["Marketers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8818",
      "title": "Design New App UI",
      "description": "Create the initial design for the mobile app user interface.",
      "date": "11/12/2024",
      "time": "10:30",
      "status": false,
      "tags": ["Design", "UI/UX"],
      "list": ["Professional", "Artist"],
      "groups": ["Designers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f8819",
      "title": "Weekly Team Meeting",
      "description": "Discuss weekly progress and plan next steps.",
      "date": "11/12/2024",
      "time": "09:00",
      "status": true,
      "tags": ["Meeting", "Planning"],
      "list": ["Professional"],
      "groups": ["Managers", "Marketers"]
    }
]
 const pendingTask = tasks.filter(task=>task.status == false);
const colors =[
"A8F6FF", "A8FFD2", "FFD5A8", "A8E2FF", "D0F0C0", "F9E0B5", "FFDBA8", "C2E4FF", "F2D9F4", "F8B3D2",
"FFB3B3", "D9FFD9", "C0FFD9", "D2F0FF", "FFB8F0", "FFB0A6", "F3D1A1", "B6E0F0", "C9FFD5", "FFDAC1",
"FFE0B5", "C2FFC2", "F0F5A8", "FFDDC1", "E8FFD6", "D6DFFF", "FFF1A8", "F3C6F3", "A8D0FF", "FFB8A8",
"F2F1C9", "A8F8D8", "F5C6D2", "D1F2FF", "F7E0B5", "FFF0F5", "D4E8F9", "A2DFFF", "C6FFD8", "E0FFCC",
"B2CFF7", "D9F9D9", "FFF4A8", "F2E0A8", "C3FFE0", "A2FFFB", "E8E8F7", "F0A8FF", "D8F5D8", "A8CFFF",
"D2A8FF", "A8E4FF", "F2F8B5", "E0F3FF", "A8E6FF", "C3E0FF", "B8A8FF", "D9F0A8", "F5D1E6", "C9B2FF",
"A8D8FF", "E8D8FF", "A8FFD0", "FFD9F7", "F1F3A8", "C8FFFB", "A8C6FF", "F0A8E2", "FFCCB3", "A8B9FF",
"F9E8A8", "E4FFE0", "F0FFDB", "A8D1FF", "C2F8FF", "F9D8FF", "A8FFB3", "F6B8A8", "E8A8D9", "A8F0D9",
"F5F5A8", "E0E8FF", "D9A8FF", "E8FFD1", "D8A8FF", "F0FFD1", "C0E8F8", "F8E8A8", "FFD6E8", "D2FFDA",
"A8FFFA", "D2FFB5", "F8D2FF", "A8F7FF", "C8FFD1", "F5A8FF", "A8F3FF", "C2FFD1", "F1A8F8", "F0E2FF",
]
  return (
    <div className='mt-4 p-2 rounded-lg w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  m-auto'>
       <AddSticky/>
        {pendingTask.length > 0 && pendingTask.map(task=>(<div key={task._id} className=' m-4 p-4 rounded-md h-48 overflow-scroll flex-col  justify-between opacity-90' style={{backgroundColor: `#${colors[Math.floor(Math.random() * 100)]}`}}>
            <h2 className='text-lg min-h-14'>{task.title}</h2>
            <h2 className='text-sm mt-2 h-16'>{task.description}</h2>
        </div>))}
    </div>
  )
}

export default page;