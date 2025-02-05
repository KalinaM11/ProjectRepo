import express from "express";
import MessageController from "../controller/message.controller";
import path from "path"

// router redirects website to return information needed  
const router = express.Router();

// find a message by it's id 

// if you type "/message/:id" you get the message 
router.route("/message/:id").get(MessageController.getMessageById); 
router.route("/create-message").post(MessageController.postNewMessage);

router.put("/replace-message/:id", MessageController.replaceMessage);
router.patch("/update-message/:id", MessageController.updateMessage);
router.delete("/delete-message:/:id", MessageController.deleteMessage);
router.route("/messages").get(MessageController.getMessages);