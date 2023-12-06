import {auto} from "./script/auto2.js"
// import {timeAndFuel} from "./script/aboutAuto.js";
import {time} from "./script/watches2.js";
// import {clock, secondsChange, minutesChange, hoursChange, time} from "./script/watches.js";
// import {fractionAdd, fractionDeduction, fractionMultiply, fractionDividing} from "./script/fractions.js";
import {fraction, fraction1, fraction2} from "./script/fractions2.js";

auto.timeAndFuel(700);
auto.addDrivers(['Olga', ' Alex']);
console.log(auto);
// console.log(timeAndFuel(500));
time.clock();
time.secondsChange();
time.minutesChange();
time.hoursChange();
// clock(time);
// secondsChange(time);
// minutesChange(time);
// hoursChange(time);
// fractionAdd(fraction1, fraction2);
// fractionDeduction(fraction1, fraction2);
// fractionMultiply(fraction1, fraction2);
// fractionDividing(fraction1, fraction2);
fraction.add(fraction1, fraction2);
fraction.deduction(fraction1, fraction2);
fraction.multiply(fraction1, fraction2);
fraction.dividing(fraction1, fraction2);
