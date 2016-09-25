 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAFYVyFDvf6N4McpfyIB-4u3HZwoBJHOuI",
    authDomain: "trainscheduler-23ae0.firebaseapp.com",
    databaseURL: "https://trainscheduler-23ae0.firebaseio.com",
    storageBucket: "trainscheduler-23ae0.appspot.com",
    messagingSenderId: "827303842743"
  };
  firebase.initializeApp(config);


// Variables

var  database = firebase.database();


$('#submitBTN').on("click",function() {


	var name = $('#nameInput').val();
	var destination = $('#destinationInput').val();
	var firstTrain = $('#firstTrainInput').val();
	var frequency = $('#frequencyInput').val();


	firstTrain = moment(moment(firstTrain,"hh:mm A").subtract(1, "years"),"hh:mm").format("hh:mm A");
	console.log("First Train: ", firstTrain);

	database.ref().push({
		name: name,
		destination: destination,
		firstTrain: firstTrain,
		frequency: frequency

});


	$('#nameInput').val("");
	$('#destinationInput').val("");
	$('#firstTrainInput').val("");
	$('#frequencyInput').val("");

	// refresh 
	return false;

})

database.ref().on("child_added", function(childSnapshot) {

	var name = childSnapshot.val().name;
	var destination = childSnapshot.val().destination;
	var firstTrain = childSnapshot.val().firstTrain;
	var frequency = childSnapshot.val().frequency;


	
	

	
    
	$("#tbody").append("<tr id='row'>" + "<td id='nameDisplayed'>" 
		+name+ "</td><td id='destinationDisplayed'>"
		+destination+ "</td><td id='frequencyDisplayed'>"
		+frequency+ "</td><td id='nextArrivalDisplayed'>"
		+comingup+ "</td><td id='minutesDisplayed'>");


});
		
database.ref().on("value", function(snapshot) {


}, function (errorObject) {


  	console.log("Failed: " + errorObject.code);

});



