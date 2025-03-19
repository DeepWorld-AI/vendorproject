const pinnedChats = [
  "How can I improve my time man...",
  "What's the best way to learn a n...",
  "How do I start investing in stock...",
  "What are the benefits of daily ex...",
];

const chatHistory = [
  "What’s the difference between a...",
  "How can I reduce stress at work...",
];

export default function OlderChats() {
  return (
    <div className="mt-4">
      {[
        { title: "Pinned", chats: pinnedChats },
        { title: "Chat History", chats: chatHistory },
      ].map(({ title, chats }) => (
        <div key={title} className="mb-4 last:mb-0">
          <h3 className="text-xs font-medium text-gray-400 uppercase px-2">
            {title}
          </h3>
          <ul className="mt-2">
            {chats.map((chat, index) => (
              <li
                key={index}
                className="text-sm truncate hover:bg-gray-100 cursor-pointer p-2 rounded-md"
              >
                {chat}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
