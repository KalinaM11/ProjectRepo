import MessageAccessor from "../db_accessor/messege.accessor";

export default class MessageController {
    // request and response
    static async getMessageById(req, res) {
        try {
            // extract the id in the message, return the message when you summon the accessor
            const m_id = req.params.id;
            const message = await MessageAccessor.getMessage(m_id);
            res.json(message);
        } catch (e) {
            throw e;
        }
    }

    static async postNewMessage(req, res) {
        try { 
            await MessageAccessor.createMessage(req.body);
            res.redirect("/");
        } catch (e) {
            console.log("Failed");
        }
    }

    static async replaceMessage(req, res) {
        try {
            const m_id = req.parems.id;
            const updated_vals = req.body;
            const updated_msg = await MessageAccessor.replaceMessage(m_id, updated_vals);
            res.json(updated_msg);
        } catch(e) {
            console.log("Failed due to:", e);
        }
    }
    static async updateMessage(req, res) {
        try {
            const m_id = req.params.id;
            const updated_val = req.body;
            const updated_msg = await MessageAccessor.updateMesssage(m_id, updated_val);
            res.json(updated_msg);
        } catch(r) {
            console.log("Daileed due to:", e);
        }
    }
        
    static async deleteMessage(req, res) {
        try {
            const m_id = req.params.id;
            const deletion = await MessageAccessor.deleteMesssage(m_id);
            res.redirect("/");
        } catch(r) {
            console.log("Daileed due to:", e);
        }
    }

    static async getMessages(req, res) {
        try {
            const messeges = await MessegeAccessor.getMessages();
        } catch (e) {
            console.log("Something bad happened due to:", e)
        }
    }
        
}