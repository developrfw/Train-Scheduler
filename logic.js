var config = {
   
    apiKey: "AIzaSyBN_MI68X7mcbU2BEwR4y2XkHA4Cc-feFQ",
    authDomain: "train-time-b5010.firebaseapp.com",
    databaseURL: "https://train-time-b5010.firebaseio.com",
    projectId: "train-time-b5010",
    storageBucket: "gs://train-time-b5010.appspot.com",
    messagingSenderId: "335199564551",
    appId: "1:335199564551:web:e56373cac5528a13"

  };
  
  firebase.initializeApp(config);

  var trainData = firebase.database();

  $("#addTrainBtn").on("click", function() {
      var trainName = $("#trainNameInput").val().trim();
      var destination = $("#destinationInput").val().trim();
      var frequency = $("#frequencyInput").val().trim();
      var firstTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").subtract(10,"years").format("X");
  

  var newTrain = {
    name: trainName,
    destination: destination, 
    firstTrain: firstTrain, 
    frequency: frequency,
  }

  trainData.ref().push(newTrain);

  alert("Train Added!");

  $("#trainNameInput").val("");
  $("#destinationInput").val("");
  $("#frequencyInput").val("");
  $("#firstTrainInput").val("");

  return false;

})