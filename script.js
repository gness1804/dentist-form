function todayDate () {
  var a = new Date().toDateString();
  document.getElementById("fecha").innerHTML = a;
}

function MyFunction () {
  var lname = document.getElementById("lname").value;
  var fname = document.getElementById("fname").value;
  var phone = document.getElementById("phone").value;
  var dob = document.getElementById("dob").value;
  var app = document.getElementById("app");
  var otherGen = document.getElementById("otherGen");
  var otherGenBox = document.getElementById("otherGenBox").value;

  if (lname === "") {
    alert("Please fill in your last name.");
  }
  else {
    document.getElementById("dlast").value = lname;
  }

  if (fname === "") {
  	alert("Please fill in your first name.")
  }
  else {
  	document.getElementById("dfirst").value = fname;
  }

  if (phone === "") {
  	alert("Please fill in your phone number.")
  }

  if (dob === "") {
  	alert("Please fill in your date of birth.")
  }
  else {
  	document.getElementById("ddob").value = dob;
  }

  if (app.checked) {
  	document.getElementById("appres").innerHTML = "Patient is apprehensive about going to the dentist.";
  }

  if (otherGen.checked) {
    document.getElementById("otherConcern").innerHTML = otherGenBox;
  }

  iterateFirst();
  iterateSecond();
  iterateThird();
  iterateFourth();
  currentMeds();
  simpleAdd();

  function iterateFirst () {
  var arr = [];
  var text = "";
  $("#firstSet :input:checked").each(function () {
    arr.push($(this).val());
  });
  for (var i = 0; i < arr.length; i++) {
    text = text + arr[i] + "<br>";
    }
  document.getElementById("result1").innerHTML = text;
  }

  function iterateSecond () {
    var arr = [];
    var text = "";
    $("#secondSet :input:checked").each(function () {
      arr.push($(this).val());
    });
    for (var i = 0; i < arr.length; i++) {
      text = text + arr[i] + "<br>";
    }
    document.getElementById("result2").innerHTML = text;
  }

  function iterateThird () {
    var arr = [];
    var text = "";
    $("#thirdSet :input:checked").each(function () {
      arr.push($(this).val());
    });
    for (var i = 0; i < arr.length; i++) {
      text = text + arr[i] + "<br>";
    }
    document.getElementById("result3").innerHTML = text;
  }

  function iterateFourth () {
    var arr = [];
    var text = "";
    $("#fourthSet :input:checked").each(function () {
      arr.push($(this).val());
    });
    for (var i = 0; i < arr.length; i++) {
      text = text + arr[i] + "<br>";
    }
    document.getElementById("result4").innerHTML = text;
  }

function simpleAdd () {
  var a = document.getElementById("allergy").value;
  document.getElementById("result5").innerHTML = a;
}

function currentMeds () {
  var a = document.getElementById("currMed").value;
  document.getElementById("takeMeds").innerHTML = a;
}

} //this token ends the big function!


function allergMed () {
  $("#allergy").addClass("textAppear");
}

function noAllerg () {
  $("#allergy").removeClass("textAppear");
}

function gag () {
  document.getElementById("gagRes").innerHTML = "Patient has a sensitive gag reflex. Please use extra care.";
}
