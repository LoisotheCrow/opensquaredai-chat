import { Brain, UserCircle } from "phosphor-react";
import { ChatMessage } from "../context/ChatProvider";

const ChatMessage = ({ ai, message }: ChatMessage) => (
  <div className="w-full flex flex-row gap-2 items-center text-gray-100 p-1 rounded bg-gray-600">
    <div className="w-4 flex flex-col justify-start h-full">
      {ai ? (
        <Brain weight="bold" scale={16} />
      ) : (
        <UserCircle weight="bold" scale={16} />
      )}
    </div>
    <p className="text-xs">
      {message}
    </p>
  </div>
);

export default ChatMessage;
