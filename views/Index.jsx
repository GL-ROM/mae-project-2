const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render(){
        const {character} = this.props;

        return (
            <Default>
                <div className="page-banner">
                    <h1>Dungeons and Dragons</h1>
                    <h2>Character Repository</h2>
                    <a href="/DNDCS/new"><button>Create New Character</button></a>
                </div>
                <div className='character-sheet-container'>
                    {
                        character.map((avatar, index) => {
                            return (
                            <a href={`/DNDCS/${avatar._id}`}><div className='character-info-box'> 
                                <h2>{avatar.name}</h2>
                                <h3>Role: {avatar.role.toUpperCase()}</h3>
                                <h3>Race: {avatar.race}</h3>
                                <h3>Current Level: {avatar.level}</h3>
                                <form className="delete-container" action={`/DNDCS/${avatar._id}?_method=DELETE`} method="POST">
                                        {/* create a link to edit route */}
                                        <input className="button" type="submit" value="Delete Character"/>
                                </form>
                            </div></a>   
                            )
                        })
                    }
                </div>
            </Default>
        )
    }
};

module.exports = Index;