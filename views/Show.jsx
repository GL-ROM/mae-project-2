const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render(){
        const {_id, name, role, race, level, stats, skills} = this.props.character;

        const statModifier = (stat) =>{
            switch (stat) {
                case 1:
                    return -5;
                case 2:
                    return -4;
                case 3:
                    return -4;
                case 4:
                    return -3;
                case 5:
                    return -3;    
                case 6:
                    return -2;
                case 7:
                    return -2;    
                case 8:
                    return -1;
                case 9:
                    return -1;
                case 10:
                    return '+' + 0;
                case 11:
                    return '+' + 0;    
                case 12:
                    return '+' + 1;
                case 13:
                    return '+' + 1;
                case 14:
                    return '+' + 2;
                case 15:
                    return '+' + 2;
                case 16:
                    return '+' + 3;
                case 17:
                    return '+' + 3;
                case 18:
                    return '+' + 4;
                case 19:
                    return '+' + 4;
                case 20:
                    return '+' + 5;
                case 21:
                    return '+' + 5;
                case 22:
                    return '+' + 6;
                case 23:
                    return '+' + 6;
                case 24:
                    return '+' + 7;
                case 25:
                    return '+' + 7;
                case 26:
                    return '+' + 8;
                case 27:
                    return '+' + 8;
                case 28:
                    return '+' + 9;
                case 29:
                    return '+' + 9;
                case 30:
                    return '+' + 10;         
            }
        }
        
        const proficiencyCheck = (currentLevel) => {
            if (currentLevel <= 4) {
                return '+' + 2;
            } else if (currentLevel <= 8) {
                return '+' + 3;
            } else if (currentLevel <= 12) {
                return '+' + 4;
            } else if (currentLevel <= 16) {
                return '+' + 5;
            } else if (currentLevel <= 20) {
                return '+' + 6;
            }
        }

        const hpCheck = (currentRole, currentLevel) => {
            let barbarian = 12;
            let fighterPaladinRanger = 10;
            let bardClericDruidMonkRogueWarlock = 8;
            let sorcererWizard = 6;

            if (currentLevel === 1) {
                if (currentRole.toLowerCase() === 'barbarian') {
                    return barbarian;
                } else if (currentRole.toLowerCase() === 'fighter' || 'paladin' || 'ranger') {
                    return fighterPaladinRanger;
                } else if (currentRole.toLowerCase() === 'bard' || 'cleric' || 'druid' || 'monk' || 'rogue' || 'warlock') {
                    return bardClericDruidMonkRogueWarlock;
                } else if (currentRole.toLowerCase() === 'sorcerer' || 'wizard') {
                    return sorcererWizard;
                }
            } else if (currentLevel >= 2) {
                switch (currentRole.toLowerCase()) {
                    case 'barbarian':
                        barbarian += ((currentLevel - 1) * 7);
                        return barbarian;
                    case 'fighter':
                        fighterPaladinRanger += ((currentLevel - 1) * 6);
                        return fighterPaladinRanger;
                    case 'paladin':
                        fighterPaladinRanger += ((currentLevel - 1) * 6);
                        return fighterPaladinRanger;
                    case 'ranger':
                        fighterPaladinRanger += ((currentLevel - 1) * 6);
                        return fighterPaladinRanger;
                    case 'bard':
                        bardClericDruidMonkRogueWarlock += ((currentLevel - 1) * 5);
                        return bardClericDruidMonkRogueWarlock;
                    case 'cleric':
                        bardClericDruidMonkRogueWarlock += ((currentLevel - 1) * 5);
                        return bardClericDruidMonkRogueWarlock;
                    case 'druid':
                        bardClericDruidMonkRogueWarlock += ((currentLevel - 1) * 5);
                        return bardClericDruidMonkRogueWarlock;
                    case 'monk':
                        bardClericDruidMonkRogueWarlock += ((currentLevel - 1) * 5);
                        return bardClericDruidMonkRogueWarlock;
                    case 'rogue':
                        bardClericDruidMonkRogueWarlock += ((currentLevel - 1) * 5);
                        return bardClericDruidMonkRogueWarlock;
                    case 'warlock':
                        bardClericDruidMonkRogueWarlock += ((currentLevel - 1) * 5);
                        return bardClericDruidMonkRogueWarlock;
                    case 'sorcerer':
                        sorcererWizard += ((currentLevel - 1) * 4);
                        return sorcererWizard;
                    case 'wizard':
                        sorcererWizard += ((currentLevel - 1) * 4);
                        return sorcererWizard;
                }
            }
        }

        return (
            <Default>
                <div className="page-banner">
                    <h1>Character Sheet</h1>
                    <a href="/DNDCS"><button>Home Page</button></a>
                    <a href={`/DNDCS/${_id}/edit`}><button>Edit this character</button></a>
                </div>
                <div className="character-sheet">
                    <div className="character-sheet-header">
                        <div className="character-sheet-info">
                            <div className="character-name">{name}</div>
                            <div className="character-race">{race}</div>
                            <div className="character-role">{role}</div>
                            <div className="character-level">Level: {level}</div>
                        </div>
                    </div>
                    <div className="character-sheet-stats">
                        <div className="hp-container">
                            <div className="hp-container-currenthp">Current HP: {hpCheck(role, parseInt(level))}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-proficiency-name">PROFICIENCY</div>
                            <div className="stat-proficiency-value">{proficiencyCheck(level)}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-name">STRENGTH</div>
                            <div className="stat-modifier">{statModifier(stats.strength)}</div>
                            <div className="stat-value">{stats.strength}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-name">DEXTERITY</div>
                            <div className="stat-modifier">{statModifier(stats.dexterity)}</div>
                            <div className="stat-value">{stats.dexterity}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-name">CONSTITUTION</div>
                            <div className="stat-modifier">{statModifier(stats.constitution)}</div>
                            <div className="stat-value">{stats.constitution}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-name">INTELLIGENCE</div>
                            <div className="stat-modifier">{statModifier(stats.intelligence)}</div>
                            <div className="stat-value">{stats.intelligence}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-name">WISDOM</div>
                            <div className="stat-modifier">{statModifier(stats.wisdom)}</div>
                            <div className="stat-value">{stats.wisdom}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-name">CHARISMA</div>
                            <div className="stat-modifier">{statModifier(stats.charisma)}</div>
                            <div className="stat-value">{stats.charisma}</div>
                        </div>
                    </div>
                </div>
            </Default>
        )
    }
};

module.exports = Show;