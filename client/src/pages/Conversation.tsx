// import ContextMenuDemo from "@/components/menu";
import { useParams } from "react-router-dom";

function Conversation() {
  const { userId } = useParams();
  return (
    // <ContextMenuDemo>
    <h1>Conversation of {userId}</h1>
    // </ContextMenuDemo>
  );
}

export default Conversation;
