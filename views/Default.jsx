const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <script src="/js/methods.js"></script>
                    <link rel="stylesheet" href="/css/main.css"/>
                    <link href="//db.onlinewebfonts.com/c/f4d1593471d222ddebd973210265762a?family=Pokemon" rel="stylesheet" type="text/css"/>
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