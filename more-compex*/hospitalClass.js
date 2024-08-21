// Parent Class HospitalEmployee

class HospitalEmployee {
  constructor(name) {
    this.name = name;
    this.remainingVacationDays = 20;
  }

  takeVacationDays(daysOff) {
    this.remainingVacationDays -= daysOff;
  }

  static generateID() {
    return Math.floor(Math.random() * 10000);
  }
}
// Child Class for Nurse

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this.certifications = certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}
// New Nurse Instance

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
nurseOlynyk.takeVacationDays(5);
nurseOlynyk.addCertification("Genetics");

// Execute Nurse

console.log("Position: Nurse \n Name:", nurseOlynyk.name);
console.log("Vacantion Days:", nurseOlynyk.remainingVacationDays);
console.log("Certifications:", nurseOlynyk.certifications.join(","));
console.log("ID Number:", HospitalEmployee.generateID());

//Line Separator
console.log("================================================");

//Child Class for Doctor

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this.insurance = insurance;
  }
}

// New Doctor Instance

const doctorEric = new Doctor("Eric", true);
doctorEric.takeVacationDays(14);

//Execute Doctor

console.log("Position: Doctor \n Name:", doctorEric.name);
console.log("Vacantion Days:", doctorEric.remainingVacationDays);
console.log(" Have Insurance? -", doctorEric.insurance);
console.log("ID Number:", HospitalEmployee.generateID());
