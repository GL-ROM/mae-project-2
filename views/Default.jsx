const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link href={`https://fonts.googleapis.com/css2?family=Cinzel&display=swap`} rel="stylesheet"/>
                    <link href={"https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap"} rel="stylesheet"></link>
                    <link href={"https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap"} rel="stylesheet"></link>
                    <link rel="stylesheet" href="/css/main.css"/>
                    <title>DnD Character Sheet</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default;