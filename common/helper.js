const websiteUrl = 'http://192.168.31.168:8080';
const loginUrl = 'http://192.168.31.129:10010';
const now = Date.now || function () {
    return new Date().getTime();
};
const isArray = Array.isArray || function (obj) {
    return obj instanceof Array;
};

export default {
    websiteUrl,
	loginUrl,
    now,
    isArray
}