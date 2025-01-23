interface IAdress {
  city: string;
  street: string;
  zipcode: number;
}

interface IEducation {
  school: string;
  graduationYear: number;
}

interface IJob {
  company: string;
  startDate: Date;
  title: string;
}

interface IPerson {
  id: number;
  firstName: string;
  lastName: string;
  age: number;

  adress: IAdress;
  education: IEducation;
  jobs: IJob[];
}

const faruk: IPerson = {
  id: 3435,
  firstName: "Faruk",
  lastName: "Kaya",
  age: 35,

  adress: {
    city: "İstanbul",
    street: "4567sk.",
    zipcode: 34410,
  },

  education: {
    school: "ODTÜ",
    graduationYear: 2020,
  },

  jobs: [
    {
      company: "X Company",
      startDate: new Date(),
      title: "Frontend",
    },
  ],
};

const getLocation = (loc: IAdress) => {
  console.log(loc);
};
