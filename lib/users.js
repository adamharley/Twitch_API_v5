'use strict';

const request = require('./request');
const querystring = require('querystring');

module.exports = {
    user: (data, callback) => {
        // Authentication: user_read
        // Required Parameters: none
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/user`;
        options.auth = data.auth;

        request('GET', options, callback);
    },

    userByID: (data, callback) => {
        // Authentication: none
        // Required Parameters: userID
        // Optional Parameters: none

        if(!data.userID) return callback('userID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/users/${data.userID}`;

        request('GET', options, callback);
    },

    usersByName: (data, callback) => {       
        // Authentication: none
        // Required Parameters: users
        // Optional Parameters: none

        if(!data.users) return callback('users is required');
        if(Array.isArray(data.users)) data.users = data.users.toString();

        let params = {};
        params.login = data.users;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/users?${querystring.stringify(params)}`;

        request('GET', options, callback);
    },

    userEmotes: (data, callback) => {
        // Authentication: user_subscriptions
        // Required Parameters: userID
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.userID) return callback('userID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/users/${data.userID}/emotes`;
        options.auth = data.auth;

        request('GET', options, callback);
    },

    checkSub: (data, callback) => {
        // Authentication: user_subscriptions
        // Required Parameters: userID, channelID
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.userID) return callback('userID is required');
        if(!data.channelID) return callback('channelID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/users/${data.userID}/subscriptions/${data.channelID}`;
        options.auth = data.auth;

        request('GET', options, callback);
    },

    follows: (data, callback) => {
        // Authentication: none
        // Required Parameters: userID
        // Optional Parameters: limit, offset, direction, sortby
        
        if(!data.userID) return callback('userID is required');

        let params = {};
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;
        if(data.direction) params.direction = data.direction;
        if(data.sortby) params.sortby = data.sortby;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/users/${data.userID}/follows/channels?${querystring.stringify(params)}`;

        request('GET', options, callback);
    },

    checkFollow: (data, callback) => {
        // Authentication: none
        // Required Parameters: userID, channelID
        // Optional Parameters: none

        if(!data.userID) return callback('userID is required');
        if(!data.channelID) return callback('channelID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/users/${data.userID}/follows/channels/${data.channelID}`;

        request('GET', options, callback);
    },

    followChannel: (data, callback) => {
        // Authentication: user_follows_edit
        // Required Parameters: userID, channelID
        // Optional Parameters: notifications

        if(!data.auth) return callback('auth is required');
        if(!data.userID) return callback('userID is required');
        if(!data.channelID) return callback('channelID is required');

        let params = {};
        if(data.notifications) params.notifications = data.notifications;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/users/${data.userID}/follows/channels/${data.channelID}?${querystring.stringify(params)}`;
        options.auth = data.auth;

        request('PUT', options, callback);
    },

    unfollowChannel: (data, callback) => {
        // Authentication: user_follows_edit
        // Required Parameters: userID, channelID
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.userID) return callback('userID is required');
        if(!data.channelID) return callback('channelID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/users/${data.userID}/follows/channels/${data.channelID}`;
        options.auth = data.auth;

        request('DELETE', options, callback);
    },

    blockList: (data, callback) => {
        // Authentication: user_blocks_read
        // Required Parameters: userID
        // Optional Parameters: limit, offset

        if(!data.auth) return callback('auth is required');
        if(!data.userID) return callback('userID is required');

        let params = {};
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/users/${data.userID}/blocks?${querystring.stringify(params)}`;
        options.auth = data.auth;

        request('GET', options, callback);
    },

    blockUser: (data, callback) => {
        // Authentication: user_blocks_edit
        // Required Parameters: sourceUserID, targetUserID
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.sourceUserID) return callback('sourceUserID is required');
        if(!data.targetUserID) return callback('targetUserID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/users/${data.sourceUserID}/blocks/${data.targetUserID}`;
        options.auth = data.auth;

        request('PUT', options, callback);
    },

    unblockUser: (data, callback) => {
        // Authentication: user_blocks_edit
        // Required Parameters: sourceUserID, targetUserID
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.sourceUserID) return callback('sourceUserID is required');
        if(!data.targetUserID) return callback('targetUserID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/users/${data.sourceUserID}/blocks/${data.targetUserID}`;
        options.auth = data.auth;

        request('DELETE', options, callback);
    },

    createVHS: (data, callback) => {
        // Authentication: viewing_activity_read
        // Required Parameters: identifier
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.identifier) return callback('identifier is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/user/vhs`;
        options.auth = data.auth;
        options.form = { identifier: data.identifier }

        request('PUT', options, callback);
    },

    checkVHS: (data, callback) => {
        // Authentication: user_read
        // Required Parameters: none
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/user/vhs`;
        options.auth = data.auth;

        request('GET', options, callback);
    },

    deleteVHS: (data, callback) => {
        // Authentication: viewing_activity_read
        // Required Parameters: none
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/user/vhs`;
        options.auth = data.auth;

        request('DELETE', options, callback);
    },
};