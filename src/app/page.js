import Today from "@/components/Today";
export default function Home() {
  const tasks = [
    {
      "_id": "64fa1a6c42d9c8f5e8e1f889",
      "title": "Team Meeting",
      "description": "Attend the weekly team meeting to discuss project progress.",
      "date": "03/07/2025",
      "time": "10:30",
      "status": true,
      "tags": ["Meeting", "Team"],
      "list": ["Professional"],
      "groups": ["Developers", "Managers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88a",
      "title": "Submit Expense Report",
      "description": "Prepare and submit the expense report for the last quarter.",
      "date": "04/07/2025",
      "time": "16:00",
      "status": false,
      "tags": ["Expense", "Report", "Finance"],
      "list": ["Professional"],
      "groups": ["Finance"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88b",
      "title": "Doctor's Appointment",
      "description": "Visit the clinic for a scheduled health check-up.",
      "date": "02/07/2025",
      "time": "09:00",
      "status": true,
      "tags": ["Health", "Personal"],
      "list": ["Personal"],
      "groups": []
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88c",
      "title": "Buy Groceries",
      "description": "Purchase vegetables, fruits, and daily essentials.",
      "date": "05/07/2025",
      "time": "18:00",
      "status": false,
      "tags": ["Shopping", "Personal"],
      "list": ["Personal"],
      "groups": []
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88d",
      "title": "Code Review",
      "description": "Review the code submitted by the junior developer for the new feature.",
      "date": "06/07/2025",
      "time": "15:00",
      "status": false,
      "tags": ["Code Review", "Professional"],
      "list": ["Professional"],
      "groups": ["Developers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88e",
      "title": "Plan Holiday Trip",
      "description": "Research and finalize destinations for the upcoming holiday.",
      "date": "10/07/2025",
      "time": "19:00",
      "status": false,
      "tags": ["Holiday", "Travel"],
      "list": ["Personal"],
      "groups": []
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88f",
      "title": "Submit Performance Review",
      "description": "Submit the self-assessment performance review to HR.",
      "date": "01/07/2025",
      "time": "12:00",
      "status": true,
      "tags": ["Review", "HR"],
      "list": ["Professional"],
      "groups": ["HR"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f890",
      "title": "Client Presentation",
      "description": "Prepare and deliver the Q3 strategy presentation to the client.",
      "date": "11/07/2025",
      "time": "11:00",
      "status": false,
      "tags": ["Presentation", "Client"],
      "list": ["Professional"],
      "groups": ["Clients"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f891",
      "title": "Daily Standup Meeting",
      "description": "Participate in the daily standup meeting with the team.",
      "date": "03/07/2025",
      "time": "09:00",
      "status": true,
      "tags": ["Meeting", "Daily"],
      "list": ["Professional"],
      "groups": ["Developers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f892",
      "title": "Organize Files",
      "description": "Sort and organize old project files into folders.",
      "date": "02/07/2025",
      "time": "14:30",
      "status": true,
      "tags": ["Organization", "Files"],
      "list": ["Professional"],
      "groups": []
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88x",
      "title": "Submit Project Report",
      "description": "Complete and submit the final project report to the manager.",
      "date": "05/07/2025",
      "time": "14:00",
      "status": false,
      "tags": ["Project", "Deadline", "Report"],
      "list": ["Professional"],
      "groups": ["Managers", "Developers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88y",
      "title": "Design New App UI",
      "description": "Create the initial design for the mobile app user interface.",
      "date": "07/07/2025",
      "time": "10:30",
      "status": false,
      "tags": ["Design", "UI/UX"],
      "list": ["Professional", "Artist"],
      "groups": ["Designers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88z",
      "title": "Weekly Team Meeting",
      "description": "Discuss weekly progress and plan next steps.",
      "date": "08/07/2025",
      "time": "09:00",
      "status": false,
      "tags": ["Meeting", "Planning"],
      "list": ["Professional"],
      "groups": ["Managers", "Marketers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88a1",
      "title": "Complete JavaScript Tutorial",
      "description": "Finish the advanced JavaScript course on the online platform.",
      "date": "06/07/2025",
      "time": "20:00",
      "status": false,
      "tags": ["JavaScript", "Learning"],
      "list": ["Personal", "Professional"],
      "groups": ["Developers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88a2",
      "title": "Plan Marketing Strategy",
      "description": "Brainstorm and draft the marketing strategy for the next campaign.",
      "date": "10/07/2025",
      "time": "15:00",
      "status": false,
      "tags": ["Marketing", "Strategy"],
      "list": ["Business"],
      "groups": ["Marketers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88a3",
      "title": "Client Presentation",
      "description": "Prepare slides and present the proposal to the client.",
      "date": "11/07/2025",
      "time": "11:00",
      "status": false,
      "tags": ["Client", "Presentation"],
      "list": ["Professional", "Business"],
      "groups": ["Managers", "Marketers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88a4",
      "title": "Organize Art Portfolio",
      "description": "Arrange all art pieces in the digital portfolio.",
      "date": "09/07/2025",
      "time": "18:00",
      "status": false,
      "tags": ["Art", "Portfolio"],
      "list": ["Artist"],
      "groups": ["Designers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88a5",
      "title": "Fix Backend API Issues",
      "description": "Debug and fix the errors in the backend API endpoints.",
      "date": "03/07/2025",
      "time": "16:00",
      "status": true,
      "tags": ["Backend", "BugFix"],
      "list": ["Professional"],
      "groups": ["Developers", "Testers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88a6",
      "title": "Create Wireframe for New Website",
      "description": "Design the wireframe layout for the client's new website.",
      "date": "13/07/2025",
      "time": "10:00",
      "status": false,
      "tags": ["Wireframe", "Website"],
      "list": ["Artist", "Business"],
      "groups": ["Designers", "Managers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88a7",
      "title": "Host Team Building Activity",
      "description": "Organize a team-building activity for better collaboration.",
      "date": "14/07/2025",
      "time": "13:00",
      "status": false,
      "tags": ["Team", "Activity"],
      "list": ["Personal", "Professional"],
      "groups": ["Managers", "Marketers", "Developers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88a8",
      "title": "Submit Project Report",
      "description": "Complete and submit the final project report to the manager.",
      "date": "05/07/2025",
      "time": "14:00",
      "status": false,
      "tags": ["Project", "Deadline", "Report"],
      "list": ["Professional"],
      "groups": ["Managers", "Developers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88a9",
      "title": "Design New App UI",
      "description": "Create the initial design for the mobile app user interface.",
      "date": "06/07/2025",
      "time": "10:30",
      "status": false,
      "tags": ["Design", "UI/UX"],
      "list": ["Professional", "Artist"],
      "groups": ["Designers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88b0",
      "title": "Fix Backend API Issues",
      "description": "Debug and fix the errors in the backend API endpoints.",
      "date": "03/07/2025",
      "time": "16:00",
      "status": true,
      "tags": ["Backend", "BugFix"],
      "list": ["Professional"],
      "groups": ["Developers", "Testers"]
    },
    {
      "_id": "64fa1a6c42d9c8f5e8e1f88b1",
      "title": "Client Presentation Preparation",
      "description": "Prepare slides and present the proposal to the client.",
      "date": "06/07/2025",
      "time": "18:00",
      "status": false,
      "tags": ["Client", "Presentation"],
      "list": ["Professional", "Business"],
      "groups": ["Managers", "Marketers"]
    }
  ];


  // const date = new Date().toLocaleDateString("de-DE").split('.').join('/');

  // const todayTasks = tasks.filter(task => task.date == date);
  const todayTasks = tasks;
  return (
    <div className=" mt-4 p-2 rounded-lg w-full">
      <Today TodayTasks={todayTasks} />
    </div>
  );
}
