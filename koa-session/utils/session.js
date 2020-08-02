
const {v4: uuidv4 } = require("uuid")
const sessionMap = new Map()


function setSessionInfo(info) {
    const  uuid = uuidv4()
    sessionMap.set(uuid, info)
    return uuid
}
function getSeesionInfo(sessionId){
    return sessionMap.get(sessionId)
}
function updateSessionInfo(sessionId, info = {}) {
    sessionMap.set(sessionId,  {...sessionMap.get(sessionId), ...info})
}
module.exports =  {
    setSessionInfo,
    updateSessionInfo,
    getSeesionInfo
}