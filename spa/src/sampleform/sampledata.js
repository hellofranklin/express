const Formtemplates = {
  contact: {
    id: 1,
    title: "Contact Form",
    description: "A regular contact form for capturing basic details",
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
      },
    ],
  },
  feedback: {
    id: 2,
    title: "Feedback Form",
    description: "A regular feedback form for capturing event details",
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
      },
    ],
  },
};

export default  Formtemplates;
