const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render(){
        const {_id, name, role, race, level, stats, skills} = this.props.character;
        const {statModifier, proficiencyCheck, hpCheck} = require('../controllers/services.js');

        let str = statModifier(stats.strength);
        let dex = statModifier(stats.dexterity);
        let con = statModifier(stats.constitution);
        let int = statModifier(stats.intelligence);
        let wis = statModifier(stats.wisdom);
        let cha = statModifier(stats.charisma);

        return (
            <Default>
                <div className="page-banner">
                    <h1>Character Sheet</h1>
                    <a href="/DNDCS"><button>Home Page</button></a>
                    <a href={`/DNDCS/${_id}/edit`}><button>Edit This Character</button></a>
                </div>
                <div className="character-sheet">
                    <div className="character-sheet-header">
                        <div className="character-sheet-info">
                            <div className="character-name">{name}</div>
                            <div className="character-race-role-box">
                                <div className="character-race">{race}</div>
                                <div className="character-role">{role.toUpperCase()}</div>
                            </div>
                            <div className="character-level">Level: {level}</div>
                        </div>
                    </div>
                    <div className="character-sheet-stats">
                        <div className="hp-container">
                            <div className="hp-container-currenthp">Current HP: <input type="number" value={hpCheck(role, parseInt(level))} min="0" max={hpCheck(role, parseInt(level))}/> / Max HP: {hpCheck(role, parseInt(level))}</div>
                        </div>
                        <div className="initiative-ac-container">
                            <div className="intiative-box">
                                <div className="initiative-label">Initiative</div>
                                <div className="initiative-value">{dex}</div>
                            </div>
                            <div className="armor-class-box">
                                <div className="armor-class-label">Armor Class</div>
                                <div className="armor-class-value">{parseInt(dex) + 10}</div>
                            </div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-proficiency-name">PROFICIENCY</div>
                            <div className="stat-proficiency-value">{proficiencyCheck(level)}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-name">STRENGTH</div>
                            <div className="stat-modifier">{str}</div>
                            <div className="stat-value">{stats.strength}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-name">DEXTERITY</div>
                            <div className="stat-modifier">{dex}</div>
                            <div className="stat-value">{stats.dexterity}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-name">CONSTITUTION</div>
                            <div className="stat-modifier">{con}</div>
                            <div className="stat-value">{stats.constitution}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-name">INTELLIGENCE</div>
                            <div className="stat-modifier">{int}</div>
                            <div className="stat-value">{stats.intelligence}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-name">WISDOM</div>
                            <div className="stat-modifier">{wis}</div>
                            <div className="stat-value">{stats.wisdom}</div>
                        </div>
                        <div className="stat-container">
                            <div className="stat-name">CHARISMA</div>
                            <div className="stat-modifier">{cha}</div>
                            <div className="stat-value">{stats.charisma}</div>
                        </div>
                    </div>
                    <div className="character-skills-equipment-container">
                        <div className="character-skills-box">
                            <table className="character-skills">
                                <tr>
                                    <th>PROF</th>
                                    <th>MODIFIER</th>
                                    <th>Skill Name</th>
                                    <th>Bonus</th>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>DEX</td>
                                    <td>Acrobatics</td>
                                    <td>{dex}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>WIS</td>
                                    <td>Animal Handling</td>
                                    <td>{wis}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>INT</td>
                                    <td>Arcana</td>
                                    <td>{int}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>STR</td>
                                    <td>Athletics</td>
                                    <td>{str}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>CHA</td>
                                    <td>Deception</td>
                                    <td>{cha}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>INT</td>
                                    <td>History</td>
                                    <td>{int}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>WIS</td>
                                    <td>Insight</td>
                                    <td>{wis}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>CHA</td>
                                    <td>Intimidation</td>
                                    <td>{cha}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>INT</td>
                                    <td>Investigation</td>
                                    <td>{int}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>WIS</td>
                                    <td>Medicine</td>
                                    <td>{wis}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>INT</td>
                                    <td>Nature</td>
                                    <td>{int}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>WIS</td>
                                    <td>Percepotion</td>
                                    <td>{wis}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>CHA</td>
                                    <td>Performance</td>
                                    <td>{cha}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>CHA</td>
                                    <td>Persuasion</td>
                                    <td>{cha}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>INT</td>
                                    <td>Religion</td>
                                    <td>{int}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>DEX</td>
                                    <td>Sleight of Hand</td>
                                    <td>{dex}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>DEX</td>
                                    <td>Stealth</td>
                                    <td>{dex}</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="isProficient" id="proficiency"/></td>
                                    <td>WIS</td>
                                    <td>Survival</td>
                                    <td>{wis}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="character-equipment-box">
                            <h2>Equipment</h2>
                        </div>
                    </div>
                    
                </div>
                <div className="roll-dice">
                    <div className="roll-dice-title">Roll Some Dice!</div>
                </div>
            </Default>
        )
    }
};

module.exports = Show;