const getVkInstance = async () => {
    const vkapi = new(require('node-vkapi'))();

    const data = await vkapi.authorize({
        appId: 6398838,
        login: 'PUT_YOUR_LOGIN_BLYA',
        password: 'PUT_YOU_PWD_NAHUI',
        scope: '+524288'
    });

    const vkApi = new(require('node-vkapi'))({
        accessToken: data.access_token
    });

    return vkApi;
}

module.exports = getVkInstance;