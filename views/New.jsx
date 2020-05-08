const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render(){
        const {} = this.props;

        return (
            <Default>
                <div className="page-banner">
                    <h1>Create a New Character</h1>
                    <a href="/DNDCS"><button>Home Page</button></a>
                </div>
            </Default>
        )
    }
};

module.exports = New;