let procent = 0

function procentBypoints(MaxProcent, MinProcent, MaxPoints, Grade){
    let MainList = document.getElementById("GradesByPointsList")
    let li = document.createElement("li")
    let OutputRightSide = document.getElementById("output_rightside")
    let info2 = document.getElementById("Info2")
    let MaxProcentSum = MaxProcent * MaxPoints 
    let MinProcentSum = MinProcent * MaxPoints
    if (MaxProcentSum % MaxPoints > 0){
        MaxProcentSum = Math.round(MaxProcentSum)
    }

    if (MinProcentSum % MaxPoints > 0){
        MinProcentSum = Math.round(MinProcentSum)
    }

    if (OutputRightSide.contains(info2)){
        OutputRightSide.removeChild(info2)
    }
    
    li.style.height = "50px"


    li.innerHTML = String(Grade) + " - (" + String(MinProcentSum) + " - " + String(MaxProcentSum) +")"
    MainList.appendChild(li)
}

function Check() {
    let MaxPoints = document.getElementById("MaxPoints").value;
    let PointsGet = document.getElementById("PointsGet").value;
    let procent = PointsGet * 100 / MaxPoints
    console.log(procent)
    
    let result = document.getElementById("result_table");
    let checkButton = document.getElementById("check_button")
    let NewDiv = document.createElement("p");

    //while (output.firstChild){
    //    output.removeChild(output.firstChild)
    //}

    NewDiv.innerHTML = procent + "%";
    result.removeChild(checkButton);
    result.appendChild(NewDiv);

    let sixthGrade = document.getElementById("sixthGrade")
    let fifthGrade = document.getElementById("fifthGrade")
    let fourthGrade = document.getElementById("fourthGrade")
    let thirdGrade = document.getElementById("thirdGrade")
    let secoundGrade = document.getElementById("secoundGrade")
    let firstGrade = document.getElementById("firstGrade")

    if (procent >= 98 && procent <= 100) {
        sixthGrade.style.backgroundColor = "red"
    }

    if (procent >= 90 && procent <= 97) {
        fifthGrade.style.backgroundColor = "red"
    }

    if (procent >= 70 && procent <= 89) {
        fourthGrade.style.backgroundColor = "red"
    }

    if (procent >= 50 && procent <= 69) {   //nice
        thirdGrade.style.backgroundColor = "red"
    }

    if (procent >= 30 && procent <= 49) {
        secoundGrade.style.backgroundColor = "red"
    }

    if (procent >= 0 && procent <= 29) {
        firstGrade.style.backgroundColor = "red"
    }
    // pain :')

    procentBypoints(1, 0.98, MaxPoints, 6)
    procentBypoints(0.97, 0.90, MaxPoints, 5)
    procentBypoints(0.89, 0.70, MaxPoints, 4)
    procentBypoints(0.69, 0.50, MaxPoints, 3)
    procentBypoints(0.49, 0.30, MaxPoints, 2)
    procentBypoints(0.29, 0, MaxPoints, 1)
}
