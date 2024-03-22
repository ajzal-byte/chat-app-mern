import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    console.log("senderId: ", senderId);

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) conversation.messages.push(newMessage._id);

    // SOCKET IO FUNCTIONALITY
  
    // await conversation.save();
    // await newMessage.save();

    // to run concurrently
    await Promise.all([conversation.save(), newMessage.save()])

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error while sending message", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
