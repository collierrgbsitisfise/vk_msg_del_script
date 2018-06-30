/**
 * 
 * @param {num} milseconds 
 */
const wait = (milsec) => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve();
        }, milsec)
    }) 
}

/**
 * 
 * @param {vkApi} vkApi 
 */
const deleteAllMsg = async (vkApi) => {
    let res = await vkApi.call('messages.getConversations', {
        filter: 'unread',
        count: 200
    });

    let idsOfConversations = res.items.map(item => item.conversation.peer.id);
    for (let i = 0; i < idsOfConversations.length; i++) {
        try {
            let r = await vkApi.call('messages.deleteConversation', {
                user_id: idsOfConversations[i]
            });
            console.log(`conversations ${idsOfConversations[i]} was deleted!`);
            console.log(r);
        } catch (err) {
            console.log('err in deleting conv!(suka blya)');
            console.log(err);
            await wait(5000);
        }
    }
}

module.exports = {
    deleteAllMsg,
    wait
}