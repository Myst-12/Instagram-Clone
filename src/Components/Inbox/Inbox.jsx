import InboxItem from "./InboxItem";

export default function Inbox() {
  return (
    <div className="inbox-container">

      <div className="inbox-header">
        <h3>username</h3>
        <span>✏️</span>
      </div>

      <div className="inbox-search">
        <input placeholder="Search" />
      </div>

      <div className="inbox-list">
        <InboxItem 
          name="Daksh"
          message="Where are you?"
          time="2h"
          unread={true}
        />

        <InboxItem 
          name="Teammate"
          message="Model trained?"
          time="5m"
        />
      </div>

    </div>
  );
}