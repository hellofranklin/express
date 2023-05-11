const Formtemplates = {
  blank: {
    id: 1,
    title: "BlankForm",
    description: "Create a new form from scratch",
    svg: "add",
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
        Type: "text",
        Label: "First Name",
        Mandatory: "",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: "datapanel",
      },
      {
        Id: 2,
        Name: "LastName",
        Type: "text",
        Label: "Last Name",
        Mandatory: "",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: "datapanel",
      },
      {
        Id: 3,
        Name: "Email",
        Type: "text",
        Label: "Email",
        Mandatory: "TRUE",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: "datapanel",
      },
      {
        Id: 4,
        Name: "Gender",
        Type: "select",
        Label: "Gender",
        Mandatory: "TRUE",
        Min: "",
        Max: "",
        Options: ["Male", "Female"],
        Fieldset: "datapanel",
      },
      {
        Id: 5,
        Name: "About Yourself",
        Type: "textarea",
        Label: "About Yourself",
        Mandatory: "TRUE",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: "datapanel",
      }
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
        Type: "text",
        Label: "",
        Mandatory: "",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: "datapanel",
      },
      {
        Id: 2,
        Name: "",
        Type: "text",
        Label: "",
        Mandatory: "",
        Min: "",
        Max: "",
        Options: [],
        Fieldset: "datapanel",
      },
    ],
  },
};

export default Formtemplates;
