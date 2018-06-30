const getVkInstance = require('./vk.api');

const {
    deleteAllMsg,
    wait
} = require('./utils/utils');

( async () => {
    const vkApi = await getVkInstance();
    let count;
    do {
        deleteAllMsg(vkApi);
        console.log('waiting....');
        await wait(100000);
        count = await vkApi.call('messages.getConversations', {
            filter: 'unread',
            count: 200
        });
    } while (count.count !== 0);
    console.log('All unreaded msg was deleted');
})();
