import { firestore } from "../index";
import { collection, doc, setDoc } from "firebase/firestore";

export const conversationsRef = collection(firestore, "conversations");

export const getConversationId = () => {
  const newDocRef = doc(conversationsRef);
  return newDocRef.id;
};

export const getConversations = () => collection(firestore, `conversations`);

export const getConversation = (conversationId: string) =>
  collection(firestore, `conversations/${conversationId}`);

export const setConversation = async (conversationId: string, data: any) => {
  await setDoc(doc(firestore, "conversations", conversationId), data);
};
