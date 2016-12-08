var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"LookAtTheBodyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "look at the body" )
	},
	"GetTheBodyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "get the body" )
	},
	"AnalyzeTheBodyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "analyze the body" )
	},
	"SearchTheBodyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "search the body" )
	},
	"MournTrilbyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Mourn Trilby" )
	},
}