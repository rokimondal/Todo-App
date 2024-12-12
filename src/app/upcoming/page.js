import Upcoming from "@/components/UpComing";

const upcoming = () => {
  const tasks = [{
    "_id": "64fa1a6c42d9c8f5e8e1f889",
    "title": "Team Meeting",
    "description": "Attend the weekly team meeting to discuss project progress.",
    "date": "11/12/2024",
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
    "date": "10/10/2024",
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
    "date": "09/10/2024",
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
    "date": "12/12/2024",
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
    "date": "10/12/2024",
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
    "date": "15/01/2025",
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
    "date": "01/10/2024",
    "time": "12:00",
    "status": true,
    "tags": ["Review", "HR"],
    "list": ["Professional"],
    "groups": ["HR"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f890",
    "title": "Client Presentation",
    "description": "Prepare and deliver the Q4 strategy presentation to the client.",
    "date": "14/12/2024",
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
    "date": "12/12/2024",
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
    "date": "25/11/2024",
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
    "date": "12/12/2024",
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
    "date": "15/12/2024",
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
    "date": "13/12/2024",
    "time": "09:00",
    "status": true,
    "tags": ["Meeting", "Planning"],
    "list": ["Professional"],
    "groups": ["Managers", "Marketers"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88a1",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88a2",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88a3",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88a4",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88a5",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88a6",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88a7",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88a8",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88a9",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88b0",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88b1",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88b2",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88b3",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88b4",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88b5",
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
    "_id": "64fa1a6c42d9c8f5e8e1f88b6",
    "title": "Team Building Workshop",
    "description": "Organize a workshop to improve team collaboration.",
    "date": "13/12/2024",
    "time": "14:00",
    "status": false,
    "tags": ["Teamwork", "Workshop"],
    "list": ["Professional"],
    "groups": ["Managers", "Developers"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88b7",
    "title": "Finalize Budget Report",
    "description": "Review and finalize the annual budget report.",
    "date": "15/12/2024",
    "time": "16:00",
    "status": false,
    "tags": ["Budget", "Report"],
    "list": ["Business", "Finance"],
    "groups": ["Managers"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88b8",
    "title": "Complete Fitness Routine",
    "description": "Finish the weekly fitness plan at the gym.",
    "date": "14/12/2024",
    "time": "19:00",
    "status": false,
    "tags": ["Health", "Fitness"],
    "list": ["Personal"],
    "groups": ["Self"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88b9",
    "title": "Write Blog Post on JavaScript",
    "description": "Draft a technical blog post on advanced JavaScript concepts.",
    "date": "16/12/2024",
    "time": "17:00",
    "status": false,
    "tags": ["JavaScript", "Blog"],
    "list": ["Professional", "Personal"],
    "groups": ["Writers"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88c0",
    "title": "Prepare Tax Documents",
    "description": "Organize and prepare all documents required for tax submission.",
    "date": "20/12/2024",
    "time": "10:00",
    "status": false,
    "tags": ["Finance", "Tax"],
    "list": ["Business"],
    "groups": ["Accountants"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88c1",
    "title": "Attend Yoga Class",
    "description": "Join the evening yoga session for relaxation.",
    "date": "12/12/2024",
    "time": "18:00",
    "status": false,
    "tags": ["Health", "Wellness"],
    "list": ["Personal"],
    "groups": ["Fitness Enthusiasts"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88c2",
    "title": "Meet with Investors",
    "description": "Present the business proposal to potential investors.",
    "date": "18/12/2024",
    "time": "11:00",
    "status": false,
    "tags": ["Investment", "Meeting"],
    "list": ["Business", "Professional"],
    "groups": ["Managers", "Investors"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88c3",
    "title": "Organize Code Review Session",
    "description": "Conduct a code review session with the development team.",
    "date": "17/12/2024",
    "time": "15:00",
    "status": false,
    "tags": ["Coding", "Review"],
    "list": ["Professional"],
    "groups": ["Developers"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88c4",
    "title": "Brainstorm Content Ideas",
    "description": "Collaborate on new content ideas for the upcoming campaign.",
    "date": "13/12/2024",
    "time": "10:00",
    "status": false,
    "tags": ["Content", "Marketing"],
    "list": ["Business", "Professional"],
    "groups": ["Marketers", "Writers"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88c5",
    "title": "Prepare Conference Presentation",
    "description": "Draft slides for the upcoming technology conference.",
    "date": "19/12/2024",
    "time": "13:00",
    "status": false,
    "tags": ["Presentation", "Conference"],
    "list": ["Professional"],
    "groups": ["Managers", "Developers"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88c6",
    "title": "Shopping for Home Supplies",
    "description": "Buy groceries and essentials for the week.",
    "date": "12/12/2024",
    "time": "16:00",
    "status": false,
    "tags": ["Shopping", "Personal"],
    "list": ["Personal"],
    "groups": ["Family"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88c7",
    "title": "Cook a Special Dinner",
    "description": "Prepare a gourmet dinner for the family.",
    "date": "12/12/2024",
    "time": "20:00",
    "status": false,
    "tags": ["Cooking", "Personal"],
    "list": ["Personal"],
    "groups": ["Family"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88c8",
    "title": "Research New Market Trends",
    "description": "Analyze the latest trends in the technology market.",
    "date": "15/12/2024",
    "time": "14:00",
    "status": false,
    "tags": ["Research", "Market"],
    "list": ["Professional"],
    "groups": ["Analysts"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88c9",
    "title": "Write Feedback for Team Members",
    "description": "Provide constructive feedback to team members on their work.",
    "date": "14/12/2024",
    "time": "11:00",
    "status": false,
    "tags": ["Feedback", "Teamwork"],
    "list": ["Professional"],
    "groups": ["Managers"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88d0",
    "title": "Attend Art Exhibition",
    "description": "Visit the annual art exhibition in the city.",
    "date": "14/12/2024",
    "time": "15:00",
    "status": false,
    "tags": ["Art", "Personal"],
    "list": ["Personal"],
    "groups": ["Artists"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88d1",
    "title": "Learn Python Basics",
    "description": "Complete the beginner's Python course.",
    "date": "18/12/2024",
    "time": "19:00",
    "status": false,
    "tags": ["Learning", "Python"],
    "list": ["Professional", "Personal"],
    "groups": ["Developers"]
  },
  {
    "_id": "64fa1a6c42d9c8f5e8e1f88d2",
    "title": "Plan Charity Event",
    "description": "Draft a plan for the charity event scheduled next month.",
    "date": "16/12/2024",
    "time": "12:00",
    "status": false,
    "tags": ["Charity", "Planning"],
    "list": ["Personal", "Professional"],
    "groups": ["Managers", "Volunteers"]
  },
  ];
  const date = new Date().toLocaleDateString("de-DE").split('.').join('/');

  const upcomingTask = tasks.filter(task => task.date >= date);

  return (
    <div className=" mt-4 p-2 rounded-lg w-full">
      <Upcoming UpcomingTask={upcomingTask} />
    </div>
  )
}

export default upcoming