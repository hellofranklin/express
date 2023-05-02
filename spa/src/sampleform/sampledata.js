const Formtemplates = {

  blank:{
    id: 1,
    title: "Blank Form",
    description: "Create a new form from scratch",
    svg: "add",
    elements: [
      {
        Id: 1,
        Name: "FirstName",
        Type: "Text",
        Label: "First Name",
        Mandatory: "",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: 'datapanel'
      },
      {
        Id: 2,
        Name: "LastName",
        Type: "Text",
        Label: "Last Name",
        Mandatory: "",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: 'datapanel'
      },
    ],

  },

  contact: {
    id: 2,
    title: "Contact Form",
    description: "A regular contact form for capturing basic details",
    svg: "contact",
    elements: [
      {
        Id: 1,
        Name: "FirstName",
        Type: "Text",
        Label: "First Name",
        Mandatory: "",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: 'datapanel'
      },
      {
        Id: 2,
        Name: "LastName",
        Type: "Text",
        Label: "Last Name",
        Mandatory: "",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: 'datapanel'
      },
      {
        Id: 3,
        Name: "Email",
        Type: "Email",
        Label: "Last Name",
        Mandatory: "TRUE",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: 'datapanel'
      },
      {
        Id: 4,
        Name: "Gender",
        Type: "Select",
        Label: "Gender",
        Mandatory: "TRUE",
        Min: "",
        Max: "",
        Options: ["male","female"],
        Fieldset: 'datapanel'
      },
    ],
  },
  feedback: {
    id: 3,
    title: "Feedback Form",
    description: "A regular feedback form for capturing event details",
    svg: "feedback",
    elements: [
      {
        Id: 1,
        Name: "",
        Type: "Text",
        Label: "",
        Mandatory: "",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: 'datapanel'
      },
      {
        Id: 2,
        Name: "",
        Type: "Text",
        Label: "",
        Mandatory: "",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: 'datapanel'
      },
    ],
  },
};

export default  Formtemplates;
