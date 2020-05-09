const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render(){
        const {_id, name, role, race, level, stats, skills} = this.props.character;

        return (
            <Default>
                <div className="page-banner">
                    <h1>Edit Character Sheet</h1>
                    <a href="/DNDCS"><button>Home Page</button></a>
                    <a href={`/DNDCS/${_id}`}><button>Play Page</button></a>
                </div>
                <form action={`/DNDCS/${_id}?_method=PUT`} method="POST">
                    <div className="basic-info-box">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" defaultValue={name}/>
                        <label htmlFor="race">Race: </label>
                        <input type="text" name="race" id="race" defaultValue={race}/>
                        <label htmlFor="role">Role/Class: </label>
                        <select name="role" id="role" defaultValue={role.toLowerCase()}>
                            <option value="barbarian">Barbarian</option>
                            <option value="bard">Bard</option>
                            <option value="cleric">Cleric</option>
                            <option value="druid">Druid</option>
                            <option value="fighter">Fighter</option>
                            <option value="monk">Monk</option>
                            <option value="paladin">Paladin</option>
                            <option value="ranger">Ranger</option>
                            <option value="rogue">Rogue</option>
                            <option value="sorcerer">Sorcerer</option>
                            <option value="warlock">Warlock</option>
                            <option value="wizard">Wizard</option>
                        </select>
                        <label htmlFor="level">Level: </label>
                        <input type="number" name="level" id="level" min="1" max="30" defaultValue={level}/>
                    </div>
                    <div className="stats-box">
                        <div>Character Stats</div>
                        <label htmlFor="strength">Strength: </label>
                        <input type="number" name="stats.strength" id="strength" min="1" max="20" defaultValue={stats.strength}/>
                        <label htmlFor="dexterity">Dexterity: </label>
                        <input type="number" name="stats.dexterity" id="dexterity" min="1" max="20" defaultValue={stats.dexterity}/>
                        <label htmlFor="constitution">Constitution: </label>
                        <input type="number" name="stats.constitution" id="constitution" min="1" max="20" defaultValue={stats.constitution}/>
                        <label htmlFor="intelligence">Intelligence: </label>
                        <input type="number" name="stats.intelligence" id="intelligence" min="1" max="20" defaultValue={stats.intelligence}/>
                        <label htmlFor="wisdom">Wisdom: </label>
                        <input type="number" name="stats.wisdom" id="wisdom" min="1" max="20" defaultValue={stats.wisdom}/>
                        <label htmlFor="charisma">Charisma: </label>
                        <input type="number" name="stats.charisma" id="charisma" min="1" max="20" defaultValue={stats.charisma}/>
                    </div>

                    <input type="submit" value="Submit Changes"/>
                </form>
            </Default>
        )
    }
};

module.exports = Edit;