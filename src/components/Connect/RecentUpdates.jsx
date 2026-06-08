// export default function RecentUpdates() {
//   return (
//     <div className="updates-card">

//       <h3>Recent Updates</h3>

//       <div className="update-item">
//         <h4>Wiring Completed</h4>
//         <p>30 May 2026</p>
//       </div>

//       <div className="update-item">
//         <h4>FAT Scheduled</h4>
//         <p>02 June 2026</p>
//       </div>

//     </div>
//   );
// }



const updates = [
  {
    title: "Wiring Completed",
    date: "30 May 2026",
  },
  {
    title: "FAT Scheduled",
    date: "02 June 2026",
  },
];

export default function RecentUpdates() {
  return (
    <div className="updates-card">
      <h3>Recent Updates</h3>

      {updates.map((update, index) => (
        <div key={index} className="update-item">
          <h4>{update.title}</h4>
          <p>{update.date}</p>
        </div>
      ))}
    </div>
  );
}