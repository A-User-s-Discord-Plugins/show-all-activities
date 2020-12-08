const { React } = require('@vizality/webpack')
const { settings: { SwitchItem } } = require('@vizality/components')

module.exports = ({ getSetting, toggleSetting }) => <>
    <SwitchItem
        value={getSetting('collapsibleActivities')}
        onChange={() => toggleSetting('collapsibleActivities')}
        note='Show activities as collapsible "categories" (only works with ≥2 activities)'
    >Collapsible Activities</SwitchItem>
    <SwitchItem
        value={getSetting('autoOpen')}
        onChange={() => toggleSetting('autoOpen')}
        disabled={!getSetting('collapsibleActivities')}
    >Auto open activities</SwitchItem>
</>
