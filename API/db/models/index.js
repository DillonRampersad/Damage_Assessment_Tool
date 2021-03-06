//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd

const { Administrators } = require('./Administrators.model');
const { DisasterManagers } = require('./DisasterManagers.model');
const { Equipment } = require('./Equipment.model');
const { FieldAgents } = require('./FieldAgents.model');
const { MembersOfCommunities } = require('./MembersOfCommunities.model');
const { Messages } = require('./Messages.model');
const { MoCReports } = require('./MoCReports.model');
const { TwitterPosts } = require('./TwitterPosts.model');
const { DAFacility } =  require('./DAFacility.model');
const { DAEquipment } =  require('./DAEquipment.model');
const { PreEquipment } =  require('./PreEquipment.model');
const { PreFacility } =  require('./PreFacility.model');

module.exports = {
    Administrators,
    DisasterManagers,
    Equipment,
    FieldAgents,
    MembersOfCommunities,
    Messages,
    MoCReports,
    TwitterPosts,
    DAFacility,
    DAEquipment,
    PreEquipment,
    PreFacility
}