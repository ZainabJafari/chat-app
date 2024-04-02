import { useState, FormEvent } from "react"; // Importera FormEvent
import useSendMessage from '../../hooks/useSendMessage';
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  const [message, setMessage] = useState<string>('');
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;
    const newMessage: any = { // Skapa ett nytt meddelandeobjekt
      senderId: 'YOUR_SENDER_ID', // Ersätt med rätt värden
      receiverId: 'YOUR_RECEIVER_ID',
      message: message
    };
    await sendMessage(newMessage);
    setMessage('');
  };  

  return (
    <div>
      <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
          <input
            type="text"
            className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
            placeholder="Send a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            {loading ? (
              <div className="loading loading-spinner"></div>
            ) : (
              <BsSend />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;