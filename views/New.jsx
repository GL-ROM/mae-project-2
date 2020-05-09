const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render(){
        const {character} = this.props;

        return (
            <Default>
                <div className="page-banner">
                    <h1>Create a New Character</h1>
                    <a href="/DNDCS"><button>Home Page</button></a>
                </div>
                <form className="new-character-form" action='/DNDCS' method="POST">
                    <div className="basic-info-box">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name"/>
                        <label htmlFor="race">Race: </label>
                        <input type="text" name="race" id="race"/>
                        <label htmlFor="role">Role/Class: </label>
                        <select name="role" id="role">
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
                        <input type="number" name="level" id="level" min="1" max="30" />
                    </div>
                    <div className="stats-box">
                        <div>Character Stats</div>
                        <label htmlFor="strength">Strength: </label>
                        <input type="number" name="stats.strength" id="strength" min="1" max="20" />
                        <label htmlFor="dexterity">Dexterity: </label>
                        <input type="number" name="stats.dexterity" id="dexterity" min="1" max="20" />
                        <label htmlFor="constitution">Constitution: </label>
                        <input type="number" name="stats.constitution" id="constitution" min="1" max="20" />
                        <label htmlFor="intelligence">Intelligence: </label>
                        <input type="number" name="stats.intelligence" id="intelligence" min="1" max="20" />
                        <label htmlFor="wisdom">Wisdom: </label>
                        <input type="number" name="stats.wisdom" id="wisdom" min="1" max="20" />
                        <label htmlFor="charisma">Charisma: </label>
                        <input type="number" name="stats.charisma" id="charisma" min="1" max="20"/>
                    </div>

                    <input className="button" type="submit" value="Submit New Character"/>
                </form>
            </Default>
        )
    }
};

module.exports = New;