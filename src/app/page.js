import Today from "@/components/Today";
export default function Home() {
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

  const date = new Date().toLocaleDateString("de-DE").split('.').join('/');

  const todayTasks = tasks.filter(task => task.date == date);
  return (
    <div className=" mt-4 p-2 rounded-lg w-full">
      <Today TodayTasks={todayTasks} />
    </div>
  );
}
