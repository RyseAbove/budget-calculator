let data = [
    [ 'Accountant', 55650 ],
    [ 'Advance Tractor/Trailer Driver', 53550 ],
    [ 'Agricultural Engineer', 56700 ],
    [ 'Architect', 53550 ],
    [ 'Auto Tech/Mechanic', 49350 ],
    [ 'Aviation Tech. Mechanic', 50400 ],
    [ 'Biologist', 54600 ],
    [ 'Bus Driver', 37800 ],
    [ 'Business Development Officer', 54600 ],
    [ 'Business Manager Hotel etc.', 61950 ],
    [ 'CNC Manufacturing', 80850 ],
    [ 'Carpenter', 47250 ],
    [ 'Chef', 52500 ],
    [ 'Chemist', 56700 ],
    [ 'Civil Engineering Technician', 68250 ],
    [ 'Commercial Driver', 51450 ],
    [ 'ComputerTechnician', 46200 ],
    [ 'Conserv./Environ. Science', 72450 ],
    [ 'Correctional Officer', 48300 ],
    [ 'Cosmetologist', 36750 ],
    [ 'Credit Union/Bank Manager', 61950 ],
    [ 'Daycare Director', 37800 ],
    [ 'Dentist', 115500 ],
    [ 'Detective', 60900 ],
    [ 'Diesel Tech/Mechanic', 55650 ],
    [ 'Doctor/Physician', 147000 ],
    [ 'Electrician', 54600 ],
    [ 'Electronic Engineer', 75600 ],
    [ 'EMT', 34650 ],
    [ 'Energy Management PG&E', 106050 ],
    [ 'Engineer', 72450 ],
    [ 'Fashion Designer', 63000 ],
    [ 'Fire Fighter', 49350 ],
    [ 'Forest Ranger', 52500 ],
    [ 'Graphic/Media Designer', 58800 ],
    [ 'H/C HVAC', 63000 ],
    [ 'Highway Patrol', 84000 ],
    [ 'Home Inspector', 56700 ],
    [ 'Industrial Mechanic', 46200 ],
    [ 'Interior Designer', 49350 ],
    [ 'Investment Analyst', 66150 ],
    [ 'Lab Technician', 42000 ],
    [ 'Landscaper Horticulture', 48300 ],
    [ 'Lawyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical RepairTech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nurse', 66150 ],
    [ 'Nutritionist', 45150 ],
    [ 'Oceanographer', 69300 ],
    [ 'Pastor', 50400 ],
    [ 'PGBEATT Technician', 78750 ],
    [ 'Pharmacist', 105000 ],
    [ 'Photographer', 45150 ],
    [ 'Physical Therapist', 72450 ],
    [ 'Pilot Commercial', 78750 ],
    [ 'Plumber', 52500 ],
    [ 'Police Officer', 53550 ],
    [ 'Principal', 93450 ],
    [ 'Probation Officer', 44100 ],
    [ 'Psychologist', 77700 ],
    [ 'Retail Sales Associate', 34650 ],
    [ 'Social Worker', 50400 ],
    [ 'Solar Energy Tech.', 53550 ],
    [ 'Teacher', 52500 ],
    [ 'UPS/Fed Ex Driver', 68250 ],
    [ 'Veterinarian', 82950 ],
    [ 'Welder/Metal Specialist', 47250 ],
    [ 'Wind EnergyTechnician', 56700 ]
]

let jobInput = document.getElementById('career-option');
jobInput.addEventListener('change', checkFunction);

// Career Options
function checkFunction() {
    console.log(jobInput.value)
    let career = document.getElementById('career-option').value;
        for (let i = 0; i < data.length; i++) {
        if (career == data[i][0]) {

            //Math stuff
            let GAI = Number(data[i][1]);
            let GMI = Math.round(GAI / 12); //Gross Monthly Income
            let FT = Math.round(GMI * .12); //Federal Taxes
            let ST = Math.round(GMI * .07); //State Taxes
            let SS = Math.round(GMI * .062); //Social Security
            let MC = Math.round(GMI * .0145); //Medicare
            let SD = Math.round(GMI * .01); //State Disablity
            let RI = Math.round(GMI * .05); //Retirement Investment
            let MI = 180; //Medical Insurance
            let TD = Math.round(FT + ST + SS + MC + SD + RI + MI); //Total Deductions
            let NMI = Math.round(GMI - TD); //Net Monthly Income
            let HP = Math.round(GMI * 0.33); //House Payment

            //Placing each value in its correct spot
            document.getElementById('GAI').innerHTML = ('$ ' + GAI);
            document.getElementById('GMI').innerHTML = ('$ ' + GMI);
            document.getElementById('FT').innerHTML = ('$ ' + FT);
            document.getElementById('ST').innerHTML = ('$ ' + ST);
            document.getElementById('SS').innerHTML = ('$ ' + SS);
            document.getElementById('MC').innerHTML = ('$ ' + MC);
            document.getElementById('SD').innerHTML = ('$ ' + SD);
            document.getElementById('RI').innerHTML = ('$ ' + RI);
            document.getElementById('MI').innerHTML = ('$ ' + MI);
            document.getElementById('TD').innerHTML = ('$ ' + TD);
            document.getElementById('NMI').innerHTML = ('$ ' + NMI);
            document.getElementById('HP').innerHTML = ('$ ' + HP);
        }
    }
    
} 

//Checkbook

function checkbookMath() {

    
//Inputs
let withdrawl_1 = document.getElementById('withdrawl_1').value;
let withdrawl_2 = document.getElementById('withdrawl_2').value;
let withdrawl_3 = document.getElementById('withdrawl_3').value;
let withdrawl_4 = document.getElementById('withdrawl_4').value;
let withdrawl_5 = document.getElementById('withdrawl_5').value;

let deposit_1 = document.getElementById('deposit_1').value;
let deposit_2 = document.getElementById('deposit_2').value;
let deposit_3 = document.getElementById('deposit_3').value;
let deposit_4 = document.getElementById('deposit_4').value;
let deposit_5 = document.getElementById('deposit_5').value;

//Outputs
let output_1 = withdrawl_1 + deposit_1 - balance_1;
let output_2 = withdrawl_2 + deposit_2 - balance_2;
let output_3 = withdrawl_3 + deposit_3 - balance_3;
let output_4 = withdrawl_4 + deposit_4 - balance_4;
let output_5 = withdrawl_5 + deposit_5 - balance_5;

let balance_1 = NMI;
let balance_2 = output_1;
let balance_3 = output_2;
let balance_4 = output_3;
let balance_5 = output_4;

document.getElementById('output_1').innerHTML = output_1;
document.getElementById('output_2').innerHTML = output_2;
document.getElementById('output_3').innerHTML = output_3;
document.getElementById('output_4').innerHTML = output_4;
document.getElementById('output_5').innerHTML = output_5;

} 