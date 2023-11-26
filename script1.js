//create your own resume data in JSON format
var resume = {
    "Name":"Sri Sakthi",
    "Address":"7 Om sakthi illam Sengundhar nagar Periyasemur Erode-638004",
    "Email":"srisakthi17122001@gmail.com",
    "Skills": "Pega CSA-8.7, Pega CSSA-8.7, C, Java, Proteus professional",
    "Area of Intrest": "PEGA Developer, Software Developer, product analyst",
    "10th": "S.V.N Matriculation Higher Secondary School (SSLC), Graduate in 2017 Percentage-89.4",
    "12th": "URC Matriculation Higher Secondary School (HSC), Graduate in 2019 Percentage-72.3",
    "Collage": "BANNARI AMMAN INSTITUTE OF TECHNOLOGY, Graduate in 2023 Percentage 83.5",
    "project":"Digital library, Vehicle insurance, Peltier based refrigerator",
    "personal skill": "Management skills, Mentorship, Decision making, Motivator",
    "language known": "English, Tamil, Hindi",
    "Personal info": "Date of birth:17.12.2001, Gender: Male, Father name: Arivalagan N, Mother name: Gunavathi A",
    "Hobbie":"Playing cricket and badminton"
};
for(var a in resume){
    console.log(a, resume[a]);
}