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
            </Default>
        )
    }
};

module.exports = Edit;