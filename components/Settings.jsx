const { React } = require('@vizality/webpack')
const { settings: { SwitchItem, RadioGroup } } = require('@vizality/components')

module.exports = ({ getSetting, toggleSetting, updateSetting }) => <>
    {/* <SwitchItem
        value={getSetting('collapsibleActivities')}
        onChange={() => toggleSetting('collapsibleActivities')}
        note='Show activities as collapsible "categories" (only works with ≥2 activities)'
    >Collapsible Activities</SwitchItem> */}
    <RadioGroup
        options={[
            { name: "Buttons", value: false },
            { name: "Collapsible Activities", value: true }
        ]}
        value={getSetting('collapsibleActivities', false)}
        onChange={e => {
            updateSetting('collapsibleActivities', e.value)
            this.forceUpdate();
        }}
    > Display method </RadioGroup>
    <SwitchItem
        value={getSetting('autoOpen') && getSetting('collapsibleActivities')}
        onChange={() => toggleSetting('autoOpen')}
        disabled={!getSetting('collapsibleActivities')}
    >Auto open activities</SwitchItem>
</>
