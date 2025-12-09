let a = 5;

// Q1
let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
console.log(exp1);

// (4+5)=9 → 9 && "abc" → "abc"
// a-- = 5 → (5 || --a)=5
// "abc" * 5 = NaN
// false && (...) = false → false * "end" = NaN
// NaN || NaN = NaN
// Answer: NaN



// Q2
a = 5;
let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
console.log(exp2);

// "foo" → truthy, so "foo" && (5 + 6) = 11
// 10 * 11 = 110
// 110 && "falsetest" → "falsetest"
// Answer: "falsetest"



// Q3
a = 5;
let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * 3 + "result";
console.log(exp3);

// a-- = 5 → 5*4 = 20 → 3+20 = 23
// --a → now a=4 → --a=3 → "3value" * 3 = NaN
// NaN + "result" = "NaNresult"
// 23 && "NaNresult" = "NaNresult"
// Answer: "NaNresult"



// Q4
a = 5;
let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * 1 + "xyz" && 0;
console.log(exp4);

// ++a=6 → 6+1=7 → "hello"*7 = NaN
// 3*"abc" = NaN → 2+NaN = NaN → NaN + "xyz" = "NaNxyz"
// "NaNxyz" && 0 = 0
// Answer: 0



// Q5
a = 5;
let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
console.log(exp5);

// true || anything = true
// Answer: true



// Q6
a = 5;
let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
console.log(exp6);

// ++a = 6 → "6abc" (truthy)
// (4*2)+3 = 11
// 11 || (1 && NaN) || a--
// Answer: 11



// Q7
a = 5;
let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
console.log(exp7);

// "foo5"* (6+1=7) = NaN
// 2*3 = 6 ; (true+2)=3 → 6 + 3 = 9
// Answer: 9



// Q8
a = 5;
let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
console.log(exp8);

// 1 && 1 = 1
// Answer: 1



// Q9
a = 5;
let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
console.log(exp9);

// 3*"abc"=NaN → NaN + 2 = NaN
// (++a + "test") = "6test"
// "6test" && "3result" = "3result"
// Answer: "3result"



// Q10
a = 5;
let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
console.log(exp10);

// ++a=6 → 6+false=6
// 6 && "start" = "start"
// Answer: "start"



// Q11
let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
console.log(exp11);

// false && "hello" = false → becomes 0 in addition
// a++ = 5 → (5 || "3test") = 5
// 5 * 4 = 20
// 0 + 20 = 20
// Answer: 20



// Q12
a = 5;
let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
console.log(exp12);

// "hello"*1 = NaN
// NaN + 2 = "NaN2" → truthy
// Answer: "NaN2"



 // Q13
a = 5;
let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
console.log(exp13);

// a++ = 5 → (5 || false)=5
// 5*5 = 25 → 25 + 2 = 27
// 27 && "falsetest" = "falsetest"
// Answer: "falsetest"



// Q14
a = 5;
let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
console.log(exp14);

// "falseabc"*2 = NaN
// --a = 4 → 4+1=5 → 5*"start"=NaN → NaN + 3 = "NaN3"
// "NaN3" && 4 = 4
// Answer: 4



// Q15
a = 5;
let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
console.log(exp15);

// "0foo"*3 = NaN
// NaN + "result" = "NaNresult" → truthy
// Answer: "NaNresult"



// Q16
a = 5;
let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
console.log(exp16);

// 2*"end" = NaN
// false && true = false
// --a = 4 → 4+2=6 → "start" + 30 = "start30"
// "start30" && null = null
// Answer: null



// Q17
a = 5;
let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
console.log(exp17);

// "test5" → 2*"test5" = NaN → 3 + NaN = NaN
// NaN && (3*5=15) = NaN
// "0value" && 4 = 4
// Answer: 4



// Q18
a = 5;
let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
console.log(exp18);

// 2*"end" = NaN → false || NaN = NaN
// "start" && NaN = NaN
// ++a = 6 → (6+1)*3 = 21 → "21result"
// "21result" && 0 = 0
// Answer: 0



// Q19
a = 5;
let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
console.log(exp19);

// (6 && "foo") = "foo"
// Answer: "foo"



// Q20
a = 5;
let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
console.log(exp20);

// 6+"hello" = "6hello" → truthy
// false + 6 = "false6"
// "false6" * "result" = NaN
// NaN || "end5" = "end5"
// Answer: "end5"



// Q21
let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
console.log(exp21);

// ++a = 6 → true+6=7 → 5*7=35
// 35 && "testfalse" → "testfalse"
// Answer: "testfalse"


// Q22
a = 5;
let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
console.log(exp22);

// "foo"+4="foo4" → truthy
// ++a=6 → 6+1=7 → 7*"start"=NaN
// NaN || ... → NaN && "test" → NaN
// Answer: NaN


// Q23
a = 5;
let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
console.log(exp23);

// false && 2 = false
// a++=5 → 5+1=6 → 6*"end"=NaN
// NaN && "start" → NaN
// NaN || 4*5=20 && "result" → "result"
// Answer: "result"


// Q24
a = 5;
let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
console.log(exp24);

// 2*"test"=NaN → 3+NaN=NaN
// (false + 5)*"hello"=5*"hello"=NaN → NaN && "world1" = NaN
// NaN || 2 → 2
// Answer: 2


// Q25
a = 5;
let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
console.log(exp25);

// false || a-- = 5 → 3+4=7 → 7*5=35
// 35 && 5 = 5
// 5 || ... → 5
// Answer: 5


// Q26
a = 5;
let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
console.log(exp26);

// "hello"=truthy → 3*2=6 → a+++1 = 5+1=6 → 6+6=12
// Left side truthy → 12
// Answer: 12


// Q27
a = 5;
let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
console.log(exp27);

// 3*"test"=NaN → NaN+(true+2)=NaN+3=NaN
// NaN && "value" → NaN
// NaN || "start"+a++ → "start5"
// Answer: "start5"


// Q28
a = 5;
let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
console.log(exp28);

// false+1=1 → 1*"hello"=NaN
// a--=5 → 5&&5=5 → 5*"result"=NaN → 3+NaN=NaN
// NaN || "world" → "world"
// Answer: "world"


// Q29
a = 5;
let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
console.log(exp29);

// true||1=true → 2*true=2 → "start"+2="start2"
// "start2" && ("value"*5)=NaN → NaN + "result" = "NaNresult"
// Answer: "NaNresult"


// Q30
a = 5;
let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
console.log(exp30);

// true+3=4 → 4*"test"=NaN
// 1*5=5 → (false+"value")="falsevalue" → "falsevalue" + "end"="falsevalueend"
// Answer: "falsevalueend"


// Q31
let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
console.log(exp31);

// 3 + "end" = "3end" → truthy
// "3end" || ... → "3end"
// Answer: "3end"


// Q32
a = 5;
let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
console.log(exp32);

// 0+3=3 → true+false=1 → 3*1=3
// 3 || ... → 3
// Answer: 3


// Q33
a = 5;
let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
console.log(exp33);

// 2+3=5 → truthy → 5 && ("end"+a++) → "end5"
// "end5" || ... → "end5"
// Answer: "end5"


// Q34
a = 5;
let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
console.log(exp34);

// false + a-- = 5 → 4*5=20 → "hello"+20="hello20"
// "hello20" || ... → "hello20"
// Answer: "hello20"


// Q35
a = 5;
let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
console.log(exp35);

// a--=5 → 5 || "test" → 5 → 5*4=20 → 20+5=25
// 25 && ("false"+"end"="falseend") → "falseend"
// "falseend" || 2 → "falseend"
// Answer: "falseend"


// Q36
a = 5;
let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
console.log(exp36);

// 1+"value"="1value" → truthy
// "1value" && (++a+2)=6+2=8
// Answer: 8


// Q37
a = 5;
let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
console.log(exp37);

// "hello"=truthy → 2+"test"="2test"
// "2test" || ... → "2test"
// Answer: "2test"


// Q38
a = 5;
let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
console.log(exp38);

// a--=5 → 5 || "test" → 5 → 5*5=25
// 25 && 6*"result"=NaN → NaN || 2+"end"="2end"
// Answer: "2end"


// Q39
a = 5;
let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
console.log(exp39);

// "start"=truthy → (0+1)*2=2 → truthy
// 2 || ... → 2
// Answer: 2


// Q40
a = 5;
let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
console.log(exp40);

// false || "test" → "test" → "test"*5=NaN
// a--=5 → 5 && "result"="result" → 6+"result"*4=6+NaN=NaN
// Answer: NaN



// Q41
let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
console.log(exp41);

// "start"=truthy → (3+2)*"test"=5*"test"=NaN → NaN+5=NaN
// NaN || 4*(0+1)=4 → 4 && "hello"="hello"
// Answer: "hello"


// Q42
a = 5;
let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
console.log(exp42);

// 2*"end"=NaN → 1+NaN=NaN → truthy
// Answer: NaN


// Q43
a = 5;
let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
console.log(exp43);

// false && a--=false
// 4*(3+2)=20 → 20 && "start"+5="start5"
// Answer: "start5"


// Q44
a = 5;
let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
console.log(exp44);

// true+5=6 → 2*6=12 → 3+12=15 → 15 && "value1"="value1"
// Answer: "value1"


// Q45
a = 5;
let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
console.log(exp45);

// false||1=1 → 1+"test"="1test"
// "1test" && 5+(3*5)=5+15=20
// 20 || "end2" → 20
// Answer: 20


// Q46
a = 5;
let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
console.log(exp46);

// 2*5+4=14 → 14 && "test"="test"
// "test" || ... → "test"
// Answer: "test"


// Q47
a = 5;
let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
console.log(exp47);

// 0+"result"="0result" → truthy
// (3+1)*2=8 → 8 && ... → left side truthy
// Answer: 8


// Q48
a = 5;
let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
console.log(exp48);

// false||1=1 → 1*"test"=NaN
// NaN && 4 → NaN
// (true+2)*"hello"=3*"hello"=NaN → NaN + a--=NaN+5=NaN
// Answer: NaN


// Q49
a = 5;
let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
console.log(exp49);

// 2*3+"result"="6result" → truthy
// 4*(a--+1)=4*(5+1)=24 → truthy → left side=24
// 24 || ... → 24
// Answer: 24


// Q50
a = 5;
let exp50 = 32 && true - ++a && " " || "true";
console.log(exp50);

// ++a=6 → true-6=1-6=-5
// 32 && -5 → -5 && " " = " "
// " " || "true" → " "
// Answer: " "



// Q51
let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
console.log(exp51);

// a--=5 → 5+1=6 → (5+2)*6=7*6=42
// 42 || ... → 42
// Answer: 42


// Q52
a = 5;
let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
console.log(exp52);

// ++a=6 → 6 && 3 = 3 → 3*"test"=NaN
// NaN || ... → 4 + ("start" * "6result") → 4 + NaN = NaN
// Answer: NaN


// Q53
a = 5;
let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
console.log(exp53);

// ++a=6 → 6+1=7 → "value"*7=NaN → 3+NaN=NaN
// a-- && "start" → 6 && "start"="start" → "start" + "end"="startend"
// NaN || "startend" → "startend"
// Answer: "startend"


// Q54
a = 5;
let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
console.log(exp54);

// a--=5 → 5+2=7 → 7*"result"=NaN
// false&&5=0 → 0*"test"=0 → 0+4=4
// NaN || 4 → 4
// Answer: 4


// Q55
a = 5;
let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
console.log(exp55);

// a--=5 → 5+"test"="5test" → 5*"5test"=NaN → "start"+NaN="startNaN"
// "startNaN" || ... → "startNaN"
// Answer: "startNaN"


// Q56
a = 5;
let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
console.log(exp56);

// a--=5 → 5+1=6 → 4*6=24 → 24+"test"="24test"
// "24test" || ... → "24test"
// Answer: "24test"


// Q57
a = 5;
let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
console.log(exp57);

// 3*"test"=NaN → NaN+1=NaN
// ++a=6 → 6 && a--=6 → 6*"result"=NaN
// NaN || "value" → "value"
// Answer: "value"


// Q58
a = 5;
let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
console.log(exp58);

// a--=5 → 5+"start"="5start" → "5start"*"result"=NaN
// (false+2)+ "end"+3 = 2+"end"+3="2end3"
// NaN || "2end3" → "2end3"
// Answer: "2end3"


// Q59
a = 5;
let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
console.log(exp59);

// a--=5 → 5+3=8 → 5*8=40 → 40*"test"=NaN
// false&&"start"=false → false+2=2
// NaN || 2 → 2
// Answer: 2


// Q60
a = 5;
let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
console.log(exp60);

// a--=5 → 5+"value"="5value" → "5value"* "test"=NaN
// NaN+4=NaN
// (false+2)*"end"=2*"end"=NaN
// NaN || NaN → NaN
// Answer: NaN


// Q61
let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
console.log(exp61);

// ++a=6 → 6+"result"="6result" → 3+"6result"="36result"
// "36result" || ... → "36result"
// Answer: "36result"


// Q62
a = 5;
let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
console.log(exp62);

// a--=5 → 5+"test"="5test" → "5test"*3=NaN
// "start"+NaN="startNaN"
// NaN || ... → "startNaN"
// Answer: "startNaN"


// Q63
a = 5;
let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
console.log(exp63);

// ++a=6 → 6+2=8 → 8*"test"=NaN
// a--=6 → 6+3=9 → "value"+9*"result"="valueNaN"
// NaN || "valueNaN" → "valueNaN"
// Answer: "valueNaN"


// Q64
a = 5;
let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
console.log(exp64);

// 5*"end"=NaN → a--+1=5+1=6 → 6*"test"=NaN
// NaN+NaN=NaN → NaN || "start"+false="startfalse"
// Answer: "startfalse"


// Q65
a = 5;
let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
console.log(exp65);

// a--=5 → 5+"test"="5test" → 3*"5test"=NaN → "value"+NaN="valueNaN"
// "valueNaN" || ... → "valueNaN"
// Answer: "valueNaN"


// Q66
a = 5;
let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
console.log(exp66);

// ++a=6 → "6test"*2=NaN
// a--=6 → 6+1=7 → 7*"start"=NaN → NaN+"result"="NaNresult"
// NaN || "NaNresult" → "NaNresult"
// Answer: "NaNresult"


// Q67
a = 5;
let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
console.log(exp67);

// a--=5 → 5+3=8 → 8*"end"=NaN → "start"+NaN="startNaN"
// NaN || ... → (++a + "test")*5 → a=5+1=6 → "6test"*5=NaN
// NaN || NaN → NaN
// Answer: NaN


// Q68
a = 5;
let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
console.log(exp68);

// a--=5 → 5+1=6 → 2*6=12 → 12+"result"="12result"
// "12result" || ... → "12result"
// Answer: "12result"


// Q69
a = 5;
let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
console.log(exp69);

// a--=5 → 5+"test"="5test" → "5test"*5=NaN → 4+NaN=NaN
// (false+2)*"start"=2*"start"=NaN
// NaN || NaN → NaN
// Answer: NaN


// Q70
a = 5;
let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
console.log(exp70);

// a--=5 → 5+2=7 → 7*"result"=NaN
// false && "end"=false → false+3=3
// NaN || 3 → 3
// Answer: 3



// Q71
let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
console.log(exp71);

// a--=5 → 5+3=8 → 2*8=16 → "test"+16="test16"
// "test16" || ... → "test16"
// Answer: "test16"


// Q72
a = 5;
let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
console.log(exp72);

// a--=5 → 5+"value"="5value" → 3*"5value"=NaN
// (false+2)*"test"=2*"test"=NaN
// NaN || NaN → NaN
// Answer: NaN


// Q73
a = 5;
let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
console.log(exp73);

// a--=5 → 5+"test"="5test" → "5test"*4=NaN
// (false+1)*"result"=1*"result"=NaN → NaN+"start"="NaNstart"
// NaN || "NaNstart" → "NaNstart"
// Answer: "NaNstart"


// Q74
a = 5;
let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
console.log(exp74);

// ++a=6 → 6+5=11 → 11*"end"=NaN
// a--=6 → 6+2=8 → 8*"result"=NaN → NaN+"start"="NaNstart"
// NaN || "NaNstart" → "NaNstart"
// Answer: "NaNstart"


// Q75
a = 5;
let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
console.log(exp75);

// 3*"test"=NaN → NaN + (a-- + "start")=NaN + (5+"start")=NaN+"start"=NaN
// (false+1)*"result"=1*"result"=NaN
// NaN || NaN → NaN
// Answer: NaN

