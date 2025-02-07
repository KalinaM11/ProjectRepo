import Connection from "../backend/db/connection/js.js"
import Message from "../model/message.js"

export default class MessageAccessor {
    static async getMessage(msge_id) {
        try {
            await Connection.open("teaching_proj")
            const msge = await Message.findOne({_id: msge_id});
            return msge;
        } catch (e) {
            throw e;
        }
    }

    static async createtMessage(messageInfo) {
        try {
            await Connection.open("teaching-proj");
            const msge  = await Message.create(messageInfo);
            return msge;
        } catch(e) {
            console.log("Failed")
        }
    }

    static async replaceMessage(msg_id, updatedinfo) {
        try{
            await Connection.open("teching-proj");
            const msge = await Message.findOneAndReplace({_id: msge_id }, updatedInfo, { new: true, runValidators: true});
            return msge;
        } catch (e) {
            console.log("Failed due to: ", e);
        }
    }

    static async updateMessage(msge_id, updatedInfo) {
        try {
            await Connection.open("teaching-proj");
            const msge = await Message.findOneAndUpdate({_id: msge_id }, { $set: updatedInfo}, { new: true, runValidators: true});
            return msge;
        } catch(e) {
            console.log("Failed due to: ", e);
        }
    }

    static async deleteMessage(msge_id) {
        try {
            await Connection.open("teaching-proj");
            const msge = await Message.findOneAndDelete({_id: msge_id });
            return msge;
        } catch (e) {
            console.log("Failed due to", e);
        }
    }

    static async getMessages() {
        try {
            await Connection.open("teaching_proj");
            const messages = [];
            for await (const doc of Message.find()) {
                messages.push(doc);
            }
            return messages;
        }
        catch(e) {
            console.log("Something bad happend");
        }
    }

}